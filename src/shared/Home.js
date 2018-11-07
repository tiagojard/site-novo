import React, { Component } from 'react';
import Produto from './Produto'
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
        //var result =Object.values(repos);



        //<li><a href="/pagina/1/como-criar-site-react-js" title="React js">React js</a></li>
        //<li><a href="/pagina/3/jquery-ready-documentacao" title="Jquery">Jquery</a></li>
        //<li><a href="/pagina/2/como-utilizar-map-react-array-list" title="javaScript">javaScript</a></li>
//dangerouslySetInnerHTML={{__html:adsTopoGabriel }} 
        var adsTopoGabriel = "";//'<ins class="adsbygoogle" style="display:inline-block;width:728px;height:90px" data-ad-client="ca-pub-5825646877386493" data-ad-slot="5291356734"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
        var adsTopo = "";//'<ins class="adsbygoogle" style="display:inline-block;width:970px;height:90px" data-ad-client="ca-pub-8019971282281713" data-ad-slot="8091665402"></ins> <script> (adsbygoogle = window.adsbygoogle || []).push({}); </script>';
        var adsEsquerdo = "";//'<ins class="adsbygoogle" style="display:inline-block;width:160px;height:600px" data-ad-client="ca-pub-8019971282281713" data-ad-slot="7212185231"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
        var adsDireito = "";//'<ins class="adsbygoogle" style="display:inline-block;width:160px;height:600px" data-ad-client="ca-pub-8019971282281713" data-ad-slot="6680443014"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({}); </script>';
        return (<div className="corpo-pagina">
                    <div className="anuncio-topo">
                        <a href="https://go.hotmart.com/H9422393Q" title="Clique aqui e saiba mais." rel="nofollow" target="_blank"><img src="/banner-javascript.png" alt="javascript"/></a>
                    </div>
                    <div className="container-esquerdo">
                        <div className="menu-esquerdo">
                            <div className="menu-esquerdo-titulo">Assuntos</div>
                            <ul>
                                <li><a href="/busca/assunto/Node.js" title="Node.js">Node.js</a></li>
                                <li><a href="/busca/assunto/JavaScript" title="javaScript">javaScript</a></li>
                                <li><a href="/busca/assunto/SQL Server" title="SQL Server">SQL Server</a></li>
                                <li><a href="/busca/assunto/Jquery" title="Jquery">Jquery</a></li>
                                <li><a href="/busca/assunto/React js" title="React js">React js</a></li>
                            </ul>
                        </div>
                        <div className="anuncio-esquerdo">
                            <a href="https://go.hotmart.com/K9423178A" title="Clique aqui e saiba mais." rel="nofollow" target="_blank"><img src="/banner-templates.png" alt="template" /></a>
                        </div>
                    </div>
                    <div className="conteudo-home">
                    <h3 className="titulo-home">Conteúdos mais acessados</h3>
                    <h1 className="sub-titulo-home">Guia desenvolvedor</h1>
                    {
                repos.map((item, index) =>
                        <div key={index}>
                            <div className="conteudo-home-container">
                                <div className="conteudo-home-img">
                                    <img src={item.assunto[0].imagem} className="img-destaque" alt={item.title} />
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
                    <p className="titulo-produto"><strong>Top cursos</strong> tá todo mundo clicando</p>
                    <Produto />
                    </div>
                    <div className="anuncio-direito">
                        <a href="https://go.hotmart.com/K9423178A" title="Clique aqui e saiba mais." rel="nofollow" target="_blank"><img src="/banner-templates.png" alt="template" /></a>
                    </div>
            </div>);
    }
}
export default Home;