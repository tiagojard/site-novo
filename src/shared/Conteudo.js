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
            <div className="form-conteudo-pergunta">
            <h1>Faça sua pergunta</h1>
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