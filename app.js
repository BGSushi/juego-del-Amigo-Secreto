// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

    //Fucionalidades:
    //Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".
    //Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.
    //Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.
    //Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.

const nombres = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    const listaAmigos = document.getElementById("listaAmigos");
    
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (nombres.includes(nombre)) {
        alert("Este nombre ya ha sido ingresado.");
        return;
    }

    nombres.push(nombre);
    
    const li = document.createElement("li");
    li.textContent = nombre;
    listaAmigos.appendChild(li);
    
    input.value = "";
}

function sortearAmigo() {
    if (nombres.length === 0) {
        alert("Debe agregar al menos un nombre antes de realizar el sorteo.");
        return;
    }
    
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    
    const indiceAleatorio = Math.floor(Math.random() * nombres.length);
    const nombreSorteado = nombres[indiceAleatorio];
    
    const li = document.createElement("li");
    li.textContent = `🎉 El amigo secreto es: ${nombreSorteado} 🎊`;
    resultado.appendChild(li);
}

