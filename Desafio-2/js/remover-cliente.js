
//REFAZER COM METODO DELETE
var tabela = document.querySelector("#tabela");
var cliente = document.querySelector("#cliente");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function() {
        event.target.parentNode.remove();
        var total = document.getElementById("#totalizador");
        //continuar funcao para atualizar renda total
        //total.textContent(Number(total-1));
        

    }, 500);

});

