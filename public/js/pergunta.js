
var elements = document.getElementsByName("btn-voto");
for(var e = 0; e < elements.length; e++){
    elements[e].onclick = function() {
        //this.dataset.votos
        Votar(this.dataset.id,this.dataset.user,this.dataset.like, this);
      };
}




function Votar(id, usuario, like, element){
    var usuarioVotos = getCookie("usuarioVotos");
    var podeVotar = true;
    var arrVotos = [];
    if(usuarioVotos != ""){
        arrVotos = JSON.parse(usuarioVotos);
        if(arrVotos.filter(function(value){ return value.id == id && value.usuario == usuario}).length > 0)
            podeVotar = false;
    }
   if(podeVotar){
    fetch(`https://guiadesenvolvedor-78a46.firebaseio.com/pergunta/${id}.json`)
    .then(res => res.json())
    .then(
        (result) => {
            for(var i = 0; i <result.Respostas.length; i++){
                if(result.Respostas[i].usuario == usuario){
                    if(like == "true"){
                        result.Respostas[i].votos = result.Respostas[i].votos + 1;
                        if(result.Respostas[i].votos == 0)
                            element.parentNode.parentNode.className = "votos";
                        else if(result.Respostas[i].votos > 0)
                            element.parentNode.parentNode.className = "votos positivo";
                        else
                            element.parentNode.parentNode.className = "votos negativo";
                        element.parentNode.children[1].innerHTML = result.Respostas[i].votos;
                    }
                    else{
                        result.Respostas[i].votos = result.Respostas[i].votos - 1;
                        if(result.Respostas[i].votos == 0)
                            element.parentNode.parentNode.className = "votos";
                        else if(result.Respostas[i].votos > 0)
                            element.parentNode.parentNode.className = "votos positivo";
                        else
                            element.parentNode.parentNode.className = "votos negativo";
                        element.parentNode.children[1].innerHTML = result.Respostas[i].votos;
                    }
                }
            }
            fetch(`https://guiadesenvolvedor-78a46.firebaseio.com/pergunta/${id}.json`, {
                method: "PUT",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(result)
            });
            
            arrVotos.push({id: id, usuario: usuario});
            setCookie("usuarioVotos", JSON.stringify(arrVotos), 1);
        },
        (error) => {
       
        }
    );
   }
}


function Editor(element){
    var cursorPos = document.getElementById("editorGD").selectionStart;
    var v = document.getElementById("editorGD").value;
    var textBefore = v.substring(0,  cursorPos );
    var textAfter  = v.substring( cursorPos, v.length );
    var tipo = "";
    
    switch(element.dataset.tipo){
        case "t":
        tipo = '\n<p>\nTexto...\n</p>\n';
        break;
        case "p":
        tipo = '\n<br/>\n';
        break;
        case "code":
        tipo = '\n<guiacode data-code="'+element.dataset.linguagem+'">\n\n'+element.dataset.linguagem+'...\n\n</guiacode>\n';
        break;
        case "l":
        tipo = '\n<a href="Digite link aqui..." title="Digite título..." target="_blank" rel="nofollow">\nDigite o texto link\n</a>\n';
        break;
    }
    document.getElementById("editorGD").value = textBefore+ tipo +textAfter;
    console.log("");
    document.getElementById("previa").innerHTML = formataCodigo();
    initHilignt();
    document.getElementById("editorGD").focus();
}
var elementsCode = document.getElementsByName("btn-code");
for(var e = 0; e < elementsCode.length; e++){
    elementsCode[e].onclick = function() {
        Editor(this);
      };
}

var editorGD = document.getElementById("editorGD");
if(editorGD != null){
    editorGD.onkeyup = function() {
        document.getElementById("previa").innerHTML = formataCodigo();
        initHilignt();
    };
}

window.onload = function() {
    var previa = document.getElementById("previa");
    if(previa != null){
        previa.innerHTML = formataCodigo();
        initHilignt();
    }
};

var btnPerguntar = document.getElementById("btn-perguntar");
if(btnPerguntar != null){
    btnPerguntar.onclick = function() {
       window.location.href = "/entrar?referrer="+window.location.href;
    };
}

var btnEnvio = document.getElementById("btn-enviar");
if(btnEnvio != null){
    btnEnvio.onclick = function() {
        //alert(this.dataset.id+ " - "+ document.getElementById("previa").innerHTML);
        var data = new Date();
        var id = this.dataset.id;
        var usuario =  RetornaUsuario();
       
        fetch(`https://guiadesenvolvedor-78a46.firebaseio.com/pergunta/${id}.json`)
        .then(res => res.json())
        .then(
            (result) => { 
                if(result.Respostas == undefined) {
                    result.Respostas = [
                        {
                            data : data.toLocaleString(),
                            usuario: usuario.id,  
                            usuario_nome:usuario.nome,
                            votos:0,
                            resposta:document.getElementById("previa").innerHTML
                        }
                    ];
                }
                else{
                    var resposta_nova = {
                        data : data.toLocaleString(),
                        usuario: usuario.id,  
                        usuario_nome:usuario.nome,
                        votos:0,
                        resposta:document.getElementById("previa").innerHTML
                    };
                    result.Respostas.push(resposta_nova);
                }
                result.id = id;
                result.url = PadronisaURL(result.pergunta,result.id);
                result.description = result.pergunta+". Guia completo de programação onde esta tudo que você procura.";
                fetch(`https://guiadesenvolvedor-78a46.firebaseio.com/pergunta/${id}.json`, {
                    method: "PUT",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(result)
                });
                window.location.href = window.location.href;
            },
            (error) => {
           
            }
        );
    }
}
 
function PadronisaURL(url, id){
    url = url.toLowerCase();
    url = url.replace(/[àáâãäå]/g,"a");
    url = url.replace(/[èéêë]/g,"e");
    url = url.replace(/[íìîï]/g, "i");
    url = url.replace(/[óòõôö]/g, "o");
    url = url.replace(/[úùûü]/g, "u");
    url = url.replace(/[ç]/g, "c");
    url = url.replace(/[^a-z0-9# ]/gi,"");
    url = url.trim().split(' ').filter(function(e){ return e != "";}).join("-");
    return "/pergunta/" +id+ "/"+url;
}
 

function Teste(){
    fetch(`https://guiadesenvolvedor-78a46.firebaseio.com/pergunta.json`)
        .then(res => res.json())
        .then(
            (result) => { 
               var array = Object.values(result);
               for(var i = 0; i < array.length; i++){
                    var obj = array[i];
                    obj.url = PadronisaURL(obj.pergunta,obj.id);
                    obj.usuario_imagem = "https://lh3.googleusercontent.com/-hUdY6-4vHVc/AAAAAAAAAAI/AAAAAAAAARY/AKxrwcYhauXix4qeNBv1iUGiYi9_4JwIqQ/s96-c-mo/photo.jpg";
                    obj.usuario_nome = "Tiago Jardim Carvalho";
                    obj.usuario = "108080380858689151778";
                    console.log(obj.url);
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