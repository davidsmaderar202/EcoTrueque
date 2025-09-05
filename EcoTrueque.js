let objetos = [
    { nombre: "Bicicleta usada", estado: "Muy buen estado", usuario: "Ana", disponible: true },
    { nombre: "Lote de libros", estado: "Usados", usuario: "Carlos", disponible: true }
];

let formulario = document.querySelector("form");
let tablaObjetos = document.querySelector("tbody");

// =========================
// FUNCIONES
// =========================

// Función para mostrar objetos en la tabla
function mostrarObjetos() {
    tablaObjetos.innerHTML = ""; // limpiar tabla
    objetos.forEach(obj => {
        let fila = document.createElement("tr");
        fila.innerHTML = `
            <td>📦</td>
            <td>${obj.nombre}</td>
            <td>${obj.estado}</td>
            <td>${obj.usuario}</td>
            <td>${obj.disponible ? "Disponible ✅" : "No disponible ❌"}</td>
        `;
        tablaObjetos.appendChild(fila);
    });
}

// Función para agregar un nuevo objeto desde el formulario
function agregarObjeto(nombre, estado, usuario) {
    objetos.push({ nombre, estado, usuario, disponible: true });
    mostrarObjetos();
    alert(`✅ El objeto "${nombre}" fue agregado correctamente.`);
}

// Función de validación del formulario
function validarFormulario(nombre, email) {
    if (nombre === "" || email === "") {
        alert("⚠️ Por favor completa todos los campos obligatorios.");
        return false;
    }
    return true;
}

// =========================
// EVENTOS
// =========================

// Evento: enviar formulario
formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let categoria = document.getElementById("categoria").value;
    let mensaje = document.getElementById("mensaje").value;

    // Condicionales para validar
    if (!validarFormulario(nombre, email)) {
        return;
    }

    // Agregar el objeto a la tabla (ejemplo con mensaje como nombre del objeto)
    agregarObjeto(mensaje || "Objeto sin nombre", `Categoría: ${categoria}`, nombre);

    // Limpiar el formulario
    formulario.reset();
});

let botonTema = document.getElementById("btn-tema");

botonTema.addEventListener("click", () => {
    document.body.classList.toggle("oscuro");

    // Animación del botón al hacer clic
    botonTema.style.transform = "scale(0.9)";
    setTimeout(() => {
        botonTema.style.transform = "scale(1)";
    }, 150);

    if (document.body.classList.contains("oscuro")) {
        botonTema.textContent = "☀️ Modo Claro";
    } else {
        botonTema.textContent = "🌗 Modo Oscuro";
    }
});

// =========================
// INICIO
// =========================
mostrarObjetos();