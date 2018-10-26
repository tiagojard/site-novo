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
                                <li><a href="/busca/assunto/Node.js" title="Node.js">Node.js</a></li>
                                <li><a href="/busca/assunto/JavaScript" title="javaScript">javaScript</a></li>
                                <li><a href="/busca/assunto/SQL Server" title="SQL Server">SQL Server</a></li>
                                <li><a href="/busca/assunto/Jquery" title="Jquery">Jquery</a></li>
                                <li><a href="/busca/assunto/React js" title="React js">React js</a></li>
                            </ul>
                        </div>
                        <div className="anuncio-esquerdo" dangerouslySetInnerHTML={{__html:adsEsquerdo }} />
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


<h1>Curso react js</h1>
<h2>Vendas de curso online, compre os melhores cursos react js.</h2>
<p>
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

</p>
<p>
Tutorial: Introdução à Reação
Este tutorial não assume nenhum conhecimento existente do React.

Antes de começarmos o tutorial
Vamos construir um pequeno jogo durante este tutorial. Você pode ficar tentado a ignorá-lo porque não está construindo jogos - mas dê uma chance. As técnicas que você aprenderá no tutorial são fundamentais para criar qualquer aplicativo React, e o domínio lhe dará uma profunda compreensão do React.

Gorjeta

Este tutorial foi criado para pessoas que preferem aprender fazendo . Se você preferir aprender conceitos do zero, confira nosso guia passo-a-passo . Você pode achar este tutorial e o guia complementares um ao outro.

O tutorial está dividido em várias seções:

A instalação do tutorial lhe dará um ponto de partida para seguir o tutorial.
A visão geral ensinará os fundamentos do React: componentes, adereços e estado.
Completar o Jogo ensinará as técnicas mais comuns no desenvolvimento do React.
Adicionando Time Travel lhe dará uma visão mais profunda sobre os pontos fortes exclusivos do React.
Você não precisa completar todas as seções de uma vez para obter o valor deste tutorial. Tente chegar o mais longe possível, mesmo que seja uma ou duas seções.

Não há problema em copiar e colar o código enquanto você acompanha o tutorial, mas recomendamos que você o digite à mão. Isso ajudará você a desenvolver uma memória muscular e um entendimento mais forte.

O que estamos construindo?
Neste tutorial, mostraremos como criar um jogo tic-tac-toe interativo com o React.

Você pode ver o que vamos construir aqui: Resultado Final . Se o código não fizer sentido para você, ou se você não estiver familiarizado com a sintaxe do código, não se preocupe! O objetivo deste tutorial é ajudá-lo a entender o React e sua sintaxe.

Recomendamos que você confira o jogo jogo da velha antes de continuar com o tutorial. Uma das características que você notará é que existe uma lista numerada à direita do tabuleiro do jogo. Esta lista fornece um histórico de todas as jogadas que ocorreram no jogo e é atualizada à medida que o jogo avança.

Você pode fechar o jogo jogo da velha assim que estiver familiarizado com ele. Começaremos a partir de um modelo mais simples neste tutorial. Nosso próximo passo é prepará-lo para que você possa começar a construir o jogo.

Pré-requisitos
Vamos supor que você tenha alguma familiaridade com HTML e JavaScript, mas você deve ser capaz de acompanhá-lo mesmo que venha de uma linguagem de programação diferente. Também vamos supor que você esteja familiarizado com conceitos de programação como funções, objetos, matrizes e, em menor escala, classes.

Se você precisar revisar JavaScript, recomendamos a leitura deste guia . Observe que também estamos usando alguns recursos do ES6 - uma versão recente do JavaScript. Neste tutorial, estamos usando funções de seta , aulas , lete constdeclarações. Você pode usar o Babel REPL para verificar o código ES6 para compilar.

Configuração para o tutorial
Existem duas maneiras de concluir este tutorial: você pode escrever o código em seu navegador ou pode configurar um ambiente de desenvolvimento local em seu computador.

