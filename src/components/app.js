import React from 'react'
import { connect } from 'react-redux'
import { render } from 'react-dom'
import MyMap  from './map'
import Login  from './Login'
import Inscription  from './inscription'
import Autentication from './auntentication'
import Ubication from './ubication'


const App = ({ paginaActual, navigateTo }) => {
  switch (paginaActual) {
    case 'pagina-1':
      return <Login
      navigateTo={navigateTo}/>
    case 'pagina-2':
      return <Inscription
      navigateTo={navigateTo}/>
    case 'pagina-3':
      return <Autentication
      navigateTo={navigateTo}/>
    case 'pagina-4':
      return <Ubication
      navigateTo={navigateTo}/>
    default:
      break;
  }
  return null
}

const mapStateToProps = ({ paginaActual }) => ({
  paginaActual
});

const mapDispatchToProps = (dispatch) => ({
  navigateTo: (pagina) => {
    dispatch({
      type: 'NAVIGATE_TO',
      pagina
    })
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

