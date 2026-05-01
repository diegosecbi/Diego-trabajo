# Project Context

## Objetivo
Aplicacion web en Google Apps Script para monitorear cargas de Estaciones Saludables, resumir modulos especiales y cruzar lo programado en CRONOGRAMA contra lo efectivamente cargado en TALLERES.

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
- `abrirModalClic(...)`
  Render especializado para modulos con filtros y comparaciones.
- `abrirModalCronograma(...)`
  Render del tablero de cronograma y cumplimiento.
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
- El profesor es contexto adicional, no bloqueo de cumplimiento.
- `CATALOGO_ACTIVIDADES` es la base canónica principal para actividades.
- `ROSETA_ACTIVIDADES_CRONOGRAMA` es la capa operativa para absorber suciedad del cronograma.
- `actividades_x_estacion`, `profesores_estacion` y `profesores_en_feriados` deben usarse para mejorar criterio, no para endurecer validaciones.

## Estado actual (actualizado 2026-04-23)
- Existe login manual por correo usando la solapa `Rol`.
- **NUEVO**: Sistema RBAC (Role-Based Access Control) implementado.
- El cronograma ya tiene pipeline de normalizacion, roseta y control de cumplimiento.
- La comparacion de actividades esta mas robusta, pero sigue requiriendo mantenimiento de roseta para casos ambiguos.
- El proyecto tiene bastante logica funcional y conviene seguir modificandolo por capas y con cambios acotados.

## Sistema RBAC (Role-Based Views) - Nuevo desde 2026-04-23

### Estructura de perfiles
- **admin**: Acceso completo a todas las funciones (sin cambios respecto a antes).
- **gerencia**: Acceso a reportes, solapas especiales, generación de informes.
- **coordinacion**: Monitoreo operativo, acceso a estaciones y actividades, sin panel admin.
- **operativo**: Visualización en tiempo real, sin exportación ni informes.

### Archivos relevantes
- `ViewPermissions.gs`: Configuración centralizada de permisos por rol.
- `Code.js`: Función `iniciarSesionConCorreo()` ahora permite múltiples perfiles.
- `index.html`: Frontend adaptará UI según rol (implementación en progreso).

### Punto de recuperación
- Se creó `BACKUP_MANIFEST.md` con instrucciones de reversión.
- Backups: `Code.js.bak`, `index.html.bak`, `CONTEXT.md.bak`.

## Riesgos al tocar esta base
- `Code.js` es grande y concentra muchas responsabilidades.
- Hay textos con problemas de codificacion heredados.
- El frontend depende de nombres exactos de funciones y payloads del backend.
- Cambios bruscos en roseta, catalogos o exclusiones pueden alterar el control de cumplimiento.
- Las nuevas solapas de referencia no deben transformarse en reglas duras sin validarlo primero.
- **Importante**: No modificar el login de admin; mantener `iniciarSesionConCorreo()` compatible.

## Criterio para proximos cambios
- No modificar lo que ya funciona si no es necesario.
- Priorizar referencias blandas antes que reglas bloqueantes.
- Mantener separadas tres capas:
  1. catalogo canónico
  2. roseta de equivalencias
  3. control de cumplimiento
- Documentar en este archivo cada nueva solapa, fuente o regla de negocio que se incorpore.
