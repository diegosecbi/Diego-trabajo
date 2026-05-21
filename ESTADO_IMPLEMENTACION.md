# ESTADO DE IMPLEMENTACIÓN: NUEVAS/FIDELIZADAS

**Fecha:** 20 de Mayo 2026  
**Estado:** ⚠️ EN VALIDACIÓN (No desplegar aún)

---

## 📊 RESUMEN EJECUTIVO

| Componente | Estado | Riesgo | Acción |
|------------|--------|--------|--------|
| `obtenerMapaPrimerAparicionMes_()` | ✅ Implementado | Bajo | Validar con datos reales |
| `obtenerEstadisticasPersonasUnicasGlobal()` | ✅ Modificado | Medio | ⚠️ TESTEAR |
| `obtenerDatosGraficos()` | ✅ Modificado | Medio | ⚠️ TESTEAR |
| `obtenerEstadisticasEstacionDetalle()` | ✅ Modificado | Medio | ⚠️ TESTEAR |
| Frontend tooltips | ✅ Agregados | Bajo | Validar visualmente |
| Flash metrics | ✅ Agregadas | Bajo | Validar valores |
| Ecuación `Únicas = Nuevas + Fidelizadas` | 🔍 En verificación | **CRÍTICO** | ⚠️ VALIDAR AHORA |

---

## ✅ LO QUE SE IMPLEMENTÓ

### 1. Backend: [Code.js](Code.js)

#### ✅ `obtenerMapaPrimerAparicionMes_(ss)` (Línea ~3205)
```javascript
// ✅ Implementado correctamente
// Lee 2025_HISTORICO y TALLERES
// Devuelve mapa { dni: "YYYY-MM" }
// Cachea resultados en mapaPrimerAparicionCache_

Características:
✅ Procesa fechas de ambos formatos (Date y string)
✅ Maneja años 2025 y 2026
✅ Caching para evitar cálculos repetidos
✅ Fallback robusto para encabezados variables
```

#### ✅ `obtenerEstadisticasPersonasUnicasGlobal(filtros)` (Línea ~3278)
```javascript
// ✅ Modificado para usar mapaPrimerAparicion
// Clasificación: 
//   - NUEVA si primeraAparicion === mesAnio
//   - FIDELIZADA si primeraAparicion < mesAnio
//   - NUEVA (fallback) si no existe en mapa

Cambios:
✅ Reemplaza viejo sort() por mapaPrimerAparicion
✅ Acumula nuevasSet y fidelizadasSet por año
✅ Devuelve totalNuevasSeleccion y totalFidelizadasSeleccion
✅ Mantiene diagnostico detallado
```

#### ✅ `obtenerDatosGraficos(...)` (Línea ~6530)
```javascript
// ✅ Modificado para incluir nuevas/fidelizadas en arrays
// Arrays extendidos: [mes, part, unicos, nuevas, fidelizadas]

Cambios:
✅ Importa 2025_HISTORICO localmente si necesita histórico
✅ Acumula totalNuevasGlobalRequest y totalFidelizadasGlobalRequest
✅ Inicializa mapas nuevas y fidelizadas por etiqueta (está/actividad/profesor)
✅ Devuelve arrays con estructura [nombre, part, unicos, nuevas, fidelizadas]
```

#### ✅ `obtenerEstadisticasEstacionDetalle(estacion, mesClave, tipoDia, subUbicacion)` (Línea ~6863)
```javascript
// ✅ Modificado para clasificar nuevas/fidelizadas por día

Cambios:
✅ Inicializa dataAgrupada[clave] con { nuevas: {}, fidelizadas: {} }
✅ Clasifica cada DNI usando mapaPrimerAparicion
✅ Mapas de nuevas/fidelizadas se llenan por clave (día o MM-DD anual)
✅ Devuelve arrays: nuevas, fidelizadas para consumo frontend
```

### 2. Frontend: [index.html](index.html)

#### ✅ Flash Metrics (Línea ~4330+)
```html
<!-- Actualiza en renderizarCharts() -->
<div id="flashNuevas">0 Nuevas</div>
<div id="flashFidelizadas">0 Fidelizadas</div>

// Código:
elNue.textContent = totalNue.toLocaleString() + " Nuevas";
elFid.textContent = totalFid.toLocaleString() + " Fidelizadas";
```

#### ✅ Tooltips en Charts (Línea ~4600+)
```javascript
// Tooltip enhancement en crearGraficoEvolucion()
afterLabel: function(context) {
  if (context.dataset.label.includes('Personas')) {
    let i = context.dataIndex;
    let nuevas = mensual[i][3] || 0;
    let fidelizadas = mensual[i][4] || 0;
    return ['  ─────────', '  ↳ Nuevas: ' + nuevas, '  ↳ Fidelizadas: ' + fidelizadas];
  }
  return null;
}

// Aplicado también en:
✅ crearGraficoEstaciones()
✅ crearGraficoProfesores()
```

