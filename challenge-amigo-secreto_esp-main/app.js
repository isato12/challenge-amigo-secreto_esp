// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo !== "") {
        amigos.push(nombreAmigo);
        inputAmigo.value = ""; // Limpiar el input después de agregar
        actualizarListaAmigos();
    } else {
        alert("Por favor, escribe un nombre válido.");
    }
}

// Función para actualizar la lista de amigos en el DOM
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Limpiar la lista antes de actualizar

    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un solo amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista. Agrega algunos nombres primero.");
        return;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ""; // Limpiar resultados anteriores

    // Seleccionar un nombre aleatorio del array
    const amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];

    // Mostrar el resultado
    const li = document.createElement('li');
    li.textContent = `El amigo secreto es: ${amigoSecreto}`;
    resultado.appendChild(li);
}