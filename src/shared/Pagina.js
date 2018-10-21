import React, { Component } from 'react';
import Destaque from './Destaque'

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
    //repos = Object.values(repos)[0];
		return (<div className="corpo-pagina">
                    <div className="anuncio-topo">
                    
                    </div>
                    <div className="anuncio-esquerdo">
                   
                    </div>
                    <div className="conteudo">
                      <div id="conteudo" dangerouslySetInnerHTML={{__html:repos.conteudo }} />
                    </div>
                    <div className="destaque-direito">
                    <div className="titulo-destaque">
                     Destaque
                    </div>
                    <Destaque idPagina={repos.id} />
                    </div>
                </div>);
	}
}
export default Pagina;
