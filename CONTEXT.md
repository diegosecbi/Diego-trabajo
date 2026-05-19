# Project Context

## Objetivo
Aplicación web **A.L.F. (Asistente de Lectura Funcional)** en Google Apps Script para monitorear cargas de Estaciones Saludables, resumir módulos especiales, analizar estadísticas históricas de personas únicas y cruzar lo programado en CRONOGRAMA contra lo efectivamente cargado en TALLERES.

## Archivos principales
- `Code.js`
  Backend de Apps Script. Gestiona acceso, lectura de Google Sheets, modulos especiales, normalizacion de cronograma, roseta, catalogos y control de cumplimiento.
- `index.html`
  Frontend principal. Hoy incluye login manual por correo para la vista administrador, tablero principal, modales y vistas especiales.
- `appsscript.json`
  Manifiesto del proyecto Apps Script.
- `listarsolapas.js`
  Helper simple para listar hojas del spreadsheet activo.
- `.clasp.json`
  Vinculacion local con el proyecto Apps Script.

## Flujo principal actual
1. `doGet()` en `Code.js` entrega `index.html`.
2. El frontend muestra un login manual por correo.
3. `iniciarSesionConCorreo(...)` valida el correo contra la solapa `Rol`.
4. Si el correo esta en la columna `Admin`, el frontend habilita la vista actual.
5. `cargarDatos()` llama a `obtenerDatos(correoSesion)`.
6. `obtenerDatos()` arma el tablero principal con estaciones, actividad reciente y panel de supervision.
7. Los botones de modulos especiales llaman a `obtenerResumenSolapaEspecial(...)`.

## Solapas especiales
Definidas en `SOLAPAS_ESPECIALES`:
- `CRONOGRAMA`
- `CLIC`
- `EVENTOS`
- `FESTEJOS`
- `COCINA`
- `ETZ`
- `VISITAS ESCOLARES`
- `EXPLORANDO CABA`
- `TALLERES`

Estas se consultan por separado y no forman parte del tablero principal de estaciones.

## Solapas tecnicas y de soporte
Definidas o usadas por el backend para procesos auxiliares:
- `Rol`
  Matriz de acceso por correo y rol. Hoy se usa para ingreso admin.
- `USUARIOS`
  Hoja alternativa de administracion de accesos, hoy no es la base principal del login actual.
- `DATOS`
  Fuente historica y de equivalencias para estaciones/actividades.
- `CRONOGRAMA_NORMALIZADO`
  Salida de la importacion y limpieza del cronograma.
- `CONTROL_CUMPLIMIENTO`
  Cruce entre `CRONOGRAMA_NORMALIZADO` y `TALLERES`.
- `DIAGNOSTICO_CRONOGRAMA`
  Hoja tecnica para inspeccionar el parser del cronograma.
- `AUDITORIA_CRONOGRAMA_CUMPLIMIENTO`
  Hoja tecnica para revisar volumenes, exclusiones, resultados y tiempos del flujo completo sin alterar la logica principal.
- `ROSETA_ACTIVIDADES_CRONOGRAMA`
  Tabla de equivalencias manuales y sugeridas para transformar textos sucios del cronograma en actividades canónicas.
- `CATALOGO_ACTIVIDADES`
  Catalogo canónico principal de actividades. La columna `A` contiene `ACTIVIDAD_CANONICA` y desde `A2` hacia abajo vive la lista base que se toma como referencia prioritaria.

Estas solapas se excluyen del tablero principal o se usan solo como soporte de procesos internos.

## Nuevas solapas de referencia contextual
Estas tres solapas deben tratarse como referencia blanda, nunca como impedimento duro para marcar cumplimiento:
- `actividades_x_estacion`
  Referencia contextual para saber que actividades suelen existir en cada estacion.
- `profesores_estacion`
  Referencia contextual para saber que profesores suelen estar asociados a cada estacion.
- `profesores_en_feriados`
  Referencia contextual para validar mejor escenarios de feriados y no sacar conclusiones incorrectas.

