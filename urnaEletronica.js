function urnaEletronica() {

    let opcao;
    let nome1;
    let nome2;
    let nome3;
    
    nome1 = prompt('Digite o nome do Candidato1');
    nome2 = prompt('Digite o nome do Candidato2');
    nome3 = prompt('Digite o nome do Candidato3');
    
    let contador = 0;
    let candidato1 = 0;
    let candidato2 = 0;
    let candidato3 = 0;
    let votobranco = 0;
    let votonulo = 0;
    let encerravot = 'N' && 'n';
    let senhafinal = 123456;
    

    do {
        
        opcao = parseInt(prompt(
            '\n |1| Candidato1:' + nome1 +
            '\n |2| Candidato2:' + nome2 +
            '\n |3| Candidato3:' + nome3 +
            '\n |5| Voto em Branco' +
            '\n |8| Voto Nulo '+
            '\n Digite a sua escolha:'));

        contador++;
        
       
        
        if (opcao == 1){
    
            console.log('Voto computado para:', nome1)
            candidato1++;
            
        }else if (opcao == 2){
    
            console.log('Voto computado para:', nome2)
            candidato2++;
    
        }else if (opcao == 3){
    
            console.log('Voto computado para:', nome3)
            candidato3++;
    
        }else if (opcao == 5){
    
            console.log('Voto em Branco computado')
            votobranco++;
    
        }else if (opcao == 8){
    
            console.log('Voto Nulo computado')
            votonulo++;
    
        }else if ( opcao === senhafinal){
            
             encerravot = prompt('Deseja realmente encerrar votação?');
             if (encerravot == 'N' && encerravot == 'n'){  
             }
        
    } 
}while (encerravot !== 'S' && encerravot !== 's');
    

        contador--;
        
    
        console.log('Contagem', contador );
        console.log('Voto computado para Candidato1 ', candidato1);
        console.log('Voto computado para Candidato2 ', candidato2);
        console.log('Voto computado para Candidato3 ', candidato3);
        console.log('Voto em Branco computado', votobranco);
        console.log('Voto Nulo computado', votonulo);

        if (candidato1 > candidato2 &&  candidato1 > candidato3) {
            console.log('O ganhador é o', nome1);
            console.log('Total de votos válidos e os em Brancos', votobranco + candidato1);
        }else if (candidato2 > candidato3 && candidato2 > candidato1) {
            console.log('O ganhador é o', nome2);
            console.log('Total de votos válidos e os em Brancos', votobranco + candidato2);
        }else if (candidato3 > candidato2 && candidato3 > candidato1) {
            console.log('O ganhador é o', nome3);
            console.log('Total de votos válidos e os em Brancos', votobranco + candidato3);
        }else {
            console.log('Empate')
        }



}