Opção de instalação 1: escrever código no navegador
Esta é a maneira mais rápida de começar!

Primeiro, abra este Código para iniciantes em uma nova guia. A nova aba deve exibir um tabuleiro de jogo tic-tac-toe vazio e o código React. Nós iremos editar o código React neste tutorial.

Agora você pode ignorar a segunda opção de configuração e ir para a seção Visão geral para obter uma visão geral do React.

Opção de configuração 2: ambiente de desenvolvimento local
Isto é completamente opcional e não é necessário para este tutorial!


Opcional: instruções para acompanhamento local usando seu editor de texto preferido
Ajuda, estou preso!
Se você ficar preso, confira os recursos de suporte da comunidade . Em particular, o Reactiflux Chat é uma ótima maneira de obter ajuda rapidamente. Se você não receber uma resposta ou se permanecer preso, registre um problema e nós ajudaremos você.

visão global
Agora que você está configurado, vamos ter uma visão geral do React!

O que é reagir?
O React é uma biblioteca JavaScript declarativa, eficiente e flexível para criar interfaces com o usuário. Ele permite compor interfaces de usuário complexas a partir de pequenos e isolados códigos chamados “componentes”.

O React possui alguns tipos diferentes de componentes, mas começaremos com React.Componentsubclasses:


// Example usage: 
Nós vamos chegar às tags engraçadas em XML em breve. Usamos componentes para dizer ao React o que queremos ver na tela. Quando nossos dados forem alterados, o React atualizará e renderizará novamente com eficiência nossos componentes.

Aqui, o ShoppingList é uma classe de componente React ou o tipo de componente React . Um componente recebe parâmetros, chamados props(abreviação de "propriedades"), e retorna uma hierarquia de visualizações para exibir através do rendermétodo.

O rendermétodo retorna uma descrição do que você deseja ver na tela. React pega a descrição e exibe o resultado. Em particular, renderretorna um elemento React , que é uma descrição simples do que renderizar. A maioria dos desenvolvedores do React usa uma sintaxe especial chamada “JSX”, que facilita a gravação dessas estruturas. A sintaxe é transformada no tempo de construção para React.createElement('div'). O exemplo acima é equivalente a:

return React.createElement('div', 
  React.createElement('h1', /* ... h1 children ... */),
  React.createElement('ul', /* ... ul children ... */)
);
Veja a versão completa expandida.

Se você está curioso, createElement()é descrito com mais detalhes na referência da API , mas não iremos usá-lo neste tutorial. Em vez disso, continuaremos usando o JSX.

O JSX vem com todo o poder do JavaScript. Você pode colocar qualquer expressão JavaScript dentro de chaves dentro do JSX. Cada elemento React é um objeto JavaScript que você pode armazenar em uma variável ou passar em seu programa.

O ShoppingListcomponente acima só processa componentes DOM incorporados como. Mas você também pode compor e renderizar componentes React personalizados. Por exemplo, agora podemos nos referir a toda lista de compras escrevendo. Cada componente React é encapsulado e pode operar de forma independente; Isso permite que você construa UIs complexas a partir de componentes simples.

Inspecionando o Código de Início
Se você for trabalhar no tutorial do seu navegador, abra esse código em uma nova guia: Código para iniciantes . Se você for trabalhar no tutorial localmente, abra src/index.jsa pasta do projeto (você já tocou nesse arquivo durante a configuração ).

Este Código de Início é a base do que estamos construindo. Fornecemos o estilo CSS para que você só precise se concentrar no aprendizado do React e na programação do jogo tic-tac-toe.

Ao inspecionar o código, você notará que temos três componentes React:

Quadrado
Borda
jogos
O componente Square renderiza um single e o tabuleiro renderiza 9 quadrados. O componente Game renderiza uma placa com valores de espaço reservado que modificaremos mais tarde. Atualmente não há componentes interativos.

Passando Dados Através de Adereços
Apenas para ficar com os pés molhados, vamos tentar passar alguns dados do nosso componente Board para o nosso componente Square.

