// Carrega as tarefas do localStorage ou inicia uma lista vazia
let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

// Referências
const input = document.getElementById('novaTarefa');
const botaoAdicionar = document.getElementById('adicionarBtn');
const lista = document.getElementById('listaTarefas');

// Atualiza a lista na tela
function atualizarLista() {
  lista.innerHTML = '';

  tarefas.forEach((tarefa, index) => {
    const li = document.createElement('li');

    // Container da tarefa (checkbox + texto)
    const divTarefa = document.createElement('div');
    divTarefa.classList.add('tarefa');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = tarefa.status;

    const span = document.createElement('span');
    span.textContent = tarefa.descricao;

    if (tarefa.status) span.classList.add('concluida');

    // Evento de marcar/desmarcar tarefa
    checkbox.addEventListener('change', () => {
      tarefas[index].status = checkbox.checked;
      salvarTarefas();
      atualizarLista();
    });

    divTarefa.appendChild(checkbox);
    divTarefa.appendChild(span);

    // Botão de exclusão
    const btnExcluir = document.createElement('button');
    btnExcluir.textContent = 'Excluir';
    btnExcluir.classList.add('excluir-btn');

    btnExcluir.addEventListener('click', () => {
      tarefas.splice(index, 1);
      salvarTarefas();
      atualizarLista();
    });

    li.appendChild(divTarefa);
    li.appendChild(btnExcluir);
    lista.appendChild(li);
  });
}

// Salva as tarefas no localStorage
function salvarTarefas() {
  localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

// Evento de adicionar tarefa
botaoAdicionar.addEventListener('click', () => {
  const descricao = input.value.trim();

  if (descricao === '') {
    alert('Digite uma descrição para a tarefa!');
    return;
  }

  const novaTarefa = { descricao, status: false };
  tarefas.push(novaTarefa);
  salvarTarefas();
  input.value = '';
  atualizarLista();
});

// Atualiza lista ao carregar a página
atualizarLista();
