var tabela = document.querySelector("#tabela-clientes");
//var renda = document.querySelector("#renda-clientes");
//var rendaTotal = document.getElementById("#totalizador");
var cliente = document.querySelector("#cliente")

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function() {
        event.target.parentNode.remove();
        var total = document.getElementById("#totalizador");
        //continuar
        //total.textContent(Number(total-1));
        

    }, 500);

});