No renderSquaremétodo do Board , mude o código para passar um prop chamado valuepara o Square:


Antes:

Reagir Devtools
Depois: você deve ver um número em cada quadrado na saída renderizada.

Reagir Devtools
Ver o código completo neste momento

Parabéns! Você acabou de "passar um prop" de um componente pai da placa para um componente quadrado filho. Passando por adereços é como a informação flui em aplicativos React, de pais para filhos.

Fazendo um componente interativo
Vamos preencher o componente Square com um “X” quando clicamos nele. Primeiro, altere a tag de botão retornada da render()função do componente Square para esta:

Se clicarmos em um quadrado agora, devemos receber um alerta em nosso navegador.

Nota

Para salvar a digitação e evitar o comportamento confusothis , usaremos a sintaxe da função de seta para manipuladores de eventos aqui e mais abaixo:

Observe como estamos passando uma função como onClickprop. Só é acionado após um clique. Esquecer () =>e escrever onClické um erro comum e dispararia o alerta toda vez que o componente fosse renderizado novamente.

Como próximo passo, queremos que o componente Square "lembre" que foi clicado e preencha com uma marca "X". Para "lembrar" as coisas, os componentes usam o estado .

Os componentes de reação podem ter estado configurando this.stateseus construtores. this.statedeve ser considerado como privado para um componente React definido. Vamos armazenar o valor atual do Square in this.statee alterá-lo quando o Square for clicado.

Primeiro, adicionaremos um construtor à classe para inicializar o estado:



 
Nota

Nas classes JavaScript , você precisa sempre chamar superao definir o construtor de uma subclasse. Todas as classes de componente React que possuem constructordevem iniciá-lo com uma super(props)chamada.

Agora vamos mudar o rendermétodo do Square para exibir o valor do estado atual quando clicado:

Substitua this.props.valuepor this.state.valuedentro da tag.
Substitua o () => alert()manipulador de eventos por
Coloque o classNamee onClickadereços em linhas separadas para melhor legibilidade.
Após essas alterações, a tag retornada pelo rendermétodo do Square se parece com isso:

Ao chamar this.setStatede um onClickmanipulador no rendermétodo da Square , informamos ao React para renderizar novamente esse quadrado sempre que ele for clicado. Após a atualização, a Square this.state.valueserá 'X', então vamos ver o Xno tabuleiro de jogo. Se você clicar em qualquer quadrado, um Xdeve aparecer.

Quando você chama setStateum componente, o React atualiza automaticamente os componentes filhos dentro dele.

Ver o código completo neste momento

Ferramentas de desenvolvimento
A extensão React Devtools para Chrome e Firefox permite inspecionar uma árvore de componentes do React com as ferramentas de desenvolvedor do seu navegador.

Reagir Devtools
O DevTools React permite que você verifique os adereços e o estado de seus componentes React.

Depois de instalar o React DevTools, você pode clicar com o botão direito do mouse em qualquer elemento da página, clicar em "Inspecionar" para abrir as ferramentas do desenvolvedor, e a guia React aparecerá como a última guia à direita.

No entanto, observe que há algumas etapas extras para que ele funcione com o CodePen:

Faça o login ou registre-se e confirme seu e-mail (necessário para evitar spam).
Clique no botão "Fork".
Clique em “Change View” e escolha “Debug mode”.
Na nova guia que é aberta, os devtools agora devem ter uma guia React.
Completando o Jogo
Agora temos os blocos de construção básicos para o nosso jogo de jogo da velha. Para ter um jogo completo, agora precisamos alternar colocando “X” e “O” no tabuleiro, e precisamos de uma maneira de determinar um vencedor.

Levantar estado acima
Atualmente, cada componente do Square mantém o estado do jogo. Para verificar um vencedor, vamos manter o valor de cada um dos 9 quadrados em um único local.

