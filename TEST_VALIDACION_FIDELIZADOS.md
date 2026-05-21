# TEST FUNCIONAL Y MATEMÁTICO: VALIDACIÓN DE NUEVAS/FIDELIZADAS

## 📋 Descripción

Validación exhaustiva del sistema de clasificación de Personas Únicas antes del despliegue en producción.

---

## ⚡ EJECUTAR TESTS

### **OPCIÓN 1: Test Unitario Simulado (Matemática Pura)**

**Función:** `debugValidacionFidelizadosCompleto()`  
**Ubicación:** [PruebaFidelizados.gs](PruebaFidelizados.gs)

**Pasos:**
1. Abrir Google Apps Script (Extensiones → Apps Script)
2. En la consola, ejecutar:
   ```javascript
   debugValidacionFidelizadosCompleto()
   ```
3. Ver resultados en la consola (Ctrl+Enter o ejecutar)

**Qué valida:**
- ✅ Escenario exacto con 3 DNIs simulados
- ✅ Clasificación mensual correcta
- ✅ Ecuación `Únicas = Nuevas + Fidelizadas` en todos los niveles
- ✅ Ningún DNI contado dos veces como NUEVO

**Output esperado:**
```
✅ TODAS LAS VALIDACIONES PASARON
  ✓ Conteos Correctos: ✅
  ✓ Ecuación Válida: ✅
  ✓ Unicidad OK: ✅
```

---

### **OPCIÓN 2: Test de Funciones Reales**

**Función:** `debugValidacionFuncionesReales()`  
**Ubicación:** [PruebaFidelizados.gs](PruebaFidelizados.gs)

**Pasos:**
1. Asegurarse de que existen las solapas:
   - `TALLERES` (con datos 2026)
   - `2025_HISTORICO` (con histórico)
2. En la consola, ejecutar:
   ```javascript
   debugValidacionFuncionesReales()
   ```

**Qué valida:**
- ✅ `obtenerDatosGraficos()` devuelve arrays correctos
- ✅ Arrays `mensual` contienen: `[mes, part, unicos, nuevas, fidelizadas]`
- ✅ `obtenerEstadisticasEstacionDetalle()` retorna nuevas/fidelizadas por día
- ✅ `obtenerEstadisticasPersonasUnicasGlobal()` cumple ecuación
- ✅ Totales globales válidos

---

## 🎯 ESCENARIO DE TEST

### Datos Simulados
```
DNI A: primera aparición = 2025-03
  └─ Participa Mayo y Junio 2026

DNI B: primera aparición = 2026-04
  └─ Participa Abril, Mayo y Junio 2026

DNI C: primera aparición = 2026-06
  └─ Participa solo Junio 2026
```

### Filtro: Abril → Junio 2026

### Resultados Esperados

| Mes | Nuevas | Fidelizadas | Únicas | Ecuación |
|-----|--------|-------------|--------|----------|
| Abril | 1 (B) | 0 | 1 | ✅ 1=1+0 |
| Mayo | 0 | 2 (A,B) | 2 | ✅ 2=0+2 |
| Junio | 1 (C) | 1 (B) | 2 | ✅ 2=1+1 |
| **Global** | **2** | **1** | **3** | **✅ 3=2+1** |

---

## 📊 VALIDACIONES CLAVE

### ✅ TEST 1: Conteos Correctos
```javascript
// Debe cumplirse:
Abril:  1 única = 1 nueva + 0 fidelizadas
Mayo:   2 únicas = 0 nuevas + 2 fidelizadas
Junio:  2 únicas = 1 nueva + 1 fidelizada
Global: 3 únicas = 2 nuevas + 1 fidelizada
```

### ✅ TEST 2: Ecuación Invariante
```javascript
// Para CUALQUIER mes, estación o filtro:
Personas Únicas = Nuevas + Fidelizadas

// Debe ser SIEMPRE verdadero
```

### ✅ TEST 3: Unicidad de Clasificación
```javascript
// Ningún DNI puede contarse dos veces como "NUEVO"
// Regla: Un DNI es NUEVO solo en su primer mes de aparición
// En meses posteriores = FIDELIZADO (o nada si no participa)
```

### ✅ TEST 4: Arrays Completos
```javascript
// obtenerDatosGraficos retorna:
{
  resultados: {
    "acumulado": {
      mensual: [
        [mes, participaciones, unicos, nuevas, fidelizadas],
        ...
      ],
      estaciones: [[nom, part, unicos, nuevas, fidelizadas], ...],
      profesores: [[nom, part, unicos, nuevas, fidelizadas], ...],
    }
  },
  totalUnicosGlobalRequest: X,
  totalNuevasGlobalRequest: Y,
  totalFidelizadasGlobalRequest: Z
}

// Validación: X = Y + Z
```

---

## 🔍 CÓMO LEER EL OUTPUT

