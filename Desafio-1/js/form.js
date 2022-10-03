



var botaoAdicionar = document.querySelector("#adicionar-cliente");
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var cliente = obtemClienteDoFormulario(form);

    var erros = validacliente(cliente);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);

        return;
    }

    adicionaclienteNaTabela(cliente);

    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});

function obtemClienteDoFormulario(form) {

    var cliente = {
        cpf: form.cpf.value,
        nome: form.nome.value,
        dataNascimento: form.dataNascimento.value,
        renda: form.renda.value,
        idade: calculaIdade(form.dataNascimento.value)
    }
    console.log(cliente);
    return cliente;
}

function montaTr(cliente) {
    var clienteTr = document.createElement("tr");
    clienteTr.classList.add("cliente");

    clienteTr.appendChild(montaTd(cliente.cpf, "info-cpf"));
    clienteTr.appendChild(montaTd(cliente.nome, "info-nome"));
    clienteTr.appendChild(montaTd(cliente.dataNascimento, "info-dataNascimento"));
    clienteTr.appendChild(montaTd(cliente.idade, "info-idade"));
    clienteTr.appendChild(montaTd(cliente.renda, "info-renda"));
    return clienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function validacliente(cliente) {

    var erros = [];

    if (cliente.nome.length == 0) {
        erros.push("Informe o nome do cliente!");
    }

    if (cliente.cpf.length == 0) {
        erros.push("O campo CPF deve ser preenchido");
    }

    if (cliente.dataNascimento.length == 0) {
        erros.push("A data deve ser preenchida");
    }

    if (cliente.renda.length == 0) {
        erros.push("A renda deve ser informada");
    }

    return erros;
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function (erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function adicionaclienteNaTabela(cliente) {
    var clienteTr = montaTr(cliente);
    var tabela = document.querySelector("#tabela-clientes");
    tabela.appendChild(clienteTr);
    var total = document.querySelector("#totalizador");
    total.textContent=(somaRenda(cliente.renda));
}
