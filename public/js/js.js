function EscondeLimparBusca(){document.getElementById("limpar-input-mobile").style.display="none"}function MostrarLimparBusca(){document.getElementById("limpar-input-mobile").style.display="block"}function FocusBuscaMobile(){document.getElementById("input-busca-mobile").focus()}function shuffle(e){for(var t,o,n=e.length;0!==n;)o=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[o],e[o]=t;return e}document.getElementById("topo-busca-search-icon").onclick=function(){document.getElementById("busca-mobile").classList.add("topo-busca-mobile-ativo"),document.getElementById("input-busca-mobile").style.display="block",document.getElementById("input-busca-mobile").value.length>0&&MostrarLimparBusca(),FocusBuscaMobile()},document.getElementById("topo-busca-arrow-icon").onclick=function(){document.getElementById("busca-mobile").classList.remove("topo-busca-mobile-ativo"),document.getElementById("input-busca-mobile").style.display="none",EscondeLimparBusca(),document.getElementById("input-busca-mobile").value=""},document.getElementById("limpar-input-mobile").onclick=function(){document.getElementById("input-busca-mobile").value="",EscondeLimparBusca(),FocusBuscaMobile()},document.getElementById("input-busca-mobile").onkeyup=function(){this.value.length>0?MostrarLimparBusca():EscondeLimparBusca()};