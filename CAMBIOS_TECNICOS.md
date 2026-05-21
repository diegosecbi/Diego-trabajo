# 🔧 CAMBIOS TÉCNICOS REALIZADOS

**Resumen:** 4 funciones modificadas + 1 función nueva + Frontend mejorado

---

## 📝 CAMBIOS EN Code.js

### 1. ✅ NUEVA FUNCIÓN: `obtenerMapaPrimerAparicionMes_(ss)` (Línea ~3205)

```javascript
// ✨ NUEVA FUNCIÓN
var mapaPrimerAparicionCache_ = null;

function obtenerMapaPrimerAparicionMes_(ss) {
  if (mapaPrimerAparicionCache_) {
    return mapaPrimerAparicionCache_;
  }
  
  const mapa = {};
  
  const procesarHoja = function(hoja) {
    if (!hoja || hoja.getLastRow() < 2) return;
    const datos = hoja.getDataRange().getValues();
    const headers = datos[0].map(h => String(h || "").toUpperCase().trim());
    
    // Busca flexible de cabeceras
    let idxDni = headers.indexOf("DNI");
    if (idxDni === -1) idxDni = headers.findIndex(h => h.includes("DNI"));
    if (idxDni === -1) idxDni = 0;
    
    let idxFecha = headers.indexOf("FECHA ACTIVIDAD");
    if (idxFecha === -1) idxFecha = headers.indexOf("FECHA");
    if (idxFecha === -1) idxFecha = headers.findIndex(h => h.includes("FECHA"));
    if (idxFecha === -1) idxFecha = 1;
    
    for (let i = 1; i < datos.length; i++) {
      const fila = datos[i];
      const valDni = fila[idxDni];
      const dniLimpio = normalizarDni_(valDni);
      if (!dniLimpio) continue;
      
      const fechaRaw = fila[idxFecha];
      if (!fechaRaw) continue;
      
      let fechaObj = null;
      if (fechaRaw instanceof Date) {
        fechaObj = fechaRaw;
      } else {
        let parts = String(fechaRaw).split("/");
        if (parts.length >= 3) {
          let year = parts[2].split(" ")[0];
          if (year.length === 2) year = "20" + year;
          fechaObj = new Date(year, parseInt(parts[1])-1, parseInt(parts[0]));
        }
      }
      if (!fechaObj || isNaN(fechaObj.getTime())) continue;
      
      const anio = String(fechaObj.getFullYear());
      if (anio !== "2025" && anio !== "2026") continue;
      
      const mes = String(fechaObj.getMonth() + 1).padStart(2, '0');
      const mesAnio = anio + "-" + mes;
      
      // Guarda la PRIMERA aparición
      if (!mapa[dniLimpio] || mesAnio < mapa[dniLimpio]) {
        mapa[dniLimpio] = mesAnio;
      }
    }
  };
  
  // Procesa 2025_HISTORICO
  const hojaHistorico = ss.getSheetByName("2025_HISTORICO");
  if (hojaHistorico) {
    procesarHoja(hojaHistorico);
  }
  
  // Procesa TALLERES
  const hojaTalleres = ss.getSheetByName("TALLERES");
  if (hojaTalleres) {
    procesarHoja(hojaTalleres);
  }
  
  mapaPrimerAparicionCache_ = mapa;
  return mapa;
}
```

**Propósito:**
- Construir mapa { dni: "YYYY-MM" } con primera aparición absoluta
- Leer AMBAS hojas (2025_HISTORICO + TALLERES)
- Cachear para rendimiento

---

### 2. ✅ MODIFICADA: `obtenerEstadisticasPersonasUnicasGlobal(filtros)` (Línea ~3278)

**Cambios principales:**

