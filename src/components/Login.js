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
          <h1>Bienvenida </h1>
          <h2> {this.state.user.displayName}!</h2>
          <img width="20" src={this.state.user.photoURL} alt={this.state.user.displayName}/><br/>
          <p>Completa los siguientes Datos porfavor:</p><br/>
          <input type="password" className="form-control" placeholder="DNI" /><br/>
          <input type="password" className="form-control" placeholder="Phone" /><br/><br/>
          
          <button onClick={this.handleLogout}>SALIR</button> 
          <button onClick={() => navigateTo('pagina-3')}>SIGUIENTE</button>

        </div>
      );
    }
    else {
      return(
        <div className="Center">
          <img src="https://image.ibb.co/j0aCC7/logobike.png" alt="logobike" /><br/>
          <button className="btn" onClick={this.handleAuth}>LOGIN CON GMAIL</button>
          <button className="btn" onClick={() => this.props.navigateTo('pagina-2')}>REGISTRATE</button> 
        </div>
      );
    }
  }

  render(navigateTo) {
    return (
      <div className="App Center">
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
