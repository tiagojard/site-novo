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

    res.send(`
      <!DOCTYPE html>
      <html lang="pt-br">
        <head>
          <title>Tiago jardim</title>
          <meta charset="utf-8"><meta http-equiv="Content-Language" content="pt-br">
          <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
          <meta name="robots" content="index, follow">
          <script src="/bundle.js" defer></script>
          <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
          <style>
        body{
            margin: 0;
        }
        .topo{
            width: 100%;
            height: 66px;
            background-color:#4e5682;
            border-bottom: solid #d06363 2px;
        }
        .topo-logo{
            width: 10%;
            height: 50px;
            float: left;
            margin: 5px;
            margin-left: 20px;
        }

        .logo{
            width: 35px;
            margin: 10px;
        }

        .topo-busca{
            width: 85%;
            height: 45px;
            margin-top: 20px;
            float: left;
        }
        
        .topo-busca-nome-site{
            display: none;
            font-size: 20px;
            margin: 8px;
        }

        .topo-busca-input{
            margin: auto;
            margin-left: 20%;
            width: 50%;
            height: 30px;
            padding-left: 10px;
            border-radius: 5px;
            outline: none;
            border: 0;
            background-color: #3a4061;
            color: white;
        }

        .topo-busca-input:focus{
            background-color:white;
            color: #333;
        }
        
        .topo-busca-search-icon{
            float: right;
            display: none;
            margin: 5px;
        }

        .topo-busca-mobile{
            position: absolute;
            right: 0;
            width: 0px;
            height: 100%;
            -webkit-transition: width 2s, height 2s; /* For Safari 3.1 to 6.0 */
            transition: width 0.3s, height 0.3s;
            background-color: #ffffff;
        }
        

        .topo-busca-mobile-ativo{
            background-color: #ffffff;
            width: 100%;
            height: 100%;
        }

        .topo-busca-arrow-icon{
            width: 8%;
            margin: 5px;
            float: left;
        }

        .topo-busca-input-mobile{
            width: 88%;
            height: 35px;
            font-size: 20px;
            border: 0;
            outline: none;
        }
        
        .limpar-input-mobile{
            display: none;
            float: right;
            position: relative;
            top: -26px;
            right: 10px;
        }

        @media only screen and (max-width: 600px) {
            body {
                background-color: lightblue;
            }
            .topo-busca-search-icon{
                display: block;
            }
            .topo-busca-input{
                display: none;
            }
            .topo-logo{
                width: 40px;
                height: 40px;
                margin-left: 5px;
            }
            .topo-busca{
                margin-top: 5px;
                height: 40px;
            }
            .topo{
                height: 50px;
            }
            .topo-busca-nome-site{
                display: inline-flex;
            }
            .logo {
                width: 23px;
                margin: 8px;
            }
        }
    </style>
        </head>

        <body>
        <div id="busca-mobile" class="topo-busca-mobile">
        <svg id="topo-busca-arrow-icon" class="topo-busca-arrow-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 31.494 31.494" style="enable-background:new 0 0 31.494 31.494;" xml:space="preserve" width="20px" height="20px">
        <path d="M10.273,5.009c0.444-0.444,1.143-0.444,1.587,0c0.429,0.429,0.429,1.143,0,1.571l-8.047,8.047h26.554  c0.619,0,1.127,0.492,1.127,1.111c0,0.619-0.508,1.127-1.127,1.127H3.813l8.047,8.032c0.429,0.444,0.429,1.159,0,1.587  c-0.444,0.444-1.143,0.444-1.587,0l-9.952-9.952c-0.429-0.429-0.429-1.143,0-1.571L10.273,5.009z" fill="#808080"/>
        </svg>
        <input type="text" id="input-busca-mobile" placeholder="O que você procura?" class="topo-busca-input-mobile" />
        <svg id="limpar-input-mobile" class="limpar-input-mobile" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 51.976 51.976" style="enable-background:new 0 0 51.976 51.976;" xml:space="preserve" width="17px" height="17px"><g><path d="M44.373,7.603c-10.137-10.137-26.632-10.138-36.77,0c-10.138,10.138-10.137,26.632,0,36.77s26.632,10.138,36.77,0   C54.51,34.235,54.51,17.74,44.373,7.603z M36.241,36.241c-0.781,0.781-2.047,0.781-2.828,0l-7.425-7.425l-7.778,7.778   c-0.781,0.781-2.047,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l7.778-7.778l-7.425-7.425c-0.781-0.781-0.781-2.048,0-2.828   c0.781-0.781,2.047-0.781,2.828,0l7.425,7.425l7.071-7.071c0.781-0.781,2.047-0.781,2.828,0c0.781,0.781,0.781,2.047,0,2.828   l-7.071,7.071l7.425,7.425C37.022,34.194,37.022,35.46,36.241,36.241z" fill="#808080"/></svg>
</div>
<div class="topo">
    <div class="topo-logo">
            <svg class="logo" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 480 480" style="enable-background:new 0 0 480 480;" xml:space="preserve">
       <g>
               <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="-38.875" y1="616.402" x2="-38.875" y2="555.155" gradientTransform="matrix(8 0 0 -8 455 4941)">
               <stop  offset="0" style="stop-color:#FC5C7D"/>
               <stop  offset="0.129" style="stop-color:#F35E85"/>
               <stop  offset="0.343" style="stop-color:#D9659B"/>
               <stop  offset="0.616" style="stop-color:#B070BF"/>
               <stop  offset="0.934" style="stop-color:#777FF0"/>
               <stop  offset="1" style="stop-color:#6A82FB"/>
           </linearGradient>
           <path style="fill:url(#SVGID_1_);" d="M80,304h128v16H80V304z"/>
           
               <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="-38.875" y1="616.402" x2="-38.875" y2="555.155" gradientTransform="matrix(8 0 0 -8 455 4941)">
               <stop  offset="0" style="stop-color:#FC5C7D"/>
               <stop  offset="0.129" style="stop-color:#F35E85"/>
               <stop  offset="0.343" style="stop-color:#D9659B"/>
               <stop  offset="0.616" style="stop-color:#B070BF"/>
               <stop  offset="0.934" style="stop-color:#777FF0"/>
               <stop  offset="1" style="stop-color:#6A82FB"/>
           </linearGradient>
           <path style="fill:url(#SVGID_2_);" d="M80,336h128v16H80V336z"/>
       </g>
       <g>
           
               <linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="-40.875" y1="616.402" x2="-40.875" y2="555.155" gradientTransform="matrix(8 0 0 -8 455 4941)">
               <stop  offset="0" style="stop-color:#FC5C7D"/>
               <stop  offset="0.129" style="stop-color:#F35E85"/>
               <stop  offset="0.343" style="stop-color:#D9659B"/>
               <stop  offset="0.616" style="stop-color:#B070BF"/>
               <stop  offset="0.934" style="stop-color:#777FF0"/>
               <stop  offset="1" style="stop-color:#6A82FB"/>
           </linearGradient>
           <path style="fill:url(#SVGID_3_);" d="M80,368h96v16H80V368z"/>
           
               <linearGradient id="SVGID_4_" gradientUnits="userSpaceOnUse" x1="-35.875" y1="616.402" x2="-35.875" y2="555.155" gradientTransform="matrix(8 0 0 -8 455 4941)">
               <stop  offset="0" style="stop-color:#FC5C7D"/>
               <stop  offset="0.129" style="stop-color:#F35E85"/>
               <stop  offset="0.343" style="stop-color:#D9659B"/>
               <stop  offset="0.616" style="stop-color:#B070BF"/>
               <stop  offset="0.934" style="stop-color:#777FF0"/>
               <stop  offset="1" style="stop-color:#6A82FB"/>
           </linearGradient>
           <path style="fill:url(#SVGID_4_);" d="M128,272h80v16h-80V272z"/>
           
               <linearGradient id="SVGID_5_" gradientUnits="userSpaceOnUse" x1="-17.875" y1="616.402" x2="-17.875" y2="555.155" gradientTransform="matrix(8 0 0 -8 455 4941)">
               <stop  offset="0" style="stop-color:#FC5C7D"/>
               <stop  offset="0.129" style="stop-color:#F35E85"/>
               <stop  offset="0.343" style="stop-color:#D9659B"/>
               <stop  offset="0.616" style="stop-color:#B070BF"/>
               <stop  offset="0.934" style="stop-color:#777FF0"/>
               <stop  offset="1" style="stop-color:#6A82FB"/>
           </linearGradient>
           <path style="fill:url(#SVGID_5_);" d="M280,368h64v16h-64V368z"/>
           
               <linearGradient id="SVGID_6_" gradientUnits="userSpaceOnUse" x1="-17.875" y1="616.402" x2="-17.875" y2="555.155" gradientTransform="matrix(8 0 0 -8 455 4941)">
               <stop  offset="0" style="stop-color:#FC5C7D"/>
               <stop  offset="0.129" style="stop-color:#F35E85"/>
               <stop  offset="0.343" style="stop-color:#D9659B"/>
               <stop  offset="0.616" style="stop-color:#B070BF"/>
               <stop  offset="0.934" style="stop-color:#777FF0"/>
               <stop  offset="1" style="stop-color:#6A82FB"/>
           </linearGradient>
           <path style="fill:url(#SVGID_6_);" d="M280,208h64v16h-64V208z"/>
           
               <linearGradient id="SVGID_7_" gradientUnits="userSpaceOnUse" x1="-26.875" y1="616.402" x2="-26.875" y2="555.155" gradientTransform="matrix(8 0 0 -8 455 4941)">
               <stop  offset="0" style="stop-color:#FC5C7D"/>
               <stop  offset="0.129" style="stop-color:#F35E85"/>
               <stop  offset="0.343" style="stop-color:#D9659B"/>
               <stop  offset="0.616" style="stop-color:#B070BF"/>
               <stop  offset="0.934" style="stop-color:#777FF0"/>
               <stop  offset="1" style="stop-color:#6A82FB"/>
           </linearGradient>
           <path style="fill:url(#SVGID_7_);" d="M472,88h-32V40c0-17.673-14.327-32-32-32h-24c-4.418,0-8,3.582-8,8v40h-96
               c-2.122,0-4.156,0.844-5.656,2.344L240,92.688l-34.344-34.344c-1.5-1.5-3.534-2.344-5.656-2.344H48c-4.418,0-8,3.582-8,8v24H8
               c-4.418,0-8,3.582-8,8v368c0,4.418,3.582,8,8,8h464c4.418,0,8-3.582,8-8V96C480,91.582,476.418,88,472,88z M392,24h16
               c8.837,0,16,7.163,16,16v332.296c-4.859-2.822-10.381-4.305-16-4.296h-16V24z M56,72h140.688L232,107.312V424h16V107.312
               L283.312,72H376v40h-48v16h48v16h-96v16h96v16h-96v16h96v80h-48v16h48v16h-96v16h96v16h-96v16h96v24c0,4.418,3.582,8,8,8h24
               c8.837,0,16,7.163,16,16s-7.163,16-16,16H280c-2.122,0-4.156,0.844-5.656,2.344L240,452.688l-34.344-34.344
               c-1.5-1.5-3.534-2.344-5.656-2.344H56V72z M16,104h24v320c0,4.418,3.582,8,8,8h148.688l24,24H16V104z M464,456H259.312l24-24H408
               c17.673,0,32-14.327,32-32V104h24V456z"/>
           
               <linearGradient id="SVGID_8_" gradientUnits="userSpaceOnUse" x1="-18.875" y1="616.402" x2="-18.875" y2="555.155" gradientTransform="matrix(8 0 0 -8 455 4941)">
               <stop  offset="0" style="stop-color:#FC5C7D"/>
               <stop  offset="0.129" style="stop-color:#F35E85"/>
               <stop  offset="0.343" style="stop-color:#D9659B"/>
               <stop  offset="0.616" style="stop-color:#B070BF"/>
               <stop  offset="0.934" style="stop-color:#777FF0"/>
               <stop  offset="1" style="stop-color:#6A82FB"/>
           </linearGradient>
           <path style="fill:url(#SVGID_8_);" d="M296,112h16v16h-16V112z"/>
           
               <linearGradient id="SVGID_9_" gradientUnits="userSpaceOnUse" x1="-18.875" y1="616.402" x2="-18.875" y2="555.155" gradientTransform="matrix(8 0 0 -8 455 4941)">
               <stop  offset="0" style="stop-color:#FC5C7D"/>
               <stop  offset="0.129" style="stop-color:#F35E85"/>
               <stop  offset="0.343" style="stop-color:#D9659B"/>
               <stop  offset="0.616" style="stop-color:#B070BF"/>
               <stop  offset="0.934" style="stop-color:#777FF0"/>
               <stop  offset="1" style="stop-color:#6A82FB"/>
           </linearGradient>
           <path style="fill:url(#SVGID_9_);" d="M296,272h16v16h-16V272z"/>
           
               <linearGradient id="SVGID_10_" gradientUnits="userSpaceOnUse" x1="-43.875" y1="616.402" x2="-43.875" y2="555.155" gradientTransform="matrix(8 0 0 -8 455 4941)">
               <stop  offset="0" style="stop-color:#FC5C7D"/>
               <stop  offset="0.129" style="stop-color:#F35E85"/>
               <stop  offset="0.343" style="stop-color:#D9659B"/>
               <stop  offset="0.616" style="stop-color:#B070BF"/>
               <stop  offset="0.934" style="stop-color:#777FF0"/>
               <stop  offset="1" style="stop-color:#6A82FB"/>
           </linearGradient>
           <path style="fill:url(#SVGID_10_);" d="M96,272h16v16H96V272z"/>
       </g>
       <linearGradient id="SVGID_11_" gradientUnits="userSpaceOnUse" x1="-38.875" y1="616.402" x2="-38.875" y2="555.155" gradientTransform="matrix(8 0 0 -8 455 4941)">
           <stop  offset="0" style="stop-color:#FC5C7D"/>
           <stop  offset="0.129" style="stop-color:#F35E85"/>
           <stop  offset="0.343" style="stop-color:#D9659B"/>
           <stop  offset="0.616" style="stop-color:#B070BF"/>
           <stop  offset="0.934" style="stop-color:#777FF0"/>
           <stop  offset="1" style="stop-color:#6A82FB"/>
       </linearGradient>
       <path style="fill:url(#SVGID_11_);" d="M136,212.944V232h16v-19.056l27.576-13.744c2.725-1.362,4.441-4.153,4.424-7.2v-32h16v-16
           h-22.112L152,131.056V112h-16v19.056l-27.576,13.784c-2.712,1.355-4.425,4.128-4.424,7.16v32H88v16h22.112L136,212.944z
            M120,156.944l24-12l24,12v30.112l-24,12l-24-12V156.944z"/>
       <g>
           
               <linearGradient id="SVGID_12_" gradientUnits="userSpaceOnUse" x1="-32.875" y1="616.402" x2="-32.875" y2="555.155" gradientTransform="matrix(8 0 0 -8 455 4941)">
               <stop  offset="0" style="stop-color:#FC5C7D"/>
               <stop  offset="0.129" style="stop-color:#F35E85"/>
               <stop  offset="0.343" style="stop-color:#D9659B"/>
               <stop  offset="0.616" style="stop-color:#B070BF"/>
               <stop  offset="0.934" style="stop-color:#777FF0"/>
               <stop  offset="1" style="stop-color:#6A82FB"/>
           </linearGradient>
           <path style="fill:url(#SVGID_12_);" d="M184,112h16v16h-16V112z"/>
           
               <linearGradient id="SVGID_13_" gradientUnits="userSpaceOnUse" x1="-44.875" y1="616.402" x2="-44.875" y2="555.155" gradientTransform="matrix(8 0 0 -8 455 4941)">
               <stop  offset="0" style="stop-color:#FC5C7D"/>
               <stop  offset="0.129" style="stop-color:#F35E85"/>
               <stop  offset="0.343" style="stop-color:#D9659B"/>
               <stop  offset="0.616" style="stop-color:#B070BF"/>
               <stop  offset="0.934" style="stop-color:#777FF0"/>
               <stop  offset="1" style="stop-color:#6A82FB"/>
           </linearGradient>
           <path style="fill:url(#SVGID_13_);" d="M88,216h16v16H88V216z"/>

       </svg>
    </div>
    <div class="topo-busca">
        <span class="topo-busca-nome-site">Nome site</span>
        <input type="text" placeholder="O que você procura?" class="topo-busca-input" />
        <svg fill="#fff" id="topo-busca-search-icon" class="topo-busca-search-icon" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            <path d="M0 0h24v24H0z" fill="none"></path>
        </svg>
    </div>
</div>
          <div id="app">${markup}</div>
          <script>
          function EscondeLimparBusca(){
              $("#limpar-input-mobile").css("display","none")
          }
          
          function MostrarLimparBusca(){
              $("#limpar-input-mobile").css("display","block");
          }

          function FocusBuscaMobile(){
              $("#input-busca-mobile").focus();
          }

          /* abrir aba consulta */
          $("#topo-busca-search-icon").click(function() {
              $("#busca-mobile").addClass("topo-busca-mobile-ativo");
              if($("#input-busca-mobile").val().length > 0)
                  MostrarLimparBusca();
                  FocusBuscaMobile();
          });

          /* sair consulta mobile */
          $("#topo-busca-arrow-icon").click(function() {
              $("#busca-mobile").removeClass("topo-busca-mobile-ativo");
              EscondeLimparBusca();
          });

          /* limpar consulta */
          $("#limpar-input-mobile").click(function() {
              $("#input-busca-mobile").val("");
              EscondeLimparBusca();
              FocusBuscaMobile();
          });

          /* quando digitar mostrar botão limpar consulta */
          $("#input-busca-mobile").keyup(function() {
              if($(this).val().length > 0)
                  MostrarLimparBusca();
              else
                  EscondeLimparBusca();
          });

      </script>
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