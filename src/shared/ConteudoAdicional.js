import React, { Component } from 'react';

class ConteudoAdicional extends Component {
    constructor(props) {
        super(props);
    }

    render(){

        return   <div>
            <br/> <br/>
        <p className="tit">Poste suas <a href="/cadastro/conteudo" title="Poste suas dúvidas e problemas">dúvidas e problemas</a> sobre {this.props.assunto}, nós estamos aqui para te ajudar o mais rápido póssivel. Adquira e compartihe conhecimento usando a plataforma Guia do Desenvolvedor.</p><br/><br/>
        <h3 className="tit">3 motivos para fazer cursos online.</h3>
        <p className="sub-tit">
        Os <a href="/cursos" title="Cursos">cursos online</a> estão cada vez mais sendo procurado por pessoas, que estão buscando adquirir novos conhecimentos e se destacar no mercado de trabalho.  
        </p>
        <h4 className="tit-2">1 - Novas tecnologias.</h4>
        <p className="text">
    Novas tecnologias são lançadas todos os dias, e você não pode ficar para traz, essas tecnologias vem para resolver problemas de uma forma simples, eficaz e otimizada e geralmente essas tecnologias são requisitos em uma vaga de emprego. Um exemplo delas é <a href={this.props.link} title="React js">{this.props.assunto}</a>.
        </p>
        <h4 className="tit-2">2 - Certificado</h4>
        <p className="text">
            Cursos online também oferecem certificados e diplomas, para seus alunos da mesma forma dos cursos presenciais.
        </p>
        <h4 className="tit-2">3 - Flexibilidade de tempo</h4>
        <p className="text">
            A grande vantagem do curso online, é a possibilidade do aluno gerenciar seu próprio tempo e ritmo de estudo permitindo um melhor aprendizado. 
        </p>
      
        </div>;
    }

}
export default ConteudoAdicional;