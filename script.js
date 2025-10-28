const botaoMostraPalavras = document.querySelector("#botao-palavrachave");

botaoMostraPalavras.addEventListener("click", mostraPalavrasChave);

function mostraPalavrasChave(){
    const texto = document.querySelector("#entrada-de-texto").value;
    const campoResultado = document.querySelector("#resultado-palavrachave");
    const palavrasChave = procesaTexto(texto);

    campoResultado.textContent = palavrasChave.join(", ")
}

function procesaTexto(texto){
    let palavras = texto.split(/\P{L}+/u);
    const frequencias = contraFrequencias(palavras);
    let ordenadas = objrct.keys(frequencias).sort(ordenaPalavra);

    function ordenaPalavra(p1, p2){
        return frequencias [p2] - frequencias[p1];
    }
    return ordenadas.slice(0,110);

}

function contaFrequencias(palavras){
    let frequencias = {};

    for (let i of palavras){
        frequencias[i]=0;

        for (let j of palavras){
            if(i == j){
                frequencias[i]++;
            }
        }
    }

    return palavras;




}