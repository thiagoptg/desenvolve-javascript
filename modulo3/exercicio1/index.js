// 1 - Definir um array de objetos para armazenar os livros no estoque
let estoqueLivros = [];

// 2 - Função para adicionar um livro ao estoque
function adicionarLivro(titulo, autor, quantidade) {
  // Verificar se o livro já existe no estoque
  let livroExistente = estoqueLivros.find(livro => livro.titulo === titulo);
  
  if (livroExistente) {
    // Se já existir, adicionar a quantidade ao livro existente
    livroExistente.quantidade += quantidade;
    console.log(`Quantidade atualizada do livro "${titulo}".`);
  } else {
    // Se não existir, adicionar o livro novo
    let novoLivro = {
      titulo: titulo,
      autor: autor,
      quantidade: quantidade
    };
    estoqueLivros.push(novoLivro);
    console.log(`Livro "${titulo}" adicionado ao estoque.`);
  }
}

// 3 - Função para remover um livro do estoque pelo título
function removerLivro(titulo) {
  // Verificar se o livro existe no estoque
  let livroIndex = estoqueLivros.findIndex(livro => livro.titulo === titulo);
  
  if (livroIndex !== -1) {
    // Se o livro existir, remover do estoque
    estoqueLivros.splice(livroIndex, 1);
    console.log(`Livro "${titulo}" removido do estoque.`);
  } else {
    console.log(`O livro "${titulo}" não foi encontrado no estoque.`);
  }
}

// 4 - Função para atualizar a quantidade de um livro no estoque
function atualizarQuantidade(titulo, novaQuantidade) {
  // Verificar se o livro existe no estoque
  let livro = estoqueLivros.find(livro => livro.titulo === titulo);
  
  if (livro) {
    // Atualizar a quantidade do livro
    livro.quantidade = novaQuantidade;
    console.log(`Quantidade do livro "${titulo}" atualizada para ${novaQuantidade}.`);
  } else {
    console.log(`O livro "${titulo}" não foi encontrado no estoque.`);
  }
}

// 5 - Função para listar todos os livros no estoque
function listarLivros() {
  if (estoqueLivros.length === 0) {
    console.log("Não há livros no estoque.");
    return;
  }
  console.log("Livros no estoque:");
  estoqueLivros.forEach(livro => {
    console.log(`Título: "${livro.titulo}", Autor: ${livro.autor}, Quantidade: ${livro.quantidade}`);
  });
}

// Exemplo de uso:
adicionarLivro("O Senhor dos Anéis", "J.R.R. Tolkien", 5);
adicionarLivro("Dom Casmurro", "Machado de Assis", 3);
listarLivros();

atualizarQuantidade("Dom Casmurro", 10);
listarLivros();

removerLivro("O Senhor dos Anéis");
listarLivros();
