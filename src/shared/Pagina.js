import React, { Component } from 'react';

class pagina extends Component {
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

	componentDidMount() {
        
		if (!this.state.repos) {
      this.fetchRepos(this.props.match.params.id)
    }
		/*
          fetch("https://tiagojardim.000webhostapp.com/getPagina.php?pagina="+this.props.match.params.id)
            .then(res => res.json())
            .then(
              (result) => {
                //document.getElementById("busca").value = result.pesquisa;
                if(result != null)
                {
                    document.title = result.titulo;
                    document.getElementById("conteudo").innerHTML = result.conteudo;
                }
              },
              (error) => {
             
              }
            );

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
	render(){
    const { loading, repos } = this.state

    if (loading === true) {
      return <p>LOADING</p>
    }
		document.title = repos.titulo;
		return (<div className="corpo-pagina">
                    <div className="anuncio-topo">
                    
                    </div>
                    <div className="anuncio-esquerdo">
                   
                    </div>
                    <div className="conteudo">
                      <div id="conteudo">{repos.conteudo}</div>
                    </div>
                    <div className="destaque-direito">
                    <div className="titulo-destaque">
                      Destaques
                    </div>
                      
                    </div>
                </div>);
	}
}
export default pagina;
