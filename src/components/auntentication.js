import React from 'react'
import MyMap from './map'
import { connect } from 'react-redux';


const Autentication = ({navigateTo}) => (
  <div className="heigth-100">
  <div className="progress"> 1 - 2 - 3</div>
  <p className="main-paragraph" >Para nosotros es importante tu seguidad, completa tu inscripción con lo siguiente</p>
  <MyMap/>
  <MyMap/>
  <div className="flex last-box">
  <MyMap/>
  </div>
  <div className="Center">
    <button className="btn" onClick={() => navigateTo('pagina-2')}>REGRESAR</button>
    <button className="btn" onClick={() => navigateTo('pagina-4')}>SIGUIENTE</button><br/>
  </div>
  </div>
);
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
)(Autentication);