import React, { Component } from 'react';
class Produto extends Component {
    constructor(props) {
        super(props);
		this.state = {
            result: null,
            loading: true,
          }
          this.produtos = [ {
            "cor" : "#df322a",
            "descricao" : "Livro digital em formato e-pub, compatível com iBooks e Stanza (iPad), Aldiko e FBReader (Android) e Calibre (Linux, Windows e Mac). ",
            "imagem" : "/produtos/1-javascript-Avancado.png",
            "itens" : "<ul><li>Estruturas de Dados em Javascript</li><li>JSON, Ajax e JSONp</li><li>CORS</li><li>Tipagem dinâmica e Duck Typing</li><li>E muito mais, clique e confira</li></ul>",
            "link" : "https://go.hotmart.com/H9422393Q",
            "nome" : "Javascript Avançado"
          }, {
            "cor" : "#c10707",
            "descricao" : "DMV Informática - Especialistas na Criação de Sites, Hotsites, Sistemas CMS, Loja Virtual, Apps, Marketing Digital e Hospedagem. ",
            "imagem" : "/produtos/1-templates-site-responsivo.png",
            "itens" : "<ul><li>Mais de 10 templates para seu negócio</li><li>HTML5/CSS3 limpos 100% responsivo</li><li>Versão Bootstrap 4 e animações CSS3</li><li>Formulário de contato PHP</li><li>E muito mais, clique e confira</li></ul>",
            "link" : "https://go.hotmart.com/K9423178A",
            "nome" : "Templates site responsivo"
          }, {
            "cor" : "#fff",
            "descricao" : "Curso básico de jQuery. Formato Ebook",
            "imagem" : "/produtos/1-jquery-basico.png",
            "itens" : "<ul><li>Gerar qrcode</li><li>Preview imagem ao selecionar no input fileEfeitos jQuery</li><li>Drag and drop upload com preview de imagem</li><li>Ajax</li><li>E muito mais, clique e confira</li></ul>",
            "link" : "https://go.hotmart.com/V9690401T",
            "nome" : "JQuery básicos"
          }, {
            "cor" : "#272940",
            "descricao" : "Curso completo para todos aqueles que desejam se tornar profissionais web de alto nível.",
            "imagem" : "/produtos/1-web-developer.png",
            "itens" : "<ul><li>Treinamento PHP</li><li>Curso PHP MVC</li><li>Curso JavaScript e jQuery</li><li>Curso de Vagrant, SEO e Front</li><li>E muito mais, clique e confira</li></ul>",
            "link" : "https://go.hotmart.com/F9690563P",
            "nome" : "Treinamento web mais completo do Brasil"
          }, {
            "cor" : "#fff",
            "descricao" : "Curso online sobre técnicas de SEO, que ensina a elevar sites ou blogs nos resultados de busca. Este é um curso com alto potencial de conversão, além de ter um excelente comissionamento.",
            "imagem" : "/produtos/1-tecnicas-seo.png",
            "itens" : "<ul><li>Técnicas de Link Building</li><li>Seu site nas primeiras páginas de buscas</li><li>Aumente suas visitas e vendas.</li><li>E muito mais, clique e confira</li></ul>",
            "link" : "https://go.hotmart.com/U9691050N",
            "nome" : "Técnicas de SEO"
          } ];
    }
    
    
      

    componentDidMount() {

        function shuffle(array) {
            var currentIndex = array.length, temporaryValue, randomIndex;
          
            // While there remain elements to shuffle...
            while (0 !== currentIndex) {
          
              // Pick a remaining element...
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex -= 1;
          
              // And swap it with the current element.
              temporaryValue = array[currentIndex];
              array[currentIndex] = array[randomIndex];
              array[randomIndex] = temporaryValue;
            }
          
            return array;
          }

        var produtos = this.produtos;
        this.setState({
            loading: shuffle(produtos) ? false : true,
            result: produtos
        });
       /*
        //+this.props.idPagina
        fetch("https://guiadesenvolvedor-78a46.firebaseio.com/produto.json")
        .then(res => res.json())
        .then(
            (result) => {
            this.setState({
                loading: shuffle(result) ? false : true,
                result: result
            });
            },
            (error) => {
            this.setState({
                loading: true
            });
            }
        );
        */
    }

    /*
	componentDidUpdate(prevProps){
        if(this.props.idPagina != prevProps.idPagina){
            var produtos = this.produtos;
            this.setState({
                loading: shuffle(produtos) ? false : true,
                result: produtos
            });
     
            //+this.props.idPagina
            fetch("https://guiadesenvolvedor-78a46.firebaseio.com/produto.json")
        .then(res => res.json())
        .then(
            (result) => {
            this.setState({
                loading: shuffle(result) ? false : true,
                result: result
            });
            },
            (error) => {
            this.setState({
                loading: true
            });
            }
        );
        
     

        }
	}
*/
    render(){
        if(this.state.loading == true){
            return <div></div>;
        }
        var result = this.state.result.slice(0,4);
        return <div className="produtos">
            {
                 result.map((item, index) =>
                    <div key={index} className="item-produto">
                        <a href={item.link} title="Clique aqui e saiba mais." rel="nofollow" target="_blank">
                            <div className="item-imagem" style={{backgroundColor: item.cor}}>
                                <img src={item.imagem} alt={item.nome}/>
                            </div>
                            <div className="item-descricao">
                                <span>{item.nome}</span>
                                <p>{item.descricao}</p>
                                <div dangerouslySetInnerHTML={{__html:item.itens }}/>
                            </div>
                        </a>
                    </div>
                 )
            }
        </div>
    }
}
export default Produto;