Podemos pensar que a diretoria deveria apenas perguntar a cada quadrado o estado da praça. Embora essa abordagem seja possível no React, nós a desencorajamos porque o código se torna difícil de entender, suscetível a bugs e difícil de refatorar. Em vez disso, a melhor abordagem é armazenar o estado do jogo no componente pai da diretoria em vez de em cada quadrado. O componente Board pode dizer a cada Square o que exibir passando um objeto, como fizemos quando passamos um número para cada Square .

Para coletar dados de vários filhos ou para que dois componentes filhos se comuniquem entre si, você precisa declarar o estado compartilhado em seu componente pai. O componente pai pode passar o estado de volta para os filhos usando adereços; isso mantém os componentes filhos em sincronia entre si e com o componente pai.

O estado de levantamento em um componente pai é comum quando os componentes do React são refatorados - vamos aproveitar esta oportunidade para testá-lo. Adicionaremos um construtor ao quadro e definiremos o estado inicial do quadro para conter um array com 9 valores nulos. Estes 9 nulos correspondem aos 9 quadrados:
c
Quando preenchermos o quadro mais tarde, o quadro será parecido com isto:

[
  'O', null, 'X',
  'X', 'X', 'O',
  'O', null, null,
]
O renderSquaremétodo do Conselho atualmente se parece com isto:

 
No começo, nós passamos o valuesuporte do quadro para mostrar números de 0 a 8 em cada quadrado. Em uma etapa anterior diferente, substituímos os números por uma marca "X" determinada pelo próprio estado da Square . É por isso que Square atualmente ignora o valuesuporte passado para ele pelo Conselho.

Agora vamos usar o mecanismo de passagem do suporte novamente. Vamos modificar a Diretoria para instruir cada quadrado individual sobre o seu valor atual ( 'X', 'O'ou null). Já definimos o squaresarray no construtor do Board, e vamos modificar o renderSquaremétodo do Board para ler:

  
Ver o código completo neste momento

Cada Praça irá agora receber uma valueproposta que será ou 'X', 'O'ou nullpara praças vazias.

Em seguida, precisamos alterar o que acontece quando um quadrado é clicado. O componente Board agora mantém quais quadrados estão preenchidos. Precisamos criar uma maneira para o Square atualizar o estado da diretoria. Como o estado é considerado privado para um componente que o define, não podemos atualizar o estado da Diretoria diretamente do Square.

Para manter a privacidade do estado da Diretoria, passaremos uma função da diretoria para a Square. Esta função será chamada quando um quadrado for clicado. Vamos mudar o renderSquaremétodo no quadro para:

  
Nota

Dividimos o elemento retornado em várias linhas para facilitar a leitura e adicionamos parênteses para que o JavaScript não insira um ponto returne vírgula após e quebre nosso código.

Agora estamos passando dois adereços de Board para Square: valuee onClick. O onClickprop é uma função que o Square pode chamar quando clicado. Faremos as seguintes alterações no Square:

Substitua this.state.valuecom this.props.valuea da Praça rendermétodo
Substitua this.setState()com this.props.onClick()a da Praça rendermétodo
Apague o constructorquadrado porque o Square não controla mais o estado do jogo
Após essas alterações, o componente Square fica assim:


Quando um quadrado é clicado, a onClickfunção fornecida pela diretoria é chamada. Aqui está uma revisão de como isso é alcançado:

O onClicksuporte no>componente DOM interno informa ao React para configurar um ouvinte de evento de clique.
Quando o botão é clicado, o React chama o onClickmanipulador de eventos que está definido no render()método do Square .
Este manipulador de eventos chama this.props.onClick(). O onClicksuporte da Square foi especificado pelo Conselho.
Desde que a diretoria passou para a Square, a Square chama this.handleClick(i)quando clicou.
Nós ainda não definimos o handleClick()método, então nosso código trava.
Nota

O atributo do elemento DOM onClicktem um significado especial para React, porque é um componente interno. Para componentes personalizados como Square, a nomeação é sua. Poderíamos nomear o método da onClickprancha ou da mesa de handleClickforma diferente. No React, no entanto, é uma convenção usar on[Event]nomes para adereços que representam eventos e handle[Event]para os métodos que manipulam os eventos.

