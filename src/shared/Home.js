import React, { Component } from 'react';
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
    */

   const repos =
   {
     "titulo": "pagina",
     "description": "sdfsdf",
     "destaques": [
     {
     "url": "/1/como-criar-site-react-js",
     "titulo": "Como criar site react js",
     "descricao": "React js é uma biblioteca javaScript mais popular da atualidade, criado pelo Facebook para construir interfaces de usuário. Nesse tutorial vamos mostrar como criar um app react js.",
     "data": "29/09/2018",
     "qtdeAcesso": "67",
     "assunto": "React js",
     "imagem": "/react.svg"
     },
     {
     "url": "/2/como-utilizar-map-react-array-list",
     "titulo": "Como utilizar map react array list",
     "descricao": "Veja vários exemplos de utilização do map react js",
     "data": "30/09/2018",
     "qtdeAcesso": "62",
     "assunto": "React js",
     "imagem": "/react.svg"
     },
     {
     "url": "/3/jquery-ready-documentacao",
     "titulo": "jquery ready documentação",
     "descricao": "Documentação como utilizar ready jquery ",
     "data": "10/10/2018",
     "qtdeAcesso": "0",
     "assunto": "jQuery",
     "imagem": "/jquery.svg"
     }
     ]
     };

        this.state = {
          repos:repos,
          loading: repos ? false : true,
        }
    
        //this.fetchRepos = this.fetchRepos.bind(this)
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
        const { loading, repos } = this.state
        if (loading === true) {
          return <p>LOADING</p>
        }
        var adsTopoGabriel = "";//'<ins class="adsbygoogle" style="display:inline-block;width:728px;height:90px" data-ad-client="ca-pub-5825646877386493" data-ad-slot="5291356734"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
        var adsTopo = "";//'<ins class="adsbygoogle" style="display:inline-block;width:970px;height:90px" data-ad-client="ca-pub-8019971282281713" data-ad-slot="8091665402"></ins> <script> (adsbygoogle = window.adsbygoogle || []).push({}); </script>';
        var adsEsquerdo = "";//'<ins class="adsbygoogle" style="display:inline-block;width:160px;height:600px" data-ad-client="ca-pub-8019971282281713" data-ad-slot="7212185231"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
        var adsDireito = "";//'<ins class="adsbygoogle" style="display:inline-block;width:160px;height:600px" data-ad-client="ca-pub-8019971282281713" data-ad-slot="6680443014"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({}); </script>';
        return (<div className="corpo-pagina">
                    <div className="anuncio-topo" dangerouslySetInnerHTML={{__html:adsTopoGabriel }} />
                    <div className="anuncio-esquerdo" dangerouslySetInnerHTML={{__html:adsEsquerdo }} />
                    <div className="conteudo-home">
                    <h3 className="titulo-home">Conteúdos mais acessados</h3>
                    <h1 className="sub-titulo-home">Guia desenvolvedor</h1>
                    {
                        repos.destaques.map((item, index) =>
                        <div key={index}>
                            <div className="conteudo-home-container">
                                <div className="conteudo-home-img">
                                    <img src={item.imagem} className="img-destaque" alt={item.titulo} />
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






<div className="conteudo"><h1>Como criar app react js</h1>
<h2 className="sub-titulo">Iniciando app react js</h2>
<p>React js é uma biblioteca javaScript mais popular da atualidade, criado pelo Facebook para construir interfaces de usuário. Nesse tutorial vamos mostrar como criar um app react js.</p>

<p><strong>Pré-requisito</strong><br/>
Será necessário ter instalado na sua maquina o <a href="https://nodejs.org/en/download/" title="Download Node.js" target="_blank" rel="nofollow">Node.js</a> </p>

<p>Para criar app react execute o seguinte comando, esses comandos funcionam no macOS, Windows e Linux.</p>

<pre className="codigo"><code>
npx create-react-app my-app
</code>
</pre>

<p>Ele irá criar um pasta chamado my-app dentro do diretório onde o comando foi executado. 
Dentro desse diretório, ele gerará a estrutura inicial do projeto e instalará as dependências necessárias:
</p>
<pre><code>
my-app<br/>
├── README.md<br/>
├── node_modules<br/>
├── package.json<br/>
├── .gitignore<br/>
├── public<br/>
│   ├── favicon.ico<br/>
│   ├── index.html<br/>
│   └── manifest.json<br/>
└── src<br/>
    ├── App.css<br/>
    ├── App.js<br/>
    ├── App.test.js<br/>
    ├── index.css<br/>
    ├── index.js<br/>
    ├── logo.svg<br/>
    └── serviceWorker.js<br/>
</code>
</pre>



<p>Para iniciar o app react, será necessário abrir a pasta onde o app foi criado e executar o seguinte comando.</p>
<pre className="codigo"><code>
cd my-app
npm start
</code>
</pre>

<p>Em seguida, abra <code>http://localhost:3000/</code> para ver seu aplicativo.</p>

<p>Para gerar a Build do app basta executar o seguinte comando</p>
<pre className="codigo"><code>
npm run build
</code>
</pre>

</div>








                    </div>
                    <div className="anuncio-direito" dangerouslySetInnerHTML={{__html:adsDireito }} />
            </div>);
    }
}
export default Home;