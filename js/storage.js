// CLAVE DEL LOCAL STORAGE
const STORAGE_KEY = "rutasUniversitarias";

// GUARDAR RUTAS
function guardarRutasStorage() {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(rutas)
    );
}

// CARGAR RUTAS
function cargarRutasStorage() {
    const rutasGuardadas = localStorage.getItem(STORAGE_KEY);
    // SI EXISTEN DATOS
    if (rutasGuardadas) {
        const datos = JSON.parse(rutasGuardadas);
        // LIMPIAR ARRAY ORIGINAL
        rutas.length = 0;
        // INSERTAR DATOS
        datos.forEach(ruta => {
            rutas.push(ruta);
        });
    }
}
