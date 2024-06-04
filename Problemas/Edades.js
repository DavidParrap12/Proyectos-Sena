const prompt = require('prompt-sync')();

edades = [];
Menores = 0;
Mayores = 0;
adultosMayores = 0;
edadAlta = 0;
edadBaja = 0;
sumaEdades = 0;

    for (interador = 0; interador <= 10; interador += 1) {
    edad = Number(prompt('Ingrese la edad de la persona: '));
    if (edad < 0 || edad > 120) {
        console.log('Edad no valida, ingrese de nuevo la edad.');
        interador -= 1;
    } else {
        edades[interador] = edad;
        if (edad < 18) {
        Menores += 1;
        }
        if (edad >= 18) {
        Mayores += 1;
        }
        if (edad >= 60) {
        adultosMayores +=1;
        }
        sumaEdades += edad;
    }
    }
edadBaja = Math.min(...edades);
edadAlta = Math.max(...edades);
promedioEdad = sumaEdades / 10;
console.log(
'Menores: ' + Menores,
'Mayores: ' + Mayores,
'Adultos mayores: ' + adultosMayores,
'Edad baja: ' + edadBaja,
'Edad alta: ' + edadAlta,
'Edad promedio: ' + promedioEdad
);