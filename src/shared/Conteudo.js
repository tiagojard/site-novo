import React, { Component } from 'react';

class Conteudo extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validacao(e){
        var campos = "";
        if(e.target.titulo.value == "")
            campos += "<li>Título</li>";
        if(e.target.assunto.value == "")
            campos += "<li>Assunto</li>";
        if(e.target.conteudo.value == "" )
            campos += "<li>Pergunta</li>";
        return campos;
    }

    handleSubmit(e){
        e.preventDefault();

        var validacao = this.validacao(e);
        if(validacao == ""){
            var Objeto = { 
                "assunto":[{"nome":e.target.assunto.value, "imagem": e.target.assunto.selectedOptions[0].dataset.imagem}],
                "conteudo": e.target.conteudo.value,
                "title":e.target.titulo.value,
                "ativo":false,
                "pesquisa":e.target.titulo.value
            }
    
            fetch("https://guiadesenvolvedor-78a46.firebaseio.com/conteudo.json", {
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
    
    render(){
   
       const conteudo = '<h1>Digite o título...</h1>\n<h2 class="sub-titulo">Digite o sub-título...</h2>\n<p>digite aqui...</p>';
        return <div className="container">
            <div className="info">
                <div className="info-cabecalho"><svg className="icon-svg" xmlns="http://www.w3.org/2000/svg" height="28" width="28"><rect width="100%" height="100%" fill="none"/><linearGradient id="a" x1=".239" x2=".761" y1=".761" y2=".239"><stop offset="0" stopColor="#41dfd0"/><stop offset="1" stopColor="#ee83ef"/></linearGradient><g className="currentLayer"><path d="M14.972 3.262a1.469 1.469 0 0 0-2.077 0L3.2 12.958a1.47 1.47 0 0 0 0 2.078l9.697 9.696a1.47 1.47 0 0 0 2.077 0l9.696-9.696a1.47 1.47 0 0 0 0-2.078zm9.004 11.079l-9.696 9.696a.49.49 0 0 1-.693 0l-9.696-9.696a.49.49 0 0 1 0-.692l9.696-9.697a.49.49 0 0 1 .693 0l9.696 9.697a.49.49 0 0 1 0 .692zM14.972.49a1.504 1.504 0 0 0-2.077 0L.43 12.957a1.469 1.469 0 0 0 0 2.078l12.466 12.463a1.469 1.469 0 0 0 2.077 0l12.466-12.466a1.469 1.469 0 0 0 0-2.077zm11.774 13.85L14.28 26.807a.49.49 0 0 1-.692 0L1.122 14.34a.49.49 0 0 1 0-.692L13.588 1.183a.49.49 0 0 1 .692 0l12.466 12.466a.49.49 0 0 1 0 .692zm-12.89-7.553a1.88 1.88 0 0 0-1.878 1.984l.359 6.562a1.47 1.47 0 0 0 1.47 1.388h.103a1.469 1.469 0 0 0 1.47-1.388l.358-6.562a1.88 1.88 0 0 0-1.882-1.984zm.541 8.491a.49.49 0 0 1-.49.463h-.104a.49.49 0 0 1-.49-.463l-.358-6.561a.901.901 0 1 1 1.8 0zm-.463 2.422a1.469 1.469 0 1 0 0 2.938 1.469 1.469 0 0 0 0-2.938zm0 1.959a.49.49 0 1 1 0-.98.49.49 0 0 1 0 .98zm0 0" fill="url(#a)"/></g></svg>Como funciona</div>
                <div className="info-titulo">Faça sua pergunta</div>
                <div>Sua pergunta será avaliada, nossa equipe vai criar um conteudo que responda sua pergunta, o tempo de resposta depende da complexidade da pergunta.</div>
                <div className="info-titulo">Compartilhe seu conhecimento</div>
                <div>Seu conhecimento será avaliado pela nossa equipe e dentro de 48h seu post será publicado.</div>
            </div>
            <div className="form-conteudo-pergunta">
            <h1>Compartilhe seu conhecimento/Faça sua pergunta</h1>
                <form id="form" onSubmit={this.handleSubmit}>
                    <label>Título</label>
                    <input type="text" name="titulo" autoComplete="off" className="form-input" />

                    <label>Assunto</label>
                    <select name="assunto" className="form-input">
                        <option data-imagem="/img/csharp.svg" value="CSharp">C#</option>
                        <option data-imagem="/img/javascript.svg" value="JavaScript">JavaScript</option>
                        <option data-imagem="/img/jquery.svg" value="Jquery">Jquery</option>
                        <option data-imagem="/img/php.svg" value="PHP">PHP</option>
                        <option data-imagem="/img/sql-server.svg" value="SQL Server">SQL Server</option>
                        <option data-imagem="/img/MySQL.svg" value="MySQL">MySQL</option>
                        <option data-imagem="/img/node.js.svg" value="Node.js">Node.js</option>
                        <option data-imagem="/img/react.svg" value="React js">React js</option>
                        <option data-imagem="/img/outro.svg" value="React js">Outro</option>
                    </select>
                    <label>Pergunta</label>
                    <textarea id="conteudo" name="conteudo" rows="15" className="form-text">
                    </textarea>
                    <button type="submit">Enviar</button>
                    <div id="mensagem"></div>
                </form>
            </div>
           
        </div>
    }
}
export default Conteudo;