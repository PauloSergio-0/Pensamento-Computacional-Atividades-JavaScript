export function area_triangulo(){
    var base;
    var altura;
    
    base = parseFloat(prompt("qual a base:"));
    altura = parseFloat(prompt("qual a altura:"));

    alert("A área do triângulo é " + ((base * altura) / 2))
};