#### ✅ Modal Estación (Línea ~2333+)
```javascript
// Descarga arrays: nuevas, fidelizadas
res.nuevas  // Array con conteos por día
res.fidelizadas // Array con conteos por día

// Mostrados en métricas:
${res.totalNuevas || 0} Nuevas
${res.totalFidelizados || 0} Fidelizadas
```

### 3. Diagnóstico: [PruebaFidelizados.gs](PruebaFidelizados.gs)

#### ✅ `debugValidacionFidelizadosCompleto()`
- Test matemático puro con escenario exacto
- Valida ecuación `Únicas = Nuevas + Fidelizadas`
- Verifica unicidad (ningún DNI duplicado como NUEVA)

#### ✅ `debugValidacionFuncionesReales()`
- Ejecuta funciones reales del sistema
- Valida arrays completos
- Comprueba totales globales

---

## 🔍 LO QUE NECESITA VALIDACIÓN AHORA

### 🔴 CRÍTICO: Ecuación Matemática

**Validar que SIEMPRE:** `Personas Únicas = Nuevas + Fidelizadas`

**Niveles a validar:**
1. ✅ Mensual (por mes en obtenerDatosGraficos)
2. ✅ Por estación (crearGraficoEstaciones)
3. ✅ Por profesor (crearGraficoProfesores)
4. ✅ Modal estación (obtenerEstadisticasEstacionDetalle)
5. ✅ Global (totalUnicosGlobalRequest = totalNuevasGlobalRequest + totalFidelizadasGlobalRequest)

**Cómo validar:**
```javascript
// Ejecutar en consola:
debugValidacionFidelizadosCompleto()
debugValidacionFuncionesReales()
```

### 🟡 IMPORTANTE: Clasificación de DNIs

**Validar que:**
- DNI A (hist 2025-03) → Fidelizada en Mayo 2026
- DNI B (nuevo 2026-04) → Nueva en Abril, Fidelizada en Mayo
- DNI C (nuevo 2026-06) → Nueva en Junio

**Cómo validar:**
```javascript
// Revisar logs en test:
console.log("DNI clasificado como:", clase)
```

### 🟡 IMPORTANTE: Arrays Completos

**Validar que `obtenerDatosGraficos` devuelve:**
```javascript
{
  resultados: {
    clave: {
      mensual: [
        // ANTES: [mes, participaciones, unicos]
        // AHORA: [mes, participaciones, unicos, nuevas, fidelizadas]
        ["2026-04", 10, 5, 2, 3],
        ...
      ],
      estaciones: [
        // [nom, part, unicos, nuevas, fidelizadas]
        ["Estación A*", 50, 20, 8, 12],
        ...
      ],
      profesores: [
        // [nom, part, unicos, nuevas, fidelizadas]
        ["Prof X", 25, 10, 4, 6],
        ...
      ]
    }
  },
  totalUnicosGlobalRequest: 100,
  totalNuevasGlobalRequest: 35,
  totalFidelizadasGlobalRequest: 65
}

// Validar: 100 = 35 + 65 ✅
```

### 🟡 IMPORTANTE: Modal Estación

**Validar estructura devuelta por `obtenerEstadisticasEstacionDetalle`:**
```javascript
{
  ok: true,
  labels: ["01", "02", "03", ...],           // Días o "MM-dd"
  participaciones: [5, 3, 0, ...],           // Por día
  unicos: [2, 1, 0, ...],                    // Por día
  nuevas: [1, 0, 0, ...],                    // ✅ NUEVO
  fidelizadas: [1, 1, 0, ...],               // ✅ NUEVO
  totalParticipaciones: 100,
  totalUnicos: 15,
  totalNuevas: 5,                            // ✅ NUEVO
  totalFidelizados: 10                       // ✅ NUEVO
}

// Validar: 15 = 5 + 10 ✅
```

---

## ⚠️ RIESGOS IDENTIFICADOS

### Riesgo 1: Mapa de Primera Aparición Incompleto
**Severidad:** 🔴 CRÍTICO

**Descripción:**
- Si un DNI NO está en mapaPrimerAparicion, se clasifica como "NUEVA"
- Esto puede llevar a conteos incorrectos si datos históricos están incompletos

**Solución implementada:**
- `obtenerMapaPrimerAparicionMes_()` lee AMBAS hojas (2025_HISTORICO + TALLERES)
- Caching asegura consistencia

**Validación requerida:**
```javascript
// Ejecutar:
debugValidacionFuncionesReales()
// Si ve "⚠️ No hay datos en resumenAnual" → problema
```

---

### Riesgo 2: Filtro Mensual Podría Romper Lógica

**Severidad:** 🟡 MEDIO

**Descripción:**
- Si solo se consulta Junio, un DNI de Abril no se clasifica correctamente
- Regla de negocio: "Nueva" = primer mes en TODO el histórico, no en filtro