#### 2a. Usar mapaPrimerAparicion para clasificar
```javascript
// ANTES:
const esNuevaEnMes = /* ... sort based logic ... */;

// AHORA:
const mapaPrimerAparicion = obtenerMapaPrimerAparicionMes_(ss);
const totalUnicasHistorico = Object.keys(mapaPrimerAparicion).length;
const primerAnioDni = {};
Object.keys(mapaPrimerAparicion).forEach(dni => {
  const mes = mapaPrimerAparicion[dni];
  primerAnioDni[dni] = mes ? mes.split("-")[0] : null;
});

// Dentro del loop:
const primeraAparicion = mapaPrimerAparicion[reg.dni] || mesAnio;
const esNuevaEnMes = primeraAparicion === mesAnio;
const esFidelizada = primeraAparicion < mesAnio;
const esNuevaPorFallback = !mapaPrimerAparicion[reg.dni] || primeraAparicion > mesAnio;
```

#### 2b. Acumular nuevas/fidelizadas
```javascript
// ANTES: No había acumulación separada

// AHORA:
let unicasNuevasSet = {};
let unicasFidelizadasSet = {};

// Dentro del loop:
if (esNuevaEnMes || esNuevaPorFallback) {
  res.resumenAnual[anioReg].nuevasSet[reg.dni] = true;
  unicasNuevasSet[reg.dni] = true;
} else if (esFidelizada) {
  res.resumenAnual[anioReg].fidelizadasSet[reg.dni] = true;
  unicasFidelizadasSet[reg.dni] = true;
}
```

#### 2c. Retornar totales
```javascript
// NUEVO:
res.totalNuevasSeleccion = Object.keys(unicasNuevasSet).length;
res.totalFidelizadasSeleccion = Object.keys(unicasFidelizadasSet).length;
```

---

### 3. ✅ MODIFICADA: `obtenerDatosGraficos(...)` (Línea ~6530)

**Cambios principales:**

#### 3a. Importar 2025_HISTORICO localmente
```javascript
// NUEVO:
const necesitaHistorico = (modo === "comparacion" || !filtroMeses || filtroMeses.length === 0 || 
  (filtroMeses && filtroMeses.some(m => m.startsWith("2024") || m.startsWith("2025"))));

if (necesitaHistorico) {
  const hojaHistorico = ss.getSheetByName("2025_HISTORICO");
  if (hojaHistorico && hojaHistorico.getLastRow() > 1) {
    // Leer datos y unirlos a filas
    const datosHist = hojaHistorico.getDataRange().getValues();
    // ... parsear y agregar a filas
    filas.push(filaExtra);
  }
}
```

#### 3b. Inicializar mapas nuevas/fidelizadas
```javascript
// NUEVO:
const totalNuevasGlobalRequest = {};
const totalFidelizadasGlobalRequest = {};

// En dataAgrupada:
dataAgrupada[clave] = { 
  est: {}, act: {}, prof: {}, 
  mesCounts: {}, 
  mesUnicos: {}, 
  mesNuevas: {},        // ✨ NUEVO
  mesFidelizadas: {},   // ✨ NUEVO
  dias: {}, 
  globalUnicos: {} 
};
```

#### 3c. Clasificar cada registro
```javascript
// NUEVO:
const primeraAparicion = mapaPrimerAparicion[d] || m;
const esNueva = primeraAparicion === m || !mapaPrimerAparicion[d] || primeraAparicion > m;
const esFidelizada = primeraAparicion < m;

// Llenar mapas:
if (!target.mesNuevas[m]) target.mesNuevas[m] = {};
if (!target.mesFidelizadas[m]) target.mesFidelizadas[m] = {};
if (d) {
  if (esNueva) target.mesNuevas[m][d] = true;
  if (esFidelizada) target.mesFidelizadas[m][d] = true;
  if (esNueva) totalNuevasGlobalRequest[d] = true;
  if (esFidelizada) totalFidelizadasGlobalRequest[d] = true;
}
```