Quando tentamos clicar em um quadrado, devemos receber um erro porque ainda não definimos handleClick. Agora vamos adicionar handleClickà classe Board:



Ver o código completo neste momento

Após essas alterações, podemos clicar novamente nos quadrados para preenchê-los. No entanto, agora o estado é armazenado no componente Board em vez dos componentes individuais do Square. Quando o estado do quadro é alterado, os componentes do Square são renderizados automaticamente. Manter o estado de todos os quadrados no componente Board permitirá determinar o vencedor no futuro.

Como os componentes Square não mais mantêm o estado, os componentes Square recebem valores do componente Board e informam o componente Board quando são clicados. Em termos de Reação, os componentes Quadrados são agora componentes controlados . O Conselho tem controle total sobre eles.

Observe como handleClick, nos chamamos .slice()para criar uma cópia da squaresmatriz para modificar em vez de modificar a matriz existente. Vamos explicar por que criamos uma cópia da squaresmatriz na próxima seção.

Por que a imutabilidade é importante?
No exemplo de código anterior, sugerimos que você usasse o .slice()operador para criar uma cópia da squaresmatriz a ser modificada, em vez de modificar a matriz existente. Vamos agora discutir a imutabilidade e por que a imutabilidade é importante para aprender.

Geralmente, existem duas abordagens para alterar dados. A primeira abordagem é alterar os dados alterando diretamente os valores dos dados. A segunda abordagem é substituir os dados por uma nova cópia que tenha as alterações desejadas.

O resultado final é o mesmo, mas não alterando (ou alterando os dados subjacentes) diretamente, ganhamos vários benefícios descritos abaixo.

Recursos Complexos Tornam-se Simples
A imutabilidade torna os recursos complexos muito mais fáceis de implementar. Mais adiante neste tutorial, implementaremos um recurso de “viagem no tempo” que nos permite rever o histórico do jogo do jogo da velha e “pular para trás” para movimentos anteriores. Essa funcionalidade não é específica para jogos - a capacidade de desfazer e refazer determinadas ações é um requisito comum em aplicativos. Evitar a mutação direta de dados nos permite manter as versões anteriores do histórico do jogo intactas e reutilizá-las mais tarde.

Detectando Mudanças
Detectar alterações em objetos mutáveis ​​é difícil porque eles são modificados diretamente. Essa detecção requer que o objeto mutável seja comparado às cópias anteriores de si mesmo e da árvore de objetos inteira a ser percorrida.

Detectar alterações em objetos imutáveis ​​é consideravelmente mais fácil. Se o objeto imutável que está sendo referenciado for diferente do objeto anterior, o objeto foi alterado.

Determinando quando renderizar novamente no React
O principal benefício da imutabilidade é que ele ajuda a construir componentes puros no React. Dados imutáveis ​​podem determinar facilmente se foram feitas alterações, o que ajuda a determinar quando um componente requer nova renderização.

Você pode aprender mais sobre shouldComponentUpdate()como construir componentes puros lendo Otimizando o desempenho .

Componentes de Função
Vamos agora mudar o Square para ser um componente de função .

No React, os componentes de função são uma maneira mais simples de gravar componentes que contêm apenas um rendermétodo e não possuem seu próprio estado. Em vez de definir uma classe que se estende React.Component, podemos escrever uma função que toma propscomo entrada e retorna o que deve ser renderizado. Componentes de função são menos tediosos para escrever do que classes, e muitos componentes podem ser expressos dessa maneira.

Substitua a classe Square por esta função:


Nós mudamos this.propspara as propsduas vezes que aparece.

Ver o código completo neste momento

Nota

Quando modificamos o Square para ser um componente de função, também mudamos para um menor (note a falta de parênteses em ambos os lados). Em uma classe, usamos uma função de seta para acessar o thisvalor correto , mas em um componente de função não precisamos nos preocupar this.

