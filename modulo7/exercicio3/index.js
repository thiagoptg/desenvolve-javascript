const form = document.getElementById('postForm');
const feed = document.getElementById('feed');
const textoPost = document.getElementById('textoPost');

// Array de posts (em memória)
let posts = [];

// Função para formatar data e hora
function formatarData() {
  const agora = new Date();
  return agora.toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' });
}

// Função para buscar imagem aleatória de gatinho
async function buscarGatinho() {
  const resposta = await fetch('https://api.thecatapi.com/v1/images/search');
  const dados = await resposta.json();
  return dados[0].url;
}

// Função para criar um novo post
async function criarPost(texto) {
  const imagemGato = await buscarGatinho();

  const novoPost = {
    data: formatarData(),
    usuario: 'thiago_alexandre',
    avatar: 'https://avatars.githubusercontent.com/u/9919?s=200&v=4', // exemplo: avatar genérico do GitHub
    texto: texto,
    imagem: imagemGato,
    likes: 0
  };

  posts.unshift(novoPost); // adiciona no início do array
  atualizarFeed();
}

// Atualiza o feed na tela
function atualizarFeed() {
  feed.innerHTML = '';

  posts.forEach((post, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <div class="post-header">
        <img src="${post.avatar}" alt="Avatar de ${post.usuario}">
        <div>
          <strong>@${post.usuario}</strong><br>
          <span class="post-date">${post.data}</span>
        </div>
      </div>
      <p class="post-text">${post.texto}</p>
      <img class="post-cat" src="${post.imagem}" alt="Gatinho fofo">
      <div class="like-section">
        <button class="like-btn">Curtir ❤️</button>
        <span>${post.likes} likes</span>
      </div>
    `;

    // Botão de curtir
    const btnCurtir = li.querySelector('.like-btn');
    const contador = li.querySelector('.like-section span');

    btnCurtir.addEventListener('click', () => {
      posts[index].likes++;
      contador.textContent = `${posts[index].likes} likes`;
    });

    feed.appendChild(li);
  });
}

// Evento de envio do formulário
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const texto = textoPost.value.trim();
  if (texto === '') {
    alert('Digite algo para postar!');
    return;
  }

  await criarPost(texto);
  textoPost.value = '';
});