### Regla de uso para estas referencias
- Sirven para reforzar sugerencias, revisar dudas y explicar desvíos.
- No deben bloquear el cruce si ya existe coincidencia valida por `fecha + estacion + actividad`.
- Son especialmente utiles para casos fuera de lo cumplido, sin equivalencia clara o con profesor distinto al habitual.

## Cronograma y control de cumplimiento
### Objetivo del cruce
Medir cuanto de lo programado en `CRONOGRAMA` fue realmente cargado en `TALLERES`.

### Regla principal de cumplimiento
Se considera cumplido por:
- `fecha + estacion + actividad`

El profesor:
- suma contexto si coincide,
- pero no impide el cumplimiento si no coincide.

### Fuente canónica de actividades
La normalizacion de actividades hoy se apoya en este orden:
1. `ACTIVIDAD_CANONICA` cargada manualmente y activa en `ROSETA_ACTIVIDADES_CRONOGRAMA`
2. sugerencias activas de la roseta
3. `CATALOGO_ACTIVIDADES` como fuente canónica principal
4. catalogos embebidos en `Code.js` como respaldo historico

### Rol de la roseta
`ROSETA_ACTIVIDADES_CRONOGRAMA` traduce lo que viene sucio del cronograma a nombres comparables con `TALLERES`.

Columnas relevantes:
- `ACTIVIDAD_ORIGEN`: texto crudo del cronograma
- `ACTIVIDAD_LIMPIA`: texto preprocesado automaticamente
- `ACTIVIDAD_SUGERIDA`: sugerencia automatica
- `CONFIANZA`: nivel de confianza de la sugerencia
- `ACTIVIDAD_CANONICA`: valor manual definitivo para comparar
- `ACTIVO`: si vale `SI`, la equivalencia se usa en el cruce
- `OBSERVACIONES`: notas del sistema o del usuario

### Comportamiento esperado de la roseta
- Lo manual cargado por el usuario no debe pisarse en actualizaciones posteriores.
- `Actualizar Roseta De Actividades` debe completar o enriquecer filas nuevas, no borrar decisiones ya tomadas.
- La roseta no es un resultado final del cruce: es una capa previa de traduccion y normalizacion.

### Auditoria del flujo
- `Auditar Cronograma Y Cumplimiento` no cambia datos operativos: solo genera una hoja de control tecnico.
- Ya no recalcula todo el proceso: lee las solapas existentes y muestra el ultimo registro guardado de importacion/control.
- Sirve para validar si los vacios en columnas son esperados por diseno o si hay anomalias reales.
- Los tiempos se registran al ejecutar `Importar Cronograma Normalizado` y `Generar Control De Cumplimiento`, para evitar timeouts en la auditoria.

### Exclusiones del control de cronograma
Ciertas actividades o sectores no deben entrar al control porque pertenecen a otras vistas especificas, por ejemplo:
- `CLIC`
- `EVENTOS`
- `FESTEJOS`
- `COCINA`
- `ETZ`
- `VISITAS ESCOLARES`
- `EXPLORANDO CABA`
- `CONOCIENDO_CABA`
- `VISITAS_LUGARES`
- `EN_TUS_ZAPATOS`

La exclusion se resuelve por `SECTOR_DE_CARGA`, categorias y patrones de actividad en `Code.js`.

## Funciones backend clave
- `doGet()`
  Sirve la web app.
- `iniciarSesionConCorreo(correo)`
  Valida acceso admin por correo usando la solapa `Rol`.
- `obtenerDatos(correoSesion)`
  Arma el payload principal del tablero.
- `obtenerResumenSolapaEspecial(...)`
  Devuelve resumen de una solapa especial o del cronograma.
- `importarCronogramaNormalizado()`
  Lee el cronograma externo, lo limpia y genera `CRONOGRAMA_NORMALIZADO`.
- `actualizarRosetaActividadesCronograma()`
  Refresca la roseta con nuevas actividades detectadas.
