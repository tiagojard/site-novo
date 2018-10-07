import React, { Component } from 'react';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          item: null,
        };
    }

    componentDidMount() {
        fetch("https://tiagojardim.000webhostapp.com/getDestaque.php?id_pagina=0")
			.then(res => res.json())
			.then(
			  (result) => {

				result.push(result[0]);
				result.push(result[1]);
				result.push(result[0]);
				result.push(result[1]);
				

				this.setState({
				  isLoaded: result != null?true:false,
				  itens: result
				});
			  },
			  (error) => {
				this.setState({
				  isLoaded: true,
				  error
				});
			  }
			);
    }

    render(){
/*
        <p>{item.descricao}</p>
        <p>{item.data}</p>
        <p>{item.assunto}</p>
        <p>{item.qtdeAcesso}</p>
*/
        var result = [];
		if(this.state.isLoaded == true){
            result = this.state.itens.map((item, index) =>
            <div key={index}>
                <div  className="conteudo-home-container">
                    <div className="conteudo-home-img">
                        <img src="" className="img-destaque" />
                    </div>
                    <div className="conteudo-home-detalhe">
                        <a href={"/pagina"+item.url}>{item.titulo}</a>
                        <div><br/>
                            {item.descricao} First, let’s review how you transform lists in JavaScript. Given the code below, we use the map() function to take an array of numbers and double their values. We assign the new array returned by map() to the variable doubled and log it
                        </div>
                        <div className="conteudo-home-info">
                        {item.qtdeAcesso} | <span className="assunto">{item.assunto}</span> | {new Date(item.data).toLocaleDateString()}
                        </div>
                    </div>
                </div>
                <hr className="hr-margin"/>
            </div>
			
           
			);
		}
        return (<div className="corpo-pagina">
                    <div className="anuncio-topo">
                      
                    </div>
                    <div className="anuncio-esquerdo">
                     
                    </div>
                    <div className="conteudo-home">
                    {result}
                    </div>
                    <div className="destaque-direito-home">
                      
                    </div>
            </div>);
    }
}
export default Home;