//Ejercicio 1
function ejercicio_1(){
    let edad = prompt('¿Cuántos años tienes?');

    if (edad >= 18) {
        return alert('Bienvenido, su edad es de: ' + edad + ' años');
      }
    return alert('Su edad es de: ' + edad + ' años, no tiene permitido ingresar.');
};
//Ejercicio 2
function ejercicio_2(){
    let edad = prompt('¿Cuántos años tienes?');

    let resp = (edad >= 18) ? 'Eres mayor de 18 años' : 'No eres mayor de 18 años';

    return alert(resp);
};
//Ejercicio 3
function ejercicio_3(){
    let a = prompt('Ingrese un número');
    let b = prompt('Ingrese otro número');

    if (a > b) {
        return alert('El número mayor es: ' + a);
      } else if (a < b) {
        return alert('El número mayor es: ' + b);
      } 
      return alert('Los números son iguales');
};
//Ejercicio 4 
function ejercicio_4(){
    let n = prompt('Ingrese un número');
    let x = prompt('Ingrese la potencia');

    let resp = (n, x) => Math.pow(n, x);

    alert('El resultado es: ' + resp(n, x));
};
//Ejercicio 5 callback
function ejercicio_5(){

    function si() {
        alert('Has aceptado');
    };
    function no() {
        alert('Has rechazado');
    };

    function pregunta (quest, si, no){
        if (confirm(quest)) {
            si()
        }else {
            no();
        };
    };

    pregunta('¿Aceptas los términos?', si, no);
};
//Ejercicio 6 interaccion 
function ejercicio_6(){

    let nombre = prompt('Ingrese su nombre');

    function cambiarSaludo(input){
       let text = document.getElementById('hi');
       let cambio =  text.textContent = input; 
        return cambio;
    }

    cambiarSaludo(nombre);
};
//Ejercicio 7 operadores
function ejercicio_7(){

    let num = prompt('Ingrese un número');

    let resp = (num) => {
        if (num % 2 == 0) {
            return alert('El número es par');
        }else {
            return alert('El número es impar');
        };
    };

    resp(num);
};
//Ejercicio 8 bucles
function ejercicio_8(){
    let tabla = prompt("Ingrese la tabla de multiplicar que desea ver:");

    if (!isNaN(tabla) && tabla !== null && tabla !== "") {
    tabla = parseInt(tabla);

    let mensaje = "Tabla de multiplicar del " + tabla + ":\n";
    for (let i = 1; i <= 10; i++) {
        mensaje += tabla + " x " + i + " = " + (tabla * i) + "\n";
    }
    alert(mensaje);
    } else {
    alert("Debe ingresar un número válido.");
    }
};
//Ejercicio 9 switch
function ejercicio_9(){
    let edad = parseInt(prompt('¿Que dia es hoy?: ":\n" 1. Lunes":\n" 2. Martes":\n" 3. Miercoles":\n" 4. Jueves":\n" 5. Viernes":\n" 6. Sabado":\n" 7. Domingo'));
    
    switch(edad) {
        case 1:
            alert('Hoy es Lunes');
            break;
        case 2:
            alert('Hoy es Martes');
            break;
        case 3:
            alert('Hoy es Miercoles');
            break;
        case 4:
            alert('Hoy es Jueves');
            break;
        case 5:
            alert('Hoy es Viernes');
            break;
        case 6:
            alert('Hoy es Sabado');
            break;
        case 7:
            alert('Hoy es Domingo');
            break;
        default:
            alert('No se ha ingresado una valor válido');
            break;
    }
};

//Ejercicio 10 funciones
function ejercicio_10(){
    let a = parseInt(prompt('Ingrese un número'));
    let b = parseInt(prompt('Ingrese otro número'));

    let resta = (a,b) => {alert(a - b)};

    resta(a,b);
}
