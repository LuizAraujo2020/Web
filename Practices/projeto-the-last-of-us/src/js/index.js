
/*
    OBJETIVO - quando clicar num botão temos que mostrar a imagem de fundo correspondente.
    
    1º - dar um jeito de pegar o elemento HTML dos botoões
    2º - dar um jeito de identificar o clique do usuário no botão
    3º - desmarcar o botão que estava selecionado antes do clique
    4º - marcar o botão que for selecionado
    5º - esconder a imagem anterior
    6º - fazer aparecer a imagem correspondente.
*/


// console.log(document.querySelectorAll('.botao'));
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        dasativarBotaoSelecionado();

        selecionarBotaoCarrossel(botao);

        esconderImagemAtiva();

        mostrarImagemDeFundo(indice);
    });
});

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function dasativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
