function EscondeLimparBusca(){document.getElementById("limpar-input-mobile").style.display="none"}function MostrarLimparBusca(){document.getElementById("limpar-input-mobile").style.display="block"}function FocusBuscaMobile(){document.getElementById("input-busca-mobile").focus()}function shuffle(e){for(var o,t,n=e.length;0!==n;)t=Math.floor(Math.random()*n),o=e[n-=1],e[n]=e[t],e[t]=o;return e}document.getElementById("topo-busca-search-icon").onclick=function(){document.getElementById("busca-mobile").classList.add("topo-busca-mobile-ativo"),document.getElementById("input-busca-mobile").style.display="block",document.getElementById("input-busca-mobile").value.length>0&&MostrarLimparBusca(),FocusBuscaMobile()},document.getElementById("topo-busca-arrow-icon").onclick=function(){document.getElementById("busca-mobile").classList.remove("topo-busca-mobile-ativo"),document.getElementById("input-busca-mobile").style.display="none",EscondeLimparBusca(),document.getElementById("input-busca-mobile").value=""},document.getElementById("limpar-input-mobile").onclick=function(){document.getElementById("input-busca-mobile").value="",EscondeLimparBusca(),FocusBuscaMobile()},document.getElementById("input-busca-mobile").onkeyup=function(){this.value.length>0?MostrarLimparBusca():EscondeLimparBusca()};var prevScrollpos=window.pageYOffset;function init(){gapi.load("auth2",function(){gapi.auth2.init()})}function onSignIn(e){var o=e.getBasicProfile();console.log("ID: "+o.getId()),console.log("Name: "+o.getName()),console.log("Image URL: "+o.getImageUrl()),console.log("Email: "+o.getEmail()),VerificarUsuario({id:o.getId(),nome:o.getName(),imagem:o.getImageUrl(),email:o.getEmail()})}function signOut(){gapi.auth2.getAuthInstance().signOut().then(function(){console.log("User signed out."),setCookie("usuario","",0),window.location.href="/"})}function VerificarUsuario(e){fetch("https://guiadesenvolvedor-78a46.firebaseio.com/usuario.json?orderBy=%22id%22&equalTo=%22"+e.id+"%22").then(e=>e.json()).then(o=>{0==Object.keys(o).length?AdicionarUsuario(e):(setCookie("usuario",JSON.stringify(e),1),""==window.location.search?window.location.href="/":window.location.href=window.location.search.replace("?referrer=",""))},e=>{})}function AdicionarUsuario(e){fetch("https://guiadesenvolvedor-78a46.firebaseio.com/usuario.json",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then(e=>e.json()).then(o=>{try{o.name.length>0&&(setCookie("usuario",JSON.stringify(e),1),""==window.location.search?window.location.href="/":window.location.href=window.location.search.replace("?referrer=",""))}catch(e){console.log(e)}},e=>{})}function setCookie(e,o,t){var n=new Date;n.setTime(n.getTime()+24*t*60*60*1e3);var i="expires="+n.toUTCString();document.cookie=e+"="+o+";"+i+";path=/"}function getCookie(e){for(var o=e+"=",t=decodeURIComponent(document.cookie).split(";"),n=0;n<t.length;n++){for(var i=t[n];" "==i.charAt(0);)i=i.substring(1);if(0==i.indexOf(o))return i.substring(o.length,i.length)}return""}window.onscroll=function(){var e=window.pageYOffset;prevScrollpos>e?document.getElementById("topo").classList.remove("topo-hide"):document.getElementById("topo").classList.add("topo-hide"),e<2&&document.getElementById("topo").classList.remove("topo-hide"),prevScrollpos=e},null!=document.getElementById("sair")&&document.getElementById("sair").addEventListener("click",signOut),window.onload=function(){init()};




function testenovo(){
    fetch(`https://guiadesenvolvedor-78a46.firebaseio.com/pergunta.json`)
        .then(res => res.json())
        .then(
            (result) => { 
               var array = Object.values(result);
               for(var i = 0; i < array.length; i++){
                    var obj = array[i];
                    var respostas = obj.Respostas;
                    

                    if(respostas != undefined)
                    {
                       
                        if(respostas.length > 1){
                            obj.Respostas[0].usuario = "101976706188467675046";
                            obj.Respostas[0].usuario_nome = "guia desenvolvedor";
                            obj.Respostas[0].usuario_imagem = "https://lh4.googleusercontent.com/-59Shbax2tkM/AAAAAAAAAAI/AAAAAAAAAAA/AGDgw-iz5kJ5oZj3DKfsj0Iv_l3F3eTPIQ/s96-c/photo.jpg";
                        
                        
                            obj.Respostas[1].usuario = "101976706188467675046";
                            obj.Respostas[1].usuario_nome = "guia desenvolvedor";
                            obj.Respostas[1].usuario_imagem = "https://lh4.googleusercontent.com/-59Shbax2tkM/AAAAAAAAAAI/AAAAAAAAAAA/AGDgw-iz5kJ5oZj3DKfsj0Iv_l3F3eTPIQ/s96-c/photo.jpg";
                        }
                        else{
                            obj.Respostas[0].usuario = "101976706188467675046";
                            obj.Respostas[0].usuario_nome = "guia desenvolvedor";
                            obj.Respostas[0].usuario_imagem = "https://lh4.googleusercontent.com/-59Shbax2tkM/AAAAAAAAAAI/AAAAAAAAAAA/AGDgw-iz5kJ5oZj3DKfsj0Iv_l3F3eTPIQ/s96-c/photo.jpg";
                        }
                    }

                   
                    fetch(`https://guiadesenvolvedor-78a46.firebaseio.com/pergunta/${obj.id}.json`, {
                        method: "PUT",
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(obj)
                    });
                    
               } 
               console.log("ok");
            },
            (error) => {
           console.log("erro");
            }
        );
}