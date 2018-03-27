import React, { Component } from 'react';
/* import logo from './logo.svg'; */
import firebase from 'firebase';

/* import './App.css'; */

class Login extends Component {

constructor () {
  super();
    this.state = {user:null}; 
}

  handleAuth () {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesión`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }


  renderLoginButton(){
    if(this.state.user){
      return(
        <div>
        </div>
      );
    }else {
    return(
      <button onClick={this.handleAuth}>Login con google</button>
      );
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
      
          <h1 className="App-title">React</h1>
        </header>
        <div className="App-intro">
          {this.renderLoginButton()}
        </div>
      </div>
    );
  }

}

export default Login;
