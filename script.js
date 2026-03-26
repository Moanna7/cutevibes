const btnNao = document.getElementById('btn-nao');

// Posição inicial do botão NÃO
let posX = window.innerWidth / 2 - btnNao.offsetWidth / 2;
let posY = window.innerHeight * 0.65;

// Aplica posição inicial
btnNao.style.left = posX + 'px';
btnNao.style.top  = posY + 'px';

// Função chamada quando o mouse passa por cima (ou toca no celular)
function fugirNao() {
  const margem = 80;

  let novoX, novoY;
  let tentativas = 0;
  do {
    novoX = margem + Math.random() * (window.innerWidth  - margem * 2);
    novoY = margem + Math.random() * (window.innerHeight - margem * 2);
    tentativas++;
  } while (
    Math.abs(novoX - posX) < 100 &&
    Math.abs(novoY - posY) < 100 &&
    tentativas < 10
  );

  posX = novoX;
  posY = novoY;

  btnNao.style.transition = 'left 0.25s ease, top 0.25s ease';
  btnNao.style.left = posX + 'px';
  btnNao.style.top  = posY + 'px';
}

// Botão SIM — mostra a tela de resposta
function responderSim() {
  document.getElementById('tela-pergunta').style.display = 'none';
  document.getElementById('tela-resposta').style.display = 'flex';
}
