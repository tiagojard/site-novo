import React, { Component } from 'react';
import Destaque from "./Destaque"
import ConteudoAdicional from './ConteudoAdicional';
import Produto from './Produto';

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

        //var adsTopo = '<ins class="adsbygoogle" style="display:inline-block;width:970px;height:90px" data-ad-client="ca-pub-8019971282281713" data-ad-slot="8091665402"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
        //var adsEsquerdo = '<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-8019971282281713" data-ad-slot="2067669765"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
        //var adsDireito = '<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-8019971282281713" data-ad-slot="1538306282"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
        var editorValue = "<p>\nTexto...\n</p>\n";
        return <div className="corpo-pagina">
          <div className="introducao">
    <h1>Guia do Desenvolvedor</h1>
    <h2>Plataforma para programadores</h2>
    <div>
        <h3 className="intro-conhecimento">Ajude a plataforma crescer, compartilhe seu conhecimento e faça parte desse guia. Ajudamos programadores iniciantes com conteúdos de qualidade.</h3>
        <a  className="btn-intro" href="/cadastro/conteudo" title="Compartilhar conhecimento">Compartilhar conhecimento</a>
    </div>
    <div>
        <h3>Está com dúvida em algum assundo ou não esta conseguindo fazer algo?</h3>
        <a className="btn-intro" href="/cadastro/conteudo" title="Envie sua pergunta">Envie sua pergunta</a>
    </div>
    <h3>Confira alguns cursos que fará muita diferença em seu aprendizado!</h3>
    <a className="btn-curso" href="/curso" title="Veja alguns cursos">Veja alguns cursos</a>
