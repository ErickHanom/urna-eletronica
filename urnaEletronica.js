async function verificarIntegridadeUrna() {

    // Biblioteca CryptoJS: https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js

    let hashUrnaAtual;
    let hashVerificado;

    await fetch('urnaEletronica.js')
        .then(conteudo => conteudo.text())
        .then(conteudo => CryptoJS.SHA256(conteudo).toString())
        .then(conteudo => hashUrnaAtual = conteudo);
    
    await fetch('hashVerificado')
        .then(conteudo => conteudo.text())
        .then(conteudo => hashVerificado = conteudo);
        
    return {
        status: hashUrnaAtual === hashVerificado,
        hashUrnaAtual: hashUrnaAtual,
        hashVerificado: hashVerificado
    };

}

function dataHoraAtual() {
    data = new Date();
    return data;
}

async function audioConfirmacao() {
    const audio = new Audio ('./confirmacao.mp3')
    await audio.play();
}

async function urnaEletronica() {

    // Declaração das variáveis

    let opcao;
    let contador = 0;
    let votobranco = 0;
    let votonulo = 0;
    let encerravot = 'N' && 'n';
    let senhafinal = 0;
    let Totaldevotos = 0;
    let votcandidato0 = 0;
    let votcandidato1 = 0;
    let votcandidato2 = 0;
    let votcandidato3 = 0;
    let votcandidato4 = 0;
    
    


    // console.log('Data:' + dataFim().toLocaleString());

    // Inserindo Nomes dos Candidatos


    // Página Principal da urna


    senhafinal = parseInt(prompt('Digite sua senha do Mesário para iniciar: '));

    let MatrizCandidatos = [

        [11, 'Osvaldo Virgínio', 'PPF'],
        [12, 'Lula', 'PPCO'],
        [13, 'Jair Bolsonaro', 'ABD'],
        [14, 'Dilma Rosseff', 'PT'],
        [15, 'Nicolas Ferreira', 'PM']
    ]

    let candidato0 = MatrizCandidatos[0]
    let candidato1 = MatrizCandidatos[1]
    let candidato2 = MatrizCandidatos[2]
    let candidato3 = MatrizCandidatos[3]
    let candidato4 = MatrizCandidatos[4]



    for (i = 0; i <= 4; i++) {

        confirm((`${candidato0}`));
        confirm((`${candidato1}`));
        confirm((`${candidato2}`));
        confirm((`${candidato3}`));
        confirm((`${candidato4}`));

        break;
    }

    do {


        opcao = parseInt(prompt('Digite a sua escolha de voto'));

        contador++;

        // Votação do Usuário

        if (opcao == 11) {

            if (confirm(
                '\n Seu voto será computado para o Candidato 1: ' +
                '\n Deseja Prosseguir?')) {

                console.log('Voto computado para: ', candidato0[1])
                votcandidato0++;
                await audioConfirmacao();
            }


        } else if (opcao == 12) {

            if (confirm(
                '\n Seu voto será computado para o Candidato 2: ' +
                '\n Deseja Prosseguir?')) {

                console.log('Voto computado para: ', candidato1[1])
                votcandidato1++;
                await audioConfirmacao();

            }
        } else if (opcao == 13) {

            if (confirm(
                '\n Seu voto será computado para o Candidato 3: ' +
                '\n Deseja Prosseguir?')) {

                console.log('Voto computado para: ', candidato2[1])
                votcandidato2++;
                await audioConfirmacao();

            }
        } else if (opcao == 14) {

            if (confirm(
                '\n Seu voto será computado para o Candidato 4: ' +
                '\n Deseja Prosseguir?')) {

                console.log('Voto computado para: ', candidato3[1])
                votcandidato3++;
                await audioConfirmacao();

            }
        } else if (opcao == 15) {

            if (confirm(
                '\n Seu voto será computado para o Candidato 5: ' +
                '\n Deseja Prosseguir?')) {

                console.log('Voto computado para: ', candidato4[1])
                votcandidato4++;
                await audioConfirmacao();

            }

        } else if (opcao == 22) {

            if (confirm(
                '\n Seu voto será computado para o Voto em Branco' +
                '\n Deseja Prosseguir?')) {

                console.log('Voto computado para Voto em Branco ')
                votobranco++;
                await audioConfirmacao();

            }
        } else if (opcao === senhafinal) {

            encerravot = prompt('Deseja realmente encerrar votação?');
            if (encerravot == 'N' && encerravot == 'n') {
            }

        } else {



            if (confirm('VOTO ANULADO')) {

                console.log('Voto Nulo computado')
                votonulo++;

            } else {
                contador--;
            }
        }

    } while (encerravot !== 'S' && encerravot !== 's');

    // Se houver votação

    Totaldevotos = (votcandidato0 + votcandidato1 + votcandidato2 + votcandidato3 + votcandidato4 + votobranco + votonulo);

    if (Totaldevotos > 0) {

        // Contagem dos Votos

        contador--;

        console.log('Contagem', contador);
        console.log(`Voto computado para Candidato1: ${candidato0 [1]} - ` , votcandidato0);
        console.log(`Voto computado para Candidato2: ${candidato1 [1]} - ` , votcandidato1);
        console.log(`Voto computado para Candidato3: ${candidato2 [1]} - ` , votcandidato2);
        console.log(`Voto computado para Candidato4: ${candidato3 [1]} - ` , votcandidato3);
        console.log(`Voto computado para Candidato5: ${candidato4 [1]} - ` , votcandidato4);
        console.log('Voto em Branco computado', votobranco);
        console.log('Voto Nulo computado', votonulo);


        // Saída para usuário: boletim de urna
        console.log('*********************************************')
        console.log('** BOLETIM DE URNA **')
        console.log('O Total de votos computados é de: ', Totaldevotos);

        console.log(
            '\n Relação de Candidatos:' +
            '\n Candidato1: ' + votcandidato0 + 'votos' +
            '\n Candidato2: ' + votcandidato1 + 'votos' +
            '\n Candidato3: ' + votcandidato2 + 'votos' +
            '\n Candidato4: ' + votcandidato3 + 'votos' +
            '\n Candidato5: ' + votcandidato4 + 'votos');
        console.log('Percentual de votos do Candidato1', ((votcandidato0 / Totaldevotos * 100).toFixed(2)) + '%');
        console.log('Percentual de votos do Candidato2', ((votcandidato1 / Totaldevotos * 100).toFixed(2)) + '%');
        console.log('Percentual de votos do Candidato3', ((votcandidato2 / Totaldevotos * 100).toFixed(2)) + '%');
        console.log('Percentual de votos do Candidato4', ((votcandidato3 / Totaldevotos * 100).toFixed(2)) + '%');
        console.log('Percentual de votos do Candidato5', ((votcandidato4 / Totaldevotos * 100).toFixed(2)) + '%');
        console.log('Relação de Votos em Branco e Votos Nulos');
        console.log('Votos em Branco', ':', ((votobranco / Totaldevotos * 100).toFixed(2)) + '%');
        console.log('Votos Nulos', ':', ((votonulo / Totaldevotos * 100).toFixed(2)) + '%');

        // Determinação do Ganhador

        if (votcandidato0 > votcandidato1 && votcandidato0 > votcandidato2 && votcandidato0 > votcandidato3 && votcandidato0 > votcandidato4) {
            console.log('O ganhador é o Candidato 1 - ', candidato0);
            console.log('Total de votos válidos e os em Brancos', votobranco + votcandidato0);
        } else if (votcandidato1 > votcandidato0 && votcandidato1 > votcandidato2 && votcandidato1 > votcandidato3 && votcandidato1 > votcandidato4) {
            console.log('O ganhador é o Candidato 2 - ', candidato1);
            console.log('Total de votos válidos e os em Brancos', votobranco + votcandidato1);
        } else if (votcandidato2 > votcandidato0 && votcandidato2 > votcandidato1 && votcandidato2 > votcandidato3 && votcandidato2 > votcandidato4) {
            console.log('O ganhador é o Candidato 3 - ', candidato2);
            console.log('Total de votos válidos e os em Brancos', votobranco + votcandidato2);
        } else if (votcandidato3 > votcandidato0 && votcandidato3 > votcandidato1 && votcandidato3 > votcandidato2 && votcandidato3 > votcandidato4) {
            console.log('O ganhador é o Candidato 3 - ', candidato3);
            console.log('Total de votos válidos e os em Brancos', votobranco + votcandidato2);
        } else if (votcandidato4 > votcandidato0 && votcandidato4 > votcandidato1 && votcandidato4 > votcandidato2 && votcandidato2 > votcandidato3) {
            console.log('O ganhador é o Candidato 3 - ', candidato4);
            console.log('Total de votos válidos e os em Brancos', votobranco + votcandidato2);
        } else {
            console.log('Empate')
        }
    } else {
        console.clear();
        console.log('Não houve votação nesta urna');
        console.log('Total de Votos: ' + Totaldevotos);
    }

    console.log('******************************************')
    
    await verificarIntegridadeUrna().then(verificacao => {
        if (verificacao.status) {
            console.log('Hashes verificados, urna íntegra.');
        } else {
            console.log('URNA ADULTERADA!');
            console.log(`Hash da urna: ${verificacao.hashUrnaAtual}`);
            console.log(`Hash esperado: ${verificacao.hashVerificado}`);
        }
    });
    
    console.log('Fim do Programa');
    console.log('Horário de Término da Votação:' + '\n' + dataFim().toLocaleString());
    
    console.log('--------------------------------------------')

}


