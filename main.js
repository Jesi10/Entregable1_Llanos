// Animales en adopción mediante un array de objetos
const animales = [
    { id: 1, tipo: "Gato", nombre: "Niko", genero: "macho", edad: "5 meses", tamaño: "pequeño", color: "tricolor" },
    { id: 2, tipo: "Gato", nombre: "Negrita", genero: "hembra", edad: "2 años", tamaño: "mediano", color: "negro" },
    { id: 3, tipo: "Gato", nombre: "Mochito", genero: "macho", edad: "2 meses", tamaño: "pequeño", color: "canela" },
    { id: 4, tipo: "Gato", nombre: "Tommy", genero: "macho", edad: "3 años", tamaño: "mediano", color: "marrón" },
    { id: 5, tipo: "Perro", nombre: "Pomponcita", genero: "hembra", edad: "5 años", tamaño: "pequeño", color: "blanco", raza: "caniche" },
    { id: 6, tipo: "Perro", nombre: "Rex", genero: "macho", edad: "3 años", tamaño: "grande", color: "marrón", raza: "cruza pastor alemán" },
    { id: 7, tipo: "Perro", nombre: "Toby", genero: "macho", edad: "1 año", tamaño: "pequeño", color: "dorado", raza: "cruza con chihuahua" },
    { id: 8, tipo: "Perro", nombre: "Luna", genero: "hembra", edad: "4 años", tamaño: "mediano", color: "blanco", raza: "labrador" },
    { id: 9, tipo: "Perro", nombre: "Rocky", genero: "macho", edad: "6 meses", tamaño: "pequeño", color: "gris", raza: "bulldog" },
    { id: 10, tipo: "Perro", nombre: "Taty", genero: "hembra", edad: "3 años", tamaño: "mediano", color: "beige", raza: "beagle" },
    { id: 11, tipo: "Perro", nombre: "Firu", genero: "macho", edad: "2 años", tamaño: "grande", color: "negro", raza: "pitbull" },
    { id: 12, tipo: "Perro", nombre: "Bonita", genero: "hembra", edad: "7 años", tamaño: "mediano", color: "blanco", raza: "pitbull" }
];

// Función principal Menú
function iniciarMenuAdopcion() {
    alert("Bienvenido a Mascoteros Zona Centro 🐾");

    // Pedir el nombre al usuario
    let nombreUsuario = prompt("Por favor, ingresá tu nombre:");

    if (!nombreUsuario) {
        alert("No ingresaste un nombre.");
        return;
    }

    let intentos = 3;
    let opcion;

    do {
        opcion = parseInt(prompt(`Hola ${nombreUsuario}, por favor escribe el número correspondiente a la opción que deseas:\n1. Conocer los animalitos en adopción\n2. Solicitar visita al refugio\n3. Salir`));

        switch (opcion) {
            case 1:
                mostrarAnimales(nombreUsuario);
                break;
            case 2:
                solicitarVisita();
                break;
            case 3:
                alert("Gracias por visitar Mascoteros Zona Centro!✨");
                return;
            default:
                intentos--;
                if (intentos > 0) {
                    alert(`Opción no válida. Te quedan ${intentos} intentos.`);
                } else {
                    alert("Vuelve a intentarlo más tarde por favor.");
                }
        }
    } while (intentos > 0);
}

// Función para mostrar animales del refugio
function mostrarAnimales(nombreUsuario) {
    let opcionAdopcion;
    do {
        opcionAdopcion = parseInt(prompt(`${nombreUsuario}, ¿Qué te gustaría adoptar?\n1. Gato\n2. Perro\n3. Ver todos los animalitos\n4. Salir`));

        switch (opcionAdopcion) {
            case 1:
                mostrarPorTipo("Gato");
                break;
            case 2:
                mostrarPorTipo("Perro");
                break;
            case 3:
                mostrarTodos();
                break;
            case 4:
                alert("Gracias por visitar nuestra sección de adopciones.");
                return;
            default:
                alert("Opción no válida. Por favor, intenta nuevamente.");
        }
    } while (opcionAdopcion !== 4);
}

// Función para mostrar animales por tipo
function mostrarPorTipo(tipo) {
    const animalesFiltrados = animales.filter(animal => animal.tipo === tipo);
    if (animalesFiltrados.length === 0) {
        alert(`No tenemos ${tipo}s disponibles actualmente.`);
    } else {
        let mensaje = `${tipo}s en adopción:\n`;
        for (const animal of animalesFiltrados) {
            mensaje += `${animal.id}. ${animal.nombre}, ${animal.genero}, ${animal.edad}, ${animal.tamaño}, ${animal.color}${animal.raza ? `, ${animal.raza}` : ""}\n`;
        }
        alert(mensaje);
    }
}

// Función para mostrar todos los animales
function mostrarTodos() {
    let mensaje = "Animalitos en adopción:\n";
    for (const animal of animales) {
        mensaje += `${animal.id}. ${animal.tipo}: ${animal.nombre}, ${animal.genero}, ${animal.edad}, ${animal.tamaño}, ${animal.color}${animal.raza ? `, ${animal.raza}` : ""}\n`;
    }
    alert(mensaje);
}

// Función para solicitar visita al refugio
function solicitarVisita() {
    let telefono;
    let intentos = 3;

    while (intentos > 0) {
        telefono = prompt("Por favor, ingresa tu número de teléfono (solo números, entre 7 y 15 dígitos):");

        // Validar que el teléfono no esté vacío, sea numérico y tenga entre 7 y 15 dígitos
        if (telefono && /^\d+$/.test(telefono) && telefono.length >= 7 && telefono.length <= 15) {
            alert(`Gracias por contactarnos!! Te llamaremos al ${telefono} 📞😊 muy pronto.`);
            return; // Salir de la función si el teléfono es válido
        } else {
            intentos--;
            alert(`Número no válido. Te quedan ${intentos} intento(s).`);
        }
    }

    // Si falla en todos los intentos
    alert("No ingresaste un número válido. Intentá por favor más tarde.");
}

// Iniciar el programa
iniciarMenuAdopcion();

