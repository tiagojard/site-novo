import React, { Component } from 'react';
import Async from "react-async"

class Destaque extends Component {
	constructor(props) {
        super(props);
		this.state = {
            result: null,
            loading: true,
          }
          this.loadJson = () => fetch("https://guiadesenvolvedor-78a46.firebaseio.com/conteudo.json?orderBy=%22ativo%22&equalTo=true").then(res => res.json())
	}

    componentDidMount() {
        /*
        //+this.props.idPagina
        fetch("https://guiadesenvolvedor-78a46.firebaseio.com/conteudo.json?orderBy=%22ativo%22&equalTo=true")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    loading: result ? false : true,
                    result: Object.values(result)
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
            fetch("https://guiadesenvolvedor-78a46.firebaseio.com/conteudo.json?orderBy=%22ativo%22&equalTo=true")
        .then(res => res.json())
        .then(
            (result) => {
            this.setState({
                loading: result ? false : true,
                result:  Object.values(result)
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
/*  <img src={item.assunto[0].imagem} className="img-pagina-destaque" align="left" alt={item.title}/>{item.title}. {item.descricao} */
    render(){
        return <Async promiseFn={this.loadJson}>
        {({ data, error, isLoading }) => {
          if (isLoading) return ""
          if (error) return `Something went wrong: ${error.message}`
          if (data)
            data = Object.values(data);
            return (
                <div>{
                    data.map((item, index) =>
                                    <div key={index}>
                                    { 
                                    this.props.idPagina != 0 ? 
                                    <div>
         <div className="item-destaque">
                                        <a href={"/pagina"+item.url} title={item.title}>
                                            <p>
                                                <div dangerouslySetInnerHTML={{__html:item.assunto[0].svg }} />
                                                {item.title}. {item.descricao}
                                            </p>
                                        </a>
                                    </div>
                                    <hr className="hr-destaque"/>
        
                                    </div>:
                                    <div></div>
                                    }
                                   
                                    
                                </div>)
                }
                        </div>
            )
          return null
        }}
      </Async>
    }
/*
	render(){
      
           // return <div></div>;
     
        if(this.state.loading == true || Object.keys(this.state.result).length == 0){
            return <div></div>;
        }
		return (<div>{
            this.state.result.map((item, index) =>
                            <div key={index}>
                            { 
                            this.props.idPagina != 0 ? 
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
                           
                            
                        </div>)
        }
                </div>);
    }	
    */
}
export default Destaque;