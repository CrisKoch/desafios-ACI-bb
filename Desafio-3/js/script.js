document.getElementById("btnSubmit").onclick = function () {
  var radios = document.getElementsByName("perfil");
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      carregaInfo(radios[i].value);
    }
  }
};

function carregaInfo(id) {
  switch (id) {
    case "private":
      abreModal("investimentos");
      break;

    case "exclusivo":
      abreModal("financiamentos");
      break;

    case "carteirao":
      abreModal("renegociacaoDividas");
      break;

    default:
      break;
  }
}

function abreModal(tipo) {
  window.open(`${tipo}.html`, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=50,left=500,width=400,height=400");
}
