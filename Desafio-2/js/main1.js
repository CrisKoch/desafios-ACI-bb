//https://www.ksamochvalov.com/academia/inserirClientes.php
//https://www.ksamochvalov.com/academia/removerClientes.php

function criaLinha(cliente) {
  linha = document.createElement("tr");
  linha.classList.add("cliente"); //adicionei classe "cliente" para cada linha
  tdId = document.createElement("td");
  tdNome = document.createElement("td");
  tdIdade = document.createElement("td");
  tdRenda = document.createElement("td");
  tdCPF = document.createElement("td");

  tdId.innerHTML = cliente.id;
  tdNome.innerHTML = cliente.nome;
  tdCPF.innerHTML = cliente.cpf;
  //retirar
  console.log(cliente.data_nascimento);
  //calculaIdade esta dando NaN
  tdIdade.innerHTML = calculaIdade(cliente.data_nascimento);
  tdRenda.innerHTML = cliente.renda;

  //linha.appendChild(tdId);
  linha.appendChild(tdNome);
  linha.appendChild(tdCPF);
  linha.appendChild(tdIdade);
  linha.appendChild(tdRenda);

  return linha;
}

function main() {

  let data = fazGet("https://www.ksamochvalov.com/academia/listarClientes.php?matricula=F2191035");
  console.log(data);
  let usuarios = JSON.parse(data);
  let tabela = document.getElementById("tabela");
  let somatorio = document.getElementById("somatorio");

  usuarios.forEach(element => {
    let linha = criaLinha(element);
    tabela.appendChild(linha);
  })

  let total = usuarios.reduce((a, b) => a + Number(b.renda), 0);
  somatorio.innerHTML = total;



}

main();

