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

        casa.addEventListener("click", () => moverPeca(i));
        tabuleiro.appendChild(casa);
    };
}

function moverPeca(i) {
    const vazio = posicao.indexOf("");
    const distancia = Math.abs(vazio - i);
    // Se a casa escolhida possuir uma peça e o movimento obedecer às regras
    if((distancia === 1 || distancia === 2) && posicao[i] !== "") {
        mensagem.textContent = "";
        mensagem.classList.remove("ok");

        let aux = posicao[i];
        posicao[i] = posicao[vazio];
        posicao[vazio] = aux;

        renderizarTabuleiro();

        //Confere se todas as peças estão no lugar correto para determinar o fim do jogo
        if (fimDoJogo()) {
            mensagem.textContent = "Fim de jogo! Todas as peças estão no local correto. Parabéns!"
            mensagem.classList.add("ok");
            casa.removeEventListener("click", moverPeca);
        }
    } else {
        mensagem.textContent = "Movimento inválido!";
        mensagem.classList.remove("ok");
    }
}

function fimDoJogo() {
    let verificador = JSON.stringify(posicao) === JSON.stringify(["branca","branca","branca", "", "preta","preta","preta"]);
    return verificador;
}

renderizarTabuleiro();