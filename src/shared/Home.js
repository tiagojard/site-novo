import React, { Component } from 'react';
import Produto from './Produto'
import Async from "react-async"
class Home extends Component {
    constructor(props) {
        super(props);

        /*
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
*/
this.loadJson = () => fetch("https://guiadesenvolvedor-78a46.firebaseio.com/conteudo.json?orderBy=%22ativo%22&equalTo=true").then(res => res.json())
    }

    /*
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
*/

    render(){
        /*
        const { loading, repos } = this.state;
        if (loading === true) {
          return <p>LOADING</p>
        }
        */
        //var result =Object.values(repos);



        //<li><a href="/pagina/1/como-criar-site-react-js" title="React js">React js</a></li>
        //<li><a href="/pagina/3/jquery-ready-documentacao" title="Jquery">Jquery</a></li>
        //<li><a href="/pagina/2/como-utilizar-map-react-array-list" title="javaScript">javaScript</a></li>
        //dangerouslySetInnerHTML={{__html:adsTopoGabriel }} 
        //var adsTopoGabriel = "";//'<ins class="adsbygoogle" style="display:inline-block;width:728px;height:90px" data-ad-client="ca-pub-5825646877386493" data-ad-slot="5291356734"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
        var adsTopo = '<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-9280026867797270" data-ad-slot="1911584022" data-ad-format="auto" data-full-width-responsive="true"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
        var adsEsquerdo = '<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-9280026867797270" data-ad-slot="4048762396" data-ad-format="auto" data-full-width-responsive="true"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
        var adsDireito = '<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-9280026867797270" data-ad-slot="2538022566" data-ad-format="auto" data-full-width-responsive="true"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
        var adsConteudo = '<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-9280026867797270" data-ad-slot="5901851801" data-ad-format="auto" data-full-width-responsive="true"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
 

/*   { ((index+1) / 3) % 1 == 0 ?<div><div className="anuncio-conteudo" dangerouslySetInnerHTML={{__html:adsConteudo }}/><hr className="hr-margin"/></div>:"" }*/
return <div className="corpo-pagina">
<div className="anuncio-topo" dangerouslySetInnerHTML={{__html:adsTopo }}/>
<div className="container-esquerdo">
    <div className="anuncio-esquerdo" dangerouslySetInnerHTML={{__html:adsEsquerdo }}/>
</div>
<div className="conteudo-home">
<h3 className="titulo-home">Conteúdos mais acessados</h3>
<h1 className="sub-titulo-home">Guia desenvolvedor</h1>
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
                            <div className="img-destaque" dangerouslySetInnerHTML={{__html:item.assunto[0].svg }} />
                        </div>
                        <div className="conteudo-home-detalhe">
                            <a href={"/pagina"+item.url}><h2>{item.title}</h2></a>
                            <div>
                            <h3>{item.descricao}</h3>
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
            </div>
            <div className="anuncio-direito" dangerouslySetInnerHTML={{__html:adsDireito }}/>
    </div>



    }
}
export default Home;