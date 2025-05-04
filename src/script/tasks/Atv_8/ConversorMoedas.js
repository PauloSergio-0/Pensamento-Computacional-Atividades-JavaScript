export function conversorMoedas(){
    let dolar = parseFloat(prompt("Informe a cotação do dolar: "))

    let real = parseFloat(prompt("Informe quantos reais  deseja converter: "))

    let palavraReal = real > 1? "reais" : "real";

    alert(`${real} ${palavraReal} é equivalente a ${(real/dolar).toFixed(2)} em dolar`)

};