#### 3d. Extender arrays a 5 elementos
```javascript
// ANTES:
mensual: Object.keys(t.mesCounts).sort().map(m => 
  [m, t.mesCounts[m], Object.keys(t.mesUnicos[m]).length]
)

// AHORA:
mensual: Object.keys(t.mesCounts).sort().map(m => 
  [m, t.mesCounts[m], Object.keys(t.mesUnicos[m]).length, 
   Object.keys(t.mesNuevas[m] || {}).length, 
   Object.keys(t.mesFidelizadas[m] || {}).length]
),

// Igual para estaciones y profesores:
[nombre, participaciones, unicos, nuevas, fidelizadas]
```

#### 3e. Retornar totales globales
```javascript
// NUEVO:
return {
  ok: true,
  modo: modo || "periodo",
  resultados: resultados,
  totalUnicosGlobalRequest: Object.keys(totalUnicosGlobalRequest).length,
  totalNuevasGlobalRequest: Object.keys(totalNuevasGlobalRequest).length,
  totalFidelizadasGlobalRequest: Object.keys(totalFidelizadasGlobalRequest).length,
  mesesDisponibles: Object.keys(mesesDisponibles).sort(),
  listaEstaciones: Object.keys(listaEstaciones).sort()
};
```

---

### 4. ✅ MODIFICADA: `obtenerEstadisticasEstacionDetalle(...)` (Línea ~6863)

**Cambios principales:**

#### 4a. Inicializar mapas nuevas/fidelizadas por clave
```javascript
// ANTES:
dataAgrupada[k] = { participaciones: 0, unicos: {}, mes: iter.getMonth() + 1 };

// AHORA:
dataAgrupada[k] = { participaciones: 0, unicos: {}, nuevas: {}, fidelizadas: {}, mes: iter.getMonth() + 1 };
```

#### 4b. Clasificar DNI en el loop
```javascript
// NUEVO:
const mesAnio = f.getFullYear() + "-" + String(f.getMonth() + 1).padStart(2, '0');
const primeraApar = dni ? mapaPrimerAparicion[dni] : null;
const esNueva = !primeraApar || primeraApar === mesAnio || primeraApar > mesAnio;
const esFidelizada = primeraApar && primeraApar < mesAnio;

// Llenar mapas:
if (dni) {
  dataAgrupada[clave].unicos[dni] = true;
  if (esNueva) dataAgrupada[clave].nuevas[dni] = true;
  if (esFidelizada) dataAgrupada[clave].fidelizadas[dni] = true;
  globalUnicos[dni] = true;
}
```

#### 4c. Retornar arrays nuevas/fidelizadas
```javascript
// ANTES:
return {
  ok: true,
  esAnual: esAnual,
  labels: labels,
  participaciones: participaciones,
  unicos: unicos,
  mesesData: mesesData,
  totalParticipaciones: participaciones.reduce((a,b) => a+b, 0),
  totalUnicos: Object.keys(globalUnicos).length,
  totalNuevas: nuevasG,
  totalFidelizados: fidelizadasG
};

// AHORA:
const nuevas = labelsRaw.map(k => Object.keys(dataAgrupada[k].nuevas || {}).length);
const fidelizadas = labelsRaw.map(k => Object.keys(dataAgrupada[k].fidelizadas || {}).length);

return {
  ok: true,
  esAnual: esAnual,
  labels: labels,
  participaciones: participaciones,
  unicos: unicos,
  nuevas: nuevas,        // ✨ NUEVO
  fidelizadas: fidelizadas,  // ✨ NUEVO
  mesesData: mesesData,
  totalParticipaciones: participaciones.reduce((a,b) => a+b, 0),
  totalUnicos: Object.keys(globalUnicos).length,
  totalNuevas: nuevasG,
  totalFidelizados: fidelizadasG
};
```

---

## 🎨 CAMBIOS EN index.html

### 1. ✅ Flash Metrics (Línea ~4330)
```javascript
// NUEVO en renderizarCharts():
let totalNue = data.totalNuevasGlobalRequest !== undefined ? data.totalNuevasGlobalRequest : 0;
let totalFid = data.totalFidelizadasGlobalRequest !== undefined ? data.totalFidelizadasGlobalRequest : 0;
const elNue = document.getElementById("flashNuevas");
const elFid = document.getElementById("flashFidelizadas");
if(elNue) elNue.textContent = totalNue.toLocaleString() + " Nuevas";
if(elFid) elFid.textContent = totalFid.toLocaleString() + " Fidelizadas";
```

