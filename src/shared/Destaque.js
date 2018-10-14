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
        fetch("https://tiagojardim.000webhostapp.com/getDestaque.php?id_pagina="+this.props.idPagina)
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

	componentDidUpdate(prevProps){
        if(this.props.idPagina != prevProps.idPagina){
            fetch("https://tiagojardim.000webhostapp.com/getDestaque.php?id_pagina="+this.props.idPagina)
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
	}

	render(){
        if(this.state.loading == true){
            return <div></div>;
        }

		return (<div>
					{
                        this.state.result.destaques.map((item, index) =>
                        <div key={index}>
                            <div className="item-destaque">
                                <a href={"/pagina"+item.url} title={item.titulo}>
                                    <p>
                                        <img src={item.imagem} className="img-pagina-destaque" align="left" alt={item.titulo}/>{item.titulo}. {item.descricao}
                                    </p>
                                </a>
                            </div>
                            <hr className="hr-destaque"/>
                            { /*index % 2 != 0 ?<div className="item-destaque-anuncio"></div>:"" */}
                        </div>)
                    }
                </div>);
	}	

}
export default Destaque;