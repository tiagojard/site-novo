import React, { Component } from 'react';

class Conteudo extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClickButton = this.handleClickButton.bind(this);
        //this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleKeyUpPergunta = this.handleKeyUpPergunta.bind(this);
        this.state = {
            pergunta: null,
            usuario: null
          }
    }

 
    handleClickButton(e){
        Editor(e.target);
    }

    componentDidMount() {
        var usuario =  RetornaUsuario();
        this.setState(() => ({
          usuario: usuario
        }))
        
      }

      /*
    handleKeyUp(e){
        document.getElementById("resultado-conteudo").innerHTML = formataCodigo();
        initHilignt();
    }
*/

    handleKeyUpPergunta(e){
        console.log(e.target.value);
          this.setState({
            pergunta: e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        EnviarPergunta(e);
    }
    /*
    <div className="info">
    <div className="info-cabecalho"><svg className="icon-svg" xmlns="http://www.w3.org/2000/svg" height="28" width="28"><rect width="100%" height="100%" fill="none"/><linearGradient id="a" x1=".239" x2=".761" y1=".761" y2=".239"><stop offset="0" stopColor="#41dfd0"/><stop offset="1" stopColor="#ee83ef"/></linearGradient><g className="currentLayer"><path d="M14.972 3.262a1.469 1.469 0 0 0-2.077 0L3.2 12.958a1.47 1.47 0 0 0 0 2.078l9.697 9.696a1.47 1.47 0 0 0 2.077 0l9.696-9.696a1.47 1.47 0 0 0 0-2.078zm9.004 11.079l-9.696 9.696a.49.49 0 0 1-.693 0l-9.696-9.696a.49.49 0 0 1 0-.692l9.696-9.697a.49.49 0 0 1 .693 0l9.696 9.697a.49.49 0 0 1 0 .692zM14.972.49a1.504 1.504 0 0 0-2.077 0L.43 12.957a1.469 1.469 0 0 0 0 2.078l12.466 12.463a1.469 1.469 0 0 0 2.077 0l12.466-12.466a1.469 1.469 0 0 0 0-2.077zm11.774 13.85L14.28 26.807a.49.49 0 0 1-.692 0L1.122 14.34a.49.49 0 0 1 0-.692L13.588 1.183a.49.49 0 0 1 .692 0l12.466 12.466a.49.49 0 0 1 0 .692zm-12.89-7.553a1.88 1.88 0 0 0-1.878 1.984l.359 6.562a1.47 1.47 0 0 0 1.47 1.388h.103a1.469 1.469 0 0 0 1.47-1.388l.358-6.562a1.88 1.88 0 0 0-1.882-1.984zm.541 8.491a.49.49 0 0 1-.49.463h-.104a.49.49 0 0 1-.49-.463l-.358-6.561a.901.901 0 1 1 1.8 0zm-.463 2.422a1.469 1.469 0 1 0 0 2.938 1.469 1.469 0 0 0 0-2.938zm0 1.959a.49.49 0 1 1 0-.98.49.49 0 0 1 0 .98zm0 0" fill="url(#a)"/></g></svg>Como funciona</div>
    <div className="info-titulo">Faça sua pergunta</div>
    <div>Sua pergunta será avaliada, nossa equipe vai criar um conteudo que responda sua pergunta, o tempo de resposta depende da complexidade da pergunta.</div>
    <div className="info-titulo">Compartilhe seu conhecimento</div>
    <div>Seu conhecimento será avaliado pela nossa equipe e dentro de 48h seu post será publicado.</div>
</div>
*/
    render(){
        var editorValue = "<p>\nTexto...\n</p>\n";
        var data = new Date()
       const conteudo = '<h1>Digite o título...</h1>\n<h2 class="sub-titulo">Digite o sub-título...</h2>\n<p>digite aqui...</p>';
        return <div className="container">
            <div className="form-conteudo-pergunta">
            <h1>Faça sua pergunta</h1>
                <form id="form" onSubmit={this.handleSubmit}>
                    <label>Título</label>
                    <input type="text" name="titulo" placeholder="Título" autoComplete="off" className="form-input" onKeyUp={this.handleKeyUpPergunta} />
                    <label>Pergunta</label>
                    <div className="container-botoes">
                        <button type="button" data-tipo="t" onClick={this.handleClickButton}>Texto</button>
                        <button type="button" data-tipo="p" onClick={this.handleClickButton}>Pular linha
                        </button>
                        <button className="dropdown"><div className="dropbtn-button">Código</div>
                            <div className="dropdown-content-code">
                                <a href="javascript:void(0)" data-tipo="code" data-linguagem="csharp" onClick={this.handleClickButton}>ElasticSearch</a>
                                <a href="javascript:void(0)" data-tipo="code" data-linguagem="javaScript" onClick={this.handleClickButton}>Node.js</a>
                                <a href="javascript:void(0)" data-tipo="code" data-linguagem="javaScript" onClick={this.handleClickButton}>javaScript</a>
                                <a href="javascript:void(0)" data-tipo="code" data-linguagem="javaScript" onClick={this.handleClickButton}>MongoDB</a>
                                <a href="javascript:void(0)" data-tipo="code" data-linguagem="sql" onClick={this.handleClickButton}>SQL Server</a>
                                <a href="javascript:void(0)" data-tipo="code" data-linguagem="sql" onClick={this.handleClickButton}>MySQL</a>
                                <a href="javascript:void(0)" data-tipo="code" data-linguagem="javaScript" onClick={this.handleClickButton}>Jquery</a>
                                <a href="javascript:void(0)" data-tipo="code" data-linguagem="javaScript" onClick={this.handleClickButton}>React js</a>
                                <a href="javascript:void(0)" data-tipo="code" data-linguagem="markup" onClick={this.handleClickButton}>HTML</a>
                                <a href="javascript:void(0)" data-tipo="code" data-linguagem="css" onClick={this.handleClickButton}>CSS</a>
                                <a href="javascript:void(0)" data-tipo="code" data-linguagem="csharp" onClick={this.handleClickButton}>C#</a>
                                <a href="javascript:void(0)" data-tipo="code" data-linguagem="php" onClick={this.handleClickButton}>PHP</a>
                                <a href="javascript:void(0)" data-tipo="code" data-linguagem="python" onClick={this.handleClickButton}>python</a>
                            </div>
                        </button>
                        <button type="button" data-tipo="l" onClick={this.handleClickButton}>Link</button>
                    </div>
                    <textarea id="editorGD" name="conteudo" rows="15" className="form-text" defaultValue={editorValue} onKeyUp={this.handleKeyUp}>
                    </textarea>
                    <label>Assunto</label>
                    <select name="assunto" className="form-input">
                        <option data-imagem="/logo/elasticsearch.svg" value="ElasticSearch">ElasticSearch</option>
                        <option data-imagem="/logo/csharp.svg" value="CSharp">C#</option>
                        <option data-imagem="/logo/html.svg" value="HTML">HTML</option>
                        <option data-imagem="/logo/javascript.svg" value="JavaScript">JavaScript</option>
                        <option data-imagem="/logo/jquery.svg" value="Jquery">Jquery</option>
                        <option data-imagem="/logo/mongodb.svg" value="MongoDb">MongoDb</option>
                        <option data-imagem="/logo/php.svg" value="PHP">PHP</option>
                        <option data-imagem="/logo/sql-server.svg" value="SQL Server">SQL Server</option>
                        <option data-imagem="/logo/MySQL.svg" value="MySQL">MySQL</option>
                        <option data-imagem="/logo/node.js.svg" value="Node.js">Node.js</option>
                        <option data-imagem="/logo/react.svg" value="React js">React js</option>
                        <option data-imagem="/logo/outro.svg" value="React js">Outro</option>
                    </select>
                    <label>Prévia</label>
                    <div className="resultado-conteudo">
                        <div className="pergunta">
                            <h1>{this.state.pergunta}</h1>
                            <div className="info">
                            {this.state.usuario == null ?"":this.state.usuario.nome} perguntou dia {data.toLocaleString().replace(" "," às ")}
                            </div>
                            <div className="pergunta-conteudo">
                                <div id="previa"></div>
                            </div>
                        </div>            
                        
                    </div>

                   
                    <button type="submit" className="btn-enviar">Enviar</button>
                    <div id="mensagem"></div>
                </form>
            </div>
        </div>
    }
}
export default Conteudo;