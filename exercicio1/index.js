
function soma(a, b) {
  return a + b;
}

function subtrai(a, b) {
  return a - b;
}

function multiplica(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}


function mostraResultado(num1, num2) {
  console.log(`Soma entre ${num1} e ${num2}:`, soma(num1, num2));
  console.log(`Subtração entre ${num1} e ${num2}:`, subtrai(num1, num2));
  console.log(`Multiplicação entre ${num1} e ${num2}:`, multiplica(num1, num2));
  console.log(`Divisão entre ${num1} e ${num2}:`, divide(num1, num2));
}


mostraResultado(10, 5);
