import React from 'react'
import { connect } from 'react-redux'
import MyMap  from './map'
import Login  from './Login'
import Inscription  from './inscription'

// const App = () => (
//   <div>
//   <Login/>
//   <h1>tivi tivi</h1>
//   <Inscription />
//   <MyMap />
  
//   </div>
// );


const App = ({ paginaActual, navigateTo }) => {
  switch (paginaActual) {
    case 'pagina-1':
      return <Inscription
      navigateTo={navigateTo}/>
    case 'pagina-2':
      return <Login
      navigateTo={navigateTo}/>
    case 'pagina-3':
      return <MyMap
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
