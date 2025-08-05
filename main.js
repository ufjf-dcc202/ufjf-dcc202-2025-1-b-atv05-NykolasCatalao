// Inicialização das estruturas da página
const tabuleiro = document.querySelector("#tabuleiro");
const mensagem = document.querySelector("#mensagem");

// Inicialização do tabuleiro 
const posicaoInicial = ["preta","preta","preta", "","branca","branca","branca"];
let posicao = structuredClone(posicaoInicial); // Cópia da posição inicial do tabuleiro

function renderizarTabuleiro() {
    tabuleiro.innerHTML = "";
    for (let i = 0; i < posicao.length; i++) {
        const casa = document.createElement('div');
        casa.className = "casa";
        casa.dataset.index = i;

        if (posicao[i] === "preta" || posicao[i] === "branca") {
            const peca = document.createElement('div');
            peca.className = `peca ${posicao[i] === "preta" ? "preta" : "branca"}`;
            casa.appendChild(peca);
        }

        
        tabuleiro.appendChild(casa);
    };
}

renderizarTabuleiro();