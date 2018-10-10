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
        var adsTopo = '<ins class="adsbygoogle" style="display:inline-block;width:970px;height:90px" data-ad-client="ca-pub-8019971282281713" data-ad-slot="8091665402"></ins> <script> (adsbygoogle = window.adsbygoogle || []).push({}); </script>';
        var adsEsquerdo = '<ins class="adsbygoogle" style="display:inline-block;width:160px;height:600px" data-ad-client="ca-pub-8019971282281713" data-ad-slot="7212185231"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
        var adsDireito = '<ins class="adsbygoogle" style="display:inline-block;width:160px;height:600px" data-ad-client="ca-pub-8019971282281713" data-ad-slot="6680443014"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({}); </script>';
        return (<div className="corpo-pagina">
                    <div className="anuncio-topo" dangerouslySetInnerHTML={{__html:adsTopo }} />
                    <div className="anuncio-esquerdo" dangerouslySetInnerHTML={{__html:adsEsquerdo }} />
                    <div className="conteudo-home">
                    {
                        repos.map((item, index) =>
                        <div key={index}>
                            <div  className="conteudo-home-container">
                                <div className="conteudo-home-img">
                                    <img src="" className="img-destaque" />
                                </div>
                                <div className="conteudo-home-detalhe">
                                    <a href={"/pagina"+item.url}>{item.titulo}</a>
                                    <div><br/>
                                        {item.descricao} First, let’s review how you transform lists in JavaScript. Given the code below, we use the map() function to take an array of numbers and double their values. We assign the new array returned by map() to the variable doubled and log it
                                    </div>
                                    <div className="conteudo-home-info">
                                    {item.qtdeAcesso} | <span className="assunto">{item.assunto}</span> | {new Date(item.data).toLocaleDateString()}
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