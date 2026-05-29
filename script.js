// Associamos a função ao escopo global (janela) porque você está usando type="module" no HTML
window.calcular = function () {
  // 1. Evita que a página recarregue ao clicar no botão do formulário
  event.preventDefault();

  // 2. Captura os elementos do seu HTML usando os IDs corretos
  let capitalInicial = Number(document.getElementById("capital").value);
  let taxaJuros = Number(document.getElementById("taxa").value) / 100;
  let tempo = Number(document.getElementById("tempo").value);
  let tipoJuros = Number(document.getElementById("tiposDeTaxa").value);

  // Elemento h2 onde o resultado será exibido
  let elementoResultado = document.getElementById("resultado");

  // Validação básica para não calcular com campos vazios
  if (!capitalInicial || !taxaJuros || !tempo) {
    elementoResultado.style.color = "red";
    elementoResultado.innerText = "Por favor, preencha todos os campos.";
    return;
  }

  let juros = 0;
  let montante = 0;
  let textoResultado = "";

  // 3. Realiza o cálculo dependendo da opção do <select>
  if (tipoJuros === 1) {
    juros = capitalInicial * taxaJuros * tempo;
    montante = capitalInicial + juros;
    textoResultado = `Você escolheu juros simples. O montante foi de R$ ${montante.toFixed(2)}.`;
  } else if (tipoJuros === 2) {
    // Corrigido o operador de potência para ** (ou Math.pow)
    montante = capitalInicial * (1 + taxaJuros) ** tempo;
    textoResultado = `Você escolheu juros compostos. O montante foi de R$ ${montante.toFixed(2)}.`;
  }

  // 4. Exibe o resultado final na tela
  elementoResultado.style.color = "black"; // Reseta a cor caso estivesse vermelha antes
  elementoResultado.innerText = textoResultado;
};
