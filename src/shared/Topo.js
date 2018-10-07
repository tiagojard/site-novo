import React from 'react'
export default function Topo () {
 
  return (
    <div>
           <div id="busca-mobile" className="topo-busca-mobile">
                <img id="topo-busca-arrow-icon" className="topo-busca-arrow-icon" src="/left-arrow.svg" />
                <input type="text" id="input-busca-mobile" placeholder="O que você procura?" className="topo-busca-input-mobile" />
                <img id="limpar-input-mobile" className="limpar-input-mobile" src="/error.svg" />
                <div id="result-mobile" className="result-mobile">

                </div>
        </div>
        <div className="topo">
        
            <div className="topo-logo">
              <a href="/"><img className="logo" src="/knowledge.svg" /></a>
            </div>
            <div className="topo-busca">
                <span className="topo-busca-nome-site">Nome site</span>
                <div className="busca">
                  <input id="busca" type="text" placeholder="O que você procura?" className="topo-busca-input" />
                </div>
                <img id="topo-busca-search-icon" className="topo-busca-search-icon" src="/search.svg" />
            </div>
        </div>
    </div>
  )
}