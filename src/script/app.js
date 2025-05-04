import {area_retangulo} from "./tasks/Atv_1/AreaRetangulo.js";
import {conversorMetros} from "./tasks/Atv_2/ConversorMetros.js";
import {conversorTemperatura} from "./tasks/Atv_3/ConversorTemperatura.js";
import {area_triangulo} from "./tasks/Atv_4/AreaTriangulo.js";
import {somarNumeros} from "./tasks/Atv_5/SomarNumernos.js";
import {dobroNumero} from "./tasks/Atv_6/DobroNumero.js";
import {diasVividos} from "./tasks/Atv_7/DiasVividos.js";
import {conversorMoedas} from "./tasks/Atv_8/ConversorMoedas.js";
import {areaCirculo} from "./tasks/Atv_9/AreaCirculo.js";
import {mediasNotas} from "./tasks/Atv_10/MediaNotas.js";



while(true){

        let opcao = parseInt(prompt(`
            1. Área de um Retângulo
            2. Conversão de Metros para Centímetros
            3. Conversão de Fahrenheit para Celsius
            4. Área de um Triângulo
            5. Soma de Dois Números
            6. Dobro de um Número
            7. Dias Vividos
            8. Conversão de Reais para Dólares
            9. Área de um Círculo
            10. Média Aritmética de Notas
            0. sair
    
    
            Selecione uma atividade: 
            `))

    if(opcao == 1){
        area_retangulo();

    } else if (opcao == 2){
        conversorMetros();

    } else if (opcao == 3){
        conversorTemperatura();

    } else if (opcao == 4){
        area_triangulo();

    } else if (opcao == 5){
        somarNumeros();
    
    } else if (opcao == 6){
        dobroNumero();

    } else if (opcao == 7){
        diasVividos();

    } else if (opcao == 8){
        conversorMoedas();

    } else if (opcao == 9){
        areaCirculo();

    } else if (opcao == 10){
        mediasNotas();
        
    }  else if (opcao == 0){
        alert("Saindo...");
        break;
    } else{
        alert("Opção não encontrada apenas numeros inteiros são validos!!!")
    }
}