Tomando Turnos
Agora precisamos consertar um defeito óbvio em nosso jogo de jogo da velha: os “O” não podem ser marcados no tabuleiro.

Vamos definir o primeiro movimento para ser "X" por padrão. Podemos definir esse padrão modificando o estado inicial em nosso construtor do Board:


Cada vez que um jogador se move, xIsNext(um booleano) será virado para determinar qual jogador seguirá e o estado do jogo será salvo. Vamos atualizar a handleClickfunção da diretoria para inverter o valor de xIsNext:

Com essa mudança, “X” e “O” podem se revezar. Vamos também mudar o texto de “status” no quadro renderpara que ele mostre qual jogador tem o próximo turno:

Ver o código completo neste momento

Declarando um vencedor
Agora que mostramos qual é o próximo turno do jogador, também devemos mostrar quando o jogo é ganho e não há mais turnos para fazer. Podemos determinar um vencedor adicionando essa função auxiliar ao final do arquivo:


Vamos chamar calculateWinner(squares)a renderfunção do Conselho para verificar se um jogador ganhou. Se um jogador ganhou, podemos exibir texto como "Vencedor: X" ou "Vencedor: O". Vamos substituir a statusdeclaração na renderfunção do Conselho com este código:

  
      // the rest has not changed
Agora podemos alterar a handleClickfunção da diretoria para voltar cedo ignorando um clique se alguém ganhou o jogo ou se um quadrado já está preenchido:

Ver o código completo neste momento

Parabéns! Agora você tem um jogo de jogo-da-velha. E você acabou de aprender o básico do React também. Então você é provavelmente o verdadeiro vencedor aqui.

Adicionando o tempo de viagem
Como exercício final, vamos permitir “voltar no tempo” aos movimentos anteriores do jogo.

Armazenando uma história de movimentos
Se nós mutássemos a squaresmatriz, implementar viagens no tempo seria muito difícil.

No entanto, costumávamos slice()criar uma nova cópia do squaresarray após cada movimento e tratá-lo como imutável . Isso nos permitirá armazenar todas as versões anteriores do squaresarray e navegar entre os turnos que já aconteceram.

Nós vamos armazenar as squaresmatrizes passadas em outra matriz chamada history. A historymatriz representa todos os estados da placa, do primeiro ao último movimento, e tem uma forma como esta:


Agora precisamos decidir qual componente deve possuir o historyestado.

Levantando o estado para cima, novamente
Vamos querer que o componente Game de nível superior exiba uma lista de movimentos anteriores. Ele precisará acessar o historypara fazer isso, então colocaremos o historyestado no componente Game de nível superior.

Colocar o historyestado no componente Game nos permite remover o squaresestado de seu componente Board filho. Assim como nós "levantamos o estado" do componente Square para o componente Board, agora estamos elevando-o da placa para o componente Game de nível superior. Isso dá ao componente Game controle total sobre os dados da diretoria e permite instruir a diretoria a fazer turnos anteriores a partir do history.

Primeiro, vamos configurar o estado inicial do componente Game em seu construtor:

c
Em seguida, teremos o componente Board recebendo squarese onClickadereços do componente Game. Como agora temos um único manipulador de cliques em Tabuleiro para muitos Quadrados, precisaremos passar a localização de cada Quadrado para o onClickmanipulador para indicar em qual Quadrado foi clicado. Aqui estão as etapas necessárias para transformar o componente da placa:

Exclua o constructorno quadro.
Substitua this.state.squares[i]por this.props.squares[i]na placa renderSquare.
Substitua this.handleClick(i)por this.props.onClick(i)na placa renderSquare.
O componente Board agora se parece com isso:


Como o componente Game está renderizando o status do jogo, podemos remover o código correspondente do rendermétodo do Board . Após a refatoração, a renderfunção do Conselho é assim:

Finalmente, precisamos mover o handleClickmétodo do componente Board para o componente Game. Também precisamos modificar handleClickporque o estado do componente Game está estruturado de forma diferente. Dentro do handleClickmétodo do jogo , nós concatenamos novas entradas de histórico history.


