let nombres1 = prompt("Quien sos?").toLowerCase();
alert("Naaaaa Dale.. quien sos?")
let nombre = prompt("Ingrese su Nombre Completo:");
alert(nombre)
let numero = Number(prompt("Demuestre que es socio de la peña: ¿Cuántos años tiene el Manteca?"));

if (numero === 44) {
    alert("Si Sebastian!! 44 ");
    let chances = 0
    let esDeLaPeña = false;


    while (chances < 3) {
        let codigoDeIngreso = prompt("Ingrese su Contraseña para poder ingresar:");
        if (codigoDeIngreso === "LMDS23") {
            alert("Sos uno de los miembros podes ingresar.");
            esDeLaPeña = true;
            break
        } else {
            alert("No sos miembro. O le erraste a la contraseña, volve a intentar!!");
            chances++;
        }
    }

    if (esDeLaPeña) {

        alert("Que comemos?? ")

        let opcionesPeña = Number(prompt("1. Asado con achuras, 2. Pasta Del Día 3-Pedimos Algún Lado? 0.  Salir"));

        switch (opcionesPeña) {
            case 1:
                votacion = "1. Asado con achuras";

                break;

            case 2:
                votacion = "2. Pasta Del Día";

                break;

            case 3:
                votacion = "3. Pedimos Algún Lado?";

                break;


            default:
                votacion = "0. Salir";
                break;
        }
    }
    alert("Opcion " + votacion);





const insumos = [
    { id: 1, nombre: "Cerveza", precio: 760 },
    { id: 2, nombre: "Vino", precio: 1200 },
    { id: 3, nombre: "Gaseosas", precio: 450 },
    { id: 4, nombre: "Agua", precio: 250 },
    { id: 5, nombre: "Otros", precio: 1000 },
];

let opcionesDeGastos = Number(prompt("Indique en que gasto: 1. Cerveza, 2. Vino, 3. Gaseosas, 4. Agua, 5. Otros, 0. Nada!",));



let option = Number(prompt("1. Cerveza, 2. Vino, 3. Gaseosas, 4. Agua, 5. Otros, 0. Nada!"));

switch (option) {
    case 1:
        gasto = "Cerveza";

        break;

    case 2:
        gasto = "Vino";

        break;

    case 3:
        gasto = "Gaseosas";

        break;
    case 4:
        gasto = "Agua";

        break;

    case 5:
        gasto = "Otros";

        break;


    default:
        gasto = "Nada";
        break;
}

alert("Gastaste en " + gasto);




let compra = number(prompt("Que compraste: "));
alert(opcionesDeGastos)

let gastosCompra = parseInt(prompt("De talla el gasto:"))



let gastos = Number(prompt("1. Cerveza, 2. Vino, 3. Gaseosas, 4. Agua, 5. Otros"));

switch (gastos) {
    case 1:
        gastasteEn = "1. Cerveza";

        break;

    case 2:
        gastasteEn = "2. Vino";

        break;

    case 3:
        gastasteEn = "3. Gaseosas";

        break;
    case 4:
        gastasteEn = "4. Agua";

        break;

    case 5:
        gastasteEn = "5. Otros";

        break;


    default:
        gastasteEn = "0- Salir";
        break;
}

alert("Gastaste en " + gastosEn);



}

else {
    alert("Edad incorrecta!! No es de la peña.")
}


// Inicializar una lista vacía de usuarios
let users = [];

// Definir una función para registrar a un nuevo usuario
function registerUser(name, email, password) {
    // Crear un objeto que represente al usuario
    let user = {
        name: name,
        email: email,
        password: password,
        meals: [], // Inicializar una lista vacía de comidas
        totalSpent: 0 // Inicializar el gasto total en 0
    };

    // Agregar el nuevo usuario a la lista de usuarios
    users.push(user);
}

// Definir una función para agregar una comida al registro de un usuario
function addMeal(userId, mealName, cost) {
    // Encontrar el usuario correspondiente al ID proporcionado
    let user = users.find(user => user.id === userId);

    // Agregar la nueva comida al registro del usuario
    user.meals.push({
        name: mealName,
        cost: cost
    });

    // Actualizar el gasto total del usuario
    user.totalSpent += cost;
}