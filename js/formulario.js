// ELEMENTOS DEL DOM
const formRuta = document.getElementById("formRuta");
const mensaje = document.getElementById("mensaje");

// EVENTO SUBMIT
formRuta.addEventListener("submit", registrarRuta);

// FUNCIÓN PRINCIPAL
function registrarRuta(event) {
    event.preventDefault();

    // CAPTURAR DATOS
    const destino = document.getElementById("destino").value.trim();
    const bus = document.getElementById("bus").value.trim();
    const horario = document.getElementById("horario").value;
    const estado = document.getElementById("estado").value;
    const tipo = document.getElementById("tipo").value;

    // VALIDACIONES
    if (
        destino === "" ||
        bus === "" ||
        horario === ""
    ) {

        mostrarMensaje(
            "Todos los campos son obligatorios.",
            "error"
        );
        return;
    }

    // VALIDAR TEXTO MÍNIMO
    if (destino.length < 3) {
        mostrarMensaje(
            "El destino debe tener mínimo 3 caracteres",
            "error"
        );
        return;
    }

    // VALIDAR NOMBRE BUS
    if (bus.length < 3) {
        mostrarMensaje(
            "El nombre del bus es demasiado corto",
            "error"
        );
        return;
    }

    // GENERAR NUEVO ID
    const nuevoId = rutas.length > 0
        ? rutas[rutas.length - 1].id + 1
        : 1;

    // CREAR OBJETO
    const nuevaRuta = {
        id: nuevoId,
        destino,
        bus,
        horario,
        estado,
        tipo
    };

    // AGREGAR RUTA
    rutas.push(nuevaRuta);
    // GUARDAR EN STORAGE
    guardarRutasStorage();
    // ACTUALIZAR INTERFAZ
    renderizarRutas(rutas);
    // MENSAJE ÉXITO
    mostrarMensaje(
        "Ruta registrada correctamente",
        "success"
    );

    // LIMPIAR FORMULARIO
    formRuta.reset();
}

// FUNCIÓN MENSAJES
function mostrarMensaje(texto, tipo) {
    mensaje.textContent = texto;
    if (tipo === "error") {
        mensaje.style.color = "#ef4444";
    } else {
        mensaje.style.color = "#10b981";
    }
  
    // OCULTAR MENSAJE
    setTimeout(() => {

        mensaje.textContent = "";
    }, 3000);
}
