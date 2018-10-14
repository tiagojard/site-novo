import React, { Component } from 'react';
import BuscaMobile from './BuscaMobile'
class Topo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pesquisa: "",
      pesquisaMoblie:""
    }

    this.handleAutoComplete = this.handleAutoComplete.bind(this);
    this.handleLimpaConsulta = this.handleLimpaConsulta.bind(this);
  }

  handleLimpaConsulta(e){
    this.setState({
      pesquisa: "",
      pesquisaMoblie: ""
    });
  }

  handleAutoComplete(e){
    this.setState({
      pesquisa: e.target.id == "busca" ? e.target.value : "",
      pesquisaMoblie: e.target.id == "input-busca-mobile" ? e.target.value : ""
    });
  }
  
  render(){
    return (
        <div className="conteiner-topo">
            <div id="busca-mobile" className="topo-busca-mobile">
                    <div className="barra-topo">
                      <svg id="topo-busca-arrow-icon" onClick={this.handleLimpaConsulta} className="topo-busca-arrow-icon" xmlns="http://www.w3.org/2000/svg" width="18.533" height="18.533"><rect width="100%" height="100%" fill="none"/><g className="currentLayer"><path d="M17.37 7.92l.028.006H5.072l3.875-3.883c.19-.19.294-.447.294-.716 0-.27-.104-.525-.294-.715l-.603-.603a1 1 0 0 0-.712-.295 1 1 0 0 0-.712.294L.278 8.65a.998.998 0 0 0-.294.713c0 .271.104.525.294.715L6.92 16.72a1 1 0 0 0 .712.294 1 1 0 0 0 .712-.294l.603-.603a.998.998 0 0 0 .294-.712.968.968 0 0 0-.294-.698l-3.919-3.905h12.355c.555 0 1.022-.478 1.022-1.033v-.853c0-.555-.48-.996-1.036-.996z" fill="#757575"/></g></svg>
                      <input type="text" id="input-busca-mobile" onKeyUp={this.handleAutoComplete} placeholder="O que você procura?" className="topo-busca-input-mobile" />
                      <svg id="limpar-input-mobile" onClick={this.handleLimpaConsulta} className="limpar-input-mobile" xmlns="http://www.w3.org/2000/svg" width="18" height="18"><rect width="100%" height="100%" fill="none"/><g className="currentLayer"><path d="M15.239 2.693C11.758-.79 6.093-.79 2.611 2.693c-3.482 3.481-3.481 9.146 0 12.628s9.146 3.481 12.628 0c3.481-3.482 3.481-9.147 0-12.628zm-2.793 9.835a.687.687 0 0 1-.971 0l-2.55-2.55-2.671 2.671a.687.687 0 1 1-.971-.971l2.67-2.671-2.55-2.55a.687.687 0 1 1 .972-.972l2.55 2.55 2.428-2.428a.687.687 0 1 1 .972.971L9.896 9.007l2.55 2.55a.687.687 0 0 1 0 .97z" fill="gray"/></g></svg>
                    </div>
                    <div id="result-mobile" className="result-mobile">
                        <BuscaMobile pesquisa={this.state.pesquisaMoblie} />
                    </div>
            </div>
            <div className="topo">
            
                <div className="topo-logo">
                  <a href="/">
                  <svg className="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480"><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="-38.875" y1="616.402" x2="-38.875" y2="555.155" gradientTransform="matrix(8 0 0 -8 455 4941)"><stop offset="0" stopColor="#fc5c7d"/><stop offset=".129" stopColor="#f35e85"/><stop offset=".343" stopColor="#d9659b"/><stop offset=".616" stopColor="#b070bf"/><stop offset=".934" stopColor="#777ff0"/><stop offset="1" stopColor="#6a82fb"/></linearGradient><path d="M80 304h128v16H80v-16z" fill="url(#a)"/><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="-38.875" y1="616.402" x2="-38.875" y2="555.155" gradientTransform="matrix(8 0 0 -8 455 4941)"><stop offset="0" stopColor="#fc5c7d"/><stop offset=".129" stopColor="#f35e85"/><stop offset=".343" stopColor="#d9659b"/><stop offset=".616" stopColor="#b070bf"/><stop offset=".934" stopColor="#777ff0"/><stop offset="1" stopColor="#6a82fb"/></linearGradient><path d="M80 336h128v16H80v-16z" fill="url(#b)"/><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="-40.875" y1="616.402" x2="-40.875" y2="555.155" gradientTransform="matrix(8 0 0 -8 455 4941)"><stop offset="0" stopColor="#fc5c7d"/><stop offset=".129" stopColor="#f35e85"/><stop offset=".343" stopColor="#d9659b"/><stop offset=".616" stopColor="#b070bf"/><stop offset=".934" stopColor="#777ff0"/><stop offset="1" stopColor="#6a82fb"/></linearGradient><path d="M80 368h96v16H80v-16z" fill="url(#c)"/><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="-35.875" y1="616.402" x2="-35.875" y2="555.155" gradientTransform="matrix(8 0 0 -8 455 4941)"><stop offset="0" stopColor="#fc5c7d"/><stop offset=".129" stopColor="#f35e85"/><stop offset=".343" stopColor="#d9659b"/><stop offset=".616" stopColor="#b070bf"/><stop offset=".934" stopColor="#777ff0"/><stop offset="1" stopColor="#6a82fb"/></linearGradient><path d="M128 272h80v16h-80v-16z" fill="url(#d)"/><linearGradient id="e" gradientUnits="userSpaceOnUse" x1="-17.875" y1="616.402" x2="-17.875" y2="555.155" gradientTransform="matrix(8 0 0 -8 455 4941)"><stop offset="0" stopColor="#fc5c7d"/><stop offset=".129" stopColor="#f35e85"/><stop offset=".343" stopColor="#d9659b"/><stop offset=".616" stopColor="#b070bf"/><stop offset=".934" stopColor="#777ff0"/><stop offset="1" stopColor="#6a82fb"/></linearGradient><path d="M280 368h64v16h-64v-16z" fill="url(#e)"/><linearGradient id="f" gradientUnits="userSpaceOnUse" x1="-17.875" y1="616.402" x2="-17.875" y2="555.155" gradientTransform="matrix(8 0 0 -8 455 4941)"><stop offset="0" stopColor="#fc5c7d"/><stop offset=".129" stopColor="#f35e85"/><stop offset=".343" stopColor="#d9659b"/><stop offset=".616" stopColor="#b070bf"/><stop offset=".934" stopColor="#777ff0"/><stop offset="1" stopColor="#6a82fb"/></linearGradient><path d="M280 208h64v16h-64v-16z" fill="url(#f)"/><linearGradient id="g" gradientUnits="userSpaceOnUse" x1="-26.875" y1="616.402" x2="-26.875" y2="555.155" gradientTransform="matrix(8 0 0 -8 455 4941)"><stop offset="0" stopColor="#fc5c7d"/><stop offset=".129" stopColor="#f35e85"/><stop offset=".343" stopColor="#d9659b"/><stop offset=".616" stopColor="#b070bf"/><stop offset=".934" stopColor="#777ff0"/><stop offset="1" stopColor="#6a82fb"/></linearGradient><path d="M472 88h-32V40c0-17.673-14.327-32-32-32h-24a8 8 0 0 0-8 8v40h-96a8 8 0 0 0-5.656 2.344L240 92.688l-34.344-34.344A8 8 0 0 0 200 56H48a8 8 0 0 0-8 8v24H8a8 8 0 0 0-8 8v368a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8V96a8 8 0 0 0-8-8zm-80-64h16c8.837 0 16 7.163 16 16v332.296A31.76 31.76 0 0 0 408 368h-16V24zM56 72h140.688L232 107.312V424h16V107.312L283.312 72H376v40h-48v16h48v16h-96v16h96v16h-96v16h96v80h-48v16h48v16h-96v16h96v16h-96v16h96v24a8 8 0 0 0 8 8h24c8.837 0 16 7.163 16 16s-7.163 16-16 16H280a8 8 0 0 0-5.656 2.344L240 452.688l-34.344-34.344A8 8 0 0 0 200 416H56V72zm-40 32h24v320a8 8 0 0 0 8 8h148.688l24 24H16V104zm448 352H259.312l24-24H408c17.673 0 32-14.327 32-32V104h24v352z" fill="url(#g)"/><linearGradient id="h" gradientUnits="userSpaceOnUse" x1="-18.875" y1="616.402" x2="-18.875" y2="555.155" gradientTransform="matrix(8 0 0 -8 455 4941)"><stop offset="0" stopColor="#fc5c7d"/><stop offset=".129" stopColor="#f35e85"/><stop offset=".343" stopColor="#d9659b"/><stop offset=".616" stopColor="#b070bf"/><stop offset=".934" stopColor="#777ff0"/><stop offset="1" stopColor="#6a82fb"/></linearGradient><path d="M296 112h16v16h-16v-16z" fill="url(#h)"/><linearGradient id="i" gradientUnits="userSpaceOnUse" x1="-18.875" y1="616.402" x2="-18.875" y2="555.155" gradientTransform="matrix(8 0 0 -8 455 4941)"><stop offset="0" stopColor="#fc5c7d"/><stop offset=".129" stopColor="#f35e85"/><stop offset=".343" stopColor="#d9659b"/><stop offset=".616" stopColor="#b070bf"/><stop offset=".934" stopColor="#777ff0"/><stop offset="1" stopColor="#6a82fb"/></linearGradient><path d="M296 272h16v16h-16v-16z" fill="url(#i)"/><linearGradient id="j" gradientUnits="userSpaceOnUse" x1="-43.875" y1="616.402" x2="-43.875" y2="555.155" gradientTransform="matrix(8 0 0 -8 455 4941)"><stop offset="0" stopColor="#fc5c7d"/><stop offset=".129" stopColor="#f35e85"/><stop offset=".343" stopColor="#d9659b"/><stop offset=".616" stopColor="#b070bf"/><stop offset=".934" stopColor="#777ff0"/><stop offset="1" stopColor="#6a82fb"/></linearGradient><path d="M96 272h16v16H96v-16z" fill="url(#j)"/><linearGradient id="k" gradientUnits="userSpaceOnUse" x1="-38.875" y1="616.402" x2="-38.875" y2="555.155" gradientTransform="matrix(8 0 0 -8 455 4941)"><stop offset="0" stopColor="#fc5c7d"/><stop offset=".129" stopColor="#f35e85"/><stop offset=".343" stopColor="#d9659b"/><stop offset=".616" stopColor="#b070bf"/><stop offset=".934" stopColor="#777ff0"/><stop offset="1" stopColor="#6a82fb"/></linearGradient><path d="M136 212.944V232h16v-19.056l27.576-13.744A8 8 0 0 0 184 192v-32h16v-16h-22.112L152 131.056V112h-16v19.056l-27.576 13.784A8.001 8.001 0 0 0 104 152v32H88v16h22.112L136 212.944zm-16-56l24-12 24 12v30.112l-24 12-24-12v-30.112z" fill="url(#k)"/><g><linearGradient id="l" gradientUnits="userSpaceOnUse" x1="-32.875" y1="616.402" x2="-32.875" y2="555.155" gradientTransform="matrix(8 0 0 -8 455 4941)"><stop offset="0" stopColor="#fc5c7d"/><stop offset=".129" stopColor="#f35e85"/><stop offset=".343" stopColor="#d9659b"/><stop offset=".616" stopColor="#b070bf"/><stop offset=".934" stopColor="#777ff0"/><stop offset="1" stopColor="#6a82fb"/></linearGradient><path d="M184 112h16v16h-16v-16z" fill="url(#l)"/><linearGradient id="m" gradientUnits="userSpaceOnUse" x1="-44.875" y1="616.402" x2="-44.875" y2="555.155" gradientTransform="matrix(8 0 0 -8 455 4941)"><stop offset="0" stopColor="#fc5c7d"/><stop offset=".129" stopColor="#f35e85"/><stop offset=".343" stopColor="#d9659b"/><stop offset=".616" stopColor="#b070bf"/><stop offset=".934" stopColor="#777ff0"/><stop offset="1" stopColor="#6a82fb"/></linearGradient><path d="M88 216h16v16H88v-16z" fill="url(#m)"/></g></svg>
                  </a>
                </div>
                <div className="topo-busca">
                    <span className="topo-busca-nome-site">Guia do desenvolvedor</span>
                    <div className="busca">
                      <input id="busca" type="text"  onKeyUp={this.handleAutoComplete} onBlur={this.handleLimpaConsulta} placeholder="O que você procura?" className="topo-busca-input" />
                      <BuscaMobile pesquisa={this.state.pesquisa} />
                    </div>
                    <svg id="topo-busca-search-icon" className="topo-busca-search-icon" xmlns="http://www.w3.org/2000/svg" fill="#fff" height="24" width="24"><rect width="100%" height="100%" fill="none"/><g className="currentLayer"><path d="M16.867 14.788h-1.052l-.373-.36a8.616 8.616 0 0 0 2.09-5.631c0-4.78-3.874-8.654-8.654-8.654S.224 4.017.224 8.797 4.1 17.45 8.878 17.45a8.616 8.616 0 0 0 5.632-2.09l.36.372v1.052l6.657 6.644 1.983-1.984-6.643-6.657zm-7.989 0c-3.315 0-5.99-2.676-5.99-5.991s2.675-5.991 5.99-5.991 5.992 2.676 5.992 5.99-2.676 5.992-5.992 5.992z"/></g></svg>
                </div>
            </div>
        </div>
      ) 
  }
}
export default Topo;