### 2. ✅ Tooltips Mejorados (Línea ~4600+)
```javascript
// NUEVO en crearGraficoEvolucion():
tooltip: {
  callbacks: {
    afterLabel: function(context) {
      if (context.dataset.label.includes('Personas')) {
        let i = context.dataIndex;
        let nuevas = mensual[i][3] || 0;
        let fidelizadas = mensual[i][4] || 0;
        return ['  ──────────────────────────────', 
                '  ↳ Nuevas Históricas: ' + nuevas, 
                '  ↳ Fidelizadas Previas: ' + fidelizadas];
      }
      return null;
    }
  }
}

// Igual aplicado en: crearGraficoEstaciones() y crearGraficoProfesores()
```

### 3. ✅ Modal Estación (Línea ~2333+)
```javascript
// Ya presente, ahora recibe datos correctos:
${res.totalNuevas || 0} Nuevas
${res.totalFidelizados || 0} Fidelizadas

// Y arrays por día:
res.nuevas  // Array con conteos por día
res.fidelizadas // Array con conteos por día
```

---

## 🧪 CAMBIOS EN PruebaFidelizados.gs

### ✅ NUEVA FUNCIÓN: `debugValidacionFidelizadosCompleto()`
- Test unitario simulado con escenario exacto
- Valida ecuación en todos los niveles
- Verifica unicidad

### ✅ NUEVA FUNCIÓN: `debugValidacionFuncionesReales()`
- Ejecuta funciones reales del sistema
- Valida arrays completos
- Comprueba totales globales

---

## 📊 RESUMEN DE CAMBIOS

| Archivo | Función | Tipo | Líneas |
|---------|---------|------|--------|
| Code.js | `obtenerMapaPrimerAparicionMes_` | Nueva | ~100 |
| Code.js | `obtenerEstadisticasPersonasUnicasGlobal` | Modificada | ~80 cambios |
| Code.js | `obtenerDatosGraficos` | Modificada | ~120 cambios |
| Code.js | `obtenerEstadisticasEstacionDetalle` | Modificada | ~30 cambios |
| index.html | Flash metrics | Añadida | ~10 |
| index.html | Tooltips | Modificada | ~30 cambios |
| PruebaFidelizados.gs | Tests | Nuevas | ~300 |

---

## ✅ VALIDACIÓN DE CAMBIOS

```javascript
// Verificar que no hay errores de sintaxis:
// → Code.js: ✅ 0 errores
// → index.html: ✅ 0 errores
// → PruebaFidelizados.gs: ✅ 0 errores

// Verificar que funciones existen y son callable:
// → obtenerMapaPrimerAparicionMes_ ✅
// → debugValidacionFidelizadosCompleto ✅
// → debugValidacionFuncionesReales ✅
```

---

## 🔗 REFERENCIAS CRUZADAS

```
obtenerDatosGraficos()
  ↓ Lee
mapaPrimerAparicion = obtenerMapaPrimerAparicionMes_()
  ↓ Clasifica
esNueva = primeraAparicion === mesAnio
esFidelizada = primeraAparicion < mesAnio
  ↓ Acumula
{ nuevas: {}, fidelizadas: {} }
  ↓ Retorna
[mes, part, unicos, nuevas, fidelizadas]
  ↓ Consume
index.html → crearGraficoEvolucion()
  ↓ Muestra
Tooltip + Flash Metrics
```

---

## 🎯 VERIFICACIÓN FINAL

- [ ] `git diff --stat` muestra 3 archivos modificados
- [ ] Sin cambios no intencionados
- [ ] Todos los cambios son aditivos o transformacionales
- [ ] No hay breaking changes
- [ ] Backward compatible

