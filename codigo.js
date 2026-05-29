//Conseguindo o capital inicial, taxa de juros e tempo com o usuário
let capitalInicial = Number(prompt("Digite o seu capital inicial (R$): "));
let taxaJuros = Number(prompt("Digite a sua taxa de juros (%): ")) / 100;
let tempo = Number(prompt("Digite o tempo em meses: "));

//Criando a variável de juros, tipoJuros e montante
let juros = 0;
let tipoJuros = 0;
let montante = 0;

do {
  if (tipoJuros !== 0) {
    tipoJuros = Number(
      prompt(
        "Você digitou um valor INVÁLIDO. Digite o tipo de juros que você quer: \nJuros Simples = 1\nJuros Compostos = 2",
      ),
    );
  } else {
    tipoJuros = Number(
      prompt(
        "Digite o tipo de juros que você quer: \nJuros Simples = 1\nJuros Compostos = 2",
      ),
    );
  }
} while (tipoJuros !== 1 && tipoJuros !== 2);

//Checando o tipo de Juros e vendo o montante
if (tipoJuros == 1) {
  juros = capitalInicial * taxaJuros * tempo;
  montante = capitalInicial + juros;
  alert(
    "Você escolheu os juros simples. O montante foi de R$" +
      montante.toFixed(2) +
      ".",
  );
} else {
  montante = (capitalInicial * (1 + taxaJuros)) ^ tempo;
  alert(
    "Você escolheu os juros compostos. O montante foi de R$" +
      montante.toFixed(2) +
      ".",
  );
}
