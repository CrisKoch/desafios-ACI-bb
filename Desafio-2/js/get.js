function fazGet(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText;
  // fetch(url)
  // .then((response) => response.json())
  // .then((data) => console.log(data));

}