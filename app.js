let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function exibirMensagemInicial() {
exibirTextoNaTela('h1', 'Bem-vindo ao jogo do número secreto');
exibirTextoNaTela('p', 'Tente adivinhar o número secreto entre 1 e 10.');
}
 
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela ('h1','Parabéns!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você acertou o número secreto em ${tentativas} ${palavraTentativas}!`;
        exibirTextoNaTela ('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }

        else {
            if (chute < numeroSecreto) {
                exibirTextoNaTela ('h1','Você errou! O número secreto é maior!');
                exibirTextoNaTela ('p','Tente novamente!');
            }
            else if (chute > numeroSecreto) {
                exibirTextoNaTela ('h1','Você errou! O número secreto é menor!');
                exibirTextoNaTela ('p','Tente novamente!');
            }tentativas++;
            limparCampo();
         }
    
}

function limparCampo() {
    let campo = document.querySelector('input');
    campo.value = '';
}

function reiniciarJogo() {
    tentativas = 1;
    numeroSecreto = gerarNumeroAleatorio();
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    limparCampo();
} 
document.getElementById('reiniciar').setAttribute('disabled', true);
document.getElementById('reiniciar').addEventListener('click', reiniciarJogo);  


function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
    
}