
   function Validacao(e){
    var campos = "";
    if(e.target.titulo.value == "")
        campos += "<li>Título</li>";
    if(e.target.assunto.value == "")
        campos += "<li>Assunto</li>";
    if(e.target.conteudo.value == "" )
        campos += "<li>Pergunta</li>";
    return campos;
}

function EnviarPergunta(e){
    var usuario = RetornaUsuario();
       
    var validacao = Validacao(e);
    if(validacao == ""){
        var Objeto = {};
        var data = new Date();
            
        Objeto = { 
            "assunto":[{"nome":e.target.assunto.value, "imagem": e.target.assunto.selectedOptions[0].dataset.imagem}],
            "pergunta_conteudo": e.target.conteudo.value,
            "pergunta_site": document.getElementById("previa").innerHTML,
            "pergunta":e.target.titulo.value,
            "ativo":false,
            "pesquisa":e.target.titulo.value,
            "data_formatada":data.toLocaleString(),
            "data":data,
            "usuario": usuario.id,
            "usuario_nome": usuario.nome,
            "usuario_imagem":usuario.imagem,
            "Perguntas":[],
            "description":removeAcento(e.target.titulo.value)+". Guia do desenvolvedor."
        }
       
        fetch("https://guiadesenvolvedor-78a46.firebaseio.com/pergunta.json", {
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
                    if(result.name != ""){
                        Objeto.id = result.name;
                        Objeto.url = "/pergunta/"+result.name+"/"+ replaceAll(removeAcento(Objeto.pergunta), " ","-"),
                        fetch(`https://guiadesenvolvedor-78a46.firebaseio.com/pergunta/${result.name}.json`, {
                            method: "PUT",
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(Objeto)
                        });

                        var mensagem = document.getElementById("mensagem");
                        mensagem.innerHTML = "Pergunta enviada com sucesso. Sua pergunta será passada pela aprovação!";
                        mensagem.style.backgroundColor = "#4caf509c";
                    }
                } catch (error) {
                    console.log(error);
                    var mensagem = document.getElementById("mensagem");
                    mensagem.innerHTML = "Preencha os campos abaixo para enviar a pergunta!";
                    mensagem.style.backgroundColor = "#ff000080";
                }
            },
            (error) => {
            
            }
        );
    }
    else{
        var mensagem = document.getElementById("mensagem");
        mensagem.innerHTML = "Não foi possível enviar a pergunta, por favor tente mais tarde!<br>"+ validacao;
        mensagem.style.backgroundColor = "#f997047a";
    }
}


function removeAcento(text)
{       
    text = text.toLowerCase();                                                         
    text = text.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
    text = text.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
    text = text.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
    text = text.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
    text = text.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
    text = text.replace(new RegExp('[Ç]','gi'), 'c');
    return text;                 
}

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}