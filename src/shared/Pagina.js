import React, { Component } from 'react';

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
    }else{
      document.title = "Guia desenvolvedor - "+ this.state.repos.titulo;//this.props.match.params.titulo.replace('-',' ');
    }
		/*
            fetch("https://tiagojardim.000webhostapp.com/setVisualizacaoPagina.php?id_pagina="+this.props.match.params.id)
            .then(res => res.json())
            .then(
              (result) => {

              },
              (error) => {
                
              }
            )
        */
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
    const { loading, repos } = this.state
    
    if (loading === true) {
      return <p>LOADING</p>
    }
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
                      Destaques
                    </div>
                      
                    </div>
                </div>);
	}
}
export default Pagina;
