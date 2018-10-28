import React, { Component } from 'react';

class Curso extends Component {
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

    componentDidMount() {
        if (!this.state.repos) {
          this.fetchRepos(this.props.match.params.id)
        }
      }
      componentDidUpdate (prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
          this.fetchRepos(this.props.match.params.id)
        }
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
      render(){
        var { loading, repos  } = this.state;
    
        if (loading === true) {
          return <p>LOADING</p>
        }
    
        if(repos == null){
          return <div></div>
        }
        return <div className="container">
            <h1 className="curso-titulo">Cursos de programação do básico ao avançado.</h1>
            <div className="produtos">
                {
                    repos.map((item, index) =>
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
        </div>
    }
}
export default Curso;
