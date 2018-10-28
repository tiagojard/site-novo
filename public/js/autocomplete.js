function EscondeLimparBusca(){
  document.getElementById("limpar-input-mobile").style.display = "none";
}

function MostrarLimparBusca(){
  document.getElementById("limpar-input-mobile").style.display = "block";
}

function FocusBuscaMobile(){
  document.getElementById("input-busca-mobile").focus();
}

/* abrir aba consulta */
document.getElementById("topo-busca-search-icon").onclick = function() {
  document.getElementById("busca-mobile").classList.add("topo-busca-mobile-ativo");
  document.getElementById("input-busca-mobile").style.display = "block";
  if(document.getElementById("input-busca-mobile").value.length > 0)
      MostrarLimparBusca();
  FocusBuscaMobile();
};

/* sair consulta mobile */
document.getElementById("topo-busca-arrow-icon").onclick = function() {
  document.getElementById("busca-mobile").classList.remove("topo-busca-mobile-ativo");
  document.getElementById("input-busca-mobile").style.display = "none";
  EscondeLimparBusca();
  document.getElementById("input-busca-mobile").value = "";
};

/* limpar consulta */
document.getElementById("limpar-input-mobile").onclick = function() {
  document.getElementById("input-busca-mobile").value = "";
  EscondeLimparBusca();
  FocusBuscaMobile();
};

/* quando digitar mostrar botão limpar consulta */
document.getElementById("input-busca-mobile").onkeyup = function() {
if(this.value.length > 0)
    MostrarLimparBusca();
else
    EscondeLimparBusca();
};

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}