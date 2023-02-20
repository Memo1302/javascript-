let nombre = prompt("Quien sos?").toLowerCase();
alert("Naaaaa Dale.. quien sos?")
let apodo = prompt("Ingrese su Nombre Completo:");
alert(apodo)
let numero = Number(prompt("Demuestre que es socio de la peña: ¿Cuántos años tiene el Manteca?"));
if( numero === 44){
    alert("Si Sebastian!! 44 ");
    let chances = 0
    let esDeLaPeña = false;
    
    
    //si la contraseña es menor a 1000 te va a decir que no sos miembro y si es mayor te deja seguir. Lo hice asi porque aun no se como poner contraseñas
    while(chances < 3)
    {
        let codigoDeIngreso = Number(prompt("Ingrese su Contraseña para poder ingresar:"));
        if( codigoDeIngreso >=1000){
            alert("Sos uno de los miembros podes ingresar.");
            esDeLaPeña = true;
            break            
        }else{
            alert("No sos miembro. O le erraste a la contraseña, volve a intentar!!");
            chances++;
        } 
    }

    if  (esDeLaPeña) {

        alert("Que comemos?? Opciones: 1-Asado con achuras 2-Pasta Del Día 3-Pedimos Algún Lado? 0-Salir")

        let opcionesPeña = Number(prompt ("1-Asado con achuras 2-Pasta Del Día 3-Pedimos Algún Lado? 0-Salir"));

        switch (opcionesPeña) {
            case 1:
                votacion = "1-Asado con achuras";
                
                break;

            case 2:
                votacion = "2-Pasta Del Día";
                
                break;
            
            case 3:
                votacion = "3-Pedimos Algún Lado?";
                
                break;  


            default:
                votacion = "0- Salir";
                break;
        }
    }
    alert("Voto opcion " + votacion);   

   
}
else{ 
    alert("Edad incorrecta!! No es de la peña.")    
}



