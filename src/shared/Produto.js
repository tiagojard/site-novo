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

        function shuffle(array) {
            var currentIndex = array.length, temporaryValue, randomIndex;
          
            // While there remain elements to shuffle...
            while (0 !== currentIndex) {
          
              // Pick a remaining element...
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex -= 1;
          
              // And swap it with the current element.
              temporaryValue = array[currentIndex];
              array[currentIndex] = array[randomIndex];
              array[randomIndex] = temporaryValue;
            }
          
            return array;
        }

        //+this.props.idPagina
        fetch("https://guiadesenvolvedor-78a46.firebaseio.com/produto.json")
        .then(res => res.json())
        .then(
            (result) => {
            this.setState({
                loading: false,
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

    /*
	componentDidUpdate(prevProps){
        if(this.props.idPagina != prevProps.idPagina){
            var produtos = this.produtos;
            this.setState({
                loading: shuffle(produtos) ? false : true,
                result: produtos
            });
     
            //+this.props.idPagina
            fetch("https://guiadesenvolvedor-78a46.firebaseio.com/produto.json")
        .then(res => res.json())
        .then(
            (result) => {
            this.setState({
                loading: shuffle(result) ? false : true,
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
    */


    render(){
        if(this.state.loading == true){
            return <div></div>;
        }
        var result = this.state.result;
        return <div className="produtos">
            {
                 result.map((item, index) =>
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