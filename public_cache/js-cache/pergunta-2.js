for(var elements=document.getElementsByName("btn-voto"),e=0;e<elements.length;e++)elements[e].onclick=function(){Votar(this.dataset.id,this.dataset.user,this.dataset.like,this,this.dataset.pos)};function Votar(a,b,c,d,f){var g=getCookie("usuarioVotos"),h=!0,j=[];if(""!=g){debugger;j=JSON.parse(g),0<j.filter(function(k){return k.id==a&&k.usuario==b&&k.pos==f&&k.like==c}).length&&(h=!1)}h&&fetch(`https://guiadesenvolvedor-78a46.firebaseio.com/pergunta/${a}.json`).then(k=>k.json()).then(k=>{if(k.Respostas[f].usuario==b){debugger;"true"==c?(++k.Respostas[f].votos,d.parentNode.parentNode.className=0==k.Respostas[f].votos?"votos":0<k.Respostas[f].votos?"votos positivo":"votos negativo",d.parentNode.children[1].innerHTML=k.Respostas[f].votos):(--k.Respostas[f].votos,d.parentNode.parentNode.className=0==k.Respostas[f].votos?"votos":0<k.Respostas[f].votos?"votos positivo":"votos negativo",d.parentNode.children[1].innerHTML=k.Respostas[f].votos)}for(var l=0,m=0;m<k.Respostas.length;m++)l=parseInt(l)+parseInt(k.Respostas[m].votos);k.votos=l,fetch(`https://guiadesenvolvedor-78a46.firebaseio.com/pergunta/${a}.json`,{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(k)});var n=j.filter(function(o){return o.id==a&&o.usuario==b&&o.pos==f});n[0]==void 0?(j.push({id:a,usuario:b,pos:f,like:c}),setCookie("usuarioVotos",JSON.stringify(j),1)):(n[0].like!=c&&(j=j.filter(function(o){return o.id!=a&&o.usuario!=o&&o.pos!=f}),j==void 0&&(j=[])),setCookie("usuarioVotos",JSON.stringify(j),1))},()=>{})}function Editor(a){var b=document.getElementById("editorGD").selectionStart,c=document.getElementById("editorGD").value,d=c.substring(0,b),f=c.substring(b,c.length),g="";switch(a.dataset.tipo){case"t":g="\n<p>\nTexto...\n</p>\n";break;case"p":g="\n<br/>\n";break;case"code":g="\n<guiacode data-code=\""+a.dataset.linguagem+"\">\n\n"+a.dataset.linguagem+"...\n\n</guiacode>\n";break;case"l":g="\n<a href=\"Digite link aqui...\" title=\"Digite t\xEDtulo...\" target=\"_blank\" rel=\"nofollow\">\nDigite o texto link\n</a>\n";}document.getElementById("editorGD").value=d+g+f,console.log(""),document.getElementById("previa").innerHTML=formataCodigo(),initHilignt(),document.getElementById("editorGD").focus()}for(var elementsCode=document.getElementsByName("btn-code"),e=0;e<elementsCode.length;e++)elementsCode[e].onclick=function(){Editor(this)};var editorGD=document.getElementById("editorGD");null!=editorGD&&(editorGD.onkeyup=function(){document.getElementById("previa").innerHTML=formataCodigo(),initHilignt()}),window.onload=function(){var a=document.getElementById("previa");null!=a&&(a.innerHTML=formataCodigo(),initHilignt())};var btnPerguntar=document.getElementById("btn-perguntar");null!=btnPerguntar&&(btnPerguntar.onclick=function(){window.location.href="/entrar?referrer="+window.location.href});var btnEnvio=document.getElementById("btn-enviar");null!=btnEnvio&&(btnEnvio.onclick=function(){var a=new Date,b=this.dataset.id,c=RetornaUsuario();fetch(`https://guiadesenvolvedor-78a46.firebaseio.com/pergunta/${b}.json`).then(d=>d.json()).then(d=>{if(d.Respostas==void 0)d.Respostas=[{data:a.toLocaleString(),usuario:c.id,usuario_nome:c.nome,usuario_imagem:c.imagem,votos:0,resposta:document.getElementById("previa").innerHTML}];else{var f={data:a.toLocaleString(),usuario:c.id,usuario_nome:c.nome,usuario_imagem:c.imagem,votos:0,resposta:document.getElementById("previa").innerHTML};d.Respostas.push(f)}d.id=b,d.url=PadronisaURL(d.pergunta,d.id),d.description=d.pergunta+". Guia completo de programa\xE7\xE3o onde esta tudo que voc\xEA procura.",fetch(`https://guiadesenvolvedor-78a46.firebaseio.com/pergunta/${b}.json`,{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(d)}),window.location.href=window.location.href},()=>{})});function PadronisaURL(a,b){return a=a.toLowerCase(),a=a.replace(/[àáâãäå]/g,"a"),a=a.replace(/[èéêë]/g,"e"),a=a.replace(/[íìîï]/g,"i"),a=a.replace(/[óòõôö]/g,"o"),a=a.replace(/[úùûü]/g,"u"),a=a.replace(/[ç]/g,"c"),a=a.replace(/[^a-z0-9# ]/gi,""),a=a.trim().split(" ").filter(function(c){return""!=c}).join("-"),"/pergunta/"+b+"/"+a}function Teste(){fetch(`https://guiadesenvolvedor-78a46.firebaseio.com/pergunta.json`).then(a=>a.json()).then(a=>{for(var d,b=Object.values(a),c=0;c<b.length;c++)d=b[c],d.url=PadronisaURL(d.pergunta,d.id),d.usuario_imagem="https://lh3.googleusercontent.com/-hUdY6-4vHVc/AAAAAAAAAAI/AAAAAAAAARY/AKxrwcYhauXix4qeNBv1iUGiYi9_4JwIqQ/s96-c-mo/photo.jpg",d.usuario_nome="Tiago Jardim Carvalho",d.usuario="108080380858689151778",console.log(d.url),fetch(`https://guiadesenvolvedor-78a46.firebaseio.com/pergunta/${d.id}.json`,{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(d)});console.log("ok")},()=>{console.log("erro")})}

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

