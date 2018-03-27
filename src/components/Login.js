import React, { Component } from 'react';
import firebase from 'firebase';

class Login extends Component {

constructor () {
  super();
    this.state = {user:null}; 
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
          <img width="20" src={this.state.user.photoURL} alt={this.state.user.displayName}/>
          <p> Hola {this.state.user.displayName}!</p>

             <button onClick={this.handleLogout}>Salir</button> 
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
