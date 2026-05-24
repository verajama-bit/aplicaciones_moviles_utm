// Función para renderizar las rutas en el contenedor
function renderizarRutas(lista) {
    const contenedorRutas = document.getElementById("contenedorRutas");
    contenedorRutas.innerHTML = "";

    lista.map(ruta => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");
        tarjeta.innerHTML = `
        <h3>${ruta.destino}</h3>
        <p><strong>Bus:</strong> ${ruta.bus}</p>
        <p><strong>Horario:</strong> ${ruta.horario}</p>
        <span class="badge ${ruta.estado === "Disponible" ? "estado-disponible" : "estado-mantenimiento"}">${ruta.estado}</span>
        <span class="badge tipo-ruta">${ruta.tipo}</span>
        <button onclick="mostrarDetalles(${ruta.id})">Ver Detalles</button>
        `;
        contenedorRutas.appendChild(tarjeta);
    });
}

// Mostrar detalles de la ruta
function mostrarDetalles(id) {
    const ruta = rutas.find(r => r.id === id);  
    const detalleRutas = document.getElementById("detalleRuta");

    detalleRutas.innerHTML = `
    <h2>${ruta.destino}</h2>
    <p><strong>Bus:</strong> ${ruta.bus}</p>
    <p><strong>Horario:</strong> ${ruta.horario}</p>
    <p><strong>Estado:</strong> ${ruta.estado}</p>
    <p><strong>Tipo:</strong> ${ruta.tipo}</p>
    <button onclick="cerrarDetalles()">Cerrar</button>
    `;
}

// Cerrar detalles de la ruta
function cerrarDetalles() {
    const detalleRutas = document.getElementById("detalleRuta");
    detalleRutas.innerHTML = "<p>Seleccione una ruta para visualizar su información.</p>";
}

// Renderizar rutas al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    renderizarRutas(rutas);
});
