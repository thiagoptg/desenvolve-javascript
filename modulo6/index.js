// Array de objetos Tarefa
let tarefas = [];

// Referências aos elementos
const input = document.getElementById('novaTarefa');
const botao = document.getElementById('adicionarBtn');
const lista = document.getElementById('listaTarefas');

// Adiciona nova tarefa
botao.addEventListener('click', () => {
  const descricao = input.value.trim();
  if (descricao === '') {
    alert('Digite uma descrição para a tarefa!');
    return;
  }

  const novaTarefa = { descricao, status: false };
  tarefas.push(novaTarefa);
  input.value = ''; // limpa campo
  atualizarLista();
});

// Atualiza a exibição da lista
function atualizarLista() {
  lista.innerHTML = '';
  tarefas.forEach((tarefa, index) => {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    const texto = document.createElement('span');

    checkbox.type = 'checkbox';
    checkbox.checked = tarefa.status;
    texto.textContent = tarefa.descricao;

    // estiliza se estiver concluída
    if (tarefa.status) {
      texto.classList.add('concluida');
    }

    // evento de clique no checkbox
    checkbox.addEventListener('change', () => {
      tarefas[index].status = checkbox.checked;
      atualizarLista();
    });

    li.appendChild(checkbox);
    li.appendChild(texto);
    lista.appendChild(li);
  });
}
