function urnaEletronica() {

// Declaração das variáveis

    let opcao;
    let nome1;
    let nome2;
    let nome3;
    let contador = 0;
    let candidato1 = 0;
    let candidato2 = 0;
    let candidato3 = 0;
    let votobranco = 0;
    let votonulo = 0;
    let encerravot = 'N' && 'n';
    let senhafinal = 123456;
    let Totaldevotos = 0;

// Inserindo Nomes dos Candidatos
    
    nome1 = prompt('Digite o nome do Candidato1');
    nome2 = prompt('Digite o nome do Candidato2');
    nome3 = prompt('Digite o nome do Candidato3');

// Página Principal da urna

    do {

        opcao = parseInt(prompt(
            '\n |1| Candidato1:' + nome1 +
            '\n |2| Candidato2:' + nome2 +
            '\n |3| Candidato3:' + nome3 +
            '\n |5| Voto em Branco' +
            '\n Digite a sua escolha:' +
            '\n Após escolha dos votos digite sua senha para a contagem:'));

        contador++;

// Votação do Usuário

        if (opcao == 1) {

            console.log('Voto computado para:', nome1)
            candidato1++;

        } else if (opcao == 2) {

            console.log('Voto computado para:', nome2)
            candidato2++;

        } else if (opcao == 3) {

            console.log('Voto computado para:', nome3)
            candidato3++;

        } else if (opcao == 5) {

            console.log('Voto em Branco computado')
            votobranco++;

        } else if (opcao === senhafinal) {

            encerravot = prompt('Deseja realmente encerrar votação?');
            if (encerravot == 'N' && encerravot == 'n') {
            }

        } else {

            let confirmavotonulo = confirm('VOTO ANULADO');

            if (confirmavotonulo) {

                console.log('Voto Nulo computado')
                votonulo++;

            }
        }

    } while (encerravot !== 'S' && encerravot !== 's');

// Contagem dos Votos

    contador--;

    console.log('Contagem', contador);
    console.log('Voto computado para Candidato1 ', candidato1);
    console.log('Voto computado para Candidato2 ', candidato2);
    console.log('Voto computado para Candidato3 ', candidato3);
    console.log('Voto em Branco computado', votobranco);
    console.log('Voto Nulo computado', votonulo);

    Totaldevotos = (candidato1 + candidato2 + candidato3 + votobranco + votonulo);

// Saída para usuário: boletim de urna

    console.log('** BOLETIM DE URNA **')
    console.log('O Total de votos computados é de: ', Totaldevotos);

    console.log(
        '\n Relação de Candidatos:' +
        '\n Candidato1: '+ nome1 + '-' + candidato1 + 'votos' +
        '\n Candidato2: '+ nome2 + '-' + candidato2 + 'votos' +
        '\n Candidato3: '+ nome3 + '-' + candidato3 + 'votos');
    console.log('Percentual de votos do Candidato1', ((candidato1 / Totaldevotos * 100).toFixed(2)) + '%');
    console.log('Percentual de votos do Candidato2', ((candidato2 / Totaldevotos * 100).toFixed(2)) + '%');
    console.log('Percentual de votos do Candidato3', ((candidato3 / Totaldevotos * 100).toFixed(2)) + '%');
    console.log('Relação de Votos em Branco e Votos Nulos');
    console.log('Votos em Branco', ':', ((votobranco / Totaldevotos * 100).toFixed(2)) + '%');
    console.log('Votos Nulos', ':', ((votonulo / Totaldevotos * 100).toFixed(2)) + '%');

// Determinação do Ganhador

    if (candidato1 > candidato2 && candidato1 > candidato3) {
        console.log('O ganhador é o Candidato 1 - ', nome1);
        console.log('Total de votos válidos e os em Brancos', votobranco + candidato1);
    } else if (candidato2 > candidato3 && candidato2 > candidato1) {
        console.log('O ganhador é o Candidato 2 - ', nome2);
        console.log('Total de votos válidos e os em Brancos', votobranco + candidato2);
    } else if (candidato3 > candidato2 && candidato3 > candidato1) {
        console.log('O ganhador é o Candidato 3 - ', nome3);
        console.log('Total de votos válidos e os em Brancos', votobranco + candidato3);
    } else {
        console.log('Empate')
    }

}
