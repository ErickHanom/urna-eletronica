document.getElementById('tela').innerHTML = localStorage.getItem('dados');


function leituraDados(){
    // const dados ={
    //    candidato: document.getElementById('candidato').value,
    //    codigo: document.getElementById('codigo').value,
    //    partido: document.getElementById('partido').value
    // } 

    let config = urnaConfiguracao();

    for(config = 0; config <= config.length; config++) {

        document.write((`Nº: ${candidatos[i][0]} | Nome: ${candidatos [i] [1]} | Partido: ${candidatos [i] [2]}`));

    }

    localStorage.setItem('dados', JSON.stringify(dados));

    document.getElementById('tela').innerHTML = JSON.stringify(dados);
}

function removeDados() {
    localStorage.removeItem('dados');

    document.getElementById('tela').innerHTML = '';
}


