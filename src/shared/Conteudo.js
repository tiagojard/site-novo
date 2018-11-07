import React, { Component } from 'react';

class Conteudo extends Component {
    constructor(props) {
        super(props);
    
        this.handleClickButton = this.handleClickButton.bind(this);
        this.handleClickBuscar = this.handleClickBuscar.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        document.getElementById("resultado-conteudo").innerHTML = document.getElementById("conteudo").value;
    }

    handleClickBuscar(e){
        var form = document.getElementById("form");
        var id = form.children.id.value;
        
        fetch("https://guiadesenvolvedor-78a46.firebaseio.com/conteudo/"+id+".json")
        .then(res => res.json())
        .then(
            (result) => {
                if(result != null){
                    form.children.titulo.value = result.title;
                    form.children.description.value = result.description;
                    form.children.url.value = result.url;
                    form.children.assunto.value = result.assunto[0].nome;
                    form.children.pesquisa.value = result.pesquisa;
                    form.children.descricao.value = result.descricao;
                    form.children.conteudo.value = result.conteudo;
                    document.getElementById("resultado-conteudo").innerHTML = result.conteudo;
                    
                    var codes = document.getElementById("resultado-conteudo").querySelectorAll("pre code");
                    for(var i=0; i < codes.length; i++){
                        CodeColor(codes[i], "js");
                        //CodeColor(codes[i], "html");
                    }
                }
            },
            (error) => {
           
            }
        );
    }

    handleSubmit(e){
        e.preventDefault();
        var conteudo = document.getElementById("resultado-conteudo").innerHTML;
        //e.target.conteudo.value
        var Objeto = { 
            "assunto":[{"nome":e.target.assunto.value, "imagem": e.target.assunto.selectedOptions[0].dataset.imagem}],
            "conteudo": conteudo,
            "descricao": e.target.descricao.value,
            "description":e.target.description.value,
            "pesquisa":e.target.pesquisa.value,
            "title":e.target.titulo.value,
            "url":e.target.url.value
        }

        if(e.target.id.value != ""){
            this.alterarConteudo(e.target.id.value, Objeto);
        }
        else{
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
                    console.log(result.name);
                    Objeto.url = "/"+result.name+Objeto.url;
                    this.alterarConteudo(result.name, Objeto);
                },
                (error) => {
               
                }
            );
        }
    }

    alterarConteudo(id, Objeto){
        fetch("https://guiadesenvolvedor-78a46.firebaseio.com/conteudo/"+id+".json", {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Objeto)
        });
    }

    handleClickButton(e){
        var cursorPos = document.getElementById("conteudo").selectionStart;
        var v = document.getElementById("conteudo").value;
        var textBefore = v.substring(0,  cursorPos );
        var textAfter  = v.substring( cursorPos, v.length );
        var tipo = "";

        switch(e.target.dataset.tipo){
            case "p":
            tipo = '<p>digite aqui...</p>';
            break;
            case "c":
            tipo = '<pre class="codigo"><code>Digite código aqui...</code></pre>';
            break;
            case "l":
            tipo = '<a href="Digite link aqui..." title="Digite título..." target="_blank" rel="nofollow">Digite o texto link</a>';
            break;
        }
        document.getElementById("conteudo").value = textBefore+ tipo +textAfter;
        document.getElementById("resultado-conteudo").innerHTML = document.getElementById("conteudo").value;
    }

    handleKeyUp(e){
        document.getElementById("resultado-conteudo").innerHTML = document.getElementById("conteudo").value;
       
        var codes = document.getElementById("resultado-conteudo").querySelectorAll("pre code");
        for(var i=0; i < codes.length; i++){
            CodeColor(codes[i], "js");
            //CodeColor(codes[i], "html");
        }
    
    }

    render(){
        /*
        const h1 = '<h1>Digite o título...</h1>';
        const h2 = '<h2 class="sub-titulo">Digite o sub-título...</h2>';
        const p = '<p>digite aqui...</p>';
        */
       const conteudo = '<h1>Digite o título...</h1>\n<h2 class="sub-titulo">Digite o sub-título...</h2>\n<p>digite aqui...</p>';
        return <div className="container">
            <div className="form-conteudo">
                <form id="form" onSubmit={this.handleSubmit}>
                    <label>ID</label>
                    <input type="text" id="id" name="id" autoComplete="off" /><button type="button" onClick={this.handleClickBuscar}>Buscar</button>

                    <label>Título</label>
                    <input type="text" name="titulo" autoComplete="off" className="form-input" />

                    <label>Description</label>
                    <input type="text" name="description" autoComplete="off" className="form-input" />

                    <label>URL</label>
                    <input type="text" name="url" autoComplete="off" className="form-input" />

                    <label>Assunto</label>
                    <select name="assunto" className="form-input">
                        <option data-imagem="/img/javascript.svg" value="JavaScript">JavaScript</option>
                        <option data-imagem="/img/jquery.svg" value="Jquery">Jquery</option>
                        <option data-imagem="/img/sql-server.svg" value="SQL Server">SQL Server</option>
                        <option data-imagem="/img/node.js.svg" value="Node.js">Node.js</option>
                        <option data-imagem="/img/react.svg" value="React js">React js</option>
                    </select>
                    <label>Pesquisa</label>
                    <input type="text" name="pesquisa" autoComplete="off" className="form-input" />

                    <label>Descrição</label>
                    <input type="text" name="descricao" autoComplete="off" className="form-input" />

                    <div className="container-botoes">
                        <button type="button" data-tipo="p" onClick={this.handleClickButton}>Parágrafo</button>
                        <button type="button" data-tipo="c" onClick={this.handleClickButton}>Código</button>
                        <button type="button" data-tipo="l" onClick={this.handleClickButton}>Link</button>
                    </div>
                    <textarea id="conteudo" name="conteudo" rows="30" className="form-text" defaultValue={conteudo} onKeyUp={this.handleKeyUp}>
                    </textarea>
                    <button type="submit">Enviar</button>
                </form>
            </div>
            <div className="resultado-conteudo">
                <div id="resultado-conteudo" className="conteudo">

                </div>

            </div>
        </div>
    }
}
export default Conteudo;