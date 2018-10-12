!function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=4)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("isomorphic-fetch")},function(e,t){e.exports=require("react-router-dom")},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(10),o=a(r),u=n(11),i=a(u),l=n(12),c=a(l),s=n(14),f=n(15),p=n(16),d=[{path:"/",exact:!0,component:o.default,fetchInitialData:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(0,p.fetchHomeRepos)(0)}},{path:"/pagina/:id/:titulo",component:c.default,fetchInitialData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return(0,f.fetchPaginaRepos)(e.replace("/"+e.split("/").pop(),"").split("/").pop())}},{path:"/popular/:id",component:i.default,fetchInitialData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return(0,s.fetchPopularRepos)(e.split("/").pop())}}];t.default=d},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r=n(5),o=a(r),u=n(6),i=a(u),l=n(0),c=a(l),s=n(7),f=n(2),p=n(8),d=a(p),m=n(9),h=a(m),v=n(3),b=a(v),y=(0,o.default)(),g=process.env.PORT||5e3;y.use((0,i.default)()),y.use(o.default.static("public")),y.get("*",function(e,t,n){var a=b.default.find(function(t){return(0,f.matchPath)(e.url,t)})||{};(a.fetchInitialData?a.fetchInitialData(e.path):Promise.resolve()).then(function(n){var a={data:n},r=(0,s.renderToString)(c.default.createElement(f.StaticRouter,{location:e.url,context:a},c.default.createElement(h.default,null)));t.send('\n      <!DOCTYPE html>\n      <html lang="pt-br">\n        <head>\n          <title>Guia desenvolvedor</title>\n          <meta charset="utf-8"><meta http-equiv="Content-Language" content="pt-br">\n          <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">\n          <meta name="robots" content="index, follow">\n          <link rel="stylesheet" type="text/css" href="/style-topo.css">\n          <link rel="stylesheet" type="text/css" href="/pagina.css">\n          <link rel="stylesheet" type="text/css" href="/autocomplete.css">\n          <link rel="stylesheet" type="text/css" href="/home.css">\n          <script src="/bundle.js" defer><\/script>\n          \n          <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"><\/script>\n          <script>\n            (adsbygoogle = window.adsbygoogle || []).push({\n              google_ad_client: "ca-pub-9476507678736435",\n              enable_page_level_ads: true\n            });\n          <\/script>\n          <script>window.__INITIAL_DATA__ = '+(0,d.default)(n)+'<\/script>\n        </head>\n\n        <body>\n          <div id="app">'+r+'</div>\n          <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"><\/script>\n          <script src="/autocomplete.js" defer><\/script>\n          </body>\n      </html>\n    ')}).catch(n)}),y.listen(g,function(){console.log("Server is listening on port: 3000")})},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("cors")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("serialize-javascript")},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n(0),f=a(s),p=n(3),d=a(p),m=n(2),h=n(17),v=a(h),b=n(18),y=a(b),g=function(e){function t(){return o(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),c(t,[{key:"render",value:function(){return f.default.createElement("div",null,f.default.createElement(v.default,null),f.default.createElement(m.Switch,null,d.default.map(function(e){var t=e.path,n=e.exact,a=e.component,o=r(e,["path","exact","component"]);return f.default.createElement(m.Route,{key:t,path:t,exact:n,render:function(e){return f.default.createElement(a,l({},e,o))}})}),f.default.createElement(m.Route,{render:function(e){return f.default.createElement(y.default,e)}})))}}]),t}(s.Component);t.default=g},function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(i),c=function(e){function t(e){a(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),o=void 0;return o=n.props.staticContext.data,n.state={repos:o,loading:!o},n.fetchRepos=n.fetchRepos.bind(n),n}return o(t,e),u(t,[{key:"componentDidMount",value:function(){this.state.repos||this.fetchRepos(this.props.match.params.id)}},{key:"componentDidUpdate",value:function(e,t){e.match.params.id!==this.props.match.params.id&&this.fetchRepos(this.props.match.params.id)}},{key:"fetchRepos",value:function(e){var t=this;this.setState(function(){return{loading:!0}}),this.props.fetchInitialData(e).then(function(e){return t.setState(function(){return{repos:e,loading:!1}})})}},{key:"render",value:function(){var e=this.state,t=e.loading,n=e.repos;if(!0===t)return l.default.createElement("p",null,"LOADING");return l.default.createElement("div",{className:"corpo-pagina"},l.default.createElement("div",{className:"anuncio-topo",dangerouslySetInnerHTML:{__html:""}}),l.default.createElement("div",{className:"anuncio-esquerdo",dangerouslySetInnerHTML:{__html:""}}),l.default.createElement("div",{className:"conteudo-home"},l.default.createElement("h3",{className:"titulo-home"},"Conteúdos mais acessados"),l.default.createElement("h1",{className:"sub-titulo-home"},"Guia desenvolvedor"),n.map(function(e,t){return l.default.createElement("div",{key:t},l.default.createElement("div",{className:"conteudo-home-container"},l.default.createElement("div",{className:"conteudo-home-img"},l.default.createElement("img",{src:e.imagem,className:"img-destaque",alt:e.assunto})),l.default.createElement("div",{className:"conteudo-home-detalhe"},l.default.createElement("a",{href:"/pagina"+e.url},l.default.createElement("h2",null,e.titulo)),l.default.createElement("div",null,l.default.createElement("h3",null,e.descricao)),l.default.createElement("div",{className:"conteudo-home-info"},e.qtdeAcesso," | ",l.default.createElement("span",{className:"assunto"},l.default.createElement("h4",null,e.assunto))," | ",e.data))),l.default.createElement("hr",{className:"hr-margin"}))})),l.default.createElement("div",{className:"anuncio-direito",dangerouslySetInnerHTML:{__html:""}}))}}]),t}(i.Component);t.default=c},function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(i),c=function(e){function t(e){a(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),o=void 0;return o=n.props.staticContext.data,n.state={repos:o,loading:!o},n.fetchRepos=n.fetchRepos.bind(n),n}return o(t,e),u(t,[{key:"componentDidMount",value:function(){this.state.repos||this.fetchRepos(this.props.match.params.id)}},{key:"fetchRepos",value:function(e){var t=this;this.setState(function(){return{loading:!0}}),this.props.fetchInitialData(e).then(function(e){return t.setState(function(){return{repos:e,loading:!1}})})}},{key:"render",value:function(){var e=this.state,t=e.loading,n=e.repos;return!0===t?l.default.createElement("p",null,"LOADING"):l.default.createElement("ul",{style:{display:"flex",flexWrap:"wrap"}},n.map(function(e){var t=e.name,n=e.owner,a=e.stargazers_count,r=e.html_url;return l.default.createElement("li",{key:t,style:{margin:30}},l.default.createElement("ul",null,l.default.createElement("li",null,l.default.createElement("a",{href:r},t)),l.default.createElement("li",null,"@",n.login),l.default.createElement("li",null,a," stars")))}))}}]),t}(i.Component);t.default=c},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=n(0),c=a(l),s=n(13),f=a(s),p=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),a=void 0;return a=n.props.staticContext.data,n.state={repos:a,loading:!a},n.fetchRepos=n.fetchRepos.bind(n),n}return u(t,e),i(t,[{key:"componentDidMount",value:function(){this.state.repos?document.title="Guia desenvolvedor - "+this.state.repos.titulo:this.fetchRepos(this.props.match.params.id)}},{key:"componentDidUpdate",value:function(e,t){e.match.params.id!==this.props.match.params.id&&this.fetchRepos(this.props.match.params.id)}},{key:"fetchRepos",value:function(e){var t=this;this.setState(function(){return{loading:!0}}),this.props.fetchInitialData(e).then(function(e){return t.setState(function(){return{repos:e,loading:!1}})})}},{key:"render",value:function(){var e=this.state,t=e.loading,n=e.repos;return!0===t?c.default.createElement("p",null,"LOADING"):c.default.createElement("div",{className:"corpo-pagina"},c.default.createElement("div",{className:"anuncio-topo"}),c.default.createElement("div",{className:"anuncio-esquerdo"}),c.default.createElement("div",{className:"conteudo"},c.default.createElement("div",{id:"conteudo",dangerouslySetInnerHTML:{__html:n.conteudo}})),c.default.createElement("div",{className:"destaque-direito"},c.default.createElement("div",{className:"titulo-destaque"},"Destaque"),c.default.createElement(f.default,{idPagina:n.id})))}}]),t}(l.Component);t.default=p},function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(i),c=function(e){function t(e){a(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={result:null,loading:!0},n}return o(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://tiagojardim.000webhostapp.com/getDestaque.php?id_pagina="+this.props.idPagina).then(function(e){return e.json()}).then(function(t){e.setState({loading:!t,result:t})},function(t){e.setState({loading:!0})})}},{key:"componentDidUpdate",value:function(e){var t=this;this.props.idPagina!=e.idPagina&&fetch("https://tiagojardim.000webhostapp.com/getDestaque.php?id_pagina="+this.props.idPagina).then(function(e){return e.json()}).then(function(e){t.setState({loading:!e,result:e})},function(e){t.setState({loading:!0})})}},{key:"render",value:function(){return 1==this.state.loading?l.default.createElement("div",null):l.default.createElement("div",null,this.state.result.map(function(e,t){return l.default.createElement("div",{key:t},l.default.createElement("div",{className:"item-destaque"},l.default.createElement("a",{href:"/pagina"+e.url,title:e.titulo},l.default.createElement("p",null,l.default.createElement("img",{src:e.imagem,className:"img-pagina-destaque",align:"left",alt:e.titulo}),e.titulo,". ",e.descricao))),l.default.createElement("hr",{className:"hr-destaque"}),t%2!=0?l.default.createElement("div",{className:"item-destaque-anuncio"}):"")}))}}]),t}(i.Component);t.default=c},function(e,t,n){"use strict";function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",t=encodeURI("https://api.github.com/search/repositories?q=stars:>1+language:"+e+"&sort=stars&order=desc&type=Repositories");return(0,o.default)(t).then(function(e){return e.json()}).then(function(e){return e.items}).catch(function(e){return console.warn(e),null})}Object.defineProperty(t,"__esModule",{value:!0}),t.fetchPopularRepos=a;var r=n(1),o=function(e){return e&&e.__esModule?e:{default:e}}(r)},function(e,t,n){"use strict";function a(e){var t=encodeURI("https://tiagojardim.000webhostapp.com/getPagina.php?pagina="+e);return(0,o.default)(t).then(function(e){return e.json()}).then(function(e){return e}).catch(function(e){return console.warn(e),null})}Object.defineProperty(t,"__esModule",{value:!0}),t.fetchPaginaRepos=a;var r=n(1),o=function(e){return e&&e.__esModule?e:{default:e}}(r)},function(e,t,n){"use strict";function a(e){var t=encodeURI("https://tiagojardim.000webhostapp.com/getDestaque.php?id_pagina="+e);return(0,o.default)(t).then(function(e){return e.json()}).then(function(e){return e}).catch(function(e){return console.warn(e),null})}Object.defineProperty(t,"__esModule",{value:!0}),t.fetchHomeRepos=a;var r=n(1),o=function(e){return e&&e.__esModule?e:{default:e}}(r)},function(e,t,n){"use strict";function a(){return o.default.createElement("div",null,o.default.createElement("div",{id:"busca-mobile",className:"topo-busca-mobile"},o.default.createElement("div",{className:"barra-topo"},o.default.createElement("img",{id:"topo-busca-arrow-icon",className:"topo-busca-arrow-icon",src:"/left-arrow.svg"}),o.default.createElement("input",{type:"text",id:"input-busca-mobile",placeholder:"O que você procura?",className:"topo-busca-input-mobile"}),o.default.createElement("img",{id:"limpar-input-mobile",className:"limpar-input-mobile",src:"/error.svg"})),o.default.createElement("div",{id:"result-mobile",className:"result-mobile"})),o.default.createElement("div",{className:"topo"},o.default.createElement("div",{className:"topo-logo"},o.default.createElement("a",{href:"/"},o.default.createElement("img",{className:"logo",src:"/knowledge.svg"}))),o.default.createElement("div",{className:"topo-busca"},o.default.createElement("span",{className:"topo-busca-nome-site"},"Guia do desenvolvedor"),o.default.createElement("div",{className:"busca"},o.default.createElement("input",{id:"busca",type:"text",placeholder:"O que você procura?",className:"topo-busca-input"})),o.default.createElement("img",{id:"topo-busca-search-icon",className:"topo-busca-search-icon",src:"/search.svg"}))))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var r=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(r)},function(e,t,n){"use strict";function a(){return o.default.createElement("div",null,"Four Oh Four")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var r=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(r)}]);