function debugFidelizadosPatricios() {
  const filtros = {
    estacion: "Parque Patricios",
    anios: ["2025", "2026"],
    tipoDia: "Todos",
    modo: "general"
  };
  
  const res = obtenerEstadisticasPersonasUnicasGlobal(filtros);
  
  console.log("--- RESULTADOS DIAGNÓSTICO ---");
  console.log("Total Registros Cargados:", res.diagnostico.totalCargados);
  console.log("Descartados por Estación:", res.diagnostico.descartadosEstacion);
  console.log("Total Únicas Histórico (Baseline):", res.totalUnicasHistorico);
  console.log("Resumen Anual:");
  res.resumenAnual.forEach(a => {
    console.log(`Año ${a.anio}: Únicas=${a.unicas}, Nuevas=${a.nuevas}, Fidelizadas=${a.fidelizadas}`);
  });
  
  // Verificación de nombres de estaciones en 2025
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const hoja2025 = ss.getSheetByName("2025_HISTORICO");
  if (hoja2025) {
    const data = hoja2025.getRange(1, 1, 10, 5).getValues();
    console.log("Primeras filas 2025 (Muestra):", JSON.stringify(data));
  } else {
    console.log("¡ERROR! No se encuentra la solapa 2025_HISTORICO");
  }
}

/**
 * TEST FUNCIONAL Y MATEMÁTICO COMPLETO
 * Escenario: DNI A (2025-03), DNI B (2026-04), DNI C (2026-06)
 * Filtro: Abril-Junio 2026
 * Esperado: Nuevas=2, Fidelizadas=1, Únicas=3
 * Validaciones: Únicas = Nuevas + Fidelizadas (siempre)
 */
