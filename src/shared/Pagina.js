import React, { Component } from 'react';
import Destaque from './Destaque'
import Produto from './Produto'

class Pagina extends Component {
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
    //repos = Object.values(repos)[0];
    var adsTopo = '<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-9280026867797270" data-ad-slot="1911584022" data-ad-format="auto" data-full-width-responsive="true"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
    var adsEsquerdo = '<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-9280026867797270" data-ad-slot="4048762396" data-ad-format="auto" data-full-width-responsive="true"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
    var adsDireito = '<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-9280026867797270" data-ad-slot="2538022566" data-ad-format="auto" data-full-width-responsive="true"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
    return (<div className="corpo-pagina">
                    <div className="anuncio-topo" dangerouslySetInnerHTML={{__html:adsTopo }}/>
                    <div className="anuncio-esquerdo" dangerouslySetInnerHTML={{__html:adsEsquerdo }}/>
                    <div className="conteudo">
                      <h1>{repos.title}</h1>
                      <div className="tag">
                        <a href={"/busca/assunto/"+repos.assunto[0].nome} title={repos.assunto[0].nome} className="assunto"><h4>{repos.assunto[0].nome}</h4></a>
                      </div>
                      <div id="conteudo" dangerouslySetInnerHTML={{__html:repos.conteudo_site }} />
                      <br/>
                    <hr className="hr"/>
                    <p className="titulo-produto"><strong>Top cursos</strong> tá todo mundo clicando</p>
                      <Produto />
                    </div>
                    <div className="destaque-direito">
                      <div className="anuncio-direito" dangerouslySetInnerHTML={{__html:adsDireito }}/>
                      <div className="titulo-destaque">
                      Destaque
                      </div>
                      <Destaque idPagina={repos.id} />
                    </div>
                </div>);
	}
}
export default Pagina;
