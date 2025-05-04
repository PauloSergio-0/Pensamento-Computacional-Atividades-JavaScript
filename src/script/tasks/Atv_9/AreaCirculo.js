export function areaCirculo(){
    let raio = parseFloat(prompt("Qual o raio do circulo: "));

    alert(`A área do circulo é ${ (3.14 * (raio**2)).toFixed(2)}`);
};
