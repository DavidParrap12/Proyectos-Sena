let a = prompt("Dame el lado a del triangulo");
let b = prompt("Dame el lado b del triangulo");
let c = prompt("Dame el lado c del triangulo");
let h = prompt("Dame la altura del triangulo");

a = parseFloat;
b = parseFloat;
c = parseFloat;
h = parseFloat;

let resultadoPerimetro = a + b + c;
let areaResultado = b*h/2;

console.log(`El perimetro del triangulo es: ${resultadoPerimetro}`)
console.log(`El area del triangulo es: ${areaResultado}`)