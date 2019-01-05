import React, { Component } from 'react';

class Pergunta extends Component {
    constructor(props) {
        super(props);
          
       let repos
      if (__isBrowser__) {
        repos = window.__INITIAL_DATA__
        delete window.__INITIAL_DATA__
      } else {
        repos = this.props.staticContext.data
      }
  
      this.state = {
        repos,
        loading: repos ? false : true,
        usuario: null
      }
  
      this.fetchRepos = this.fetchRepos.bind(this)
    }

    componentDidMount() {
      var usuario =  RetornaUsuario();
      this.setState(() => ({
        usuario: usuario
      }))
      if (!this.state.repos) {
        this.fetchRepos(this.props.match.params.id);
      }
    }

    componentDidUpdate (prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
          this.fetchRepos(this.props.match.params.id)
        }
      }
        fetchRepos (lang) {
        this.setState(() => ({
          loading: true
        }))
    
        this.props.fetchInitialData(lang)
          .then((repos) => this.setState(() => ({
            repos,
            loading: false,
          })))
      }
      render(){
        var { loading, repos  } = this.state;
    
        if (loading === true) {
          return <p>LOADING</p>
        }
    
        if(repos == null){
          return <div></div>
        }

        var adsTopo = '<ins className="adsbygoogle" style="display:block" data-ad-client="ca-pub-9280026867797270" data-ad-slot="1911584022" data-ad-format="auto" data-full-width-responsive="true"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
        var adsEsquerdo = '<ins className="adsbygoogle" style="display:block" data-ad-client="ca-pub-9280026867797270" data-ad-slot="4048762396" data-ad-format="auto" data-full-width-responsive="true"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
        var adsDireito = '<ins className="adsbygoogle" style="display:block" data-ad-client="ca-pub-9280026867797270" data-ad-slot="2538022566" data-ad-format="auto" data-full-width-responsive="true"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
        var editorValue = "<p>\nTexto...\n</p>\n";
        return <div className="corpo-pagina">
                <ol itemScope itemType="http://schema.org/BreadcrumbList" className="breadcrumbs">
                    <li itemProp="itemListElement" itemScope
                        itemType="http://schema.org/ListItem">
                        <a itemType="http://schema.org/Thing" itemProp="item" href="/">
                            <span itemProp="name">Página inicial</span>
                        </a>
                        <meta itemProp="position" content="1" />
                    </li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8"><rect width="100%" height="100%" fill="none"/><g className="currentLayer"><path d="M2.842 7.79c-.053.053-.12.08-.192.08s-.138-.027-.191-.08a.27.27 0 0 1 0-.383l3.365-3.365L2.46.676a.27.27 0 0 1 .383-.383L6.398 3.85a.27.27 0 0 1 0 .383L2.842 7.79z" fill="#ccc"/></g></svg>
                    <li itemProp="itemListElement" itemScope
                        itemType="http://schema.org/ListItem">
                        <a itemType="http://schema.org/Thing" itemProp="item" href={"/busca/assunto/"+repos.assunto[0].nome}>
                            <span itemProp="name">{repos.assunto[0].nome}</span>
                        </a>
                        <meta itemProp="position" content="2" />
                        </li> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8"><rect width="100%" height="100%" fill="none"/><g className="currentLayer"><path d="M2.842 7.79c-.053.053-.12.08-.192.08s-.138-.027-.191-.08a.27.27 0 0 1 0-.383l3.365-3.365L2.46.676a.27.27 0 0 1 .383-.383L6.398 3.85a.27.27 0 0 1 0 .383L2.842 7.79z" fill="#ccc"/></g></svg>      
                    <li itemProp="itemListElement" itemScope
                            itemType="http://schema.org/ListItem"> 
                            <a href={this.props.location.pathname} itemType="http://schema.org/Thing" itemProp="item">
                                <span itemProp="name">{repos.pergunta}</span>
                            </a>
                            <meta itemProp="position" content="3" />
                    </li>
                </ol>
                <div className="anuncio-topo" dangerouslySetInnerHTML={{__html:adsTopo }}/>
                <div className="anuncio-esquerdo" dangerouslySetInnerHTML={{__html:adsEsquerdo }}/>
                <div className="conteudo">
                    <div className="pergunta">
                        <h1>{repos.pergunta}</h1>
                        <div className="info">
                            {repos.usuario_nome} perguntou dia {repos.data_formatada.replace(" "," às ")}
                        </div>
                        <h2 className="pergunta-conteudo" dangerouslySetInnerHTML={{__html:repos.pergunta_site }} />
                        <a href={"/busca/assunto/"+repos.assunto[0].nome} title={repos.assunto[0].nome}>
                          <h3 className="tag">{repos.assunto[0].nome}</h3>
                        </a>
                        <br/>
                        {repos.Respostas == undefined ? <strong></strong> :<strong className="qtde">{repos.Respostas.length} Respostas</strong> }
                    </div>
                    {(repos.Respostas == undefined ? <div></div> :
                    <div className="respostas">
                        {
                           
                            repos.Respostas.map((item, index) =>
                            <div className="resposta" key={index}>
                               <div className={"votos" + (item.votos == 0 ? "":( item.votos > 0 ? " positivo" : " negativo" ) )}>
                                <p>Ajudou?</p>
                                <div className="qtde">
                                  <button type="button" name="btn-voto" data-id={repos.id} data-like="true" data-user={item.usuario} data-votos={item.votos}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><rect width="100%" height="100%" fill="none"/><g className="currentLayer"><g fill="#00d15e"><path d="M18.822 11.037c.432-.495.648-1.08.648-1.755 0-.612-.224-1.142-.67-1.59-.448-.447-.978-.671-1.59-.671h-3.262a1.97 1.97 0 0 1 .224-.542 9.742 9.742 0 0 0 .442-.871c.073-.173.148-.409.223-.707.074-.298.111-.597.111-.895 0-.188-.002-.342-.006-.46a5.065 5.065 0 0 0-.058-.53 2.974 2.974 0 0 0-.142-.588 2.744 2.744 0 0 0-.282-.53 1.651 1.651 0 0 0-.472-.477 2.58 2.58 0 0 0-.706-.306 3.517 3.517 0 0 0-.972-.124.725.725 0 0 0-.53.224c-.157.157-.29.353-.4.589-.11.235-.187.44-.23.612-.044.173-.093.413-.147.719-.071.33-.124.567-.16.712a3.767 3.767 0 0 1-.206.571 1.805 1.805 0 0 1-.365.566c-.259.259-.655.73-1.19 1.413-.384.502-.78.977-1.189 1.425-.408.447-.706.679-.895.695a.772.772 0 0 0-.506.241.71.71 0 0 0-.212.512v7.55c0 .203.074.378.224.523.149.145.325.222.53.23.274.008.895.18 1.86.518.605.204 1.078.36 1.42.465.34.106.818.22 1.43.342a8.75 8.75 0 0 0 1.696.182h1.519c1.044-.015 1.817-.322 2.32-.918.455-.542.647-1.252.577-2.132.306-.29.518-.66.636-1.107a2.422 2.422 0 0 0 0-1.377c.36-.48.53-1.017.506-1.614.001-.251-.058-.55-.176-.895zM4.773 8.529H1.38a.724.724 0 0 0-.53.223.724.724 0 0 0-.224.53v7.538c0 .204.075.38.224.53.15.149.326.223.53.223h3.392c.204 0 .38-.074.53-.223a.725.725 0 0 0 .223-.53V9.282a.724.724 0 0 0-.223-.53.724.724 0 0 0-.53-.223zm-1.355 7.319a.734.734 0 0 1-.53.218.728.728 0 0 1-.535-.218.728.728 0 0 1-.218-.536c0-.204.072-.38.218-.53a.718.718 0 0 1 .535-.224c.205 0 .381.075.53.224.15.15.224.326.224.53 0 .212-.074.39-.224.536z"/></g></g></svg>
                                  </button>
                                  <span>{item.votos}</span>
                                  <button type="button" name="btn-voto" data-id={repos.id} data-like="false" data-user={item.usuario} data-votos={item.votos}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><rect width="100%" height="100%" fill="none"/><g className="currentLayer"><g fill="red"><path d="M4.78 2.563H1.403a.721.721 0 0 0-.527.222.72.72 0 0 0-.223.528v7.503c0 .203.074.379.223.527a.721.721 0 0 0 .528.223H4.78a.722.722 0 0 0 .527-.223.72.72 0 0 0 .223-.527V3.313a.721.721 0 0 0-.223-.528.72.72 0 0 0-.527-.222zM3.43 5.34a.72.72 0 0 1-.527.223.715.715 0 0 1-.533-.223.73.73 0 0 1-.217-.528c0-.21.072-.388.217-.533a.725.725 0 0 1 .533-.217.73.73 0 0 1 .527.217.715.715 0 0 1 .223.533.722.722 0 0 1-.223.528zM18.765 9.069c.117-.344.176-.64.175-.89a2.432 2.432 0 0 0-.504-1.607 2.408 2.408 0 0 0 0-1.371 2.28 2.28 0 0 0-.633-1.102c.07-.876-.121-1.583-.575-2.122-.5-.594-1.27-.9-2.31-.915h-1.512c-.515 0-1.078.06-1.687.182-.61.121-1.085.235-1.424.34-.34.106-.811.26-1.413.463-.961.336-1.579.508-1.852.516a.776.776 0 0 0-.528.228.702.702 0 0 0-.223.522v7.515c0 .195.071.365.212.51.14.144.308.224.504.24.187.016.484.246.89.691.407.446.802.919 1.185 1.42.531.679.926 1.148 1.184 1.406.14.14.261.328.363.562.101.235.17.424.205.569.035.144.088.38.159.71.054.304.103.542.146.714.043.172.12.375.229.61.11.234.242.43.398.586a.72.72 0 0 0 .528.223 3.5 3.5 0 0 0 .967-.123 2.57 2.57 0 0 0 .704-.305c.184-.121.34-.28.469-.475.129-.195.222-.371.281-.527.059-.157.106-.352.14-.586a5.05 5.05 0 0 0 .06-.528c.003-.117.005-.27.005-.457 0-.297-.039-.596-.117-.897-.078-.3-.152-.53-.223-.686-.07-.156-.175-.38-.316-.668a4.235 4.235 0 0 0-.117-.211 1.995 1.995 0 0 1-.223-.54h3.248c.609 0 1.135-.223 1.576-.668.442-.446.666-.973.674-1.583 0-.687-.215-1.27-.645-1.746z"/></g></g></svg>
                                  </button> 
                                </div>
                               </div>
                               <h2 className="resposta-conteudo">
                                  <div className="info"> {item.usuario_nome} respondeu dia {item.data.replace(" "," às ")}</div>
                                  <div dangerouslySetInnerHTML={{__html:item.resposta }}/>
                               </h2>
                            </div>)
                        }
                        </div>
                        )}
                        {this.state.usuario != null ? 
                        <div className="responder">
                        <strong>Responda a pergunta</strong>
                        <p>Se você pegou de algum lugar de os créditos e cite a referência!</p>
                        <div className="container-botoes">
                          <button type="button" data-tipo="t" name="btn-code">Texto</button>
                          <button type="button" data-tipo="p" name="btn-code">Pular linha
                          </button>
                          <button className="dropdown"><div className="dropbtn-button">Código</div>
                              <div className="dropdown-content-code">
                                  <a href="javascript:void(0)" data-tipo="code" data-linguagem="javaScript" name="btn-code">Node.js</a>
                                  <a href="javascript:void(0)" data-tipo="code" data-linguagem="javaScript" name="btn-code">javaScript</a>
                                  <a href="javascript:void(0)" data-tipo="code" data-linguagem="sql" name="btn-code">SQL Server</a>
                                  <a href="javascript:void(0)" data-tipo="code" data-linguagem="javaScript" name="btn-code">Jquery</a>
                                  <a href="javascript:void(0)" data-tipo="code" data-linguagem="javaScript" name="btn-code">React js</a>
                                  <a href="javascript:void(0)" data-tipo="code" data-linguagem="markup" name="btn-code">HTML</a>
                                  <a href="javascript:void(0)" data-tipo="code" data-linguagem="css" name="btn-code">CSS</a>
                                  <a href="javascript:void(0)" data-tipo="code" data-linguagem="csharp" name="btn-code">C#</a>
                                  <a href="javascript:void(0)" data-tipo="code" data-linguagem="php" name="btn-code">PHP</a>
                                  <a href="javascript:void(0)" data-tipo="code" data-linguagem="python" name="btn-code">python</a>
                              </div>
                          </button>
                          <button type="button" data-tipo="l" name="btn-code">Link</button>
                      </div>
                        <textarea id="editorGD" rows="15" defaultValue={editorValue}>
                        </textarea>
                        <strong>Prévia</strong>
                        <div id="previa">

                        </div>
                        <button id="btn-enviar" type="button" className="btn-perguntar" data-id={repos.id}>Enviar</button>
                      </div>
                        : 
                        <button id="btn-perguntar" type="button" className="btn-perguntar">Perguntar</button>  
                        }
                        
                </div>
                
        </div>
      }
}
export default Pergunta;