- `generarControlCumplimiento()`
  Cruza `CRONOGRAMA_NORMALIZADO` contra `TALLERES`.
- `generarInformeEspecialIA(...)`
  Genera informe narrativo con IA o fallback manual.
- `enviarInformeEspecialIA(...)`
  Envia el informe por correo como PDF.

## Funciones frontend clave
- `iniciarSesionManual()` / `iniciarSesionConCorreoFrontend(...)`
  Manejan el login manual del admin por correo.
- `cargarDatos()`
  Pide el tablero inicial al backend.
- `render(data)`
  Renderiza indicadores, tarjetas, tabla y accesos.
- `renderBotonesEspeciales()`
  Dibuja accesos a modulos especiales.
- `solicitarResumenEspecial(nombre)`
  Pide un resumen de solapa especial y abre modal.
- `abrirModalPersonasUnicas()`
  Análisis avanzado de identidades únicas, nuevas incorporaciones y métricas de fidelización (2025-2026).
- `renderCalendarioGestion()`
  Dibuja un calendario interactivo por estación para registrar eventos (verde) e incidencias (rojo). Permite la eliminación de registros.
- `abrirDetalleDia(estacion, mes, dia)`
  Función de drill-down que abre un desglose detallado de actividades al hacer clic en los puntos del gráfico de la estación.
- `exportarExcel()`
  Exporta el tablero principal.

## Fuentes externas
- `FUENTE_CRONOGRAMA`
  Spreadsheet externo desde donde se importa la grilla de cronograma.
- `FUENTES_ESPECIALES_EXTERNAS["TALLERES"]`
  Spreadsheet externo para resumen y cruce de talleres.

## Lógica de negocio central
- El tablero principal clasifica estaciones por recencia de carga.
- El control de cronograma compara lo programado con lo realizado usando `fecha + estacion + actividad`.
- `CATALOGO_ACTIVIDADES` es la base canónica principal para actividades.
- `ROSETA_ACTIVIDADES_CRONOGRAMA` es la capa operativa para absorber suciedad del cronograma.

### 🛰️ Sincronización de Estaciones Independientes (*)
- **Eliminación de IMPORTRANGE**: Se reemplazaron las fórmulas inestables por un motor en `UtilidadesSincronizacion.gs` que lee directamente de las fuentes externas.
- **Detección de Marca "FINAL"**: La importación se detiene automáticamente al encontrar la palabra "FINAL" en la Columna I del origen, optimizando el uso de celdas.
- **Automatización**: Sistema de gatillos (triggers) que ejecutan la sincronización 3 veces al día (8:00, 14:00, 20:00).
- **Restauración de Datos S1**: El script recupera automáticamente el dato de la celda `S1` de las solapas individuales, eliminando la necesidad de fórmulas pesadas en la columna C.

### 👤 Módulo de Personas Únicas (Mejoras Finales)
- **Métricas de Fidelización**: Visualización corregida y resaltada de "Fidelizados" (usuarios 2025 que regresan en 2026).
- **Filtro SADOFE Robusto**: Lógica de detección de días mejorada que cruza etiquetas de "Tipo de Día" con el calendario perpetuo (Sábado/Domingo/Feriados).
- **Normalización de Históricos**: Herramienta para procesar masivamente el `2025_HISTORICO` y habilitar filtros precisos por tipo de día.
- **Vista Analítica Anual (TOTAL 2026)**: Implementación de vista "Full 2026" con agrupamiento mensual, colores segmentados por año (Turquesa 2025 / Azul 2026) y separadores verticales.
- **Corrección de Conteo de Personas Únicas**: Se corrigió el cálculo de `totalUnicos` en `obtenerEstadisticasEstacionDetalle` (modal de detalle de estación) para usar un acumulador global de DNIs en el periodo, evitando la duplicación de usuarios por sumar recuentos diarios individuales (por ejemplo, corrigiendo el total de Parque Patricios de 5483 a 1036 personas únicas reales).

