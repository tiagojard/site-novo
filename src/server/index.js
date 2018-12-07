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
      titulo = data.title +" - Guia desenvolvedor";
      description = data.description;
    }
    var indexing = "index, follow";
    var style = '<link rel="stylesheet" type="text/css" href="/css/style.css">';
    var styleInLine = "";
    if(req.url == "/"){
      titulo = "Guia desenvolvedor";
      description = "Com o guia do desenvolvedor você aprende a programar react js, c#, javaScript, jQuery, sql server, seo, html, e css. Aqui você encontra melhores cursos online de programação.";
      //style += '<link async rel="stylesheet" type="text/css" href="/css/home.min.css">';
      styleInLine = '.introducao{background-image:linear-gradient(-90deg, #9984a2, #84bec5);margin-top:-46px;padding-bottom:45px;color:#fff;padding-left:15%;margin-bottom:10px}.introducao h1{padding-top:31px;font-size:45px;text-shadow:2px 0 0 #756363}.btn-curso,.btn-intro{padding:7px 20px;border-radius:5px;font-weight:500;text-decoration:none}.introducao h2{margin-top:-33px;color:#3a4061;font-weight:500;font-size:24px;text-shadow:2px 0 0 #389aa7}.intro-conhecimento{max-width:762px}.btn-intro{background-color:#e91e63;color:#fff}.btn-intro:hover{background-color:#fff;color:#e91e63}.btn-curso{background-color:#3a4061;color:#fff}.btn-curso:hover{color:#3a4061;background-color:#fff}.introducao h3{font-weight:200}.introducao div{width:45%;position:relative;min-width:400px;display:inline-table;margin-right:35px;margin-bottom:20px}.conteudo-home{width:70%;min-height:400px;margin:10px 10px 10px 40px;float:left;border-top:1px dotted #ccc}.conteudo-home a{text-decoration:none;color:#0366d6}.conteudo-home h2{font-size:19px}.conteudo-home-container{margin:10px;display:flex}.conteudo-home-img{width:30px}.hr-margin{border:0;border-top:1px dotted #ccc;margin-left:20px;margin-right:20px}.assunto{color:#4c4b7b!important}.titulo-home{margin-bottom:0;margin-top:5px;color:#000;font-weight:400;font-size:20px}.titulo-home h1{font-size:20px;display:inline}.conteudo-home-detalhe h2{font-size:20px;font-weight:400;display:inline-block;margin:0}.conteudo-home-detalhe h3,h4{margin-top:0;font-size:15px;margin-bottom:5px;font-weight:400;display:inline-block}.img-destaque,.menu-esquerdo{margin-top:10px}.conteudo-home-detalhe{width:80%;height:auto;float:right;padding-left:10px}.anuncio-direito,.destaque-direito-home img{height:600px;width:160px}.anuncio-direito{float:right;margin-top:10px;margin-right:20px}.conteudo-home-info{color:#999}.container-esquerdo{width:160px;height:auto;float:left}.menu-esquerdo{height:200px;padding-left:20px;width:160px}.menu-esquerdo a{text-decoration:none;color:#7d7d7d}.menu-esquerdo a:hover{color:#333}.menu-esquerdo-titulo{border-bottom:1px dotted #c3c4c5;padding-bottom:7px;font-weight:400;top:-5px;position:relative}.menu-esquerdo ul{list-style:none;padding-left:0;line-height:25px;margin-top:0}@media only screen and (max-width:1316px){.conteudo-home{width:68%!important}}@media only screen and (max-width:1287px){.item-produto{width:47%!important}.item-descricao{min-height:244px!important}.conteudo-home{width:67%!important}}@media only screen and (max-width:1277px){.item-produto{margin:13px!important}.item-descricao{min-height:374px!important}.conteudo-home{width:66%!important}}@media only screen and (max-width:1287px){.item-produto{margin:10px!important}}@media only screen and (max-width:1164px){.conteudo-home{width:65%!important}}@media only screen and (max-width:1132px){.conteudo-home{width:62%!important}}@media only screen and (max-width:1043px){.conteudo-home{width:60%!important}.introducao div{width:auto}}@media only screen and (max-width:992px){.conteudo-home{width:57%!important}}@media only screen and (max-width:923px){.conteudo-home{width:55%!important}}@media only screen and (max-width:918px){.item-produto{width:46%!important}.conteudo-home{width:74%!important}.anuncio-direito{display:none}}@media only screen and (max-width:829px){.conteudo-home{width:72%!important}}@media only screen and (max-width:796px){.conteudo-home{width:71%!important}.introducao{margin-top:-56px}}@media only screen and (max-width:710px){.menu-esquerdo{display:none}.conteudo-home{width:90%!important}}@media only screen and (max-width:695px){.item-produto{width:95%!important}.conteudo-home{margin-left:10px}.item-descricao{min-height:233px!important}.introducao div{margin-right:0;min-width:350px}.introducao h3{max-width:87%}}@media only screen and (max-width:600px){.conteudo-home-img,.img-destaque{width:35px;margin:5px 0 0}.conteudo-home{width:95%}.anuncio-direito,.container-esquerdo{display:none}.introducao{padding-left:25px}.introducao h1{font-size:30px}.introducao h2{margin-top:-23px;font-size:18px}}.item-produto{margin:6px;float:left;width:23.5%;border-radius:3px;box-shadow:0 2px 2px 0 rgba(0,0,0,.16),0 0 0 1px rgba(0,0,0,.08)}.item-produto p{margin:10px;font-size:13px;color:#0366d6;line-height:19px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;max-height:55px;-webkit-line-clamp:3;-webkit-box-orient:vertical}.item-produto span{position:relative;top:5px;margin-left:10px;font-size:13px;color:#000;font-weight:500}.item-produto ul{font-size:13px;color:#000;padding-left:25px}.item-produto a{text-decoration:none}.item-produto a:hover p{text-decoration:underline;color:#333}.item-imagem{border-top-left-radius:4px;border-top-right-radius:4px;text-align:center}.item-descricao{padding:5px;min-height:250px}.titulo-produto strong{color:#000;font-size:35px;font-weight:400}.anuncio-conteudo{margin-left:20px;width:96%}';
    }
    else if(req.url.indexOf("/pagina/") > -1){
        //style += '<link async rel="stylesheet" type="text/css" href="/css/pagina.min.css">';
        styleInLine = 'pre.codigo{overflow-x:scroll}.conteudo p code{background-color:#d9dbe8}.conteudo a{color:red}.titulo-produto{color:#6d6d6d!important;font-weight:400}.titulo-produto strong{color:#000;font-size:35px;font-weight:400}.conteudo{width:61%;min-height:400px;margin-top:10px;margin-left:2%;margin-right:1%;float:left;border-top:1px dotted #ccc}@media only screen and (max-width:1320px){.conteudo{width:59%}}@media only screen and (max-width:1281px){.conteudo{width:58%}}@media only screen and (max-width:1249px){.conteudo{width:57%}}@media only screen and (max-width:1240px){.conteudo{width:56%}}@media only screen and (max-width:1155px){.conteudo{width:54%}}@media only screen and (max-width:1108px){.conteudo{width:52%}}@media only screen and (max-width:1065px){.conteudo{width:50%}}@media only screen and (max-width:1049px){.conteudo{width:49%}}@media only screen and (max-width:996px){.conteudo{width:46%}}@media only screen and (max-width:927px){.conteudo{width:75%}.destaque-direito{border-left:0!important;display:inline-block;margin:2%!important;width:80%!important}.anuncio-direito{width:95%;height:auto;margin:auto}}@media only screen and (max-width:835px){.conteudo{width:72%}.destaque-direito{width:78%!important}}@media only screen and (max-width:744px){.destaque-direito{width:99%!important}.conteudo{width:96%}}@media only screen and (max-width:1225px){.item-produto{width:47%!important}}@media only screen and (max-width:1107px){.item-produto{width:45%!important}}@media only screen and (max-width:600px){.conteudo{width:95%}.destaque-direito{width:95%!important}.item-destaque{padding:10px!important}.hr-destaque{width:100%!important;margin-left:0!important}.titulo-destaque{width:96%!important;margin-left:0!important;font-weight:600!important}.titulo-produto strong{font-size:27px}.conteudo h1{font-size:27px!important}.item-produto{width:95%!important}.item-descricao{min-height:200px!important}}.conteudo p{color:#000;line-height:1.7;font-size:17px}.conteudo h1{font-size:30px;color:#000;margin-top:5px;margin-bottom:0}.conteudo h2{font-size:25px;color:#000}.sub-titulo{color:#6d6d6d!important;font-weight:300;font-size:22px!important}.codigo{background-color:#2e3152;padding:10px;border-radius:3px}.destaque-direito{width:250px;margin-right:30px;float:right}.item-destaque{min-height:100px;padding-left:20px;padding-right:2px}.item-destaque a{color:#0366d6;text-decoration:none;font-size:13px}.item-destaque a:hover{color:#333;text-decoration:underline}.item-produto a,.item-relacionado a{text-decoration:none}.titulo-destaque{border-bottom:1px dotted #c3c4c5;width:88%;font-size:10px}.titulo-destaque h2{font-weight:400;margin-bottom:5px}.hr-destaque{width:95%;margin-left:5%;border:.7px dotted #c3c4c5}.anuncios-conteudo-direito,.anuncios-conteudo-esquerdo{width:40%;height:250px;display:inline-block;margin:5%}.item-destaque-anuncio{width:200px;height:200px;margin-left:5%}.img-pagina-destaque{margin-right:20px;margin-bottom:5px;float:left;vertical-align:top}.item-relacionado{display:inline-block;width:200px;height:auto;margin:10px}.item-relacionado p:hover{color:#333}.item-relacionado p{font-size:13px!important;color:#0366d6}.item-relacionado a:hover{color:#333}.item-relacionado-img{width:200px;height:120px}.titulo-relacionado{border-top:1px solid #e1e4e8;border-left:2px solid #0366d6;border-bottom:1px solid #e1e4e8;padding:7px;font-weight:500}.item-produto{margin:6px;float:left;width:23.5%;border-radius:3px;box-shadow:0 2px 2px 0 rgba(0,0,0,.16),0 0 0 1px rgba(0,0,0,.08)}.item-produto p{margin:10px;font-size:13px;color:#0366d6;line-height:19px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;max-height:55px;-webkit-line-clamp:3;-webkit-box-orient:vertical}.item-produto span{position:relative;top:5px;margin-left:10px;font-size:13px;color:#000;font-weight:500}.item-produto ul{font-size:13px;color:#000;padding-left:25px}.item-produto a:hover p{text-decoration:underline;color:#333}.item-imagem{border-top-left-radius:4px;border-top-right-radius:4px;text-align:center}.item-descricao{padding:5px;min-height:250px}.tag{display:inline-block}.tag a{text-decoration:none;color:#4c4b7b!important}.anuncio-direito{width:250px;height:auto;margin-top:10px}';
        if(data == null){
          indexing = "noindex";
          res.status(404);
        }
    }else if(req.url.indexOf("/assunto/") > -1){
      //style += '<link async rel="stylesheet" type="text/css" href="/css/home.min.css">';
      styleInLine = '.introducao{background-image:linear-gradient(-90deg, #9984a2, #84bec5);margin-top:-46px;padding-bottom:45px;color:#fff;padding-left:15%;margin-bottom:10px}.introducao h1{padding-top:31px;font-size:45px;text-shadow:2px 0 0 #756363}.btn-curso,.btn-intro{padding:7px 20px;border-radius:5px;font-weight:500;text-decoration:none}.introducao h2{margin-top:-33px;color:#3a4061;font-weight:500;font-size:24px;text-shadow:2px 0 0 #389aa7}.intro-conhecimento{max-width:762px}.btn-intro{background-color:#e91e63;color:#fff}.btn-intro:hover{background-color:#fff;color:#e91e63}.btn-curso{background-color:#3a4061;color:#fff}.btn-curso:hover{color:#3a4061;background-color:#fff}.introducao h3{font-weight:200}.introducao div{width:45%;position:relative;min-width:400px;display:inline-table;margin-right:35px;margin-bottom:20px}.conteudo-home{width:70%;min-height:400px;margin:10px 10px 10px 40px;float:left;border-top:1px dotted #ccc}.conteudo-home a{text-decoration:none;color:#0366d6}.conteudo-home h2{font-size:19px}.conteudo-home-container{margin:10px;display:flex}.conteudo-home-img{width:30px}.hr-margin{border:0;border-top:1px dotted #ccc;margin-left:20px;margin-right:20px}.assunto{color:#4c4b7b!important}.titulo-home{margin-bottom:0;margin-top:5px;color:#000;font-weight:400;font-size:20px}.titulo-home h1{font-size:20px;display:inline}.conteudo-home-detalhe h2{font-size:20px;font-weight:400;display:inline-block;margin:0}.conteudo-home-detalhe h3,h4{margin-top:0;font-size:15px;margin-bottom:5px;font-weight:400;display:inline-block}.img-destaque,.menu-esquerdo{margin-top:10px}.conteudo-home-detalhe{width:80%;height:auto;float:right;padding-left:10px}.anuncio-direito,.destaque-direito-home img{height:600px;width:160px}.anuncio-direito{float:right;margin-top:10px;margin-right:20px}.conteudo-home-info{color:#999}.container-esquerdo{width:160px;height:auto;float:left}.menu-esquerdo{height:200px;padding-left:20px;width:160px}.menu-esquerdo a{text-decoration:none;color:#7d7d7d}.menu-esquerdo a:hover{color:#333}.menu-esquerdo-titulo{border-bottom:1px dotted #c3c4c5;padding-bottom:7px;font-weight:400;top:-5px;position:relative}.menu-esquerdo ul{list-style:none;padding-left:0;line-height:25px;margin-top:0}@media only screen and (max-width:1316px){.conteudo-home{width:68%!important}}@media only screen and (max-width:1287px){.item-produto{width:47%!important}.item-descricao{min-height:244px!important}.conteudo-home{width:67%!important}}@media only screen and (max-width:1277px){.item-produto{margin:13px!important}.item-descricao{min-height:374px!important}.conteudo-home{width:66%!important}}@media only screen and (max-width:1287px){.item-produto{margin:10px!important}}@media only screen and (max-width:1164px){.conteudo-home{width:65%!important}}@media only screen and (max-width:1132px){.conteudo-home{width:62%!important}}@media only screen and (max-width:1043px){.conteudo-home{width:60%!important}.introducao div{width:auto}}@media only screen and (max-width:992px){.conteudo-home{width:57%!important}}@media only screen and (max-width:923px){.conteudo-home{width:55%!important}}@media only screen and (max-width:918px){.item-produto{width:46%!important}.conteudo-home{width:74%!important}.anuncio-direito{display:none}}@media only screen and (max-width:829px){.conteudo-home{width:72%!important}}@media only screen and (max-width:796px){.conteudo-home{width:71%!important}.introducao{margin-top:-56px}}@media only screen and (max-width:710px){.menu-esquerdo{display:none}.conteudo-home{width:90%!important}}@media only screen and (max-width:695px){.item-produto{width:95%!important}.conteudo-home{margin-left:10px}.item-descricao{min-height:233px!important}.introducao div{margin-right:0;min-width:350px}.introducao h3{max-width:87%}}@media only screen and (max-width:600px){.conteudo-home-img,.img-destaque{width:35px;margin:5px 0 0}.conteudo-home{width:95%}.anuncio-direito,.container-esquerdo{display:none}.introducao{padding-left:25px}.introducao h1{font-size:30px}.introducao h2{margin-top:-23px;font-size:18px}}.item-produto{margin:6px;float:left;width:23.5%;border-radius:3px;box-shadow:0 2px 2px 0 rgba(0,0,0,.16),0 0 0 1px rgba(0,0,0,.08)}.item-produto p{margin:10px;font-size:13px;color:#0366d6;line-height:19px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;max-height:55px;-webkit-line-clamp:3;-webkit-box-orient:vertical}.item-produto span{position:relative;top:5px;margin-left:10px;font-size:13px;color:#000;font-weight:500}.item-produto ul{font-size:13px;color:#000;padding-left:25px}.item-produto a{text-decoration:none}.item-produto a:hover p{text-decoration:underline;color:#333}.item-imagem{border-top-left-radius:4px;border-top-right-radius:4px;text-align:center}.item-descricao{padding:5px;min-height:250px}.titulo-produto strong{color:#000;font-size:35px;font-weight:400}.anuncio-conteudo{margin-left:20px;width:96%}';
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
      styleInLine = '.introducao{background-image:linear-gradient(-90deg, #9984a2, #84bec5);margin-top:-46px;padding-bottom:45px;color:#fff;padding-left:15%;margin-bottom:10px}.introducao h1{padding-top:31px;font-size:45px;text-shadow:2px 0 0 #756363}.btn-curso,.btn-intro{padding:7px 20px;border-radius:5px;font-weight:500;text-decoration:none}.introducao h2{margin-top:-33px;color:#3a4061;font-weight:500;font-size:24px;text-shadow:2px 0 0 #389aa7}.intro-conhecimento{max-width:762px}.btn-intro{background-color:#e91e63;color:#fff}.btn-intro:hover{background-color:#fff;color:#e91e63}.btn-curso{background-color:#3a4061;color:#fff}.btn-curso:hover{color:#3a4061;background-color:#fff}.introducao h3{font-weight:200}.introducao div{width:45%;position:relative;min-width:400px;display:inline-table;margin-right:35px;margin-bottom:20px}.conteudo-home{width:70%;min-height:400px;margin:10px 10px 10px 40px;float:left;border-top:1px dotted #ccc}.conteudo-home a{text-decoration:none;color:#0366d6}.conteudo-home h2{font-size:19px}.conteudo-home-container{margin:10px;display:flex}.conteudo-home-img{width:30px}.hr-margin{border:0;border-top:1px dotted #ccc;margin-left:20px;margin-right:20px}.assunto{color:#4c4b7b!important}.titulo-home{margin-bottom:0;margin-top:5px;color:#000;font-weight:400;font-size:20px}.titulo-home h1{font-size:20px;display:inline}.conteudo-home-detalhe h2{font-size:20px;font-weight:400;display:inline-block;margin:0}.conteudo-home-detalhe h3,h4{margin-top:0;font-size:15px;margin-bottom:5px;font-weight:400;display:inline-block}.img-destaque,.menu-esquerdo{margin-top:10px}.conteudo-home-detalhe{width:80%;height:auto;float:right;padding-left:10px}.anuncio-direito,.destaque-direito-home img{height:600px;width:160px}.anuncio-direito{float:right;margin-top:10px;margin-right:20px}.conteudo-home-info{color:#999}.container-esquerdo{width:160px;height:auto;float:left}.menu-esquerdo{height:200px;padding-left:20px;width:160px}.menu-esquerdo a{text-decoration:none;color:#7d7d7d}.menu-esquerdo a:hover{color:#333}.menu-esquerdo-titulo{border-bottom:1px dotted #c3c4c5;padding-bottom:7px;font-weight:400;top:-5px;position:relative}.menu-esquerdo ul{list-style:none;padding-left:0;line-height:25px;margin-top:0}@media only screen and (max-width:1316px){.conteudo-home{width:68%!important}}@media only screen and (max-width:1287px){.item-produto{width:47%!important}.item-descricao{min-height:244px!important}.conteudo-home{width:67%!important}}@media only screen and (max-width:1277px){.item-produto{margin:13px!important}.item-descricao{min-height:374px!important}.conteudo-home{width:66%!important}}@media only screen and (max-width:1287px){.item-produto{margin:10px!important}}@media only screen and (max-width:1164px){.conteudo-home{width:65%!important}}@media only screen and (max-width:1132px){.conteudo-home{width:62%!important}}@media only screen and (max-width:1043px){.conteudo-home{width:60%!important}.introducao div{width:auto}}@media only screen and (max-width:992px){.conteudo-home{width:57%!important}}@media only screen and (max-width:923px){.conteudo-home{width:55%!important}}@media only screen and (max-width:918px){.item-produto{width:46%!important}.conteudo-home{width:74%!important}.anuncio-direito{display:none}}@media only screen and (max-width:829px){.conteudo-home{width:72%!important}}@media only screen and (max-width:796px){.conteudo-home{width:71%!important}.introducao{margin-top:-56px}}@media only screen and (max-width:710px){.menu-esquerdo{display:none}.conteudo-home{width:90%!important}}@media only screen and (max-width:695px){.item-produto{width:95%!important}.conteudo-home{margin-left:10px}.item-descricao{min-height:233px!important}.introducao div{margin-right:0;min-width:350px}.introducao h3{max-width:87%}}@media only screen and (max-width:600px){.conteudo-home-img,.img-destaque{width:35px;margin:5px 0 0}.conteudo-home{width:95%}.anuncio-direito,.container-esquerdo{display:none}.introducao{padding-left:25px}.introducao h1{font-size:30px}.introducao h2{margin-top:-23px;font-size:18px}}.item-produto{margin:6px;float:left;width:23.5%;border-radius:3px;box-shadow:0 2px 2px 0 rgba(0,0,0,.16),0 0 0 1px rgba(0,0,0,.08)}.item-produto p{margin:10px;font-size:13px;color:#0366d6;line-height:19px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;max-height:55px;-webkit-line-clamp:3;-webkit-box-orient:vertical}.item-produto span{position:relative;top:5px;margin-left:10px;font-size:13px;color:#000;font-weight:500}.item-produto ul{font-size:13px;color:#000;padding-left:25px}.item-produto a{text-decoration:none}.item-produto a:hover p{text-decoration:underline;color:#333}.item-imagem{border-top-left-radius:4px;border-top-right-radius:4px;text-align:center}.item-descricao{padding:5px;min-height:250px}.titulo-produto strong{color:#000;font-size:35px;font-weight:400}.anuncio-conteudo{margin-left:20px;width:96%}';
      //style += '<link async rel="stylesheet" type="text/css" href="/css/home.min.css">';
      indexing = "noindex";
    } else if(req.url.indexOf("/curso") > -1){
      titulo = "Cursos - Guia desenvolvedor";
      description = "Com o guia do desenvolvedor você encontra os melhores cursos de programação, para aprender programar e se destacar no mercado de trabalho. Cursos Online e ebooks";
      style += '<link async rel="stylesheet" type="text/css" href="/css/curso.min.css">';
      style += '<link async rel="stylesheet" type="text/css" href="/css/pagina.min.css">';
    } else if(req.url == "/entrar"){
      style += '<link async rel="stylesheet" type="text/css" href="/css/entrar.css">';
    }
    else {
      titulo = "Guia desenvolvedor";
      description = "Com o guia do desenvolvedor você aprende a programar react js, c#, javaScript e jQuery";
      indexing = "noindex";
      style += '<link async rel="stylesheet" type="text/css" href="/css/conteudo.min.css">';
      style += '<link async rel="stylesheet" type="text/css" href="/css/pagina.min.css">';
      script += '<script defer src="/js/codeColor.min.js"></script>';
      script += '<script defer src="/js/aprovacao.js"></script>';
    }
    
    styleInLine += "";//'.result-mobile ul li a,.topo-busca-input-mobile,body{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif}.menu li,.result-mobile ul li,.rodape ul{list-style:none}body{margin:0;color:#333;font-size:15px}.conteiner-topo{width:100%;top:0;z-index:1}.topo-hide{top:-60px!important}.topo{position:fixed;width:100%;height:60px;background-color:#4e5682;z-index:1;top:0;transition:top .3s}.topo-logo{width:10%;height:50px;float:left;margin:5px 5px 5px 20px}.logo{width:35px;margin:6px}.topo-busca{width:85%;height:45px;margin-top:15px;float:left}.topo-busca-nome-site{display:none;font-size:20px;margin:5px;color:#fff;font-weight:500}.topo-busca-input{margin:auto;width:100%;height:30px;padding-left:10px;border-radius:5px;outline:0;border:0;background-color:#3a4061;color:#fff}.topo-busca-input:focus{background-color:#fff;color:#333}.topo-busca-search-icon{float:right;display:none;margin-top:-28px;margin-right:10px}.topo-busca-mobile{position:absolute;right:0;width:0;height:100%;-webkit-transition:width 2s,height 2s;transition:width .7s,height .7s;background-color:#fff;border-left:solid #c7c7c7 1px;z-index:2;top:0}.result-mobile{border-top:solid #e2e2e2 1px}.topo-busca-mobile-ativo{background-color:#fff;width:100%;height:100%;position:fixed}.barra-topo,.topo-busca-input-mobile{background-color:#f1f1f1}.topo-busca-arrow-icon{width:5%;float:left;margin-top:11px;margin-left:5px}.topo-busca-input-mobile{padding-left:5px;width:78%;height:35px;font-size:20px;border:0;outline:0;display:none;font-weight:200}.limpar-input-mobile{display:none;position:absolute;right:13px;top:11px}@media only screen and (max-width:1292px){.busca{width:32%!important;margin-left:25%!important}}@media only screen and (max-width:1152px){.busca{width:32%!important;margin-left:23%!important}}@media only screen and (max-width:1102px){.busca{width:40%!important;margin-left:23%!important}.logo-nome{font-size:16px!important}}@media only screen and (max-width:745px){.logo-nome{font-size:16px!important}.menu{margin-top:50px!important}}@media only screen and (max-width:744px){.topo-busca{width:92%!important;margin-top:5px;height:40px}.topo-hide{top:-50px!important}.anuncio-esquerdo{display:none}.topo-busca-search-icon{display:block}.topo-busca-input{display:none}.topo-logo{width:40px;height:40px;margin-left:5px}.topo{height:50px}.topo-busca-nome-site{display:inline-flex}.logo{width:23px;margin:8px}.logo-nome{display:none}}@media only screen and (max-width:1294px){.topo-busca{width:92%!important}}@media only screen and (max-width:1292px){.topo-busca{width:85%!important}.topo-busca-nome-site{font-size:19px}}@media only screen and (max-width:650px){.topo-busca{width:91%!important}}@media only screen and (max-width:600px){.topo-busca-search-icon{display:block}.topo-busca-input{display:none}.topo-logo{width:40px;height:40px;margin-left:5px}.topo-busca{margin-top:5px;height:40px;width:90%!important}.topo{height:50px}.topo-busca-nome-site{display:inline-flex}.logo-nome{display:none}.logo{width:23px;margin:8px}.anuncio-topo{max-width:250px!important}}@media only screen and (max-width:518px){.topo-busca{width:87%!important}}@media only screen and (max-width:384px){.topo-busca{width:84%!important}}.corpo-pagina{top:102px;position:relative}.rodape{background-color:#4e5682;width:100%;display:inline-block;margin-top:122px;font-size:14px}.link{display:inline;margin-left:15px;font-weight:500;margin-right:10px}.rodape ul{padding-left:0;display:inline-block;font-weight:400;margin-top:10px;margin-bottom:10px}.rodape li{display:inline;border-left:1px solid rgba(255,255,255,.3);padding:0 11px}.input-busca,.result-mobile ul{padding-left:10px}.rodape a{color:#fff;text-decoration:none}.rodape a:hover{color:#333958}.rodape-info{background-color:#2f2f2f;width:100%;height:35px;text-align:center;color:#fff;padding-top:13px}.anuncio-topo{height:auto;max-width:728px;width:90%;margin:auto}.anuncio-esquerdo{width:160px;height:600px;margin-top:10px;margin-left:20px;float:left}.autocomplete-items .resultado:hover{background-color:#e7e7e8}.img-resultado{width:60px;float:left;height:60px}.img-resultado img{width:33px;margin-top:5px;margin-left:10px}.resultado{display:inline-block;width:100%;cursor:pointer;padding-top:10px;border-bottom:solid #e0e0e0 1px}.pesquisa-resultado{float:left;width:75%;color:#000}.pesquisa-assunto{float:left;width:75%;color:red}.busca{margin-left:30%;width:30%}.input-busca{width:100%;height:30px;border-radius:5px;outline:0;border:0;background-color:#24292e;color:#fff}.input-busca:focus{background-color:#fff;color:#333}.hr{border:0;border-top:1px dotted #ccc}.autocomplete{position:relative;display:inline-block}.autocomplete-items{position:relative;border:1px solid #d4d4d4;border-top:none;z-index:99;width:102.4%;margin-top:-4px;background-color:#fff;border-bottom-left-radius:5px;border-bottom-right-radius:5px}.autocomplete-active{background-color:#1e90ff!important;color:#fff}.result-mobile ul li a{text-decoration:none;color:#333;font-size:23px;line-height:39px;font-weight:100}.logo-nome a,.menu ul li a{color:#ffff;text-decoration:none}a h4{background-color:#a2a7c7;padding-left:7px;padding-right:7px;border-radius:3px;font-weight:400;margin:0}a h4:hover{background-color:#9199d0}.logo-nome{font-size:19px;font-family:sans-serif;position:absolute;margin-top:5px;margin-left:-5%}.menu{background-color:#a85d8a;height:24px;margin-top:60px;border-bottom:solid #d06363 2px}.menu ul{display:inline-flex;margin:3px}.menu li{padding-right:60px}.menu ul li a{font-weight:400}.menu ul li a:hover{color:#4e5682}.dropbtn{color:#ffff;cursor:pointer}.dropbtn-button{color:#24292e;cursor:pointer}.dropdown{position:relative;display:inline-block}.dropdown-content{display:none;position:absolute;background-color:#f9f9f9;min-width:160px;box-shadow:0 8px 16px 0 rgba(0,0,0,.2);z-index:1}.dropdown-content a{color:#000!important;padding:12px 16px;text-decoration:none;display:block}.dropdown-content a:hover{background-color:#f1f1f1}.dropdown:hover .dropdown-content{display:block}.topo-busca-nome-site a{color:#ffff;text-decoration:none}.breadcrumbs{margin-left:-30px;margin-top:-8px;font-size:12px}.breadcrumbs li{display:inline}.breadcrumbs a{margin-right:10px;color:#7d7d7d;text-decoration:none}.breadcrumbs a:hover{text-decoration:underline}.breadcrumbs span{margin-left:10px;color:#7d7d7d}';
    res.send(`
      <!DOCTYPE html>
      <html lang="pt-br">
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
          <meta property="og:url" content='https://www.guiadesenvolvedor.com${req.url}'>
          <meta property="og:type" content="website">
          <meta property="og:title" content="${titulo}">
          <meta property="og:description" content="${description}">
          <meta name="google-signin-client_id" content="1058839646981-9dumm6h1tdosk1cugjkt1n7s9ajbonpm.apps.googleusercontent.com">
          <style>${styleInLine}</style>
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
          <script src="/bundle.js" defer></script>
          <script src="https://apis.google.com/js/platform.js?onload=init" async defer></script>
          <script defer src="/js/js.js"></script>
          
          ${script}
          <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          <script>
            (adsbygoogle = window.adsbygoogle || []).push({
              google_ad_client: "ca-pub-9280026867797270",
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
