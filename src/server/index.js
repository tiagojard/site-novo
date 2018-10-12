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
      //description = data.description;
    }

    /*
    
     <link rel="stylesheet" type="text/css" href="/css/style-topo.css">
          <link rel="stylesheet" type="text/css" href="/css/pagina.css">
          <link rel="stylesheet" type="text/css" href="/css/autocomplete.css">
          <link rel="stylesheet" type="text/css" href="/css/home.css">
    
    <script src="/js/autocomplete.js" defer></script>
    */

    res.send(`
      <!DOCTYPE html>
      <html lang="pt-br">
        <head>
          <title>${titulo}</title>
          <meta charset="utf-8"><meta http-equiv="Content-Language" content="pt-br">
          <meta name="robots" content="index, follow">
          <meta name="description" content="${description}">
          <meta name="keywords" content="HTML,CSS,XML,JavaScript">
          <meta name="author" content="Tiago Jardim">
          <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
          <link rel="stylesheet" type="text/css" href="/css/style.css">
         
          <script src="/bundle.js" defer></script>
          
          <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          <script>
            (adsbygoogle = window.adsbygoogle || []).push({
              google_ad_client: "ca-pub-9476507678736435",
              enable_page_level_ads: true
            });
          </script>
          <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
        </head>

        <body>
          <div id="app">${markup}</div>
          <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
          <script src="/js/js.js" defer></script>
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
