function urnaEletronica() {

    let opcao;
    let nome1;
    let nome2;
    let nome3;

    nome1 = parseInt(prompt('Digite o nome do Candidato1'));
    nome2 = parseInt(prompt('Digite o nome do Candidato2'));
    nome3 = parseInt(prompt('Digite o nome do Candidato3'));

    let contador = 0;
    let candidato1 = 0;
    let candidato2 = 0;
    let candidato3 = 0;
    let votobranco = 0;
    let votonulo = 0;
    

    do {
        
        opcao = parseInt(prompt(
            '\n |1| Candidato1' +
            '\n |2| Candidato2' +
            '\n |3| Candidato3' +
            '\n |5| Voto em Branco' +
            '\n |8| Voto Nulo '+
            '\n Digite a sua escolha:'));

        contador++;
       
        
        if (opcao === 1){
    
            console.log('Voto computado para:', nome1)
            candidato1++;
            
        }else if (opcao === 2){
    
            console.log('Voto computado para:', nome2)
            candidato2++;
    
        }else if (opcao === 3){
    
            console.log('Voto computado para:', nome3)
            candidato3++;
    
        }else if (opcao === 5){
    
            console.log('Voto em Branco computado')
            votobranco++;
    
        }else if (opcao === 8){
    
            console.log('Voto Nulo computado')
            votonulo++;
    
        }

    } while (opcao !== 0);
    
    contador--;
    

    console.log('Contagem', contador );
    console.log('Voto computado para Candidato1 ', candidato1);
    console.log('Voto computado para Candidato2 ', candidato2);
    console.log('Voto computado para Candidato3 ', candidato3);
    console.log('Voto em Branco computado', votobranco);
    console.log('Voto Nulo computado', votonulo);


}

