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

    var style = '<link rel="stylesheet" type="text/css" href="/css/style.min.css">';

    if(req.url == "/"){
      style += '<link rel="stylesheet" type="text/css" href="/css/home.min.css">';
    }else{
      style += '<link rel="stylesheet" type="text/css" href="/css/pagina.min.css">';
    }
    
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
