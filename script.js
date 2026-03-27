const btnNao = document.getElementById('btn-nao');
const btnSim = document.getElementById('btn-sim');

// Posiciona o botão "Não" logo abaixo do "Sim" quando a página carrega
window.addEventListener('load', () => {
    resetarBotaoNao();
});

// Se a janela mudar de tamanho, reposiciona para não quebrar
window.addEventListener('resize', () => {
    resetarBotaoNao();
});

function resetarBotaoNao() {
    const rectSim = btnSim.getBoundingClientRect();
    // Coloca o botão NÃO 20px abaixo do botão SIM
    btnNao.style.left = rectSim.left + 'px';
    btnNao.style.top = (rectSim.bottom + 20) + 'px';
}

function fugirNao() {
    const larguraBotao = btnNao.offsetWidth;
    const alturaBotao = btnNao.offsetHeight;

    // Calcula limites para o botão não sair da tela
    const maxX = window.innerWidth - larguraBotao;
    const maxY = window.innerHeight - alturaBotao;

    // Gera coordenadas aleatórias
    const novoX = Math.random() * maxX;
    const novoY = Math.random() * maxY;

    // Aplica as novas coordenadas
    btnNao.style.left = novoX + 'px';
    btnNao.style.top = novoY + 'px';
}

function responderSim() {
    document.getElementById('tela-pergunta').style.display = 'none';
    document.getElementById('tela-resposta').style.display = 'flex';
}
