import React, { Component } from 'react';
import PropTypes from 'prop-types';
class BuscaMobile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultado: null
          }
    }

    componentDidMount() {
        var comp = this;
        document.onclick = function(e) {
            if(e.target.className != "resultado"){
                comp.setState({
                    resultado:null
                });
            }
        }
    }
    componentDidUpdate (prevProps, prevState) {
        if(this.props.pesquisa != prevProps.pesquisa){
            fetch("https://tiagojardim.000webhostapp.com/getPesquisa.php?pesquisa="+this.props.pesquisa)
            .then(res => res.json())
            .then(
            (result) => {
                this.setState({
                    resultado:result
                });
            },
            (error) => {
                this.setState({
                    resultado:null
                });
            }
            )
        }
    }

    render(){
        if(this.state.resultado == null || this.props.pesquisa == "")
            return <div></div>
        var pesquisa = this.props.pesquisa.toLowerCase(); 
        return <div className="autocomplete-items">
                {this.state.resultado.map((item, index) => (
                    <div key={item.id}>
                        <div className="resultado">
                            <a href={"/pagina"+item.url}>
                                <div className="img-resultado"><img src={item.imagem} /></div>
                                <div className='pesquisa-resultado' dangerouslySetInnerHTML={
                                    {
                                        __html:item.pesquisa.substr(0, item.pesquisa.toLowerCase().indexOf(pesquisa))+ 
                                        "<strong>"+ item.pesquisa.substr(item.pesquisa.toLowerCase().indexOf(pesquisa), pesquisa.length)+ "</strong>"+
                                        item.pesquisa.substr(item.pesquisa.toLowerCase().indexOf(pesquisa)+pesquisa.length, item.pesquisa.length )
                                    }}/>
                                <div className="pesquisa-assunto">{item.assunto}</div>
                            </a>
                        </div>
                    </div>
                ))}
        </div>
    }
}


BuscaMobile.propTypes = {
	pesquisa: PropTypes.string
};

BuscaMobile.defaultProps = {
	pesquisa:''
};

export default BuscaMobile;