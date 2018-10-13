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
     "imagem": "/img/react-min.svg"
     },
     {
     "url": "/2/como-utilizar-map-react-array-list",
     "titulo": "Como utilizar map react array list",
     "descricao": "Veja vários exemplos de utilização do map react js",
     "data": "30/09/2018",
     "qtdeAcesso": "62",
     "assunto": "React js",
     "imagem": "/img/react.svg"
     },
     {
     "url": "/3/jquery-ready-documentacao",
     "titulo": "jquery ready documentação",
     "descricao": "Documentação como utilizar ready jquery ",
     "data": "10/10/2018",
     "qtdeAcesso": "0",
     "assunto": "jQuery",
     "imagem": "/img/jquery-min.svg"
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
                    <div className="container-esquerdo">
                        <div className="menu-esquerdo">
                            <div className="menu-esquerdo-titulo">Assuntos</div>
                            <ul>
                                <li><a href="/pagina/1/como-criar-site-react-js" title="React js">React js</a></li>
                                <li><a href="/pagina/3/jquery-ready-documentacao" title="Jquery">Jquery</a></li>
                                <li><a href="/pagina/2/como-utilizar-map-react-array-list" title="javaScript">javaScript</a></li>
                            </ul>
                        </div>
                        <div className="anuncio-esquerdo" dangerouslySetInnerHTML={{__html:adsEsquerdo }} />
                    </div>
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

Começando
Esta página é uma visão geral da documentação do React e recursos relacionados.

React é uma biblioteca JavaScript para criar interfaces com o usuário. Saiba o que é React na nossa página inicial ou no tutorial .

Tente Reagir
Aprenda Reagir
Permanecendo informado
Documentação Versionada
Algo faltando?
Tente Reagir
O React foi projetado desde o início para adoção gradual, e você pode usar o mínimo de Reação que precisar. Se você quiser ter um pouco do React, adicionar alguma interatividade a uma página HTML simples ou iniciar um aplicativo complexo com React, os links desta seção ajudarão você a começar.

Playgrounds on-line
Se você estiver interessado em brincar com o React, você pode usar um playground de código on-line. Experimente um modelo Hello World em CodePen ou CodeSandbox .

Se preferir usar seu próprio editor de texto, você também pode fazer o download desse arquivo HTML , editá-lo e abri-lo no sistema de arquivos local do seu navegador. Ele faz uma transformação de código de tempo de execução lenta, portanto, recomendamos apenas usar isso para demonstrações simples.

Adicionar reagir a um site
Você pode adicionar Reagir a uma página HTML em um minuto . Você pode expandir gradualmente sua presença ou mantê-lo contido em alguns widgets dinâmicos.

Criar um novo aplicativo de reação
Ao iniciar um projeto do React, uma página HTML simples com tags de script ainda pode ser a melhor opção. Leva apenas um minuto para configurar!

À medida que sua aplicação cresce, você pode querer considerar uma configuração mais integrada. Existem diversas ferramentas de JavaScript que recomendamos para aplicativos maiores. Cada um deles pode trabalhar com pouca ou nenhuma configuração e permite aproveitar ao máximo o rico ecossistema React.

Aprenda Reagir
As pessoas vêm para reagir de diferentes origens e com diferentes estilos de aprendizagem. Quer você prefira uma abordagem mais teórica ou prática, esperamos que você ache esta seção útil.

Se você preferir aprender fazendo , comece com nosso tutorial prático .
Se você preferir aprender os conceitos passo a passo , comece com nosso guia para os principais conceitos .
Como qualquer tecnologia desconhecida, o React tem uma curva de aprendizado. Com prática e paciência, você vai pegar o jeito.

Primeiros Exemplos
A página inicial do React contém alguns pequenos exemplos do React com um editor ao vivo. Mesmo que você ainda não saiba nada sobre o React, tente alterar o código deles e veja como isso afeta o resultado.

Reaja para principiantes
Se você acha que a documentação do React vai em um ritmo mais rápido do que você está confortável, confira esta visão geral do React by Tania Rascia . Ele introduz os conceitos React mais importantes de uma maneira detalhada e amigável ao iniciante. Assim que estiver pronto, experimente a documentação novamente!

Reagir para Designers
Se você estiver vindo de um plano de fundo de design, esses recursos são um ótimo lugar para começar.

Recursos JavaScript
A documentação do React pressupõe alguma familiaridade com a programação na linguagem JavaScript. Você não precisa ser um especialista, mas é mais difícil aprender o React e o JavaScript ao mesmo tempo.

Recomendamos que você leia esta visão geral do JavaScript para verificar seu nível de conhecimento. Isso levará entre 30 minutos e uma hora, mas você se sentirá mais confiante em aprender Reação.

Gorjeta

Sempre que você se confundir com algo em JavaScript, o MDN e o javascript.info são ótimos sites para verificar. Há também fóruns de suporte da comunidade onde você pode pedir ajuda.

Tutorial Prático
Se você preferir aprender fazendo, confira nosso tutorial prático . Neste tutorial, criamos um jogo de jogo da velha no React. Você pode ficar tentado a ignorá-lo porque não está construindo jogos - mas dê uma chance. As técnicas que você vai aprender no tutorial são fundamentais para a construção de qualquer Reagir apps, e dominá-lo lhe dará uma compreensão muito mais profunda.

Guia passo a passo
Se você preferir aprender conceitos passo a passo, nosso guia para os principais conceitos é o melhor lugar para começar. Cada próximo capítulo baseia-se no conhecimento introduzido nos capítulos anteriores, para que você não perca nada enquanto avança.

Pensando em Reagir
Muitos usuários do React creditam a leitura Thinking in React como o momento em que React finalmente “clicou” para eles. É provavelmente o passo a passo mais antigo do React, mas ainda é relevante.

Cursos Recomendados
Às vezes, as pessoas acham que livros e vídeos em vídeo de terceiros são mais úteis do que a documentação oficial. Nós mantemos uma lista de recursos comumente recomendados , alguns dos quais são gratuitos.

Conceitos Avançados
Uma vez que você esteja confortável com os conceitos principais e jogou com o React um pouco, você pode estar interessado em tópicos mais avançados. Esta seção apresentará os poderosos, mas menos usados, recursos do React, como contexto e refs .

Referência da API
Esta seção de documentação é útil quando você deseja saber mais detalhes sobre uma determinada API do React. Por exemplo, a React.Componentreferência da API pode fornecer detalhes sobre como setState()funciona e para quais métodos de ciclo de vida diferentes são úteis.

Glossário e FAQ
O glossário contém uma visão geral dos termos mais comuns que você verá na documentação do React. Há também uma seção de perguntas frequentes dedicada a perguntas e respostas curtas sobre tópicos comuns, incluindo solicitações de AJAX , estado de componentes e estrutura de arquivos .

Permanecendo informado
O blog React é a fonte oficial das atualizações da equipe do React. Qualquer coisa importante, incluindo notas de versão ou avisos de descontinuação, será publicada primeiro.

Você também pode seguir a conta @reactjs no Twitter, mas você não perderá nada essencial se apenas ler o blog.

Nem todas as versões do React merecem seu próprio post no blog, mas você pode encontrar um changelog detalhado para cada lançamento no CHANGELOG.mdarquivo no repositório React , bem como na página Releases .

Documentação Versionada
Esta documentação sempre reflete a última versão estável do React. Desde o React 16, você pode encontrar versões mais antigas da documentação em uma página separada . Observe que a documentação de versões anteriores é instantânea no momento da liberação e não está sendo atualizada continuamente.

Algo faltando?
Se algo estiver faltando na documentação ou se você achar alguma parte confusa, registre um problema para o repositório de documentação com suas sugestões de melhoria ou envie um tweet na conta @reactjs . Nós adoramos ouvir de você!






                    </div>
                    <div className="anuncio-direito" dangerouslySetInnerHTML={{__html:adsDireito }} />
            </div>);
    }
}
export default Home;