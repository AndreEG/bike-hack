import React, { Component } from 'react';
import firebase from 'firebase';
/* import './App.css'; */

class Login extends Component {
    constructor () {
        super();
        this.state = {user:null}; 
        this.handleAuth = this.handleAuth.bind(this);
        this.handleLogout = this.handleLogout.bind(this); 
        this.renderLoginButton = this.renderLoginButton.bind(this); 
    }

    componentWillMount () {
        firebase.auth().onAuthStateChanged(user => {
           this.setState({user});
        });
    }

    handleAuth () {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(result => console.log(`${result.user.email} ha iniciado sesión`))
        .catch(error => console.log(`Error ${error.code}: ${error.message}`));
    }

    handleLogout (){
        firebase.auth().signOut()
        .then(result => console.log(`${result.user.email} ha salido`))
        .catch(error => console.log(`Error ${error.code}: ${error.message}`));
    } 

    renderLoginButton(){
        if(this.state.user){
            return(
                <div>
                    <p> Hola {this.state.user.displayName}!</p>
                    <button onClick={this.handleLogout}>Salir</button> 
                </div>
            );
        }
        else {
            return(
                <div>
                <button onClick={this.handleAuth}>Login con google</button>
                <button>Registrate</button>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                </header>
                <div className="App-intro">
                    {this.renderLoginButton()}
                </div>
                <img src="https://image.ibb.co/j0aCC7/logobike.png" alt="logobike" />
              
                
                
        </div>
        );
    }

}

export default Login;
