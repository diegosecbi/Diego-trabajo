# ⚡ GUÍA RÁPIDA: EJECUTAR VALIDACIÓN AHORA

## 🎯 OBJETIVO
Validar matemáticamente que la lógica de Nuevas/Fidelizadas funciona correctamente ANTES de ir al frontend.

---

## ✅ PASO 1: Abrir Google Apps Script

1. En tu Google Sheet, ve a **Extensiones → Apps Script**
2. Verás el editor de código

---

## ✅ PASO 2: Abrir Consola

- Presiona **Ctrl + Enter** (o Command + Enter en Mac)
- O ve a **Ver → Consola de Ejecución**

---

## ✅ PASO 3: Ejecutar Test Simulado

En la consola, pega y ejecuta:

```javascript
debugValidacionFidelizadosCompleto()
```

Luego presiona **Enter**.

---

## ✅ PASO 4: Ver Resultados

La consola mostrará un reporte completo. **Busca al final:**

```
════════════════════════════════════════════════
RESUMEN FINAL DEL TEST
════════════════════════════════════════════════

Estado General: ✅ TODAS LAS VALIDACIONES PASARON

  ✓ Conteos Correctos: ✅
  ✓ Ecuación Válida: ✅
  ✓ Unicidad OK: ✅
```

### ✅ SI VES ESTO: **TODO OK, PUEDES CONTINUAR**

### ❌ SI VES ERRORES: 

Nota cuál falló:
- ❌ Conteos Correctos
- ❌ Ecuación Válida  
- ❌ Unicidad OK

Avísame con el output completo.

---

## ✅ PASO 5: Ejecutar Test de Funciones Reales

En la misma consola:

```javascript
debugValidacionFuncionesReales()
```

Presiona **Enter**.

---

## ✅ PASO 6: Ver Resultados del Test Real

Busca estas secciones:

### 📊 PARTE 1: obtenerDatosGraficos
```
✅ Todos los X meses cumplen ecuación
```

### 📍 PARTE 2: obtenerEstadisticasEstacionDetalle
```
✅ Ecuación válida en todos X puntos
```

### 🌍 PARTE 3: obtenerEstadisticasPersonasUnicasGlobal
```
✅ 2026: X = Y + Z
```

---

## 📋 CHECKLIST DE VALIDACIÓN

| Test | Estado | Acción |
|------|--------|--------|
| debugValidacionFidelizadosCompleto | ✅ | Si pasa → siguiente |
| debugValidacionFuncionesReales | ✅ | Si pasa → siguiente |
| Arrays tienen 5 elementos | ✅ | Si sí → siguiente |
| Totales globales = suma | ✅ | Si sí → DEPLOY |

---

## ⚠️ SI FALLA

1. **Copia el error completo de la consola**
2. **Identifica en qué paso falló:**
   - PASO 1, 2, 3... del test simulado
   - O en PARTE 1, 2, 3 del test real

3. **Avísame con:**
   - Nombre del paso
   - Número exacto que falló
   - Error (si lo hay)

**Ejemplo:**
```
❌ PASO 7 (Validación de Ecuación):
   2026-06: 10 ≠ 5 + 3
   Esperado: 10 = 5 + 5 (???)
```

---

## 🚀 SI TODO PASA ✅

Siguiente: Validación Frontend

1. Recarga la página HTML
2. Abre Modal Gráficos
3. Verifica:
   - Flash metrics actualizados
   - Tooltips muestran nuevas/fidelizadas
   - Números coherentes
   - Sin errores en consola

---

## 💡 TIPS

### Para ver más detalles en la consola:
Desplázate hacia arriba y abajo para ver todos los logs.

### Para copiar output completo:
- Selecciona todo en la consola
- Ctrl+C (Cmd+C en Mac)
- Pega en un txt si necesitas guardar

### Para ver solo los errores:
Busca por "❌" en los logs

---

## 📞 CONTACTO

Si algo falla:
1. **No modifiques nada**
2. **Copia el output completo**
3. **Avísame exactamente qué falló**

Estaré aquí para debuggear.

