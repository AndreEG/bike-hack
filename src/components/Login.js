import React, { Component } from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';

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

  renderLoginButton(navigateTo){
    if(this.state.user){
      return(
        <div>
          <img width="20" src={this.state.user.photoURL} alt={this.state.user.displayName}/>
          <h1>Bienvenida </h1>
          <h2> {this.state.user.displayName}!</h2>
          <p>Completa los siguientes Datos porfavor:</p><br/>
          <input type="password" class="form-control" placeholder="DNI" /><br/>
          <input type="password" class="form-control" placeholder="Phone" /><br/><br/>
          <button onClick={this.handleLogout}>Salir</button> 
          <button onClick={() => navigateTo('pagina-3')}>siguienteeeeaaaaaaaaaaa</button>
        </div>
      );
    }
    else {
      return(
        <button onClick={this.handleAuth}>Login con google</button> 
      );
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div className="App-intro">
            {this.renderLoginButton(this.props.navigateTo)}
        </div>     
      </div>
    );
  }

}

export default connect(
    (state) => ({
  
    }),
    (dispatch) => ({
      navigateTo: (pagina) => {
        dispatch({
          type: 'NAVIGATE_TO',
          pagina
        })
      }
    })
  )(Login);
