import express from "express"
import cors from "cors"
import React from "react"
import { renderToString } from "react-dom/server"
import { StaticRouter, matchPath } from "react-router-dom"
import serialize from "serialize-javascript"
import App from '../shared/App'
import routes from '../shared/routes'


const app = express()
const port = process.env.PORT || 5000

//gzip
const compress = require('compression');

app.use(compress())
app.use(cors())
app.use(express.static("public"))
//cache
var umAno = 60 * 1000 * 60 * 24 * 365;
app.use(express.static('public_cache', { maxAge: umAno }));

app.get("*", (req, res, next) => {
  //console.log(req._parsedOriginalUrl);
  // Simulating async operation
  setImmediate(function () {
  try {
  const activeRoute = routes.find((route) => matchPath(req.url, route)) || {}

  const promise = activeRoute.fetchInitialData
    ? activeRoute.fetchInitialData(req.path)
    : Promise.resolve()

  promise.then((data) => {
    const context = { data }
    const markup = renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    )
    //res.status(404)   
    //.send('Not found')
    var titulo = "";
    var description = "";
    var script = "";
   
    if(data != null){
      //var dataObject = Object.values(data)[0];
      titulo = data.pergunta +" - Guia desenvolvedor";
      description = data.description;
    }
    var indexing = "index, follow";
    var style = '<link rel="stylesheet" type="text/css" href="/css-cache/style-1.css">';
    var schema = "";
    var schema_img = "";
    if(req.url == "/"){
      titulo = "Guia desenvolvedor";
      description = "Com o guia do desenvolvedor você aprende a programar react js, c#, javaScript, jQuery, sql server, seo, html, e css. Aqui você encontra melhores cursos online de programação.";
      style += '<link rel="stylesheet" type="text/css" href="/css-cache/home-1.css">';
    }else if(req.url.indexOf("/ordem/") > -1){
      titulo = "Guia desenvolvedor";
      description = "Com o guia do desenvolvedor você aprende a programar react js, c#, javaScript, jQuery, sql server, seo, html, e css. Aqui você encontra melhores cursos online de programação.";
      style += '<link rel="stylesheet" type="text/css" href="/css-cache/home-1.css">';
      indexing = "noindex";
    }
     else if(req._parsedOriginalUrl.pathname == "/entrar"){
      style += '<link async rel="stylesheet" type="text/css" href="/css/entrar.css">';
    } else if(req.url.indexOf("/pergunta/") > -1){
      style += '<link rel="stylesheet" type="text/css" href="/css-cache/pergunta-4.css">';
      style += '<link rel="stylesheet" type="text/css" href="/css-cache/hilight-1.css">';
      script += '<script async src="/js-cache/pergunta-2.js"></script>';
      script += '<script async src="/js-cache/hilight-2.js"></script>';
      schema = 'itemscope itemtype="http://schema.org/QAPage"';
      if(data == null){
        indexing = "noindex";
        res.status(404);
      }else{
        schema_img = '<meta property="og:image" itemprop="image primaryImageOfPage" content="https://www.guiadesenvolvedor.com'+data.assunto[0].imagem+'" />';
      }
    }else if(req.url.indexOf("/pagina/") > -1){
      res.writeHead(301,
        {Location: req.url.replace("/pagina/","/pergunta/")}
      );
      res.end();
    }
    else if(req.url.indexOf("/assunto/") > -1){
      style += '<link async rel="stylesheet" type="text/css" href="/css-cache/home-1.css">';
      if(data != null && data.length > 0)
      {
        titulo = data[0].assunto[0].nome+" - Guia desenvolvedor";
        description = "Com o guia do desenvolvedor você aprende como programar usando "+data[0].assunto[0].nome+", aqui tem varios exemplos que podem te ajudar.";
      }
      else{
        titulo = "Guia desenvolvedor";
        description = "Com o guia do desenvolvedor você aprende a programar react js, c#, javaScript e jQuery";
        indexing = "noindex";
        res.status(404);
      }
    }
    else if(req.url.indexOf("/busca/") > -1){
      titulo = "Guia desenvolvedor";
      description = "Com o guia do desenvolvedor você aprende a programar react js, c#, javaScript e jQuery";
      style += '<link async rel="stylesheet" type="text/css" href="/css-cache/home-1.css">';
      indexing = "noindex";
    } else if(req.url.indexOf("/curso/") > -1){
      titulo = `Curso ${data.descricao} - Guia desenvolvedor`;
      description = `Curso ${data.descricao} ${data.formato} ${data.segmento}. Veja também cursos de programação, desenvolvimento pessoal, TI e muito mais. Cursos mais baratos.`;
      style += '<link async rel="stylesheet" type="text/css" href="/css-cache/curso.css">';
    }
    else if(req.url.indexOf("/cursos") > -1){
      titulo = "Cursos - Guia desenvolvedor";
      description = "Com o guia do desenvolvedor você encontra os melhores cursos de programação, para aprender programar e se destacar no mercado de trabalho. Cursos Online e ebooks";
      style += '<link async rel="stylesheet" type="text/css" href="/css/curso.min.css">';
      style += '<link async rel="stylesheet" type="text/css" href="/css/pagina.min.css">';
    }else if(req.url == "/verificar"){
      titulo = "Guia desenvolvedor";
      description = "Com o guia do desenvolvedor você aprende a programar react js, c#, javaScript e jQuery";
      indexing = "noindex";
      script += '<script defer src="/js/verificacao.js"></script>';
    }
    else {
      titulo = "Guia desenvolvedor";
      description = "Com o guia do desenvolvedor você aprende a programar react js, c#, javaScript e jQuery";
      indexing = "noindex";
      style += '<link async rel="stylesheet" type="text/css" href="/css/conteudo.min.css">';
      style += '<link async rel="stylesheet" type="text/css" href="/css/pagina.min.css">';
      style += '<link async rel="stylesheet" type="text/css" href="/css/hilight.css">';
      script += '<script defer src="/js/aprovacao.js"></script>';
      script += '<script defer src="/js-cache/hilight-2.js"></script>';
      style += '<link async rel="stylesheet" type="text/css" href="/css/pergunta.css">';
      script += '<script defer src="/js-cache/pergunta-2.js"></script>';
      script += '<script defer src="/js/conteudo.js"></script>';
    }
    res.send(`
      <!DOCTYPE html>
      <html lang="pt-br" ${schema} >
        <head>
          <title>${titulo}</title>
          <meta charset="utf-8"><meta http-equiv="Content-Language" content="pt-br">
          <meta name="robots" content="${indexing}"><meta name="googlebot" content="${indexing}">
          <meta name="description" content="${description}">
          <meta name="author" content="Tiago Jardim">
          <meta name="copyright" content="(c) 2018 Guia desenvolvedor">	
          <meta name="google-site-verification" content="xZHQJyeiCyglwwCIB4n9Uuc845s-2aqiKNvfd13sgAw" />
          <meta name="distribution" content="global">
          <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
          <link rel="shortcut icon" href="/favicon.ico">
          ${schema_img}
          <meta property="og:url" content='https://www.guiadesenvolvedor.com${req.url}'>
          <meta property="og:type" content="website">
          <meta property="og:title" itemprop="name" content="${titulo}">
          <meta property="og:description" itemprop="description" content="${description}">
          <meta name="google-signin-client_id" content="1058839646981-9dumm6h1tdosk1cugjkt1n7s9ajbonpm.apps.googleusercontent.com">
          ${style}
          <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
        </head>
        <body>
          <div id="app">${markup}</div>
          <script>
          function getCookie(cname) {
            var name = cname + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            for(var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }
        
        function RetornaUsuario(){
            var usuario = getCookie("usuario");
            if(usuario != "")
                return JSON.parse(usuario);
            return null;
        }
          </script>
          <script src="/js-cache/bundle-13.js" defer></script>
          <script src="https://apis.google.com/js/platform.js?onload=init" async defer></script>
          <script defer src="/js-cache/js.js"></script>
          
          ${script}
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          <script>
               (adsbygoogle = window.adsbygoogle || []).push({
                    google_ad_client: "ca-pub-8019971282281713",
                    enable_page_level_ads: true
               });
          </script>
          <!-- Global site tag (gtag.js) - Google Analytics -->
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-127383120-1"></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-127383120-1');
          </script>
          </body>
      </html>
    `)
  }).catch(next)
  } catch (e) {
    res.status(400).send('Erro ao acessar a página');
  }
})
})

app.listen(port, () => {
  console.log(`Server is listening on port: 5000`)
})

/*
  1) Just get shared App rendering to string on server then taking over on client.
  2) Pass data to <App /> on server. Show diff. Add data to window then pick it up on the client too.
  3) Instead of static data move to dynamic data (github gists)
  4) add in routing.
*/
