document.getElementById('tela').innerHTML = localStorage.getItem('dados');


function leituraDados(){
    const dados ={
       candidato: document.getElementById('candidato').value,
       codigo: document.getElementById('codigo').value,
       partido: document.getElementById('partido').value
    } 

    localStorage.setItem('dados', JSON.stringify(dados));

    document.getElementById('tela').innerHTML = JSON.stringify(dados);
}

function removeDados() {
    localStorage.removeItem('dados');

    document.getElementById('tela').innerHTML = '';
}