</div>
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
                <div className="anuncio-topo" />
                <div className="anuncio-esquerdo" />
                <div className="conteudo" itemProp="mainEntity" itemScope itemType="http://schema.org/Question">
                    <div className="pergunta">
                        <h1 itemProp="name">
                        <a href={this.props.location.pathname} itemProp="url">{repos.pergunta}</a>
                        </h1>
                        <div className="info">
                            <div className="info-foto">
                              <img src={repos.usuario_imagem} alt={repos.usuario_nome} />                            
                            </div>
                            <div className="bloco">
                            <div className="info-nome" itemProp="author" itemScope itemType="http://schema.org/Person">
                              <span itemProp="name">
                                {repos.usuario_nome}&nbsp;&nbsp;
                              </span>
                            </div>
                            <div className="info-data">
                            perguntou dia &nbsp;<time itemProp="dateCreated" dateTime={repos.data}>{repos.data_formatada.replace(" "," às ")}</time> 
                            </div>
                            </div>
                           
                        </div>
                        <h2 className="pergunta-conteudo" itemProp="text" dangerouslySetInnerHTML={{__html:repos.pergunta_site }} />
                        <a href={"/busca/assunto/"+repos.assunto[0].nome} title={repos.assunto[0].nome}>
                          <h3 className="tags">
                          <img src={repos.assunto[0].imagem} alt={repos.assunto[0].nome} />
                          {repos.assunto[0].nome}</h3>
                        </a>
                        <br/>
                        {repos.Respostas == undefined ? <strong className="qtde"><span itemProp="answerCount">0</span>&nbsp;Respostas</strong> : <strong className="qtde"><span itemProp="answerCount">{repos.Respostas.length}</span>&nbsp;Respostas</strong> }
                    </div>
                    {(repos.Respostas == undefined ? <div></div> :
                    <div className="respostas">
                        {
                            repos.Respostas.map((item, index) =>
                            <div className="resposta" itemProp="suggestedAnswer acceptedAnswer" itemScope itemType="http://schema.org/Answer" key={index}>
                               <div className={"votos" + (item.votos == 0 ? "":( item.votos > 0 ? " positivo" : " negativo" ) )}>
                                <div className="qtde">
                                  <button type="button" name="btn-voto" data-id={repos.id} data-like="true" data-pos={index} data-user={item.usuario}>
                                    <img src="\imagens\icone-up.svg" alt="Voto positivo" />
                                  </button>
                                  <span itemProp="upvoteCount">{item.votos}</span>
                                  <button type="button" name="btn-voto" data-id={repos.id} data-like="false" data-pos={index} data-user={item.usuario}>
                                    <img src="\imagens\icone-down.svg" alt="Voto negativo" />
                                  </button> 
                                </div>
                               </div>
                               <h2 className="resposta-conteudo">
                                <a href={this.props.location.pathname+"#id_"+index} className="a-resp" itemProp="url" id={"id_"+index}>{"Resposta "+(index+1)}&nbsp;</a>
                                  <div className="info">
                                  <div className="info-foto">
                                    <img src={item.usuario_imagem} alt={item.usuario_nome} />                            
                                  </div>
                                  <div className="bloco">
                                  <div className="info-nome" itemProp="author" itemScope itemType="http://schema.org/Person">
                                    <span itemProp="name">{item.usuario_nome}</span>&nbsp;&nbsp;
                                  </div>
                                  <div className="info-data">
                                    respondeu dia &nbsp;&nbsp;
                                    <time itemProp="dateCreated" dateTime={item.data}>{item.data.replace(" "," às ")}</time>
                                    </div>
                                  </div>
                                  </div>
                                  <div itemProp="text">
                                  <span className="text-pergunta">{repos.pergunta}</span>
                                    <div dangerouslySetInnerHTML={{__html:item.resposta }}/>
                                  </div>
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
                        <button id="btn-perguntar" type="button" className="btn-perguntar">Responder</button>  
                        }
                        <br/> <br/>
                        <h3 className="tit">Cursos recomendados especialmente para você!</h3>
                        <br/>
                       <Produto />
                        <ConteudoAdicional assunto={repos.assunto[0].nome} link={"/busca/assunto/"+repos.assunto[0].nome}/>
                </div>
                <div className="bloco-direito">
                      <Destaque assunto={repos.assunto[0].nome} idPagina={repos.id}/>
                      <div className="anuncio-direito" />
                </div>
        </div>
      }
}
export default Pergunta;


/**
  
 <div className="corpo-pagina">
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
                <div className="conteudo" itemProp="mainEntity" itemScope itemType="http://schema.org/Question">
                    <div className="pergunta">
                        <h1 itemProp="name">
                        <a href={this.props.location.pathname} itemProp="url">{repos.pergunta}</a>
                        </h1>
                        <div className="info">
                            <div className="info-foto">
                              <img src={repos.usuario_imagem} alt={repos.usuario_nome} />                            
                            </div>
                            <div className="bloco">
                            <div className="info-nome" itemProp="author" itemScope itemType="http://schema.org/Person">
                              <span itemProp="name">
                                {repos.usuario_nome}&nbsp;&nbsp;
                              </span>
                            </div>
                            <div className="info-data">
                            perguntou dia &nbsp;<time itemProp="dateCreated" dateTime={repos.data}>{repos.data_formatada.replace(" "," às ")}</time> 
                            </div>
                            </div>
                           
                        </div>
                        <h2 className="pergunta-conteudo" itemProp="text" dangerouslySetInnerHTML={{__html:repos.pergunta_site }} />
                        <a href={"/busca/assunto/"+repos.assunto[0].nome} title={repos.assunto[0].nome}>
                          <h3 className="tags">
                          <img src={repos.assunto[0].imagem} alt={repos.assunto[0].nome} />
                          {repos.assunto[0].nome}</h3>
                        </a>
                        <br/>
                        {repos.Respostas == undefined ? <strong className="qtde"><span itemProp="answerCount">0</span>&nbsp;Respostas</strong> : <strong className="qtde"><span itemProp="answerCount">{repos.Respostas.length}</span>&nbsp;Respostas</strong> }
                    </div>
                    {(repos.Respostas == undefined ? <div></div> :
                    <div className="respostas">
                        {
                            repos.Respostas.map((item, index) =>
                            <div className="resposta" itemProp="suggestedAnswer acceptedAnswer" itemScope itemType="http://schema.org/Answer" key={index}>
                               <div className={"votos" + (item.votos == 0 ? "":( item.votos > 0 ? " positivo" : " negativo" ) )}>
                                <div className="qtde">
                                  <button type="button" name="btn-voto" data-id={repos.id} data-like="true" data-pos={index} data-user={item.usuario}>
                                    <img src="\imagens\icone-up.svg" alt="Voto positivo" />
                                  </button>
                                  <span itemProp="upvoteCount">{item.votos}</span>
                                  <button type="button" name="btn-voto" data-id={repos.id} data-like="false" data-pos={index} data-user={item.usuario}>
                                    <img src="\imagens\icone-down.svg" alt="Voto negativo" />
                                  </button> 
                                </div>
                               </div>
                               <h2 className="resposta-conteudo">
                                <a href={this.props.location.pathname+"#id_"+index} className="a-resp" itemProp="url" id={"id_"+index}>{"Resposta "+(index+1)}&nbsp;</a>
                                  <div className="info">
                                  <div className="info-foto">
                                    <img src={item.usuario_imagem} alt={item.usuario_nome} />                            
                                  </div>
                                  <div className="bloco">
                                  <div className="info-nome" itemProp="author" itemScope itemType="http://schema.org/Person">
                                    <span itemProp="name">{item.usuario_nome}</span>&nbsp;&nbsp;
                                  </div>
                                  <div className="info-data">
                                    respondeu dia &nbsp;&nbsp;
                                    <time itemProp="dateCreated" dateTime={item.data}>{item.data.replace(" "," às ")}</time>
                                    </div>
                                  </div>
                                  </div>
                                  <div itemProp="text">
                                  <span className="text-pergunta">{repos.pergunta}</span>
                                    <div dangerouslySetInnerHTML={{__html:item.resposta }}/>
                                  </div>
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
                        <button id="btn-perguntar" type="button" className="btn-perguntar">Responder</button>  
                        }
                        
                </div>
                <div className="bloco-direito">
                      <Destaque assunto={repos.assunto[0].nome} idPagina={repos.id}/>
                      <div className="anuncio-direito" dangerouslySetInnerHTML={{__html:adsDireito }}/>
                </div>
        </div> 
 
 
 */