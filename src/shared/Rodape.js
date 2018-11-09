import React from 'react'
export default function Rodape () {
 
  return (
    <div className="rodape">
    <div className="link">
      <a href="/" title="Guia do desenvolvedor">Guia do desenvolvedor</a>
    </div>
    <ul>
      <li><a href="/curso" title="Cursos">Cursos</a></li>
    </ul>
    <ul>
      <li><a href="/cadastro/conteudo" title="Perguntar">Perguntar</a></li>
    </ul>
    <div className="rodape-info">
      Copyright © 2018 Guia desenvolvedor
    </div>
    </div>
  )
}