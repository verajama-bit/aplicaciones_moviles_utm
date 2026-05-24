// Función para aplicar búsqueda y filtros
function aplicarFiltros() {
    const textoBusqueda = document.getElementById("buscarDestino").value.toLowerCase();
    const tipoSeleccionado = document.getElementById("filtroTipo").value;

    // Filtrar rutas según los criterios
    let rutasFiltradas = rutas.filter(ruta => {
        const coincideDestino = ruta.destino.toLowerCase().includes(textoBusqueda);
        const coincideTipo = tipoSeleccionado === "" || ruta.tipo === tipoSeleccionado;
        return coincideDestino && coincideTipo;
    });

    // Ordenar rutas por horario (de menor a mayor)
    rutasFiltradas.sort((a, b) => a.horario.localeCompare(b.horario));

    // Mostrar mensaje si no hay resultados
    const mensaje = document.getElementById("mensajeFiltro");
    if (mensaje) {
        mensaje.textContent = rutasFiltradas.length === 0
            ? "No se encontraron rutas con esos criterios."
            : "";
    }

    // Renderizar las rutas filtradas
    renderizarRutas(rutasFiltradas);
}

// Evento para el botón de filtros
document.getElementById("btnFiltrar").addEventListener("click", aplicarFiltros);

// Evento para búsqueda en tiempo real
document.getElementById("buscarDestino").addEventListener("input", aplicarFiltros);
