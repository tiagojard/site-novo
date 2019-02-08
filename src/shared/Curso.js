import React, { Component } from 'react';

class Curso extends Component {
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
      }
  
      this.fetchRepos = this.fetchRepos.bind(this)
    }

    componentDidMount() {
        if (!this.state.repos) {
          this.fetchRepos(this.props.match.params.id)
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
        var adsTopo = '<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-9280026867797270" data-ad-slot="1911584022" data-ad-format="auto" data-full-width-responsive="true"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
        var adsEsquerdo = '<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-9280026867797270" data-ad-slot="4048762396" data-ad-format="auto" data-full-width-responsive="true"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
        var adsDireito = '<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-9280026867797270" data-ad-slot="2538022566" data-ad-format="auto" data-full-width-responsive="true"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
        var adsConteudo = '<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-9280026867797270" data-ad-slot="5901851801" data-ad-format="auto" data-full-width-responsive="true"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
        return <div className="container">
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
                        <a itemType="http://schema.org/Thing" itemProp="item" href="/cursos">
                            <span itemProp="name">Cursos</span>
                        </a>
                        <meta itemProp="position" content="2" />
                        </li> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8"><rect width="100%" height="100%" fill="none"/><g className="currentLayer"><path d="M2.842 7.79c-.053.053-.12.08-.192.08s-.138-.027-.191-.08a.27.27 0 0 1 0-.383l3.365-3.365L2.46.676a.27.27 0 0 1 .383-.383L6.398 3.85a.27.27 0 0 1 0 .383L2.842 7.79z" fill="#ccc"/></g></svg>      
                    <li itemProp="itemListElement" itemScope
                            itemType="http://schema.org/ListItem"> 
                            <a href={this.props.location.pathname} itemType="http://schema.org/Thing" itemProp="item">
                                <span itemProp="name">{repos.descricao}</span>
                            </a>
                            <meta itemProp="position" content="3" />
                    </li>
                </ol>
            <div className="anuncio-topo" dangerouslySetInnerHTML={{__html:adsTopo }}/>
            <div className="anuncio-esquerdo" dangerouslySetInnerHTML={{__html:adsEsquerdo }}/>
            <div className="produto">
            <div className="titulo">
              <h1>{repos.descricao}</h1>
              <span>Criado por </span><strong>{repos.criado}</strong>
            </div>
            <div className="img">
              <img src={repos.imagem} alt={repos.descricao}/>
              
            </div>
            <div className="info">
            <strong>Formato: </strong><span>{repos.formato}</span><br/>
            <strong>Segmento: </strong><span>{repos.segmento}</span><br/>
            <a href={repos.link} title={repos.descricao} rel="nofollow">Acessar</a>
              <h2 dangerouslySetInnerHTML={{__html:repos.sobre }}/>
              <div className="anuncio-conteudo" dangerouslySetInnerHTML={{__html:adsConteudo }}/>
            </div>
            </div>
            <div className="anuncio-direito" dangerouslySetInnerHTML={{__html:adsDireito }}/>
        </div>
    }
}
export default Curso;
