function addBola() {
  var bola = document.createElement("div");
  bola.setAttribute("class", "bola");
  // <div class="bola"></div>

  var p1 = Math.floor(Math.random() * 500);
  var p2 = Math.floor(Math.random() * 400);
  bola.setAttribute("style", "left:" + p1 + "px;top:" + p2 + "px;");
  bola.setAttribute("onclick", "estourar(this)");

  document.body.appendChild(bola);
}
function estourar(objeto) {
  document.body.removeChild(objeto);
}
function iniciar() {
  setInterval(addBola, 1000);
}
