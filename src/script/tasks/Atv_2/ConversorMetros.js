export function conversorMetros(){
    let metros = parseFloat(prompt("Informe quantos metros deverão ser convertidos em centímetros"));

    let palavraMetro = metros > 1 ? "metros" : "metro"; 

    alert(`Em ${metros} ${palavraMetro} tem ${metros * 100} centímetros`);
};