### 🛰️ Sincronización Manual y Monitoreo
- **Gatillo Manual de TALLERES**: Botón de sincronización manual para la solapa TALLERES con estados visuales de carga.
- **Timestamp de Actualización**: Visualización del tiempo transcurrido desde la última sincronización exitosa para evitar ejecuciones redundantes.
- **RBAC de Sincronización**: Control granular del permiso de sincronización desde la solapa `USUARIOS`.

### 🛠️ Recuperación y Estabilización Post-Corrupción (15/05/2026)
- **Reintegración Manual**: Tras la corrupción de sintaxis (operadores `?.` eliminados o inyectados), se realizó una restauración manual controlada sobre la base estable `ec84985`.
- **Sincronización TALLERES V2**:
  - **Frecuencia Horaria**: Gatillo automático actualizado a 1 hora.
  - **Restricción Operativa**: El proceso automático solo se ejecuta de 6hs a 20hs para optimizar recursos.
  - **Feedback en Tiempo Real**: Persistencia de timestamp en `ScriptProperties` visible en el frontend (`lastSyncLabel`).
- **Interacción de Estaciones Dual**: Implementación robusta de clic simple (lista rápida de profesores) y doble clic (modal analítico completo).
- **Analítica Anual 2026 (Premium V6 - Rainbow Master)**: Refinamiento estético final con la implementación de una paleta arcoíris de 7 colores para la curva de tendencia, asegurando una transición vibrante y una distinción clara de los períodos mensuales en la vista TOTAL 2026.
- **Calendario Operativo Inteligente**: Integración de feriados nacionales 2026 y resaltado automático de fines de semana para una mejor planificación operativa.
- **Optimización Espacial**: Rediseño del modal para maximizar el área de visualización del gráfico (+100px de altura útil).
- **Soporte de Alias (Móviles)**: Lógica en `Code.js` que agrupa automáticamente datos de múltiples ubicaciones satélite bajo el paraguas de "Móvil 1" y "Móvil 2".
- **Sistema RBAC Reforzado**: Nuevo permiso `verSincronizarTalleres` integrado en `ViewPermissions.gs` para control granular.

### 🔐 Gestión de Accesos y Permisos (RBAC Avanzado)
- **Control por Columna P/Q**: Permisos de exportación y sincronización gestionables individualmente.
- **Inicialización Masiva**: Herramienta de Administración para configurar permisos por defecto según el perfil.
- **Overlays de Login**: Protección de UI sensible basada en privilegios verificados por el backend.

### 📊 Interactividad y Gestión Operativa
- **Calendario de Gestión**: Registro centralizado en `GESTION_OPERATIVA` para eventos e incidencias.
- **Drill-Down en Gráficos**: Exploración de detalles de `TALLERES` haciendo clic en puntos de datos de la gráfica de estación.
- **Exportación masiva**: Herramienta de descarga Excel para auditoría de incidencias operativas.

### 📊 Estabilización de Gráficos de Estaciones (16/05/2026)
- **Normalización Robusta de Nombres (NFD)**: Se eliminó la normalización ad-hoc inestable por la función centralizada `normalizarNombreEstacion_` utilizando `normalize("NFD")`. Esto unifica el matching de estaciones con acentos como **"Móvil 1"** y **"Plaza Martín Fierro"** independientemente de cómo estén escritas en las planillas de origen.
- **Activación de Filtros (TIPO DIA)**: Se incorporó la columna "TIPO DIA" a las `CABECERAS_TALLERES` y se actualizó la lógica de sincronización (tanto de 2026 como de datos históricos de 2025) para calcular y poblar automáticamente si el registro es **SEMANA** o **SADOFE** (fines de semana y feriados nacionales). Esto habilita los filtros de jornada en el modal de detalle por primera vez.
- **Optimización Crítica de Rendimiento**: Se removieron las llamadas costosas al servicio `Session.getScriptTimeZone()` y `obtenerFeriados2026()` de los bucles iterativos de sincronización y renderizado, reduciendo el tiempo de procesamiento de minutos a pocos segundos al evitar miles de peticiones de red redundantes.
- **Orden Cronológico Natural**: Se corrigió la clasificación del eje X en la vista mensual para que los días se ordenen numéricamente (`1, 2, 3...`) y no alfabéticamente (`1, 10, 11, 2...`).

