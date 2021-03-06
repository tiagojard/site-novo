import React, { Component } from 'react';
import PropTypes from 'prop-types';
class AutoComplete extends Component {
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
            var pesquisa = this.props.pesquisa.toLowerCase();
            fetch('https://guiadesenvolvedor-78a46.firebaseio.com/pergunta.json?orderBy="pesquisa"&endAt="'+pesquisa+'\uf8ff"&limitToLast=5')
            .then(res => res.json())
            .then(
            (result) => {
                this.setState({
                    resultado: result != null ? Object.values(result).filter(function(value, index, self){ var encontrou = true; pesquisa.split(' ').forEach(function(v){ if(value.pesquisa.indexOf(v) == -1) encontrou = false;   }); return encontrou == true;  }): null
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
        /**
         * 
         *  __html:item.pesquisa.substr(0, item.pesquisa.toLowerCase().indexOf(pesquisa))+ 
                                        "<strong>"+ item.pesquisa.substr(item.pesquisa.toLowerCase().indexOf(pesquisa), pesquisa.length)+ "</strong>"+
                                        item.pesquisa.substr(item.pesquisa.toLowerCase().indexOf(pesquisa)+pesquisa.length, item.pesquisa.length )
         * 
         */


        if(this.state.resultado == null || this.props.pesquisa == "")
            return <div></div>

        //var pesquisa = this.props.pesquisa.toLowerCase(); 
        return <div className="autocomplete-items">
                {this.state.resultado.map((item, index) => (
                    <div key={item.id}>
                        <div className="resultado">
                            <a href={item.url}>
                                <div className="img-resultado"><img src={item.assunto[0].imagem} /></div>
                                <div className='pesquisa-resultado' dangerouslySetInnerHTML={
                                    {
                                        __html:item.pesquisa
                                    }}/>
                                <div className="pesquisa-assunto">{item.assunto[0].nome}</div>
                            </a>
                        </div>
                    </div>
                ))}
        </div>
    }
}


AutoComplete.propTypes = {
	pesquisa: PropTypes.string
};

AutoComplete.defaultProps = {
	pesquisa:''
};

export default AutoComplete