function EscondeLimparBusca(){document.getElementById("limpar-input-mobile").style.display="none"}function MostrarLimparBusca(){document.getElementById("limpar-input-mobile").style.display="block"}function FocusBuscaMobile(){document.getElementById("input-busca-mobile").focus()}function shuffle(e){for(var o,t,n=e.length;0!==n;)t=Math.floor(Math.random()*n),o=e[n-=1],e[n]=e[t],e[t]=o;return e}document.getElementById("topo-busca-search-icon").onclick=function(){document.getElementById("busca-mobile").classList.add("topo-busca-mobile-ativo"),document.getElementById("input-busca-mobile").style.display="block",document.getElementById("input-busca-mobile").value.length>0&&MostrarLimparBusca(),FocusBuscaMobile()},document.getElementById("topo-busca-arrow-icon").onclick=function(){document.getElementById("busca-mobile").classList.remove("topo-busca-mobile-ativo"),document.getElementById("input-busca-mobile").style.display="none",EscondeLimparBusca(),document.getElementById("input-busca-mobile").value=""},document.getElementById("limpar-input-mobile").onclick=function(){document.getElementById("input-busca-mobile").value="",EscondeLimparBusca(),FocusBuscaMobile()},document.getElementById("input-busca-mobile").onkeyup=function(){this.value.length>0?MostrarLimparBusca():EscondeLimparBusca()};var prevScrollpos=window.pageYOffset;window.onscroll=function(){var e=window.pageYOffset;prevScrollpos>e?document.getElementById("topo").classList.remove("topo-hide"):document.getElementById("topo").classList.add("topo-hide"),e<2&&document.getElementById("topo").classList.remove("topo-hide"),prevScrollpos=e};

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    var Objeto = { 
        "id": profile.getId(),
        "nome": profile.getName(),
        "imagem":profile.getImageUrl(),
        "email":profile.getEmail(),
    }  
    AdicionarUsuario(Objeto)
}



function AdicionarUsuario(Objeto){
    fetch("https://guiadesenvolvedor-78a46.firebaseio.com/usuario.json", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Objeto)
    })
    .then(res => res.json())
    .then(
        (result) => {
            try {
                console.log(result.name);
            } catch (error) {
                console.log(error);
            }
        },
        (error) => {
        
        }
    );
}   
