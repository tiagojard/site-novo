import React, { Component } from 'react';
class Entrar extends Component {

    render (){
        return <div>
            <h1 className="login-h1">Venha fazer parte da dessa plataforma.</h1>
            <div className="login-card">
                <div className="g-signin2" data-onsuccess="onSignIn"></div>
            </div>
        </div>
    }
}
export default Entrar;