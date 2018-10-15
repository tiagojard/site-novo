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
const compress = require('compression');
app.use(compress())
app.use(cors())
app.use(express.static("public"))

app.get("*", (req, res, next) => {
  
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

    var titulo = "";
    var description = "";
    if(data != undefined){
      titulo = (data.titulo != "" ?  data.titulo + " - ": "")+ "Guia desenvolvedor";
      description = data.description;
    }

    var style = "";//'<link rel="stylesheet" type="text/css" href="/css/style.min.css">';

    if(req.url == "/"){
      style += '<link async rel="stylesheet" type="text/css" href="/css/home.min.css">';
    }else{
      style += '<link async rel="stylesheet" type="text/css" href="/css/pagina.min.css">';
    }
    
    const styleInLine = 'body{margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;color:#333;font-size:15px}.conteiner-topo{width:100%;top:0;z-index:1}.topo{position:fixed;width:100%;height:60px;background-color:#4e5682;border-bottom:solid #d06363 2px;z-index:1;top:0}.topo-logo{width:10%;height:50px;float:left;margin:5px;margin-left:20px}.logo{width:35px;margin:6px}.topo-busca{width:85%;height:45px;margin-top:15px;float:left}.topo-busca-nome-site{display:none;font-size:20px;margin:5px;color:white;font-weight:500}.topo-busca-input{margin:auto;width:100%;height:30px;padding-left:10px;border-radius:5px;outline:none;border:0;background-color:#3a4061;color:white}.topo-busca-input:focus{background-color:white;color:#333}.topo-busca-search-icon{float:right;display:none;margin-top:-28px;margin-right:10px}.topo-busca-mobile{position:absolute;right:0;width:0;height:100%;-webkit-transition:width 2s,height 2s;transition:width 0.7s,height 0.7s;background-color:#fff;border-left:solid #c7c7c7 1px;z-index:2;top:0}.result-mobile{border-top:solid #e2e2e2 1px}.topo-busca-mobile-ativo{background-color:#fff;width:100%;height:100%;position:fixed}.topo-busca-arrow-icon{width:5%;float:left;margin-top:11px;margin-left:5px}.topo-busca-input-mobile{background-color:#f1f1f1;width:78%;height:35px;font-size:20px;border:0;outline:none;display:none;font-weight:200;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif}.limpar-input-mobile{display:none;position:absolute;right:13px;top:11px}.barra-topo{background-color:#f1f1f1}@media only screen and (max-width:1292px){.busca{width:32%!important;margin-left:25%!important}}@media only screen and (max-width:1152px){.busca{width:32%!important;margin-left:23%!important}}@media only screen and (max-width:1102px){.busca{width:40%!important;margin-left:23%!important}}@media only screen and (max-width:744px){.anuncio-topo,.anuncio-esquerdo{display:none}.topo-busca-search-icon{display:block}.topo-busca-input{display:none}.topo-logo{width:40px;height:40px;margin-left:5px}.topo-busca{margin-top:5px;height:40px}.topo{height:50px}.topo-busca-nome-site{display:inline-flex}.logo{width:23px;margin:8px}}@media only screen and (max-width:1294px){.topo-busca{width:92%!important}}@media only screen and (max-width:1292px){.topo-busca{width:85%!important}.topo-busca-nome-site{font-size:19px}}@media only screen and (max-width:744px){.topo-busca{width:92%!important}}@media only screen and (max-width:650px){.topo-busca{width:91%!important}}@media only screen and (max-width:600px){.topo-busca-search-icon{display:block}.topo-busca-input{display:none}.topo-logo{width:40px;height:40px;margin-left:5px}.topo-busca{margin-top:5px;height:40px;width:90%!important}.topo{height:50px}.topo-busca-nome-site{display:inline-flex}.logo{width:23px;margin:8px}}@media only screen and (max-width:518px){.topo-busca{width:87%!important}}@media only screen and (max-width:384px){.topo-busca{width:84%!important}}.corpo-pagina{top:70px;position:relative}.rodape{background-color:#2f2f2f;width:100%;height:35px;display:inline-block;margin:0 0 -5px 0;text-align:center;color:#fff;padding-top:13px;margin-top:100px}.anuncio-topo{height:90px;width:728px;margin:auto}.anuncio-esquerdo{width:160px;height:600px;margin-top:10px;float:left}.autocomplete-items .resultado:hover{background-color:#e7e7e8}.img-resultado{width:60px;float:left;height:60px}.img-resultado img{width:33px;margin-top:5px;margin-left:10px}.resultado{display:inline-block;width:100%;cursor:pointer;padding-top:10px;border-bottom:solid #e0e0e0 1px}.pesquisa-resultado{float:left;width:75%;color:black}.pesquisa-assunto{float:left;width:75%;color:red}.busca{margin-left:30%;width:30%}.input-busca{width:100%;height:30px;padding-left:10px;border-radius:5px;outline:none;border:0;background-color:#24292e;color:white}.input-busca:focus{background-color:white;color:#333}.hr{border:0;border-top:1px dotted #ccc}.autocomplete{position:relative;display:inline-block}.autocomplete-items{position:relative;border:1px solid #d4d4d4;border-top:none;z-index:99;width:102.4%;margin-top:-4px;background-color:#fff;border-bottom-left-radius:5px;border-bottom-right-radius:5px}.autocomplete-active{background-color:DodgerBlue!important;color:#fff}.result-mobile ul li a{text-decoration:none;color:#333;font-size:23px;line-height:39px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;font-weight:100}.result-mobile ul li{list-style:none}.result-mobile ul{padding-left:10px}';

    /*
     <script defer  src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
     <link rel="stylesheet" type="text/css" href="/css/style-topo.css">
          <link rel="stylesheet" type="text/css" href="/css/pagina.css">
          <link rel="stylesheet" type="text/css" href="/css/autocomplete.css">
          <link rel="stylesheet" type="text/css" href="/css/home.css">
    
    <script defer src="/js/autocomplete.js"></script>
    */

    res.send(`
      <!DOCTYPE html>
      <html lang="pt-br">
        <head>
          <title>${titulo}</title>
          <meta charset="utf-8"><meta http-equiv="Content-Language" content="pt-br">
          <meta name="robots" content="index, follow"><meta name="googlebot" content="index, follow">
          <meta name="description" content="${description}">
          <meta name="author" content="Tiago Jardim">
          <meta name="copyright" content="(c) 2018 Guia desenvolvedor">	
          <meta name="google-site-verification" content="xZHQJyeiCyglwwCIB4n9Uuc845s-2aqiKNvfd13sgAw" />
          <meta name="distribution" content="global">
          <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
          <link rel="shortcut icon" href="/favicon.ico">

          <meta property="og:url" content='https://guiadesenvolvedor.herokuapp.com${req.url}'>
          <meta property="og:type" content="website">
          <meta property="og:title" content="${titulo}">
          <meta property="og:description" content="${description}">

          <style>${styleInLine}</style>

          ${style}
         

          <script src="/bundle.js" defer></script>
          
          <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          <script>
            (adsbygoogle = window.adsbygoogle || []).push({
              google_ad_client: "ca-pub-9476507678736435",
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


          <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
        </head>

        <body>
          <div id="app">${markup}</div>
          <script defer src="/js/js.js"></script>
          </body>
      </html>
    `)
  }).catch(next)
})

app.listen(port, () => {
  console.log(`Server is listening on port: 3000`)
})

/*
  1) Just get shared App rendering to string on server then taking over on client.
  2) Pass data to <App /> on server. Show diff. Add data to window then pick it up on the client too.
  3) Instead of static data move to dynamic data (github gists)
  4) add in routing.
*/
