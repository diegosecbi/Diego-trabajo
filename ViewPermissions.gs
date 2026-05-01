// VISTA PERMISSIONS - Control de interfaz por rol basado en RBAC
// Definido: 2026-04-23
// Propósito: Centralizar permisos de visualización sin tocar la lógica funcional

const VIEW_PERMISSIONS = {
  "admin": {
    nombre: "Administrador",
    descripcion: "Acceso completo a todas las funciones",
    puede: {
      verDashboardCompleto: true,
      verModosSupervision: true,
      verBotonesEspeciales: true,
      verExportarExcel: true,
      verGenerarInformes: true,
      verFiltrosAvanzados: true,
      verPanelAdministracion: true,
      modificarConfiguracion: true
    },
    restricciones: [],
    solapasVisibles: "todas",
    color: "#153244"
  },
  
  "gerencia": {
    nombre: "Gerencia",
    descripcion: "Acceso a reportes y monitoreo general",
    puede: {
      verDashboardCompleto: false,
      verModosSupervision: false,
      verBotonesEspeciales: true,
      verExportarExcel: true,
      verGenerarInformes: true,
      verFiltrosAvanzados: true,
      verPanelAdministracion: false,
      modificarConfiguracion: false
    },
    restricciones: [
      "panelSupervision",
      "tablaSupervision"
    ],
    solapasVisibles: [
      "CRONOGRAMA",
      "CLIC",
      "EVENTOS",
      "FESTEJOS",
      "TALLERES"
    ],
    color: "#0066cc"
  },
  
  "coordinacion": {
    nombre: "Coordinación",
    descripcion: "Monitoreo operativo de estaciones y actividades",
    puede: {
      verDashboardCompleto: true,
      verModosSupervision: false,
      verBotonesEspeciales: true,
      verExportarExcel: true,
      verGenerarInformes: false,
      verFiltrosAvanzados: false,
      verPanelAdministracion: false,
      modificarConfiguracion: false
    },
    restricciones: [
      "panelSupervision",
      "btnInformeIA",
      "btnEnviarInformeIA",
      "tablaSupervision"
    ],
    solapasVisibles: [
      "CLIC",
      "EVENTOS",
      "FESTEJOS",
      "TALLERES",
      "CRONOGRAMA"
    ],
    color: "#ff9800"
  },
  
  "operativo": {
    nombre: "Operativo",
    descripcion: "Visualización de datos de estaciones en tiempo real",
    puede: {
      verDashboardCompleto: true,
      verModosSupervision: true,
      verBotonesEspeciales: false,
      verExportarExcel: true,
      verGenerarInformes: false,
      verFiltrosAvanzados: true,
      verPanelAdministracion: false,
      modificarConfiguracion: false
    },
    restricciones: [
      "panelSupervision",
      "btnInformeIA",
      "btnEnviarInformeIA"
    ],
    solapasVisibles: [
      "TALLERES"
    ],
    color: "#4caf50"
  },
  
  "sin_acceso": {
    nombre: "Sin acceso",
    descripcion: "Usuario no autenticado",
    puede: {},
    restricciones: "todas",
    solapasVisibles: [],
    color: "#999999"
  }
};

// Función auxiliar para obtener permisos de un rol
function obtenerPermisosVista(perfil) {
  const normalizado = String(perfil || "").toLowerCase().trim();
  return VIEW_PERMISSIONS[normalizado] || VIEW_PERMISSIONS["sin_acceso"];
}

// Función para verificar si un elemento debe estar visible
function debeVerElemento(perfil, idElemento) {
  const permisos = obtenerPermisosVista(perfil);
  if (!permisos) return false;
  
  // Si el elemento está en las restricciones, no se muestra
  if (Array.isArray(permisos.restricciones)) {
    if (permisos.restricciones.indexOf(idElemento) !== -1) {
      return false;
    }
  } else if (permisos.restricciones === "todas") {
    return false;
  }
  
  return true;
}

// Función para verificar si una solapa debe estar visible
function debeVerSolapa(perfil, nombreSolapa) {
  const permisos = obtenerPermisosVista(perfil);
  if (!permisos) return false;
  
  if (permisos.solapasVisibles === "todas") {
    return true;
  }
  
  if (Array.isArray(permisos.solapasVisibles)) {
    return permisos.solapasVisibles.indexOf(nombreSolapa) !== -1;
  }
  
  return false;
}
