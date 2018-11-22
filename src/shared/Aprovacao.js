import React, { Component } from 'react';

class Aprovacao extends Component {
    constructor(props) {
        super(props);
    
        this.handleClickButton = this.handleClickButton.bind(this);
        this.handleClickBuscar = this.handleClickBuscar.bind(this);
        this.handleClickBuscarAlteracao = this.handleClickBuscarAlteracao.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            result: null,
            loading: true,
          }
        this.javascript = "JavaScript SQL Server React js Node.js Jquery";
        this.html = "JavaScript React js Node.js Jquery";
    }

    componentDidMount() {
        fetch("https://guiadesenvolvedor-78a46.firebaseio.com/conteudo.json?orderBy=%22ativo%22&equalTo=false")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    loading: result ? false : true,
                    result: Object.entries(result) 
                });
            },
            (error) => {
           
            }
        );
    }

    handleClickBuscarAlteracao(e){
        var form = document.getElementById("form");
        var id = form.children.id.value;
        console.log(id);
        fetch("https://guiadesenvolvedor-78a46.firebaseio.com/conteudo/"+id+".json")
        .then(res => res.json())
        .then(
            (result) => {
                if(result != null){
                    form.children.titulo.value = result.title;
                    form.children.description.value = result.description;
                    form.children.url.value = result.url;
                    form.children.pesquisa.value = result.pesquisa;
                    form.children.descricao.value = result.descricao;
                    form.children.assunto.value = result.assunto[0].nome;
                    form.children.conteudo.value = result.conteudo;
                    document.getElementById("resultado-conteudo").innerHTML = result.conteudo;
                    this.atualizaCodigo();
                }
            },
            (error) => {
           
            }
        );
    }

    handleClickBuscar(e){
        var form = document.getElementById("form");
        var id = e.target.dataset.id;
        console.log(e.target);
        console.log(id);
        fetch("https://guiadesenvolvedor-78a46.firebaseio.com/conteudo/"+id+".json")
        .then(res => res.json())
        .then(
            (result) => {
                if(result != null){
                    form.children.id.value = id;
                    form.children.titulo.value = result.title;
                    form.children.assunto.value = result.assunto[0].nome;
                    form.children.conteudo.value = result.conteudo;
                    form.children.url.value = result.url == "" || result.url == null ? "/"+id+"/": result.url;
                    document.getElementById("resultado-conteudo").innerHTML = result.conteudo;
                    
                    this.atualizaCodigo();
                }
            },
            (error) => {
           
            }
        );
    }

    handleSubmit(e){
        e.preventDefault();
        if(e.target.id.value != ""){
            var conteudo = document.getElementById("resultado-conteudo").innerHTML;
            var Objeto = { 
                "assunto":[{"nome":e.target.assunto.value, "imagem": e.target.assunto.selectedOptions[0].dataset.imagem, "svg": svg[e.target.assunto.value]}],
                "conteudo_site": conteudo,
                "conteudo":e.target.conteudo.value,
                "descricao": e.target.descricao.value,
                "description":e.target.description.value,
                "pesquisa":e.target.pesquisa.value,
                "title":e.target.titulo.value,
                "url":e.target.url.value,
                "ativo":true
            }
    
            fetch("https://guiadesenvolvedor-78a46.firebaseio.com/conteudo/"+e.target.id.value+".json", {
                method: "PUT",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(Objeto)
            });

        }

/*
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
               
            },
            (error) => {
            
            }
        );
        */
    }


    

    atualizaCodigo(){
        var assunto = document.getElementById("assunto").value;
        var codes = document.getElementById("resultado-conteudo").querySelectorAll("pre code");
        for(var i=0; i < codes.length; i++){
            if(codes[i].dataset.code == "node" || codes[i].dataset.code == "React")
            {
                CodeColor(codes[i], "js");
                CodeColor(codes[i], "html");
            } else if(codes[i].dataset.code == "javaScript" || codes[i].dataset.code == "Jquery" || codes[i].dataset.code == "SQL"){
                CodeColor(codes[i], "js");
            } else if(codes[i].dataset.code == "HTML"){
                CodeColor(codes[i], "html");
            } else if(codes[i].dataset.code == "HTML"){
                CodeColor(codes[i], "css");
            }

/*
                CodeColor(codes[i], "js");
            if(this.javascript.indexOf(assunto) > -1)
                CodeColor(codes[i], "js");
            if(this.html.indexOf(assunto) > -1)
                CodeColor(codes[i], "html");
                */
        }
    }

    handleKeyUp(e){
        document.getElementById("resultado-conteudo").innerHTML = document.getElementById("conteudo").value;
        this.atualizaCodigo();
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
            case "node":
            tipo = '<pre class="codigo"><code data-code="node">Digite código aqui...</code></pre>';
            break;
            case "javaScript":
            tipo = '<pre class="codigo"><code data-code="javaScript">Digite código aqui...</code></pre>';
            break;
            case "SQL":
            tipo = '<pre class="codigo"><code data-code="SQL">Digite código aqui...</code></pre>';
            break;
            case "Jquery":
            tipo = '<pre class="codigo"><code data-code="Jquery">Digite código aqui...</code></pre>';
            break;
            case "React":
            tipo = '<pre class="codigo"><code data-code="React">Digite código aqui...</code></pre>';
            break;
            case "HTML":
            tipo = '<pre class="codigo"><code data-code="HTML">Digite código aqui...</code></pre>';
            break;
            case "CSS":
            tipo = '<pre class="codigo"><code data-code="CSS">Digite código aqui...</code></pre>';
            break;
            case "l":
            tipo = '<a href="Digite link aqui..." title="Digite título..." target="_blank" rel="nofollow">Digite o texto link</a>';
            break;
        }
        document.getElementById("conteudo").value = textBefore+ tipo +textAfter;
        document.getElementById("resultado-conteudo").innerHTML = document.getElementById("conteudo").value;
        this.atualizaCodigo();
    }

    render(){
        /*
        const h1 = '<h1>Digite o título...</h1>';
        const h2 = '<h2 class="sub-titulo">Digite o sub-título...</h2>';
        const p = '<p>digite aqui...</p>';
        */

        var conteudos = <div></div>;
        if(this.state.loading == false)
        {
            conteudos = <tabel className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Título</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.result.map((item, index) =>
                                <tr key={index}>
                                    <td>{item[0]}</td>
                                    <td>{item[1].title}</td>
                                    <td><button onClick={this.handleClickBuscar} data-id={item[0]} >Editar</button></td>
                                </tr>)
                                }
                            </tbody>
                        </tabel>;
        }
        

        return <div className="container">
            {conteudos}
            <div className="form-conteudo">
                <form id="form" onSubmit={this.handleSubmit}>
                    <input id="id" name="id" type="text"/><button type="button" onClick={this.handleClickBuscarAlteracao}>Buscar</button>

                    <label>Título</label>
                    <input type="text" name="titulo" autoComplete="off" className="form-input" />

                    <label>Description</label>
                    <input type="text" name="description" autoComplete="off" className="form-input" />

                    <label>URL</label>
                    <input type="text" name="url" autoComplete="off" className="form-input" />

                    <label>Assunto</label>
                    <select id="assunto" name="assunto" className="form-input">
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
                    <label>Pesquisa</label>
                    <input type="text" name="pesquisa" autoComplete="off" className="form-input" />

                    <label>Descrição</label>
                    <input type="text" name="descricao" autoComplete="off" className="form-input" />

                    <div className="container-botoes">
                        <button type="button" data-tipo="p" onClick={this.handleClickButton}>Parágrafo</button>
                        <button type="button" data-tipo="c" onClick={this.handleClickButton}>Código
                        </button>
                        <button className="dropdown"><div className="dropbtn-button">Código</div>
                            <div className="dropdown-content">
                                <a href="javascript:void(0)" data-tipo="node" onClick={this.handleClickButton}>Node.js</a>
                                <a href="javascript:void(0)" data-tipo="javaScript" onClick={this.handleClickButton}>javaScript</a>
                                <a href="javascript:void(0)" data-tipo="SQL" onClick={this.handleClickButton}>SQL Server</a>
                                <a href="javascript:void(0)" data-tipo="Jquery" onClick={this.handleClickButton}>Jquery</a>
                                <a href="javascript:void(0)" data-tipo="React" onClick={this.handleClickButton}>React js</a>
                                <a href="javascript:void(0)" data-tipo="HTML" onClick={this.handleClickButton}>HTML</a>
                                <a href="javascript:void(0)" data-tipo="CSS" onClick={this.handleClickButton}>CSS</a>
                            </div>
                        </button>
                        <button type="button" data-tipo="l" onClick={this.handleClickButton}>Link</button>
                    </div>
                    <textarea id="conteudo" name="conteudo" rows="30" className="form-text" onKeyUp={this.handleKeyUp}>
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
export default Aprovacao;