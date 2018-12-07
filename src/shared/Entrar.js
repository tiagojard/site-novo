import React, { Component } from 'react';
class Entrar extends Component {

    render (){
        return <div>
            <h2 className="login-h2">Venha fazer parte dessa plataforma.</h2>
            <div className="login-card">
                <h1>Prosseguir para o guia do desenvolvedor</h1>
                <div className="g-signin2" data-onsuccess="onSignIn"></div>
            </div>
        </div>
    }
}
export default Entrar;