### 🔍 Resolución Completa de Estaciones (16/05/2026 — Fase 2)
- **Búsqueda Bidireccional de Aliases**: La lógica de `obtenerEstadisticasEstacionDetalle` y `obtenerDetalleDiaEstacion` ahora busca tanto en **claves** como en **valores** del diccionario `ALIAS_ESTACIONES_SALUDABLES_VISIBLES`. Esto resolvió el caso de **Plaza Houssay** (4,680 registros recuperados) cuyo nombre de solapa coincidía con un valor pero no con la clave del diccionario.
- **Limpieza de Sufijos de Días**: `normalizarNombreEstacion_` ahora elimina contenido entre paréntesis `(Mx)`, `(J)`, `(L)`, `(M y V)`, etc. Esto resolvió la captura de **+3,256 registros** de sub-ubicaciones de **Móvil 1** y **Móvil 2** que usaban formatos como "Móvil 1. Plaza LA REDONDA (Mx)".
- **Lagos de Palermo**: Resuelto mediante la búsqueda bidireccional — la solapa usaba "Lagos" (plural) pero TALLERES tenía "Lago" (singular). El alias existente "Lagos de Palermo" ahora se detecta correctamente.
- **Herramienta de Diagnóstico**: `DiagnosticoEstaciones.gs` con la función `diagnosticarEstacionesVsTabla()` cruza solapas del frontend contra datos de TALLERES para verificar cobertura completa de datos. **Resultado final: 18/18 estaciones ✅ OK, 0 ❌ fallas.**
- **Estaciones sin solapa (no afectan dashboard)**: Parque de la Ciudad (1,797 reg) y Rosedal (1,584 reg) tienen datos pero no solapa propia — pendientes de decisión. Escuelas y CLIC/Eventos pertenecen a módulos especiales.

### 📅 Aislamiento del Calendario y Estética Premium (17/05/2026)
- **Aislamiento Robusto de Incidencias/Eventos**: Se rediseñó la función `obtenerGestionOperativa(estacion)` en [Code.js](file:///c:/Users/20316047409/Desktop/ANTIGRAVITY/Diego-trabajo/Code.js) para que use la normalización de nombre robusta centralizada y la búsqueda bidireccional de alias de estaciones. Esto garantiza que cada estación vea únicamente sus propias incidencias y eventos de gestión, impidiendo que registros de otras estaciones o eventos generales se filtren o mezclen.
- **Resaltado Estético de la Fecha Actual**: Se actualizó el estilo CSS de `.cal-hoy` en [index.html](file:///c:/Users/20316047409/Desktop/ANTIGRAVITY/Diego-trabajo/index.html) para pintar el casillero del día actual con un color celeste pastel traslúcido profesional (`rgba(56, 189, 248, 0.15)`), un borde refinado azul cielo y un sutil sombreado interno (`box-shadow`), proporcionando un aspecto de alta gama interactivo.

### 🚀 Gestión de Despliegues y Limitaciones de Apps Script (19/05/2026)
- **Límite de Versiones Activas**: Google Apps Script impone un límite rígido de hasta 20 despliegues versionados activos. Al intentar realizar `clasp deploy` directamente, el sistema fallaba debido a la saturación de despliegues históricos (llegando a 69 versiones).
- **Estrategia de Re-despliegue Dirigido**: Para eludir esta limitación sin romper enlaces de producción, se implementó la actualización in-situ de las tres implementaciones activas clave (`@72`, `@71`, y `@70`) apuntándolas directamente a los nuevos releases de versión generados (`@74`, `@75`, `@76`) usando `clasp deploy -i <deploymentId>`. Esto evita la creación innecesaria de nuevos IDs de despliegue y mantiene intacta la disponibilidad y estabilidad del frontend.