Ao contrário do push()método de matriz com o qual você pode estar mais familiarizado, o concat()método não altera o array original, portanto, preferimos.

Neste ponto, o componente Board precisa apenas dos métodos renderSquaree render. O estado do jogo e o handleClickmétodo devem estar no componente Game.

Ver o código completo neste momento

Mostrando os movimentos anteriores
Como estamos gravando a história do jogo do jogo da velha, agora podemos exibi-lo ao jogador como uma lista de movimentos passados.

Aprendemos anteriormente que os elementos React são objetos JavaScript de primeira classe; podemos passá-los em nossas aplicações. Para renderizar vários itens no React, podemos usar uma matriz de elementos React.

Em JavaScript, as matrizes têm um map()método comumente usado para mapear dados para outros dados, por exemplo:

const numbers = [1, 2, 3];
const doubled = numbers.map(x => x * 2); // [2, 4, 6]
Usando o mapmétodo, podemos mapear nosso histórico de movimentos para Reagir elementos representando botões na tela e exibir uma lista de botões para “saltar” para movimentos passados.

Vamos ao maplongo historydo rendermétodo do jogo :

  
Ver o código completo neste momento

Para cada movimento na história do jogo do tic-tac-toes, criamos um item de lista que contém um botão . O botão tem um onClickmanipulador que chama um método chamado this.jumpTo(). Ainda não implementamos o jumpTo()método. Por enquanto, devemos ver uma lista dos movimentos ocorridos no jogo e um aviso no console de ferramentas do desenvolvedor que diz:

Aviso: Cada filho em uma matriz ou iterador deve ter uma única "chave" prop. Verifique o método de renderização de "Game".

Vamos discutir o que o aviso acima significa.

Escolhendo uma chave
Quando renderizamos uma lista, o React armazena algumas informações sobre cada item da lista renderizada. Quando atualizamos uma lista, o React precisa determinar o que mudou. Poderíamos ter adicionado, removido, reorganizado ou atualizado os itens da lista.

Imagine a transição de

Além das contagens atualizadas, uma leitura humana provavelmente diria que trocamos os pedidos de Alexa e Ben e inserimos Claudia entre Alexa e Ben. No entanto, o React é um programa de computador e não sabe o que pretendíamos. Como o React não pode conhecer nossas intenções, precisamos especificar uma propriedade- chave para cada item da lista para diferenciar cada item da lista de seus irmãos. Uma opção seria usar as cordas alexa, ben, claudia. Se estivéssemos exibindo dados de um banco de dados, os IDs do banco de dados Alexa, Ben e Claudia poderiam ser usados ​​como chaves.


keyé uma propriedade especial e reservada no React (junto com refum recurso mais avançado). Quando um elemento é criado, o React extrai a keypropriedade e armazena a chave diretamente no elemento retornado. Mesmo que keypareça que pertence props, keynão pode ser referenciado usando this.props.key. React usa automaticamente keypara decidir quais componentes atualizar. Um componente não pode perguntar sobre o seu key.

Quando uma lista é renderizada novamente, o React pega a chave de cada item da lista e pesquisa os itens da lista anterior por uma chave correspondente. Se a lista atual tiver uma chave que não existe na lista anterior, o React cria um componente. Se a lista atual estiver faltando uma chave que existe na lista anterior, o React destrói o componente anterior. Se as chaves coincidirem, o componente é movido. As chaves dizem Reagir sobre a identidade de cada componente, o que permite que o React mantenha o estado entre os re-renderizadores. Se a chave de um componente mudar, o componente será destruído e recriado com um novo estado.

É altamente recomendável que você atribua chaves adequadas sempre que criar listas dinâmicas. Se você não tiver uma chave apropriada, convém reestruturar seus dados para fazer isso.

Se nenhuma chave for especificada, o React apresentará um aviso e usará o índice da matriz como uma chave por padrão. Usar o índice de matriz como uma chave é problemático ao tentar reordenar os itens de uma lista ou inserir / remover itens de lista. Explicitamente passando silencia o aviso, mas tem os mesmos problemas que os índices de matriz e não é recomendado na maioria dos casos.

