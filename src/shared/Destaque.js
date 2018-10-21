import React, { Component } from 'react';

class Destaque extends Component {
	constructor(props) {
        super(props);
		this.state = {
            result: null,
            loading: true,
          }
	}

    componentDidMount() {
        /*
        //+this.props.idPagina
        fetch("https://guiadesenvolvedor-78a46.firebaseio.com/conteudo.json")
        .then(res => res.json())
        .then(
            (result) => {
            this.setState({
                loading: result ? false : true,
                result: result
            });
            },
            (error) => {
            this.setState({
                loading: true
            });
            }
        );
        */
    }

	componentDidUpdate(prevProps){
        /*
        if(this.props.idPagina != prevProps.idPagina){
            //+this.props.idPagina
            fetch("https://guiadesenvolvedor-78a46.firebaseio.com/conteudo.json")
        .then(res => res.json())
        .then(
            (result) => {
            this.setState({
                loading: result ? false : true,
                result: result
            });
            },
            (error) => {
            this.setState({
                loading: true
            });
            }
        );
        }
        */
	}

	render(){
      
            return <div></div>;
     
        if(this.state.loading == true){
            return <div></div>;
        }
        const result = Object.values(this.state.result);
		return (<div>{
            result.map((item, index) =>
                            <div key={index}>
                            { 
                            this.props.idPagina != item.id ? 
                            <div>
 <div className="item-destaque">
                                <a href={"/pagina"+item.url} title={item.title}>
                                    <p>
                                        <img src={item.assunto[0].imagem} className="img-pagina-destaque" align="left" alt={item.title}/>{item.title}. {item.descricao}
                                    </p>
                                </a>
                            </div>
                            <hr className="hr-destaque"/>

                            </div>:
                            <div></div>
                            }
                           
                            { /*index % 2 != 0 ?<div className="item-destaque-anuncio"></div>:"" */}
                        </div>)
        }
                </div>);
	}	
}
export default Destaque;