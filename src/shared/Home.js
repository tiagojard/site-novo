import React, { Component } from 'react';
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
        const { loading, repos } = this.state
        if (loading === true) {
          return <p>LOADING</p>
        }
        var adsTopoGabriel = '<ins class="adsbygoogle" style="display:inline-block;width:728px;height:90px" data-ad-client="ca-pub-5825646877386493" data-ad-slot="5291356734"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
        var adsTopo = '<ins class="adsbygoogle" style="display:inline-block;width:970px;height:90px" data-ad-client="ca-pub-8019971282281713" data-ad-slot="8091665402"></ins> <script> (adsbygoogle = window.adsbygoogle || []).push({}); </script>';
        var adsEsquerdo = '<ins class="adsbygoogle" style="display:inline-block;width:160px;height:600px" data-ad-client="ca-pub-8019971282281713" data-ad-slot="7212185231"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
        var adsDireito = '<ins class="adsbygoogle" style="display:inline-block;width:160px;height:600px" data-ad-client="ca-pub-8019971282281713" data-ad-slot="6680443014"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({}); </script>';
        return (<div className="corpo-pagina">
                    <div className="anuncio-topo" dangerouslySetInnerHTML={{__html:adsTopoGabriel }} />
                    <div className="anuncio-esquerdo" dangerouslySetInnerHTML={{__html:adsEsquerdo }} />
                    <div className="conteudo-home">
                    <h3 className="titulo-home">Conteúdos mais acessados</h3>
                    <h1 className="sub-titulo-home">Guia desenvolvedor</h1>
                    {
                        repos.map((item, index) =>
                        <div key={index}>
                            <div className="conteudo-home-container">
                                <div className="conteudo-home-img">
                                    <img src={item.imagem} className="img-destaque" alt={item.assunto} />
                                </div>
                                <div className="conteudo-home-detalhe">
                                    <a href={"/pagina"+item.url}><h2>{item.titulo}</h2></a>
                                    <div>
                                    <h3>{item.descricao}</h3>
                                    </div>
                                    <div className="conteudo-home-info">
                                    {item.qtdeAcesso} | <span className="assunto"><h4>{item.assunto}</h4></span> | {item.data}
                                    </div>
                                </div>
                            </div>
                            <hr className="hr-margin"/>
                        </div>
                        )
                    }
                    </div>
                    <div className="anuncio-direito" dangerouslySetInnerHTML={{__html:adsDireito }} />
            </div>);
    }
}
export default Home;