As chaves não precisam ser globalmente exclusivas. As chaves precisam ser únicas entre os componentes e seus irmãos.

Implementando Viagem no Tempo
No histórico do jogo do jogo da velha, cada movimento passado tem um ID único associado a ele: é o número sequencial do movimento. Os movimentos nunca são reordenados, excluídos ou inseridos no meio, por isso é seguro usar o índice de movimentação como uma chave.

No rendermétodo do componente Game , podemos adicionar a chave e o aviso React sobre as chaves deve desaparecer:

Ver o código completo neste momento

Clicar em qualquer um dos botões do item da lista gera um erro porque o jumpTométodo é indefinido. Antes de implementar jumpTo, adicionaremos stepNumberao estado do componente Game para indicar qual etapa estamos visualizando no momento.

Primeiro, adicione stepNumber: 0ao estado inicial no jogo constructor:


Em seguida, vamos definir o jumpTométodo no jogo para atualizar isso stepNumber. Também definimos xIsNextcomo verdadeiro se o número para o qual estamos mudando stepNumberfor par:

  
Vamos agora fazer algumas alterações no handleClickmétodo do jogo que é acionado quando você clica em um quadrado.

O stepNumberestado que adicionamos reflete a movimentação exibida para o usuário agora. Depois de fazermos um novo movimento, precisamos atualizar stepNumberadicionando stepNumber: history.lengthcomo parte do this.setStateargumento. Isso garante que não fiquemos presos mostrando o mesmo movimento depois que um novo foi feito.

Nós também substituiremos a leitura this.state.historypor this.state.history.slice(0, this.state.stepNumber + 1). Isso garante que, se "voltarmos no tempo" e fizermos um novo movimento a partir desse ponto, descartamos toda a história "futura" que agora se tornaria incorreta.

Finalmente, modificaremos o rendermétodo do componente Game de sempre renderizar o último movimento para renderizar o movimento atualmente selecionado de acordo com stepNumber:


    // the rest has not changed
Se clicarmos em qualquer etapa do histórico do jogo, o tabuleiro do jogo da velha deve ser imediatamente atualizado para mostrar como ficou o tabuleiro depois que essa etapa ocorreu.

Ver o código completo neste momento

Empacotando
Parabéns! Você criou um jogo de jogo-da-velha que:

Permite que você jogue tic-tac-toe,
Indica quando um jogador ganhou o jogo
Armazena a história de um jogo à medida que o jogo avança
Permite aos jogadores rever o histórico de um jogo e ver versões anteriores do tabuleiro de um jogo.
Bom trabalho! Esperamos que agora você tenha uma compreensão decente de como o React funciona.

Confira o resultado final aqui: Resultado Final .

Se você tiver tempo extra ou quiser praticar suas novas habilidades de Reação, aqui estão algumas idéias para melhorias que você pode fazer no jogo jogo da velha que estão listados em ordem crescente de dificuldade:

Exibe o local de cada movimento no formato (col, row) na lista do histórico de movimentos.
Negrito o item atualmente selecionado na lista de movimentos.
Reescreva Board para usar dois loops para fazer os quadrados em vez de codificá-los.
Adicione um botão de alternância que permita classificar os movimentos em ordem crescente ou decrescente.
Quando alguém vencer, destaque os três quadrados que causaram a vitória.
Quando ninguém vencer, mostre uma mensagem sobre o resultado ser um empate.
Ao longo deste tutorial, abordamos os conceitos do React, incluindo elementos, componentes, adereços e estado. Para uma explicação mais detalhada de cada um desses tópicos, confira o restante da documentação . Para saber mais sobre como definir componentes, confira a React.Componentreferência da API .
</p>



                    </div>
                    <div className="anuncio-direito" dangerouslySetInnerHTML={{__html:adsDireito }} />
            </div>);
    }
}
export default Home;