function debugValidacionFidelizadosCompleto() {
  console.log("\n╔════════════════════════════════════════════════════════════════╗");
  console.log("║ TEST FUNCIONAL: VALIDACIÓN COMPLETA DE NUEVAS/FIDELIZADAS     ║");
  console.log("╚════════════════════════════════════════════════════════════════╝\n");

  // ═══════════════════════════════════════════════════════════════════════════
  // PASO 1: CREAR ESCENARIO SIMULADO CON DATOS EXACTOS
  // ═══════════════════════════════════════════════════════════════════════════
  console.log("📋 PASO 1: Definiendo Escenario de Test...\n");

  const escenario = {
    dniA: "11111111",    // Primer aparición: 2025-03
    dniB: "22222222",    // Primer aparición: 2026-04
    dniC: "33333333",    // Primer aparición: 2026-06
    estacion: "TEST ESTACION*",
    actividad: "TEST ACT",
    profesor: "TEST PROF"
  };

  const mapaPrimerAparicion_test = {
    "11111111": "2025-03",  // DNI A: histórico 2025
    "22222222": "2026-04",  // DNI B: nuevo en abril 2026
    "33333333": "2026-06"   // DNI C: nuevo en junio 2026
  };

  console.log("Mapa de Primera Aparición (SIMULADO):");
  console.log(JSON.stringify(mapaPrimerAparicion_test, null, 2));

  // ═══════════════════════════════════════════════════════════════════════════
  // PASO 2: SIMULAR REGISTROS DE ACTIVIDAD
  // ═══════════════════════════════════════════════════════════════════════════
  console.log("\n📊 PASO 2: Registros de Actividad por Mes...\n");

  const registrosSimulados = [
    // ABRIL 2026
    { dni: "22222222", fecha: new Date(2026, 3, 5), mes: "2026-04" },
    { dni: "22222222", fecha: new Date(2026, 3, 10), mes: "2026-04" },
    // MAYO 2026
    { dni: "11111111", fecha: new Date(2026, 4, 8), mes: "2026-05" },
    { dni: "22222222", fecha: new Date(2026, 4, 12), mes: "2026-05" },
    // JUNIO 2026
    { dni: "22222222", fecha: new Date(2026, 5, 3), mes: "2026-06" },
    { dni: "33333333", fecha: new Date(2026, 5, 15), mes: "2026-06" }
  ];

  console.log(`Total registros simulados: ${registrosSimulados.length}`);
  registrosSimulados.forEach((r, i) => {
    const primeraApar = mapaPrimerAparicion_test[r.dni];
    console.log(`  ${i+1}. DNI=${r.dni}, Mes=${r.mes}, Primera Aparición=${primeraApar}`);
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // PASO 3: CLASIFICAR CADA REGISTRO
  // ═══════════════════════════════════════════════════════════════════════════
  console.log("\n🔍 PASO 3: Clasificación por Registro...\n");

  const clasificacion_porRegistro = {};
  
  registrosSimulados.forEach((reg, idx) => {
    const dni = reg.dni;
    const mesReg = reg.mes;
    const primeraAparicion = mapaPrimerAparicion_test[dni];
    
    let clase = "???";
    if (!primeraAparicion) {
      clase = "NUEVA (Sin histórico)";
    } else if (primeraAparicion === mesReg) {
      clase = "NUEVA (Primer mes)";
    } else if (primeraAparicion < mesReg) {
      clase = "FIDELIZADA (Histórica)";
    } else {
      clase = "NUEVA (Fallback: primer aparición > mes actual)";
    }
    
    if (!clasificacion_porRegistro[mesReg]) {
      clasificacion_porRegistro[mesReg] = [];
    }
    clasificacion_porRegistro[mesReg].push({ dni, clase });
    
    console.log(`  Reg#${idx+1}: DNI=${dni} (${primeraAparicion}) en ${mesReg} → ${clase}`);
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // PASO 4: CONTEOS MENSUALES
  // ═══════════════════════════════════════════════════════════════════════════
  console.log("\n📈 PASO 4: Conteos Mensuales Esperados...\n");

  const conteos_esperados = {
    "2026-04": { unicos: 1, nuevas: 1, fidelizadas: 0 },
    "2026-05": { unicos: 2, nuevas: 0, fidelizadas: 2 },
    "2026-06": { unicos: 2, nuevas: 1, fidelizadas: 1 }
  };

  Object.keys(conteos_esperados).forEach(mes => {
    const exp = conteos_esperados[mes];
    console.log(`\n  ${mes}:`);
    console.log(`    Personas Únicas: ${exp.unicos}`);
    console.log(`    Nuevas: ${exp.nuevas}`);
    console.log(`    Fidelizadas: ${exp.fidelizadas}`);
    console.log(`    ✓ Ecuación: ${exp.unicos} = ${exp.nuevas} + ${exp.fidelizadas} → ${exp.unicos === (exp.nuevas + exp.fidelizadas) ? "✅ OK" : "❌ FALLA"}`);
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // PASO 5: CONTEO GLOBAL
  // ═══════════════════════════════════════════════════════════════════════════
  console.log("\n🌍 PASO 5: Conteos Globales (Abril-Junio 2026)...\n");

  // Calcular DNIs únicos por clasificación
  const dnis_nuevas_global = new Set();
  const dnis_fidelizadas_global = new Set();
  const dnis_todas_global = new Set();

  Object.keys(clasificacion_porRegistro).forEach(mes => {
    const clasificados = clasificacion_porRegistro[mes];
    const dnis_mes_set = new Set();
    
    clasificados.forEach(item => {
      const { dni, clase } = item;
      if (clase.includes("NUEVA")) {
        dnis_nuevas_global.add(dni);
      } else if (clase.includes("FIDELIZADA")) {
        dnis_fidelizadas_global.add(dni);
      }
      dnis_mes_set.add(dni);
    });

    // Todas las únicas del mes
    dnis_mes_set.forEach(d => dnis_todas_global.add(d));
  });

  const global_nuevas = dnis_nuevas_global.size;
  const global_fidelizadas = dnis_fidelizadas_global.size;
  const global_unicas = dnis_todas_global.size;

  console.log(`  Personas Únicas Nuevas (Global): ${global_nuevas}`);
  console.log(`    DNIs: ${Array.from(dnis_nuevas_global).join(", ")}`);
  console.log(`\n  Personas Únicas Fidelizadas (Global): ${global_fidelizadas}`);
  console.log(`    DNIs: ${Array.from(dnis_fidelizadas_global).join(", ")}`);
  console.log(`\n  Personas Únicas TOTALES (Global): ${global_unicas}`);
  console.log(`    DNIs: ${Array.from(dnis_todas_global).join(", ")}`);

  const global_esperado = {
    nuevas: 2,      // DNI B (primera vez en abril), DNI C (primera vez en junio)
    fidelizadas: 1, // DNI A (en mayo, pero histórica de 2025)
    unicas: 3       // DNI A + B + C
  };

  console.log(`\n  ✓ Ecuación Global: ${global_unicas} = ${global_nuevas} + ${global_fidelizadas}`);
  console.log(`    Resultado: ${global_unicas === (global_nuevas + global_fidelizadas) ? "✅ OK" : "❌ FALLA"}`);

  // ═══════════════════════════════════════════════════════════════════════════
  // PASO 6: VALIDAR CONTRA ESPERADOS
  // ═══════════════════════════════════════════════════════════════════════════
  console.log("\n✅ PASO 6: Validación contra Escenario Esperado...\n");

  let todas_ok = true;

  if (global_nuevas !== global_esperado.nuevas) {
    console.log(`❌ ERROR: Nuevas Global. Esperado=${global_esperado.nuevas}, Obtenido=${global_nuevas}`);
    todas_ok = false;
  } else {
    console.log(`✅ Nuevas Global: ${global_nuevas} (OK)`);
  }

  if (global_fidelizadas !== global_esperado.fidelizadas) {
    console.log(`❌ ERROR: Fidelizadas Global. Esperado=${global_esperado.fidelizadas}, Obtenido=${global_fidelizadas}`);
    todas_ok = false;
  } else {
    console.log(`✅ Fidelizadas Global: ${global_fidelizadas} (OK)`);
  }

  if (global_unicas !== global_esperado.unicas) {
    console.log(`❌ ERROR: Únicas Global. Esperado=${global_esperado.unicas}, Obtenido=${global_unicas}`);
    todas_ok = false;
  } else {
    console.log(`✅ Únicas Global: ${global_unicas} (OK)`);
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // PASO 7: VALIDAR ECUACIÓN EN TODOS LOS NIVELES
  // ═══════════════════════════════════════════════════════════════════════════
  console.log("\n📐 PASO 7: Validación de Ecuación (Únicas = Nuevas + Fidelizadas)...\n");

  let ecuacion_ok = true;

  Object.keys(conteos_esperados).forEach(mes => {
    const exp = conteos_esperados[mes];
    const valida = (exp.unicos === (exp.nuevas + exp.fidelizadas));
    if (!valida) {
      console.log(`❌ FALLA en ${mes}: ${exp.unicos} ≠ ${exp.nuevas} + ${exp.fidelizadas}`);
      ecuacion_ok = false;
    } else {
      console.log(`✅ ${mes}: ${exp.unicos} = ${exp.nuevas} + ${exp.fidelizadas}`);
    }
  });

  // Global
  const global_valida = (global_unicas === (global_nuevas + global_fidelizadas));
  if (!global_valida) {
    console.log(`\n❌ FALLA GLOBAL: ${global_unicas} ≠ ${global_nuevas} + ${global_fidelizadas}`);
    ecuacion_ok = false;
  } else {
    console.log(`\n✅ GLOBAL: ${global_unicas} = ${global_nuevas} + ${global_fidelizadas}`);
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // PASO 8: VALIDAR UNICIDAD (Ningún DNI contado dos veces como NUEVO)
  // ═══════════════════════════════════════════════════════════════════════════
  console.log("\n🔐 PASO 8: Validación de Unicidad (Ningún DNI duplicado como NUEVO)...\n");

  let duplicados_ok = true;
  
  // Contar cuántas veces aparece cada DNI como "NUEVA"
  const dni_nuevas_cuenta = {};
  dnis_nuevas_global.forEach(dni => {
    dni_nuevas_cuenta[dni] = 0;
    Object.keys(clasificacion_porRegistro).forEach(mes => {
      const regs = clasificacion_porRegistro[mes];
      regs.forEach(r => {
        if (r.dni === dni && r.clase.includes("NUEVA")) {
          dni_nuevas_cuenta[dni]++;
        }
      });
    });
  });

  Object.keys(dni_nuevas_cuenta).forEach(dni => {
    const cuenta = dni_nuevas_cuenta[dni];
    if (cuenta > 1) {
      console.log(`❌ DNI ${dni} contado ${cuenta} veces como NUEVA (debe ser 1)`);
      duplicados_ok = false;
    } else {
      console.log(`✅ DNI ${dni} contado 1 vez como NUEVA (OK)`);
    }
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // PASO 9: RESUMEN FINAL
  // ═══════════════════════════════════════════════════════════════════════════
  console.log("\n" + "═".repeat(70));
  console.log("RESUMEN FINAL DEL TEST");
  console.log("═".repeat(70) + "\n");

  const todos_ok = todas_ok && ecuacion_ok && duplicados_ok;

  console.log(`Estado General: ${todos_ok ? "✅ TODAS LAS VALIDACIONES PASARON" : "❌ ALGUNAS VALIDACIONES FALLARON"}`);
  console.log(`\n  ✓ Conteos Correctos: ${todas_ok ? "✅" : "❌"}`);
  console.log(`  ✓ Ecuación Válida: ${ecuacion_ok ? "✅" : "❌"}`);
  console.log(`  ✓ Unicidad OK: ${duplicados_ok ? "✅" : "❌"}`);

  console.log("\n" + "═".repeat(70) + "\n");

  return {
    ok: todos_ok,
    conteos_globales: { nuevas: global_nuevas, fidelizadas: global_fidelizadas, unicas: global_unicas },
    esperados: global_esperado,
    validaciones: { conteos_ok: todas_ok, ecuacion_ok, duplicados_ok }
  };
}

/**
 * VALIDACIÓN DE FUNCIONES REALES DEL SISTEMA
 * Llama a obtenerDatosGraficos y obtenerEstadisticasEstacionDetalle
 * Verifica que cumplan: Únicas = Nuevas + Fidelizadas
 */
function debugValidacionFuncionesReales() {
  console.log("\n╔════════════════════════════════════════════════════════════════╗");
  console.log("║ VALIDACIÓN DE FUNCIONES REALES DEL SISTEMA                   ║");
  console.log("╚════════════════════════════════════════════════════════════════╝\n");

  const ss = SpreadsheetApp.getActiveSpreadsheet();

  // ═══════════════════════════════════════════════════════════════════════════
  // PARTE 1: obtenerDatosGraficos
  // ═══════════════════════════════════════════════════════════════════════════
  console.log("📊 PARTE 1: Validando obtenerDatosGraficos...\n");

  try {
    const datosGraficos = obtenerDatosGraficos("", "todos", null, "periodo");
    
    if (!datosGraficos.ok) {
      console.log("❌ obtenerDatosGraficos retornó ok=false");
      return;
    }

    console.log("✅ obtenerDatosGraficos ejecutado correctamente");
    console.log(`   Modo: ${datosGraficos.modo}`);
    console.log(`   Meses disponibles: ${datosGraficos.mesesDisponibles.length}`);
    console.log(`   Claves en resultados: ${Object.keys(datosGraficos.resultados).length}`);

    // Validar arrays de mensual
    console.log("\n   Validando arrays mensual:");
    Object.keys(datosGraficos.resultados).forEach(clave => {
      const resultado = datosGraficos.resultados[clave];
      const mensual = resultado.mensual || [];
      
      if (mensual.length === 0) {
        console.log(`   ⚠️  Clave "${clave}": mensual vacío`);
        return;
      }

      let ecuacion_ok = 0;
      let ecuacion_falla = 0;

      mensual.forEach((item, idx) => {
        const [mes, participaciones, unicos, nuevas, fidelizadas] = item;
        const sum_nuevas_fidelizadas = (nuevas || 0) + (fidelizadas || 0);
        const ecuacion_valida = (unicos === sum_nuevas_fidelizadas);

        if (ecuacion_valida) {
          ecuacion_ok++;
        } else {
          ecuacion_falla++;
          console.log(`   ❌ ${clave}/${mes}: ${unicos} ≠ ${nuevas} + ${fidelizadas}`);
        }
      });

      if (ecuacion_falla === 0) {
        console.log(`   ✅ ${clave}: Todos los ${mensual.length} meses cumplen ecuación`);
      }
    });

    // Validar arrays de estaciones y profesores
    console.log("\n   Validando arrays de estaciones y profesores:");
    Object.keys(datosGraficos.resultados).forEach(clave => {
      const resultado = datosGraficos.resultados[clave];
      (resultado.estaciones || []).forEach((item, index) => {
        const [nombre, part, unicos, nuevas, fidelizadas] = item;
        if (unicos !== (nuevas + fidelizadas)) {
          console.log(`   ❌ ${clave}/Estación[${index}] ${nombre}: ${unicos} ≠ ${nuevas} + ${fidelizadas}`);
        }
      });
      (resultado.profesores || []).forEach((item, index) => {
        const [nombre, part, unicos, nuevas, fidelizadas] = item;
        if (unicos !== (nuevas + fidelizadas)) {
          console.log(`   ❌ ${clave}/Profesor[${index}] ${nombre}: ${unicos} ≠ ${nuevas} + ${fidelizadas}`);
        }
      });
    });

    // Validar métricas globales
    console.log("\n   Validando métricas globales:");
    const totalUnicosGlobal = datosGraficos.totalUnicosGlobalRequest;
    const totalNuevasGlobal = datosGraficos.totalNuevasGlobalRequest;
    const totalFidelizadasGlobal = datosGraficos.totalFidelizadasGlobalRequest;
    
    const ecuacion_global = (totalUnicosGlobal === (totalNuevasGlobal + totalFidelizadasGlobal));
    console.log(`   Total Únicos: ${totalUnicosGlobal}`);
    console.log(`   Total Nuevas: ${totalNuevasGlobal}`);
    console.log(`   Total Fidelizadas: ${totalFidelizadasGlobal}`);
    console.log(`   Ecuación: ${totalUnicosGlobal} = ${totalNuevasGlobal} + ${totalFidelizadasGlobal}`);
    console.log(`   ${ecuacion_global ? "✅ OK" : "❌ FALLA"}`);

  } catch (e) {
    console.log(`❌ Error en obtenerDatosGraficos: ${e.message}`);
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // PARTE 2: obtenerEstadisticasEstacionDetalle
  // ═══════════════════════════════════════════════════════════════════════════
  console.log("\n📍 PARTE 2: Validando obtenerEstadisticasEstacionDetalle...\n");

  try {
    // Obtener lista de estaciones
    const hojaTalleres = ss.getSheetByName("TALLERES");
    if (!hojaTalleres) {
      console.log("❌ No se encontró la solapa TALLERES");
      return;
    }

    const datos = hojaTalleres.getDataRange().getValues();
    const headers = datos[0].map(h => String(h).toUpperCase().trim());
    const idxEstacion = headers.indexOf("ESTACION");
    
    if (idxEstacion === -1) {
      console.log("❌ No se encontró columna ESTACION");
      return;
    }

    // Obtener primeras 3 estaciones únicas
    const estacionesUniques = {};
    for (let i = 1; i < Math.min(100, datos.length); i++) {
      const est = String(datos[i][idxEstacion] || "").trim();
      if (est && !estacionesUniques[est]) {
        estacionesUniques[est] = true;
      }
      if (Object.keys(estacionesUniques).length >= 3) break;
    }

    const estacionesATestear = Object.keys(estacionesUniques).slice(0, 3);
    console.log(`Estaciones a testear: ${estacionesATestear.join(", ")}\n`);

    let validaciones_pasadas = 0;
    let validaciones_fallidas = 0;

    // Testear cada estación en varios meses
    estacionesATestear.forEach(estacion => {
      console.log(`\n   📍 Estación: ${estacion}`);
      
      // Testear mes actual
      const mesActual = "2026-" + String(new Date().getMonth() + 1).padStart(2, '0');
      
      try {
        const res = obtenerEstadisticasEstacionDetalle(estacion, mesActual, "Todos", "TODAS");
        
        if (!res.ok) {
          console.log(`   ⚠️  No hay datos para ${mesActual}`);
          return;
        }

        // Validar estructura de datos
        const tiene_unicos = res.unicos && res.unicos.length > 0;
        const tiene_nuevas = res.nuevas && res.nuevas.length > 0;
        const tiene_fidelizadas = res.fidelizadas && res.fidelizadas.length > 0;

        console.log(`      Labels: ${res.labels.length}`);
        console.log(`      Has unicos: ${tiene_unicos}, Has nuevas: ${tiene_nuevas}, Has fidelizadas: ${tiene_fidelizadas}`);

        // Validar ecuación por etiqueta
        let eq_ok = 0;
        let eq_fail = 0;

        for (let i = 0; i < res.unicos.length; i++) {
          const unicos_i = res.unicos[i] || 0;
          const nuevas_i = res.nuevas[i] || 0;
          const fidelizadas_i = res.fidelizadas[i] || 0;
          const sum = nuevas_i + fidelizadas_i;

          if (unicos_i === sum) {
            eq_ok++;
          } else {
            eq_fail++;
            if (eq_fail <= 3) { // Mostrar solo los primeros 3 errores
              console.log(`      ❌ Índice ${i}: ${unicos_i} ≠ ${nuevas_i} + ${fidelizadas_i}`);
            }
          }
        }

        if (eq_fail === 0) {
          console.log(`      ✅ Ecuación válida en todos ${res.unicos.length} puntos`);
          validaciones_pasadas++;
        } else {
          console.log(`      ❌ ${eq_fail} fallos en ecuación de ${res.unicos.length} puntos`);
          validaciones_fallidas++;
        }

        // Validar totales
        console.log(`\n      TOTALES DEL PERÍODO:`);
        console.log(`      • Participaciones: ${res.totalParticipaciones}`);
        console.log(`      • Únicas: ${res.totalUnicos}`);
        console.log(`      • Nuevas: ${res.totalNuevas}`);
        console.log(`      • Fidelizadas: ${res.totalFidelizados}`);

        const eq_total = (res.totalUnicos === (res.totalNuevas + res.totalFidelizados));
        console.log(`      Ecuación Total: ${res.totalUnicos} = ${res.totalNuevas} + ${res.totalFidelizados}`);
        console.log(`      ${eq_total ? "✅ OK" : "❌ FALLA"}`);

        if (!eq_total) validaciones_fallidas++;
        else validaciones_pasadas++;

      } catch (e) {
        console.log(`      ❌ Error: ${e.message}`);
        validaciones_fallidas++;
      }
    });

    console.log(`\n   RESUMEN: ${validaciones_pasadas} ✅ pasadas, ${validaciones_fallidas} ❌ fallidas`);

  } catch (e) {
    console.log(`❌ Error en obtenerEstadisticasEstacionDetalle: ${e.message}`);
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // PARTE 3: obtenerEstadisticasPersonasUnicasGlobal
  // ═══════════════════════════════════════════════════════════════════════════
  console.log("\n🌍 PARTE 3: Validando obtenerEstadisticasPersonasUnicasGlobal...\n");

  try {
    const filtros = {
      estacion: "Todas",
      anios: ["2026"],
      tipoDia: "Todos",
      modo: "general"
    };

    const res = obtenerEstadisticasPersonasUnicasGlobal(filtros);

    if (!res.resumenAnual || res.resumenAnual.length === 0) {
      console.log("⚠️  No hay datos en resumenAnual");
      return;
    }

    console.log("✅ obtenerEstadisticasPersonasUnicasGlobal ejecutado\n");

    res.resumenAnual.forEach(anio => {
      console.log(`   Año ${anio.anio}:`);
      console.log(`     • Únicas: ${anio.unicas}`);
      console.log(`     • Nuevas: ${anio.nuevas}`);
      console.log(`     • Fidelizadas: ${anio.fidelizadas}`);
      console.log(`     • Prestaciones: ${anio.prestaciones}`);

      const eq_valida = (anio.unicas === (anio.nuevas + anio.fidelizadas));
      console.log(`     Ecuación: ${anio.unicas} = ${anio.nuevas} + ${anio.fidelizadas}`);
      console.log(`     ${eq_valida ? "✅ OK" : "❌ FALLA"}\n`);
    });

  } catch (e) {
    console.log(`❌ Error en obtenerEstadisticasPersonasUnicasGlobal: ${e.message}`);
  }

  console.log("\n" + "═".repeat(70));
  console.log("FIN DE VALIDACIÓN DE FUNCIONES REALES");
  console.log("═".repeat(70) + "\n");
}

