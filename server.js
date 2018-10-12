!function(e){function t(n){if(a[n])return a[n].exports;var r=a[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var a={};t.m=e,t.c=a,t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=4)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("isomorphic-fetch")},function(e,t){e.exports=require("react-router-dom")},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(10),o=n(r),l=a(11),u=n(l),c=a(12),i=n(c),s=a(14),d=a(15),f=a(16),p=[{path:"/",exact:!0,component:o.default,fetchInitialData:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(0,f.fetchHomeRepos)(0)}},{path:"/pagina/:id/:titulo",component:i.default,fetchInitialData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return(0,d.fetchPaginaRepos)(e.replace("/"+e.split("/").pop(),"").split("/").pop())}},{path:"/popular/:id",component:u.default,fetchInitialData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return(0,s.fetchPopularRepos)(e.split("/").pop())}}];t.default=p},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var r=a(5),o=n(r),l=a(6),u=n(l),c=a(0),i=n(c),s=a(7),d=a(2),f=a(8),p=n(f),m=a(9),h=n(m),b=a(3),v=n(b),g=(0,o.default)(),y=process.env.PORT||5e3;g.use((0,u.default)()),g.use(o.default.static("public")),g.get("*",function(e,t,a){var n=v.default.find(function(t){return(0,d.matchPath)(e.url,t)})||{};(n.fetchInitialData?n.fetchInitialData(e.path):Promise.resolve()).then(function(a){var n={data:a},r=(0,s.renderToString)(i.default.createElement(d.StaticRouter,{location:e.url,context:n},i.default.createElement(h.default,null))),o="";void 0!=a&&(o=(""!=a.titulo?a.titulo+" - ":"")+"Guia desenvolvedor"),t.send('\n      <!DOCTYPE html>\n      <html lang="pt-br">\n        <head>\n          <title>'+o+'</title>\n          <meta charset="utf-8"><meta http-equiv="Content-Language" content="pt-br">\n          <meta name="robots" content="index, follow">\n          <meta name="description" content="">\n          <meta name="keywords" content="HTML,CSS,XML,JavaScript">\n          <meta name="author" content="Tiago Jardim">\n          <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">\n          <link rel="stylesheet" type="text/css" href="/css/style.css">\n         \n          <script src="/bundle.js" defer><\/script>\n          \n          <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"><\/script>\n          <script>\n            (adsbygoogle = window.adsbygoogle || []).push({\n              google_ad_client: "ca-pub-9476507678736435",\n              enable_page_level_ads: true\n            });\n          <\/script>\n          <script>window.__INITIAL_DATA__ = '+(0,p.default)(a)+'<\/script>\n        </head>\n\n        <body>\n          <div id="app">'+r+'</div>\n          <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"><\/script>\n          <script src="/js/js.js" defer><\/script>\n          </body>\n      </html>\n    ')}).catch(a)}),g.listen(y,function(){console.log("Server is listening on port: 3000")})},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("cors")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("serialize-javascript")},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),s=a(0),d=n(s),f=a(3),p=n(f),m=a(2),h=a(17),b=n(h),v=a(18),g=n(v),y=a(19),E=n(y),_=function(e){function t(){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),i(t,[{key:"render",value:function(){return d.default.createElement("div",null,d.default.createElement(b.default,null),d.default.createElement(m.Switch,null,p.default.map(function(e){var t=e.path,a=e.exact,n=e.component,o=r(e,["path","exact","component"]);return d.default.createElement(m.Route,{key:t,path:t,exact:a,render:function(e){return d.default.createElement(n,c({},e,o))}})}),d.default.createElement(m.Route,{render:function(e){return d.default.createElement(E.default,e)}})),d.default.createElement(g.default,null))}}]),t}(s.Component);t.default=_},function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),u=a(0),c=function(e){return e&&e.__esModule?e:{default:e}}(u),i=function(e){function t(e){n(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),o={titulo:"pagina",description:"sdfsdf",destaques:[{url:"/1/como-criar-site-react-js",titulo:"Como criar site react js",descricao:"React js é uma biblioteca javaScript mais popular da atualidade, criado pelo Facebook para construir interfaces de usuário. Nesse tutorial vamos mostrar como criar um app react js.",data:"29/09/2018",qtdeAcesso:"67",assunto:"React js",imagem:"/react.svg"},{url:"/2/como-utilizar-map-react-array-list",titulo:"Como utilizar map react array list",descricao:"Veja vários exemplos de utilização do map react js",data:"30/09/2018",qtdeAcesso:"62",assunto:"React js",imagem:"/react.svg"},{url:"/3/jquery-ready-documentacao",titulo:"jquery ready documentação",descricao:"Documentação como utilizar ready jquery ",data:"10/10/2018",qtdeAcesso:"0",assunto:"jQuery",imagem:"/jquery.svg"}]};return a.state={repos:o,loading:!o},a}return o(t,e),l(t,[{key:"render",value:function(){var e=this.state,t=e.loading,a=e.repos;if(!0===t)return c.default.createElement("p",null,"LOADING");return c.default.createElement("div",{className:"corpo-pagina"},c.default.createElement("div",{className:"anuncio-topo",dangerouslySetInnerHTML:{__html:""}}),c.default.createElement("div",{className:"container-esquerdo"},c.default.createElement("div",{className:"menu-esquerdo"},c.default.createElement("div",{className:"menu-esquerdo-titulo"},"Assuntos"),c.default.createElement("ul",null,c.default.createElement("li",null,c.default.createElement("a",{href:"/pagina/1/como-criar-site-react-js",title:"React js"},"React js")),c.default.createElement("li",null,c.default.createElement("a",{href:"/pagina/3/jquery-ready-documentacao",title:"Jquery"},"Jquery")),c.default.createElement("li",null,c.default.createElement("a",{href:"/pagina/2/como-utilizar-map-react-array-list",title:"javaScript"},"javaScript")))),c.default.createElement("div",{className:"anuncio-esquerdo",dangerouslySetInnerHTML:{__html:""}})),c.default.createElement("div",{className:"conteudo-home"},c.default.createElement("h3",{className:"titulo-home"},"Conteúdos mais acessados"),c.default.createElement("h1",{className:"sub-titulo-home"},"Guia desenvolvedor"),a.destaques.map(function(e,t){return c.default.createElement("div",{key:t},c.default.createElement("div",{className:"conteudo-home-container"},c.default.createElement("div",{className:"conteudo-home-img"},c.default.createElement("img",{src:e.imagem,className:"img-destaque",alt:e.titulo})),c.default.createElement("div",{className:"conteudo-home-detalhe"},c.default.createElement("a",{href:"/pagina"+e.url},c.default.createElement("h2",null,e.titulo)),c.default.createElement("div",null,c.default.createElement("h3",null,e.descricao)),c.default.createElement("div",{className:"conteudo-home-info"},e.qtdeAcesso," | ",c.default.createElement("span",{className:"assunto"},c.default.createElement("h4",null,e.assunto))," | ",e.data))),c.default.createElement("hr",{className:"hr-margin"}))}),c.default.createElement("div",{className:"conteudo"},c.default.createElement("h1",null,"Como criar app react js"),c.default.createElement("h2",{className:"sub-titulo"},"Iniciando app react js"),c.default.createElement("p",null,"React js é uma biblioteca javaScript mais popular da atualidade, criado pelo Facebook para construir interfaces de usuário. Nesse tutorial vamos mostrar como criar um app react js."),c.default.createElement("p",null,c.default.createElement("strong",null,"Pré-requisito"),c.default.createElement("br",null),"Será necessário ter instalado na sua maquina o ",c.default.createElement("a",{href:"https://nodejs.org/en/download/",title:"Download Node.js",target:"_blank",rel:"nofollow"},"Node.js")," "),c.default.createElement("p",null,"Para criar app react execute o seguinte comando, esses comandos funcionam no macOS, Windows e Linux."),c.default.createElement("pre",{className:"codigo"},c.default.createElement("code",null,"npx create-react-app my-app")),c.default.createElement("p",null,"Ele irá criar um pasta chamado my-app dentro do diretório onde o comando foi executado. Dentro desse diretório, ele gerará a estrutura inicial do projeto e instalará as dependências necessárias:"),c.default.createElement("pre",null,c.default.createElement("code",null,"my-app",c.default.createElement("br",null),"├── README.md",c.default.createElement("br",null),"├── node_modules",c.default.createElement("br",null),"├── package.json",c.default.createElement("br",null),"├── .gitignore",c.default.createElement("br",null),"├── public",c.default.createElement("br",null),"│   ├── favicon.ico",c.default.createElement("br",null),"│   ├── index.html",c.default.createElement("br",null),"│   └── manifest.json",c.default.createElement("br",null),"└── src",c.default.createElement("br",null),"├── App.css",c.default.createElement("br",null),"├── App.js",c.default.createElement("br",null),"├── App.test.js",c.default.createElement("br",null),"├── index.css",c.default.createElement("br",null),"├── index.js",c.default.createElement("br",null),"├── logo.svg",c.default.createElement("br",null),"└── serviceWorker.js",c.default.createElement("br",null))),c.default.createElement("p",null,"Para iniciar o app react, será necessário abrir a pasta onde o app foi criado e executar o seguinte comando."),c.default.createElement("pre",{className:"codigo"},c.default.createElement("code",null,"cd my-app npm start")),c.default.createElement("p",null,"Em seguida, abra ",c.default.createElement("code",null,"http://localhost:3000/")," para ver seu aplicativo."),c.default.createElement("p",null,"Para gerar a Build do app basta executar o seguinte comando"),c.default.createElement("pre",{className:"codigo"},c.default.createElement("code",null,"npm run build")))),c.default.createElement("div",{className:"anuncio-direito",dangerouslySetInnerHTML:{__html:""}}))}}]),t}(u.Component);t.default=i},function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),u=a(0),c=function(e){return e&&e.__esModule?e:{default:e}}(u),i=function(e){function t(e){n(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),o=void 0;return o=a.props.staticContext.data,a.state={repos:o,loading:!o},a.fetchRepos=a.fetchRepos.bind(a),a}return o(t,e),l(t,[{key:"componentDidMount",value:function(){this.state.repos||this.fetchRepos(this.props.match.params.id)}},{key:"fetchRepos",value:function(e){var t=this;this.setState(function(){return{loading:!0}}),this.props.fetchInitialData(e).then(function(e){return t.setState(function(){return{repos:e,loading:!1}})})}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.repos;return!0===t?c.default.createElement("p",null,"LOADING"):c.default.createElement("ul",{style:{display:"flex",flexWrap:"wrap"}},a.map(function(e){var t=e.name,a=e.owner,n=e.stargazers_count,r=e.html_url;return c.default.createElement("li",{key:t,style:{margin:30}},c.default.createElement("ul",null,c.default.createElement("li",null,c.default.createElement("a",{href:r},t)),c.default.createElement("li",null,"@",a.login),c.default.createElement("li",null,n," stars")))}))}}]),t}(u.Component);t.default=i},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),i=n(c),s=a(13),d=n(s),f=function(e){function t(e){r(this,t);var a=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),n=void 0;return n=a.props.staticContext.data,a.state={repos:n,loading:!n},a.fetchRepos=a.fetchRepos.bind(a),a}return l(t,e),u(t,[{key:"componentDidMount",value:function(){this.state.repos||this.fetchRepos(this.props.match.params.id)}},{key:"componentDidUpdate",value:function(e,t){e.match.params.id!==this.props.match.params.id&&this.fetchRepos(this.props.match.params.id)}},{key:"fetchRepos",value:function(e){var t=this;this.setState(function(){return{loading:!0}}),this.props.fetchInitialData(e).then(function(e){return t.setState(function(){return{repos:e,loading:!1}})})}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.repos;return!0===t?i.default.createElement("p",null,"LOADING"):i.default.createElement("div",{className:"corpo-pagina"},i.default.createElement("div",{className:"anuncio-topo"}),i.default.createElement("div",{className:"anuncio-esquerdo"}),i.default.createElement("div",{className:"conteudo"},i.default.createElement("div",{id:"conteudo",dangerouslySetInnerHTML:{__html:a.conteudo}})),i.default.createElement("div",{className:"destaque-direito"},i.default.createElement("div",{className:"titulo-destaque"},"Destaque"),i.default.createElement(d.default,{idPagina:a.id})))}}]),t}(c.Component);t.default=f},function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),u=a(0),c=function(e){return e&&e.__esModule?e:{default:e}}(u),i=function(e){function t(e){n(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={result:null,loading:!0},a}return o(t,e),l(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://tiagojardim.000webhostapp.com/getDestaque.php?id_pagina="+this.props.idPagina).then(function(e){return e.json()}).then(function(t){e.setState({loading:!t,result:t})},function(t){e.setState({loading:!0})})}},{key:"componentDidUpdate",value:function(e){var t=this;this.props.idPagina!=e.idPagina&&fetch("https://tiagojardim.000webhostapp.com/getDestaque.php?id_pagina="+this.props.idPagina).then(function(e){return e.json()}).then(function(e){t.setState({loading:!e,result:e})},function(e){t.setState({loading:!0})})}},{key:"render",value:function(){return 1==this.state.loading?c.default.createElement("div",null):c.default.createElement("div",null,this.state.result.destaques.map(function(e,t){return c.default.createElement("div",{key:t},c.default.createElement("div",{className:"item-destaque"},c.default.createElement("a",{href:"/pagina"+e.url,title:e.titulo},c.default.createElement("p",null,c.default.createElement("img",{src:e.imagem,className:"img-pagina-destaque",align:"left",alt:e.titulo}),e.titulo,". ",e.descricao))),c.default.createElement("hr",{className:"hr-destaque"}),t%2!=0?c.default.createElement("div",{className:"item-destaque-anuncio"}):"")}))}}]),t}(u.Component);t.default=i},function(e,t,a){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",t=encodeURI("https://api.github.com/search/repositories?q=stars:>1+language:"+e+"&sort=stars&order=desc&type=Repositories");return(0,o.default)(t).then(function(e){return e.json()}).then(function(e){return e.items}).catch(function(e){return console.warn(e),null})}Object.defineProperty(t,"__esModule",{value:!0}),t.fetchPopularRepos=n;var r=a(1),o=function(e){return e&&e.__esModule?e:{default:e}}(r)},function(e,t,a){"use strict";function n(e){var t=encodeURI("https://tiagojardim.000webhostapp.com/getPagina.php?pagina="+e);return(0,o.default)(t).then(function(e){return e.json()}).then(function(e){return e}).catch(function(e){return console.warn(e),null})}Object.defineProperty(t,"__esModule",{value:!0}),t.fetchPaginaRepos=n;var r=a(1),o=function(e){return e&&e.__esModule?e:{default:e}}(r)},function(e,t,a){"use strict";function n(e){var t=encodeURI("https://tiagojardim.000webhostapp.com/getDestaque.php?id_pagina="+e);return(0,o.default)(t).then(function(e){return e.json()}).then(function(e){return e}).catch(function(e){return console.warn(e),null})}Object.defineProperty(t,"__esModule",{value:!0}),t.fetchHomeRepos=n;var r=a(1),o=function(e){return e&&e.__esModule?e:{default:e}}(r)},function(e,t,a){"use strict";function n(){return o.default.createElement("div",null,o.default.createElement("div",{id:"busca-mobile",className:"topo-busca-mobile"},o.default.createElement("div",{className:"barra-topo"},o.default.createElement("img",{id:"topo-busca-arrow-icon",className:"topo-busca-arrow-icon",src:"/left-arrow.svg"}),o.default.createElement("input",{type:"text",id:"input-busca-mobile",placeholder:"O que você procura?",className:"topo-busca-input-mobile"}),o.default.createElement("img",{id:"limpar-input-mobile",className:"limpar-input-mobile",src:"/error.svg"})),o.default.createElement("div",{id:"result-mobile",className:"result-mobile"})),o.default.createElement("div",{className:"topo"},o.default.createElement("div",{className:"topo-logo"},o.default.createElement("a",{href:"/"},o.default.createElement("img",{className:"logo",src:"/knowledge.svg"}))),o.default.createElement("div",{className:"topo-busca"},o.default.createElement("span",{className:"topo-busca-nome-site"},"Guia do desenvolvedor"),o.default.createElement("div",{className:"busca"},o.default.createElement("input",{id:"busca",type:"text",placeholder:"O que você procura?",className:"topo-busca-input"})),o.default.createElement("img",{id:"topo-busca-search-icon",className:"topo-busca-search-icon",src:"/search.svg"}))))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var r=a(0),o=function(e){return e&&e.__esModule?e:{default:e}}(r)},function(e,t,a){"use strict";function n(){return o.default.createElement("div",{className:"rodape"},"Copyright © 2018 Guia desenvolvedor")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var r=a(0),o=function(e){return e&&e.__esModule?e:{default:e}}(r)},function(e,t,a){"use strict";function n(){return o.default.createElement("div",null,"Four Oh Four")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var r=a(0),o=function(e){return e&&e.__esModule?e:{default:e}}(r)}]);