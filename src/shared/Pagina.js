import React, { Component } from 'react';

class pagina extends Component {
	constructor(props) {
      super(props);
  }

	componentDidMount() {
        
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

  }
	render(){
   
		return (<div className="corpo-pagina">
                    <div className="anuncio-topo">
                    
                    </div>
                    <div className="anuncio-esquerdo">
                   
                    </div>
                    <div className="conteudo">
                      <div id="conteudo"></div>
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