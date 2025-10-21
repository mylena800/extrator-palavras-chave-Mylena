const botaoMostraPalavras = document.querySelector("#botao-palavrachave");

botaoMostraPalavras.addEventListener("click", mostraPalavrasChave);

function mostraPalavrasChave(){
    const texto = document.querySelector("#entrada-de-texto").ariaValueMax;
    const campoResultado = document.querySelector("#resultado-palavrachave");
    cont palavras = texto.split(" ");

    campoResultado = palavras.join(", ")
}