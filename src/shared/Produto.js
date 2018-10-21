import React, { Component } from 'react';
class Produto extends Component {
    constructor(props) {
        super(props);
		this.state = {
            result: null,
            loading: true,
          }
    }
    
    componentDidMount() {
        //+this.props.idPagina
        fetch("https://guiadesenvolvedor-78a46.firebaseio.com/produto.json")
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
            //+this.props.idPagina
            fetch("https://guiadesenvolvedor-78a46.firebaseio.com/produto.json")
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
        return <div className="produtos">
            {
                 this.state.result.map((item, index) =>
                    <div key={index} className="item-produto">
                        <a href={item.link} title="Clique aqui e saiba mais." rel="nofollow" target="_blank">
                            <div className="item-imagem" style={{backgroundColor: item.cor}}>
                                <img src={item.imagem} alt={item.nome}/>
                            </div>
                            <div className="item-descricao">
                                <span>{item.nome}</span>
                                <p>{item.descricao}</p>
                                <div dangerouslySetInnerHTML={{__html:item.itens }}/>
                            </div>
                        </a>
                    </div>
                 )
            }
        </div>
    }
}
export default Produto;