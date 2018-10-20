import React, { Component } from 'react';

class Conteudo extends Component {
    constructor(props) {
        super(props);
    
        this.handleClickButton = this.handleClickButton.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        document.getElementById("resultado-conteudo").innerHTML = document.getElementById("conteudo").value;
    }

    handleSubmit(e){
        console.log(e.target.assunto.value);
        console.log(e.target.assunto.selectedOptions[0].dataset.imagem);
    
        var Objeto = { 
            "assunto":[{"nome":e.target.assunto.value, "imagem": e.target.assunto.selectedOptions[0].dataset.imagem}],
            "conteudo": e.target.conteudo.value,
            "descricao": e.target.descricao.value,
            "description":e.target.description.value,
            "id": parseInt(e.target.id.value),
            "pesquisa":e.target.pesquisa.value,
            "title":e.target.titulo.value,
            "url":e.target.url.value
        }
        console.log(JSON.stringify(Objeto));

        fetch('https://guiadesenvolvedor-78a46.firebaseio.com/conteudo.json', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Objeto)
        })
/*
        var json = '{
            "assunto" : [ {
              "imagem" : "/img/react.svg",
              "nome" : "React js"
            } ],
            "conteudo" : "<h1>Como criar app react js</h1><h2 class=\"sub-titulo\">Iniciando app react js</h2><p>React js é uma biblioteca javaScript mais popular da atualidade, criado pelo Facebook para construir interfaces de usuário. Nesse tutorial vamos mostrar como criar um app react js.</p><p><strong>Pré-requisito</strong><br/>Será necessário ter instalado na sua maquina o <a href=\"https://nodejs.org/en/download/\" title=\"Download Node.js\" target=\"_blank\" rel=\"nofollow\">Node.js</a> </p><p>Para criar app react execute o seguinte comando, esses comandos funcionam no macOS, Windows e Linux.</p><pre class=\"codigo\"><code>npx create-react-app my-app</code></pre><p>Ele irá criar um pasta chamado my-app dentro do diretório onde o comando foi executado. Dentro desse diretório, ele gerará a estrutura inicial do projeto e instalará as dependências necessárias:</p><pre><code>my-app<br>├── README.md<br>├── node_modules<br>├── package.json<br>├── .gitignore<br>├── public<br>│   ├── favicon.ico<br>│   ├── index.html<br>│   └── manifest.json<br>└── src<br>    ├── App.css<br>    ├── App.js<br>    ├── App.test.js<br>    ├── index.css<br>    ├── index.js<br>    ├── logo.svg<br>    └── serviceWorker.js</code></pre><p>Para iniciar o app react, será necessário abrir a pasta onde o app foi criado e executar o seguinte comando.</p><pre class=\"codigo\"><code>cd my-appnpm start</code></pre><p>Em seguida, abra <code>http://localhost:3000/</code> para ver seu aplicativo.</p><p>Para gerar a Build do app basta executar o seguinte comando</p><pre class=\"codigo\"><code>npm run build</code></pre>",
            "descricao" : "Veja como criar app react js. Vamos mostrar comando para criar app react desde o início. Comando para criar react não funciona veja o porque",
            "description" : "Veja como criar app react js. Vamos mostrar comando para criar app react desde o início. Comando para criar react não funciona veja o porque",
            "id" : 1,
            "pesquisa" : "como criar app react js",
            "title" : "Como criar site react js",
            "url" : "/1/como-criar-site-react-js"
          }';
*/
        e.preventDefault();
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
                <form onSubmit={this.handleSubmit}>
                    <label>ID</label>
                    <input type="text" name="id" className="form-input" />

                    <label>Título</label>
                    <input type="text" name="titulo" className="form-input" />

                    <label>Description</label>
                    <input type="text" name="description" className="form-input" />

                    <label>URL</label>
                    <input type="text" name="url" className="form-input" />

                    <label>Assunto</label>
                    <select name="assunto" className="form-input">
                        <option data-imagem="/img/react.svg" value="React js">React js</option>
                        <option data-imagem="/img/jquery.svg" value="Jquery">Jquery</option>
                        <option data-imagem="/img/node.js.svg" value="Node.js">Node.js</option>
                    </select>
                    <label>Pesquisa</label>
                    <input type="text" name="pesquisa" className="form-input" />

                    <label>Descrição</label>
                    <input type="text" name="descricao" className="form-input" />

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