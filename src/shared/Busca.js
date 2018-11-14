import React, { Component } from 'react';

class Busca extends Component {
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
        repos:repos,
        loading: repos ? false : true,
      }
  
      this.fetchRepos = this.fetchRepos.bind(this)
    }

    componentDidMount() {
        if (!this.state.repos) {
            this.fetchRepos(this.props.match.params.pesquisa)
          }
    }
    componentDidUpdate (prevProps, prevState) {
        if (prevProps.match.params.pesquisa !== this.props.match.params.pesquisa) {
          this.fetchRepos(this.props.match.params.pesquisa)
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
        const { loading, repos } = this.state;
        if (loading === true) {
          return <p>LOADING</p>
        }
        //<a href="https://go.hotmart.com/K9423178A" title="Clique aqui e saiba mais." rel="nofollow" target="_blank"><img src="/banner-templates.png" alt="template" /></a>
        //<a href="https://go.hotmart.com/H9422393Q" title="Clique aqui e saiba mais." rel="nofollow" target="_blank"><img src="/banner-javascript.png" alt="javascript"/></a>
        //<a href="https://go.hotmart.com/K9423178A" title="Clique aqui e saiba mais." rel="nofollow" target="_blank"><img src="/banner-templates.png" alt="template" /></a>
        var adsTopoGabriel = "";//'<ins class="adsbygoogle" style="display:inline-block;width:728px;height:90px" data-ad-client="ca-pub-5825646877386493" data-ad-slot="5291356734"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
        var adsTopo = '<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-9280026867797270" data-ad-slot="1911584022" data-ad-format="auto" data-full-width-responsive="true"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
        var adsEsquerdo = '<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-9280026867797270" data-ad-slot="4048762396" data-ad-format="auto" data-full-width-responsive="true"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
        var adsDireito = '<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-9280026867797270" data-ad-slot="2538022566" data-ad-format="auto" data-full-width-responsive="true"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
        return <div className="corpo-pagina">
        <div className="anuncio-topo" dangerouslySetInnerHTML={{__html:adsTopo }}/>
        <div className="container-esquerdo">
            <div className="menu-esquerdo">
                <div className="menu-esquerdo-titulo">Assuntos</div>
                <ul>
                    <li><a href="/busca/assunto/Node.js" title="Node.js">Node.js</a></li>
                    <li><a href="/busca/assunto/JavaScript" title="javaScript">javaScript</a></li>
                    <li><a href="/busca/assunto/SQL Server" title="SQL Server">SQL Server</a></li>
                    <li><a href="/busca/assunto/Jquery" title="Jquery">Jquery</a></li>
                    <li><a href="/busca/assunto/React js" title="React js">React js</a></li>
                </ul>
            </div>
            <div className="anuncio-esquerdo" dangerouslySetInnerHTML={{__html:adsEsquerdo }}/>
        </div>
        <div className="conteudo-home">
        <h3 className="titulo-home">Resultados encontrados para "{this.props.match.params.pesquisa}"</h3>
        <h1 className="sub-titulo-home">Guia desenvolvedor</h1>
            {
                        repos.map((item, index) =>
                        <div key={index}>
                            { item.ativo == true ? 
                            <div className="conteudo-home-container">
                                <div className="conteudo-home-img">
                                    <img src={item.assunto[0].imagem} className="img-destaque" alt={item.title} />
                                </div>
                                <div className="conteudo-home-detalhe">
                                    <a href={"/pagina"+item.url}><h2>{item.title}</h2></a>
                                    <div>
                                    <h3>{item.descricao}</h3>
                                    </div>
                                    <div className="conteudo-home-info">
                                    <a href={"/busca/assunto/"+item.assunto[0].nome} title={item.assunto[0].nome} className="assunto"><h4>{item.assunto[0].nome}</h4></a>
                                    </div>
                                </div>
                            </div>
                               :<div></div> }
                            <hr className="hr-margin"/>
                        </div>
                        )
                    }
            </div>
            <div className="anuncio-direito" dangerouslySetInnerHTML={{__html:adsDireito }}/>
        </div>
    }

}

export default Busca;
