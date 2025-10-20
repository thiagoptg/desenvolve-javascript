// Referências aos elementos do DOM
const nomeInput = document.getElementById('nomeInput');
const curtirBtn = document.getElementById('curtirBtn');
const limparBtn = document.getElementById('limparBtn');
const mensagem = document.getElementById('mensagem');

// Carrega a lista de curtidas do localStorage
let curtidas = JSON.parse(localStorage.getItem('curtidas')) || [];

// Atualiza a mensagem ao carregar a página
atualizarMensagem();

// Botão "Curtir"
curtirBtn.addEventListener('click', () => {
  const nome = nomeInput.value.trim();

  if (nome === '') {
    alert('Digite um nome antes de curtir!');
    return;
  }

  // Evita duplicados
  if (curtidas.includes(nome)) {
    alert(`${nome} já curtiu!`);
    return;
  }

  curtidas.push(nome);
  localStorage.setItem('curtidas', JSON.stringify(curtidas)); // salva no localStorage

  nomeInput.value = '';
  atualizarMensagem();
});

// Botão "Limpar"
limparBtn.addEventListener('click', () => {
  if (confirm('Deseja realmente limpar todas as curtidas?')) {
    curtidas = [];
    localStorage.removeItem('curtidas'); // remove do localStorage
    atualizarMensagem();
  }
});

// Atualiza o texto conforme a quantidade de curtidas
function atualizarMensagem() {
  const qtd = curtidas.length;

  if (qtd === 0) {
    mensagem.textContent = 'Ninguém curtiu';
  } else if (qtd === 1) {
    mensagem.textContent = `${curtidas[0]} curtiu`;
  } else if (qtd === 2) {
    mensagem.textContent = `${curtidas[0]} e ${curtidas[1]} curtiram`;
  } else {
    mensagem.textContent = `${curtidas[0]}, ${curtidas[1]} e mais ${qtd - 2} pessoas curtiram`;
  }
}
