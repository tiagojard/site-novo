import React, { Component } from 'react';

class Busca extends Component {
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
            this.fetchRepos(this.props.match.params.pesquisa)
          }
    }
    componentDidUpdate (prevProps, prevState) {
        if (prevProps.match.params.pesquisa !== this.props.match.params.pesquisa) {
          this.fetchRepos(this.props.match.params.pesquisa)
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
        var result = Object.values(repos);
        //<a href="https://go.hotmart.com/K9423178A" title="Clique aqui e saiba mais." rel="nofollow" target="_blank"><img src="/banner-templates.png" alt="template" /></a>
        //<a href="https://go.hotmart.com/H9422393Q" title="Clique aqui e saiba mais." rel="nofollow" target="_blank"><img src="/banner-javascript.png" alt="javascript"/></a>
        //<a href="https://go.hotmart.com/K9423178A" title="Clique aqui e saiba mais." rel="nofollow" target="_blank"><img src="/banner-templates.png" alt="template" /></a>
        //var adsTopoGabriel = "";//'<ins class="adsbygoogle" style="display:inline-block;width:728px;height:90px" data-ad-client="ca-pub-5825646877386493" data-ad-slot="5291356734"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
        //var adsTopo = '<ins class="adsbygoogle" style="display:inline-block;width:970px;height:90px" data-ad-client="ca-pub-8019971282281713" data-ad-slot="8091665402"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
        //var adsEsquerdo = '<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-8019971282281713" data-ad-slot="2067669765"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
        //var adsDireito = '<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-8019971282281713" data-ad-slot="1538306282"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
        //var adsConteudo = '<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-9280026867797270" data-ad-slot="5901851801" data-ad-format="auto" data-full-width-responsive="true"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
      
        /*
        repos = repos != null ? Object.values(repos) : null
        console.log(repos)
        var result = filter(function(value, index, self){ var encontrou = false; pesquisa.split(' ').forEach(function(v){ if(value.pesquisa.indexOf(v) > -1) encontrou = true;   }); return encontrou == true;  })
        console.log(result)
        return result
*/
        return <div className="corpo-pagina">
                <ol itemScope itemType="http://schema.org/BreadcrumbList" className="breadcrumbs">
                    <li itemProp="itemListElement" itemScope
                        itemType="http://schema.org/ListItem">
                        <a itemType="http://schema.org/Thing" itemProp="item" href="/">
                            <span itemProp="name">Página inicial</span>
                        </a>
                        <meta itemProp="position" content="1" />
                    </li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8"><rect width="100%" height="100%" fill="none"/><g className="currentLayer"><path d="M2.842 7.79c-.053.053-.12.08-.192.08s-.138-.027-.191-.08a.27.27 0 0 1 0-.383l3.365-3.365L2.46.676a.27.27 0 0 1 .383-.383L6.398 3.85a.27.27 0 0 1 0 .383L2.842 7.79z" fill="#ccc"/></g></svg>
                    <li itemProp="itemListElement" itemScope
                        itemType="http://schema.org/ListItem">
                        <a href={this.props.location.pathname} itemType="http://schema.org/Thing" itemProp="item">
                            <span itemProp="name">{this.props.match.params.pesquisa}</span>
                        </a>
                        <meta itemProp="position" content="2" />
                   </li>
                </ol>
        <div className="anuncio-topo" />
        <div className="container-esquerdo">
            <div className="menu-esquerdo">
                <div className="menu-esquerdo-titulo">Assuntos</div>
                <ul>
                    <li><a href="/busca/assunto/CSharp" title="CSharp">CSharp</a></li>
                    <li><a href="/busca/assunto/ElasticSearch" title="ElasticSearch">ElasticSearch</a></li>
                    <li><a href="/busca/assunto/HTML" title="HTML">HTML</a></li>
                    <li><a href="/busca/assunto/JavaScript" title="javaScript">javaScript</a></li>
                    <li><a href="/busca/assunto/Jquery" title="Jquery">Jquery</a></li>
                    <li><a href="/busca/assunto/Node.js" title="Node.js">Node.js</a></li>
                    <li><a href="/busca/assunto/MongoDb" title="MongoDB">MongoDB</a></li>
                    <li><a href="/busca/assunto/SQL Server" title="SQL Server">SQL Server</a></li>
                    <li><a href="/busca/assunto/React js" title="React js">React js</a></li>
                </ul>
            </div>
            <div className="anuncio-esquerdo" />
        </div>
        <div className="conteudo-home">
        <h3 className="titulo-home"><strong>{repos.length}</strong> Resultados encontrados para <strong><h1>{this.props.match.params.pesquisa}</h1></strong></h3>
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
                   
                </div>
                )
            }
            </div>
            <div className="anuncio-direito"/>
        </div>
        // { ((index+1) / 3) % 1 == 0 ?<div><div className="anuncio-conteudo"><div dangerouslySetInnerHTML={{__html:adsConteudo }}/></div><hr className="hr-margin"/></div>:"" }
    }
}

export default Busca;
