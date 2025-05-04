export function conversorTemperatura(){
    let fahrenheit = parseFloat(prompt("Quantos graus Fº será convertido de em graus celsius"));

    let celsius = 5 * ((fahrenheit - 32) / 9);

    alert(`${fahrenheit} fº são equivalentes a ${celsius.toFixed(2)} cº`);
}
