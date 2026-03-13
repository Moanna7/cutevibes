
const btnNao = document.getElementById('btn-nao');

// Posição inicial do botão NÃO
// (começa centralizado na tela)
let posX = window.innerWidth / 2 - 200;
let posY = window.innerHeight * 0.65;

// Aplica posição inicial
btnNao.style.left = posX + 'px';
btnNao.style.top  = posY + 'px';

// Função chamada quando o mouse passa por cima
function fugirNao() {
  const margem = 80; // quanto de espaço deixar das bordas

  // Gera uma nova posição aleatória na tela
  // que NÃO seja perto da posição atual
  let novoX, novoY;
  let tentativas = 0;

  do {
    novoX = margem + Math.random() * (window.innerWidth  - margem * 2);
    novoY = margem + Math.random() * (window.innerHeight - margem * 2);
    tentativas++;
  } while (
    // Garante que o botão não apareça no mesmo lugar
    Math.abs(novoX - posX) < 100 &&
    Math.abs(novoY - posY) < 100 &&
    tentativas < 10
  );

  posX = novoX;
  posY = novoY;

  // Move o botão com animação suave
  btnNao.style.transition = 'left 0.25s ease, top 0.25s ease';
  btnNao.style.left = posX + 'px';
  btnNao.style.top  = posY + 'px';
}

// =============================================
//  Botão SIM — mostra a tela de resposta
// =============================================

function responderSim() {
  // Esconde a tela da pergunta
  document.getElementById('tela-pergunta').style.display = 'none';

  // Mostra a tela de resposta
  document.getElementById('tela-resposta').style.display = 'flex';
}