**Solución implementada:**
- mapaPrimerAparicion NO respeta filtro → es absoluto
- Clasificación siempre usa primeraAparicion < mesActual, no importa filtro

**Validación requerida:**
```javascript
// Teste: Filtrar solo Junio
// DNI que apareció en Abril debe verse como "FIDELIZADA", no "NUEVA"
```

---

### Riesgo 3: Arrays Inconsistentes Entre Funciones

**Severidad:** 🟡 MEDIO

**Descripción:**
- `obtenerDatosGraficos` vs `obtenerEstadisticasEstacionDetalle` podrían tener formatos diferentes
- Frontend espera: `[label, part, unicos, nuevas, fidelizadas]`

**Solución implementada:**
- Ambas funciones usan la MISMA regla de clasificación
- Arrays extendidos a 5 elementos en ambas

**Validación requerida:**
```javascript
// Llamar ambas funciones y comparar estructuras
// Deben ser idénticas en formato
```

---

### Riesgo 4: Timestamp de Registros Sin Normalizar

**Severidad:** 🟡 MEDIO

**Descripción:**
- Si dos registros del mismo DNI en el mismo mes tienen timestamps distintos
- La clasificación se hace por mes, así que es OK

**Validación requerida:**
```javascript
// Verificar que fechas se parsean correctamente
// debugValidacionFuncionesReales() lo hace
```

---

## 📝 FUNCIONES TODAVÍA INCOMPLETAS

### ❌ Sin cambios (posible deuda técnica)

1. **`obtenerResumenTalleresDesdeHojaLocal_`**
   - No devuelve nuevas/fidelizadas
   - ⚠️ Úsalo solo si es necesario

2. **`obtenerDetalleDiaEstacion()`**
   - No calcula nuevas/fidelizadas por actividad
   - ✅ Menor prioridad (modal secundario)

3. **Métricas por Sub-Ubicación (Móvil 1, Móvil 2)**
   - No segmenta nuevas/fidelizadas
   - ✅ Menor prioridad (ultrafino)

---

## ✅ QUÉ FALTA ANTES DEL DESPLIEGUE FINAL

### Fase 1: Validación Matemática (INMEDIATO)
- [ ] Ejecutar `debugValidacionFidelizadosCompleto()` → Debe pasar ✅
- [ ] Ejecutar `debugValidacionFuncionesReales()` → Debe pasar ✅
- [ ] Revisar console logs para anomalías
- [ ] Confirmación: "Ecuación válida en todos los niveles"

### Fase 2: Validación Funcional (Hoy)
- [ ] Cargar página HTML
- [ ] Ir a Modal Gráficos
- [ ] Seleccionar mes (ej: Junio 2026)
- [ ] Verificar:
  - ✅ Flash metrics actualizan: "X Nuevas, Y Fidelizadas"
  - ✅ Gráficos muestran tooltips con desglose
  - ✅ Totales son coherentes
  - ✅ Sin errores en consola

### Fase 3: Test con Usuarios (Mañana)
- [ ] Mostrar a 2-3 usuarios
- [ ] Pedir que validen cifras
- [ ] Confirmar que números tienen sentido
- [ ] Documentar feedback

### Fase 4: Deploy (Mañana por tarde)
- [ ] Backup de datos
- [ ] Despliegue a producción
- [ ] Monitorear logs por 24h
- [ ] Estar disponible para rollback si hay problema

---

## 🎯 MÉTRICAS DE ÉXITO

| Métrica | Criterio | Estado |
|---------|----------|--------|
| Ecuación válida | 100% de registros | 🔍 VERIFICAR |
| Ningún DNI duplicado | 100% de DNIs son únicos | 🔍 VERIFICAR |
| Arrays completos | Todos tienen 5 elementos | 🔍 VERIFICAR |
| Totales globales | sum(nuevas + fidelizadas) = unicas | 🔍 VERIFICAR |
| Frontend sin errores | 0 errores en console | 🔍 VERIFICAR |
| Usuarios aprueban | 100% de feedback positivo | ⏳ EN ESPERA |

---

## 📞 PRÓXIMOS PASOS

1. **AHORA:**
   ```javascript
   // Ejecutar validaciones
   debugValidacionFidelizadosCompleto()
   debugValidacionFuncionesReales()
   
   // Revisar output
   // Si todo ✅ → Proceder a Fase 2
   // Si ❌ → Revisar riesgos arriba
   ```

2. **Si PASA:**
   - Recargar HTML
   - Validar visualmente
   - Mostrar a usuarios

3. **Si FALLA:**
   - Revisar logs
   - Identificar en qué nivel falló
   - Corregir función específica
   - Repetir test

---

## 📎 REFERENCIAS

- **Implementación:** [Code.js](Code.js)
- **Frontend:** [index.html](index.html)
- **Tests:** [PruebaFidelizados.gs](PruebaFidelizados.gs)
- **Guía:** [TEST_VALIDACION_FIDELIZADOS.md](TEST_VALIDACION_FIDELIZADOS.md)

