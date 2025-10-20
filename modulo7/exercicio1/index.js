const campoBusca = document.getElementById("campoBusca");
const btnBuscar = document.getElementById("btnBuscar");
const listaUsuarios = document.getElementById("listaUsuarios");
const mensagem = document.getElementById("mensagem");

btnBuscar.addEventListener("click", async () => {
  const termo = campoBusca.value.trim();
  listaUsuarios.innerHTML = "";
  mensagem.textContent = "";

  if (termo === "") {
    mensagem.textContent = "Digite um nome para pesquisar.";
    return;
  }

  try {
    // Busca usuários na API do GitHub
    const resposta = await fetch(`https://api.github.com/search/users?q=${termo}`);
    const dados = await resposta.json();

    if (dados.total_count === 0) {
      mensagem.textContent = "Não foram encontrados usuários para esta pesquisa.";
      return;
    }

    dados.items.forEach(usuario => {
      const li = document.createElement("li");
      li.innerHTML = `
        <img src="${usuario.avatar_url}" alt="${usuario.login}">
        <div>
          <a href="${usuario.html_url}" target="_blank">${usuario.login}</a><br>
          <span>ID: ${usuario.id}</span>
        </div>
      `;
      listaUsuarios.appendChild(li);
    });

  } catch (erro) {
    console.error("Erro ao buscar usuários:", erro);
    mensagem.textContent = "Ocorreu um erro ao buscar usuários.";
  }
});