### Test Simulado
```
┌─────────────────────────────────────────────────┐
│ TEST FUNCIONAL: VALIDACIÓN COMPLETA             │
│ PARA NUEVAS/FIDELIZADAS                         │
└─────────────────────────────────────────────────┘

📋 PASO 1: Definiendo Escenario de Test...
  [Muestra mapa de primera aparición]

📊 PASO 2: Registros de Actividad por Mes...
  Total registros simulados: 6
  1. DNI=22222222, Mes=2026-04, ...
  ...

🔍 PASO 3: Clasificación por Registro...
  Reg#1: DNI=22222222 (2026-04) en 2026-04 → NUEVA (Primer mes)
  ...

📈 PASO 4: Conteos Mensuales Esperados...
  2026-04:
    Personas Únicas: 1
    Nuevas: 1
    Fidelizadas: 0
    ✓ Ecuación: 1 = 1 + 0 → ✅ OK
  ...

🌍 PASO 5: Conteos Globales...
  Personas Únicas Nuevas (Global): 2
    DNIs: 22222222, 33333333
  Personas Únicas Fidelizadas (Global): 1
    DNIs: 11111111
  Personas Únicas TOTALES (Global): 3
    DNIs: 11111111, 22222222, 33333333

✅ PASO 6: Validación contra Escenario Esperado...
  ✅ Nuevas Global: 2 (OK)
  ✅ Fidelizadas Global: 1 (OK)
  ✅ Únicas Global: 3 (OK)

📐 PASO 7: Validación de Ecuación...
  ✅ 2026-04: 1 = 1 + 0
  ✅ 2026-05: 2 = 0 + 2
  ✅ 2026-06: 2 = 1 + 1
  ✅ GLOBAL: 3 = 2 + 1

🔐 PASO 8: Validación de Unicidad...
  ✅ DNI 22222222 contado 1 vez como NUEVA (OK)
  ✅ DNI 33333333 contado 1 vez como NUEVA (OK)

════════════════════════════════════════════════
RESUMEN FINAL DEL TEST
════════════════════════════════════════════════

Estado General: ✅ TODAS LAS VALIDACIONES PASARON

  ✓ Conteos Correctos: ✅
  ✓ Ecuación Válida: ✅
  ✓ Unicidad OK: ✅
```

---

## ⚠️ POSIBLES FALLOS Y CÓMO SOLUCIONARLOS

### Fallo 1: "Únicas ≠ Nuevas + Fidelizadas"
```
❌ ERROR: 2026-04: 5 ≠ 2 + 1

Causa probables:
1. DNI clasificado incorrectamente
2. mapaPrimerAparicion incompleto
3. Regla de clasificación con bug

Solución:
→ Revisar obtenerMapaPrimerAparicionMes_()
→ Verificar que la comparación de meses es correcta
→ Inspeccionar logs de clasificación
```

### Fallo 2: "DNI contado múltiples veces como NUEVO"
```
❌ DNI 12345678 contado 2 veces como NUEVA

Causa probable:
→ Dos meses diferentes clasifican el mismo DNI como NUEVO

Solución:
→ La clasificación debe ser: "NUEVA" SOLO en primeraAparicion === mesActual
→ En otros meses (posteriores) debe ser "FIDELIZADA" o ignorada
```

### Fallo 3: "Array incompleto en obtenerDatosGraficos"
```
❌ Índice 2: FALTA fidelizadas

Causa probable:
→ obtenerEstadisticasEstacionDetalle no retorna 'fidelizadas'
→ obtenerDatosGraficos no llena el array correctamente

Solución:
→ Verificar que dataAgrupada inicialice { nuevas: {}, fidelizadas: {} }
→ Asegurar que se mapea Object.keys(dataAgrupada[k].fidelizadas || {}).length
```

---

## 📌 CHECKLIST PRE-DESPLIEGUE

- [ ] `debugValidacionFidelizadosCompleto()` pasa ✅
- [ ] `debugValidacionFuncionesReales()` pasa ✅
- [ ] Arrays `[mes, part, unicos, nuevas, fidelizadas]` completos
- [ ] Ecuación `Únicas = Nuevas + Fidelizadas` válida en TODOS los niveles
- [ ] Ningún DNI duplicado como NUEVA
- [ ] Filtros mensuales funcionan correctamente
- [ ] Totales globales coinciden con sumatoria de meses
- [ ] Frontend tooltip muestra nuevas/fidelizadas correctamente
- [ ] Flash metrics (`totalNuevasGlobalRequest`, `totalFidelizadasGlobalRequest`) actualizan

---

## 🚀 PRÓXIMOS PASOS TRAS VALIDACIÓN

1. ✅ Tests unitarios pasan
   → Proceder a test funcional en frontend
   
2. ✅ Frontend muestra datos correctos
   → Validar con 2-3 usuarios reales
   
3. ✅ Usuarios confirman
   → Deploy a producción
   
4. ✅ Monitorear logs en producción
   → Documentar cualquier anomalía

---

## 📞 SOPORTE

Si los tests fallan:

1. Revisar console logs completos
2. Validar estructura de datos en TALLERES y 2025_HISTORICO
3. Confirmar que normalizarDni_() funciona correctamente
4. Revisar obtenerMapaPrimerAparicionMes_() si necesario

**Funciones clave para revisar si hay fallos:**
- `obtenerMapaPrimerAparicionMes_()`
- `obtenerDatosGraficos()`
- `obtenerEstadisticasEstacionDetalle()`
- `obtenerEstadisticasPersonasUnicasGlobal()`

