let jogadorEscolha = 0;
let jogadorPontos = 0;
let computadorEscolha = 0;
let computadorPontos = 0;
let ganhador = -1;

function jogar(escolha) {
    jogadorEscolha = escolha;
    computadorEscolha = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

    /* PEDRA = 1
    PAPEL = 2
    TESOURA = 3 */

    // Pedra e Pedra = EMPATE
    if (jogadorEscolha == 1 && computadorEscolha == 1) {
        ganhador = 0;
    // Pedra e Papel = Papel
    } else if (jogadorEscolha  == 1 && computadorEscolha == 2) {
        ganhador = 2;
    // Pedra e Tesoura = Pedra
    } else if (jogadorEscolha == 1 && computadorEscolha == 3) {
        ganhador = 1;
    // Papel e Pedra = Pedra
    } else if (jogadorEscolha == 2 && computadorEscolha == 1) {
        ganhador = 1
    // Papel e Papel = EMPATE
    } else if (jogadorEscolha == 2 && computadorEscolha == 2) {
        ganhador = 0
    // Papel e Tesoura = Tesoura
    } else if (jogadorEscolha == 2 && computadorEscolha == 3) {
        ganhador = 2
    // Tesouara e Papel = Tesoura
    } else if (jogadorEscolha == 3 && computadorEscolha == 1) {
        ganhador = 1
    // Tesoura e Pedra = COMPUTADOR
    } else if (jogadorEscolha == 3 && computadorEscolha == 2) {
        ganhador = 2
    // Tesoura e Tesoura: EMPATE
    } else if (jogadorEscolha == 3 && computadorEscolha == 3) {
        ganhador = 0
    } 

    document.getElementById('jogadorEscolha1').classList.remove
    ('selecionado');
    document.getElementById('jogadorEscolha2').classList.remove
    ('selecionado');
    document.getElementById('jogadorEscolha3').classList.remove
    ('selecionado');
    document.getElementById('computadorEscolha1').classList.remove
    ('selecionado');
    document.getElementById('computadorEscolha2').classList.remove
    ('selecionado');
    document.getElementById('computadorEscolha3').classList.remove
    ('selecionado');

    document.getElementById('jogadorEscolha'+jogadorEscolha).classList.add('selecionado');
    document.getElementById('computadorEscolha'+computadorEscolha).classList.add('selecionado');


    /*
    EMPATE = 0;
    JOGADOR = 1;
    COMPUTADOR = 2;
    */

    if (ganhador == 0) {
        document.getElementById('mensagem').innerHTML = "EMPATE"
    } if (ganhador == 1) {
        document.getElementById('mensagem').innerHTML = "STEVE VENCEU"
        jogadorPontos++;
    } if (ganhador == 2) {
        document.getElementById('mensagem').innerHTML = "HREOBRINE VENCEU"
        computadorPontos++;
    }

    document.getElementById('jogadorPontos').innerHTML = jogadorPontos;
    document.getElementById('computadorPontos').innerHTML = computadorPontos;
}