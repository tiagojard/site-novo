import React, { Component } from 'react';
import Produto from './Produto'
import Async from "react-async"
class Home extends Component {
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
          repos:repos,
          loading: repos ? false : true,
        }
    
        this.fetchRepos = this.fetchRepos.bind(this)

        //this.loadJson = () => fetch("https://guiadesenvolvedor-78a46.firebaseio.com/pergunta.json?shallow=true").then(res => res.json())
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
        
        const { loading, repos } = this.state;
        if (loading === true) {
          return <p>LOADING</p>
        }

        var result = Object.values(repos).reverse();
        //result.pop();
        var adsTopo = '<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-9280026867797270" data-ad-slot="7668851004" data-ad-format="auto" data-full-width-responsive="true"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
        var adsEsquerdo = '<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-9280026867797270" data-ad-slot="8738390094" data-ad-format="auto" data-full-width-responsive="true"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
        var adsDireito = '<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-9280026867797270" data-ad-slot="4830579455" data-ad-format="auto" data-full-width-responsive="true"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
        var adsConteudo = '<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-9280026867797270" data-ad-slot="5901851801" data-ad-format="auto" data-full-width-responsive="true"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
 

/*   



<Async promiseFn={this.loadJson}>
        {({ data, error, isLoading }) => {
          if (isLoading) return "Carregando..."
          if (error) return `Something went wrong: ${error.message}`
          if (data)
            data = Object.values(data);
            return (<div>
            {
        data.map((item, index) =>
                <div key={index}>
                    <div className="conteudo-home-container">
                        <div className="conteudo-home-img">
                        <img className="img-destaque" src={item.assunto[0].imagem} />
                        </div>
                        <div className="conteudo-home-detalhe">
                            <a href={item.url}><h2>{item.pergunta}</h2></a>
                            <div>
                            <h3>{item.pergunta}</h3>
                            </div>
                            <div className="conteudo-home-info">
                            <a href={"/busca/assunto/"+item.assunto[0].nome} title={item.assunto[0].nome} className="assunto"><h4>{item.assunto[0].nome}</h4></a>
                            </div>
                        </div>
                    </div>
                    <hr className="hr-margin"/>
                   
                </div>
                )
            }
            </div>)
          return null
        }}
      </Async>












<p className="titulo-produto"><strong>Top cursos</strong> tá todo mundo clicando</p>
            <Produto />





{ ((index+1) / 3) % 1 == 0 ?<div><div className="anuncio-conteudo" dangerouslySetInnerHTML={{__html:adsConteudo }}/><hr className="hr-margin"/></div>:"" }*/

return (<div className="corpo-pagina">
<div className="introducao">
    <h1>Guia do Desenvolvedor</h1>
    <h2>Plataforma para programadores</h2>
    <div>
        <h3 className="intro-conhecimento">Ajude a plataforma crescer, compartilhe seu conhecimento e faça parte desse guia. Ajudamos programadores iniciantes com conteúdos de qualidade.</h3>
        <a  className="btn-intro" href="/cadastro/conteudo">Compartilhar conhecimento</a>
    </div>
    <div>
        <h3>Está com dúvida em algum assundo ou não esta conseguindo fazer algo?</h3>
        <a className="btn-intro" href="/cadastro/conteudo">Envie sua pergunta</a>
    </div>
    <h3>Confira alguns cursos que fará muita diferença em seu aprendizado!</h3>
    <a className="btn-curso" href="/curso">Veja alguns cursos</a>
</div>
<div className="anuncio-topo" dangerouslySetInnerHTML={{__html:adsTopo }}/>
<div className="container-esquerdo">
    <div className="anuncio-esquerdo" dangerouslySetInnerHTML={{__html:adsEsquerdo }}/>
</div>
<div className="conteudo-home">
<h3 className="titulo-home">Últimos postados</h3>
            {
        result.map((item, index) =>
                <div key={index}>
                    <div className="conteudo-home-container">
                        <div className="conteudo-home-detalhe">
                            <a href={item.url}><h2>{item.pergunta}</h2></a>
                        <div className="info">
                            <div className="info-bloco">
                                <div className="info-qtde">{item.Respostas != undefined ? item.Respostas.length: 0}</div>
                                <div>respostas</div>
                            </div>
                            <div className={"info-bloco" + (item.votos > 0 ? " up" :item.votos < 0 ? " down" : "" )}>
                                <div className="info-qtde">{item.votos}</div>
                                <div>votos</div>
                            </div>
                            <div className="info-usuario">
                                <div>{item.usuario_nome}</div>
                                <div>{item.data_formatada}</div>
                            </div>
                        </div>
                    <div className="conteudo-home-info">
                            <a href={"/busca/assunto/"+item.assunto[0].nome} title={item.assunto[0].nome}><h4 className="tags">
                            <img src={item.assunto[0].imagem} alt={item.assunto[0].nome}/>
                            {item.assunto[0].nome}</h4></a>
                    </div>
                </div>
                    </div>
                    <hr className="hr-margin"/>
                    { ((index+1) / 3) % 1 == 0 ?<div><div className="anuncio-conteudo"><div dangerouslySetInnerHTML={{__html:adsConteudo }}/></div><hr className="hr-margin"/></div>:"" }
                </div>
                )
            }
            </div>
            <div className="anuncio-direito" dangerouslySetInnerHTML={{__html:adsDireito }}/>
        </div>)
    
    }
}
export default Home;


/**
 * 
 * 
                    <a href={"/ordem/"+result[0].data}>Anterior</a>
                 <a href={"/ordem/"+result.reverse()[0].data}>Próximo</a>
 * 
 */
