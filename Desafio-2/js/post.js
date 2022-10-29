//refazer post
// function fazPost(cliente) {
//   let url = "https://www.ksamochvalov.com/academia/inserirCliente.php";
//   let request = new XMLHttpRequest();

//   request.open("POST", url, false);
//   request.send(JSON.stringify(cliente));
//   return request.responseText;
// }
function fazPost(cliente) {
  fetch('https://www.ksamochvalov.com/academia/inserirCliente.php', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cliente),
  })
    .then((response) => response.json())
    .then((cliente) => {
      console.log("Success:", cliente);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}