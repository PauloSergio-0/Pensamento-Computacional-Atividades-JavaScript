export function diasVividos(){
    let idade = parseInt(prompt("Qual a sua iade ?"))

    let palavraIdade = idade > 1 ? "anos" : "ano";

    alert(`Se sua idade é ${idade} ${palavraIdade} então viveu ${idade * 365} dias`)
};
