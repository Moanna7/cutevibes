const btnNao = document.getElementById('btn-nao');

// Espera o botão carregar pra pegar o tamanho real
window.addEventListener('load', () => {
  let posX = window.innerWidth / 2 - btnNao.offsetWidth / 2;
  let posY = window.innerHeight * 0.72;

  btnNao.style.left = posX + 'px';
  btnNao.style.top  = posY + 'px';

  window._posX = posX;
  window._posY = posY;
});

function fugirNao() {
  let posX = window._posX;
  let posY = window._posY;
  const margem = 20;
  let novoX, novoY;
  let tentativas = 0;
  do {
    novoX = margem + Math.random() * (window.innerWidth - btnNao.offsetWidth - margem * 2);
    novoY = margem + Math.random() * (window.innerHeight - btnNao.offsetHeight - margem * 2);
    tentativas++;
  } while (
    Math.abs(novoX - posX) < 100 &&
    Math.abs(novoY - posY) < 100 &&
    tentativas < 10
  );
  window._posX = novoX;
  window._posY = novoY;
  btnNao.style.transition = 'left 0.25s ease, top 0.25s ease';
  btnNao.style.left = novoX + 'px';
  btnNao.style.top  = novoY + 'px';
}

function responderSim() {
  document.getElementById('tela-pergunta').style.display = 'none';
  document.getElementById('tela-resposta').style.display = 'flex';
}
