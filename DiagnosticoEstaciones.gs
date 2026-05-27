/**
 * DIAGNÓSTICO: Cruza los nombres de las solapas (*) contra los valores de ESTACION en TALLERES
 * para identificar qué estaciones tienen datos y cuáles no aparecen.
 * Ejecutar desde el menú: Extensiones > Apps Script > diagnosticarEstacionesVsTabla
 */
function diagnosticarEstacionesVsTabla() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const hojas = ss.getSheets();
  
  // 1. Obtener las estaciones del frontend (solapas con *)
  const estacionesFrontend = [];
  hojas.forEach(function(h) {
    const nom = h.getName();
    if (nom.indexOf("*") !== -1) {
      estacionesFrontend.push(nom.replace("*", "").trim());
    }
  });
  
  // 2. Obtener valores únicos de la columna ESTACION en TALLERES
  const hojaTalleres = ss.getSheetByName("TALLERES");
  if (!hojaTalleres || hojaTalleres.getLastRow() < 2) {
    console.log("ERROR: La solapa TALLERES no existe o está vacía.");
    return;
  }
  
  const datos = hojaTalleres.getDataRange().getValues();
  const headers = datos[0].map(function(h) { return String(h).toUpperCase().trim(); });
  const idxEstacion = headers.indexOf("ESTACION");
  const idxFecha = headers.indexOf("FECHA ACTIVIDAD");
  
  if (idxEstacion === -1) {
    console.log("ERROR: No se encontró la columna ESTACION en TALLERES");
    return;
  }
  
  // Contar registros por estación (solo 2026)
  const conteo = {};
  const valoresUnicos = {};
  for (var i = 1; i < datos.length; i++) {
    var est = String(datos[i][idxEstacion] || "").trim();
    if (!est) continue;
    var f = datos[i][idxFecha];
    var es2026 = (f instanceof Date && f.getFullYear() === 2026);
    
    if (!valoresUnicos[est]) valoresUnicos[est] = { total: 0, en2026: 0 };
    valoresUnicos[est].total++;
    if (es2026) valoresUnicos[est].en2026++;
  }
  
  // 3. Función de normalización (replica exacta del backend)
  function normalizar(texto) {
    if (!texto) return "";
    return String(texto)
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\([^)]*\)/g, "")
      .replace(/estacion saludable/gi, "")
      .replace(/estacion/gi, "")
      .replace(/parque/gi, "")
      .replace(/plaza/gi, "")
      .replace(/[^a-z0-9]/g, "")
      .trim();
  }
  
  // 4. ALIAS (copia del backend)
  var ALIAS = {
    "Estación Saludable Aristóbulo del Valle": ["Aristóbulo del Valle", "Aristobulo del Valle"],
    "Estación Saludable Indoamericano": ["Indoamericano"],
    "Estación Saludable Lago de Palermo": ["Lago de Palermo", "Lagos de Palermo", "Palermo"],
    "Estación Saludable Manzana 66": ["Manzana 66", "Plaza Manzana 66"],
    "Estación Saludable Móvil 1": ["Móvil 1", "Movil 1", "Movil1", "Móvil1", "Plaza Sudamerica", "Movil 1 Plaza Sudamerica", "Móvil 1 Plaza Sudamerica", "Plaza Echeverria", "Movil 1 Plaza Echeverria", "Móvil 1 Plaza Echeverria", "Belgrano", "Movil 1 Belgrano", "Móvil 1 Belgrano", "Parque Lezama", "Movil 1 Parque Lezama", "Móvil 1 Parque Lezama", "Plaza La Redonda", "Movil 1 Plaza La Redonda", "Móvil 1 Plaza La Redonda"],
    "Estación Saludable Móvil 2": ["Móvil 2", "Movil 2", "Movil2", "Móvil2", "Corralon de Floresta", "Corralón de Floresta", "Movil 2 Corralon de Floresta", "Móvil 2 Corralon de Floresta", "Plaza Democracia", "Movil 2 Plaza Democracia", "Móvil 2 Plaza Democracia", "Parque Ferroviario", "Movil 2 Parque Ferroviario", "Móvil 2 Parque Ferroviario", "Plaza Garay", "Movil 2 Plaza Garay", "Móvil 2 Plaza Garay", "Plaza Irlanda", "Movil 2 Plaza Irlanda", "Móvil 2 Plaza Irlanda"],
    "Estación Saludable Parque Avellaneda": ["Parque Avellaneda", "Avellaneda"],
    "Estación Saludable Parque Centenario": ["Parque Centenario", "Centenario"],
    "Estación Saludable Parque Chacabuco": ["Parque Chacabuco", "Chacabuco"],
    "Estación Saludable Parque Los Andes": ["Parque Los Andes", "Los Andes"],
    "Estación Saludable Parque Patricios": ["Parque Patricios", "Patricios"],
    "Estación Saludable Parque Rivadavia": ["Parque Rivadavia", "Rivadavia"],
    "Estación Saludable Parque Saavedra": ["Parque Saavedra", "Saavedra"],
    "Estación Saludable Plaza Almagro": ["Plaza Almagro", "Almagro"],
    "Estación Saludable Plaza de los Periodistas": ["Plaza de los Periodistas", "Periodistas"],
    "Estación Saludable Plaza Dr. Bernardo A. Houssay": ["Plaza Houssay", "Houssay", "Plaza Dr Bernardo A Houssay"],
    "Estación Saludable Plaza Flores": ["Plaza Flores", "Flores"],
    "Estación Saludable Plaza Martin Fierro": ["Plaza Martin Fierro", "Plaza Martín Fierro", "Martin Fierro", "Martín Fierro"],
    "Estación Saludable Parque de la Ciudad": ["Parque de la Ciudad"],
    "Estación Saludable Plaza Rubén Darío": ["Plaza Rubén Darío", "Plaza Ruben Dario", "Rubén Darío", "Ruben Dario"],
    "Estación Saludable Sudamérica": ["Sudamérica", "Sudamerica"],
    "Barrio Juan XXIII": ["Juan XXIII", "Barrio Juan XXIII"],
    "Estación Saludable Rosedal": ["Rosedal"],
    "Programa Estaciones Saludables": ["Programa Estaciones Saludables"],
    "Depósito Estaciones Saludables": ["Deposito Estaciones Saludables", "Depósito Estaciones Saludables"],
    "Eventos fuera ES": ["Eventos fuera ES"],
    "Estaciones Saludables Clic": ["Estaciones Saludables Clic", "Clic", "CLIC"]
  };
  
  // 5. Cruzar: para cada estación del frontend, buscar qué registros matchean en TALLERES
  var resultados = [];
  
  estacionesFrontend.forEach(function(nombreSolapa) {
    var normSolapa = normalizar(nombreSolapa);
    
    // Buscar aliases — BIDIRECCIONAL (busca en claves Y valores)
    var nombresABuscar = [normSolapa];
    for (var oficial in ALIAS) {
      var keyNorm = normalizar(oficial);
      var valsNorm = ALIAS[oficial].map(function(a) { return normalizar(a); });
      if (keyNorm === normSolapa || valsNorm.indexOf(normSolapa) !== -1) {
        if (nombresABuscar.indexOf(keyNorm) === -1) nombresABuscar.push(keyNorm);
        valsNorm.forEach(function(v) {
          if (nombresABuscar.indexOf(v) === -1) nombresABuscar.push(v);
        });
        break;
      }
    }
    
    // Buscar coincidencias en TALLERES
    var totalMatch = 0;
    var match2026 = 0;
    var matchedNames = [];
    
    for (var est in valoresUnicos) {
      var normEst = normalizar(est);
      if (nombresABuscar.indexOf(normEst) !== -1) {
        totalMatch += valoresUnicos[est].total;
        match2026 += valoresUnicos[est].en2026;
        matchedNames.push(est + " (" + valoresUnicos[est].en2026 + " reg 2026)");
      }
    }
    
    resultados.push({
      solapa: nombreSolapa,
      normalizado: normSolapa,
      aliasCount: nombresABuscar.length,
      totalMatchTalleres: totalMatch,
      match2026: match2026,
      matchedNames: matchedNames,
      estado: match2026 > 0 ? "✅ OK" : (totalMatch > 0 ? "⚠️ SOLO HISTORICO" : "❌ SIN DATOS")
    });
  });
  
  // 6. Mostrar resultados
  console.log("========================================");
  console.log("DIAGNÓSTICO: ESTACIONES vs TALLERES");
  console.log("========================================");
  console.log("Total estaciones frontend (solapas *): " + estacionesFrontend.length);
  console.log("Total valores únicos ESTACION en TALLERES: " + Object.keys(valoresUnicos).length);
  console.log("");
  
  // Separar OK vs FALLO
  var ok = resultados.filter(function(r) { return r.estado === "✅ OK"; });
  var hist = resultados.filter(function(r) { return r.estado === "⚠️ SOLO HISTORICO"; });
  var fallo = resultados.filter(function(r) { return r.estado === "❌ SIN DATOS"; });
  
  console.log("--- ✅ FUNCIONANDO (" + ok.length + ") ---");
  ok.forEach(function(r) {
    console.log("  " + r.solapa + " → " + r.match2026 + " registros 2026 | Matched: " + r.matchedNames.join(", "));
  });
  
  console.log("");
  console.log("--- ⚠️ SOLO DATOS HISTÓRICOS (" + hist.length + ") ---");
  hist.forEach(function(r) {
    console.log("  " + r.solapa + " → " + r.totalMatchTalleres + " registros totales, 0 en 2026 | Matched: " + r.matchedNames.join(", "));
  });
  
  console.log("");
  console.log("--- ❌ SIN DATOS EN TALLERES (" + fallo.length + ") ---");
  fallo.forEach(function(r) {
    console.log("  " + r.solapa + " (normalizado: '" + r.normalizado + "') → Aliases buscados: " + r.aliasCount);
  });
  
  // 7. Valores de TALLERES que NO matchean con ninguna solapa
  console.log("");
  console.log("--- 🔍 VALORES EN TALLERES SIN SOLAPA CORRESPONDIENTE ---");
  var allNorms = {};
  resultados.forEach(function(r) {
    var normS = r.normalizado;
    allNorms[normS] = true;
    // También registrar los aliases normalizados — BIDIRECCIONAL
    for (var oficial in ALIAS) {
      var keyNorm = normalizar(oficial);
      var valsNorm = ALIAS[oficial].map(function(a) { return normalizar(a); });
      if (keyNorm === normS || valsNorm.indexOf(normS) !== -1) {
        allNorms[keyNorm] = true;
        valsNorm.forEach(function(v) { allNorms[v] = true; });
      }
    }
  });
  
  for (var est in valoresUnicos) {
    var normEst = normalizar(est);
    if (!allNorms[normEst] && valoresUnicos[est].en2026 > 0) {
      console.log("  '" + est + "' (norm: '" + normEst + "') → " + valoresUnicos[est].en2026 + " registros 2026 — NO TIENE SOLAPA");
    }
  }
  
  console.log("");
  console.log("========================================");
  console.log("FIN DEL DIAGNÓSTICO");
  console.log("========================================");
}

