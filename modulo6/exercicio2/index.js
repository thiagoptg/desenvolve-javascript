// Array para armazenar nomes
let curtidas = [];

// Referências ao DOM
const nomeInput = document.getElementById('nomeInput');
const curtirBtn = document.getElementById('curtirBtn');
const mensagem = document.getElementById('mensagem');

// Evento de clique no botão
curtirBtn.addEventListener('click', () => {
  const nome = nomeInput.value.trim();

  if (nome === '') {
    alert('Digite um nome antes de curtir!');
    return;
  }

  // Verifica se o nome já está no array
  if (!curtidas.includes(nome)) {
    curtidas.push(nome);
  } else {
    alert(`${nome} já curtiu!`);
  }

  nomeInput.value = ''; // limpa campo
  atualizarMensagem();
});

// Atualiza o texto conforme o número de curtidas
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
