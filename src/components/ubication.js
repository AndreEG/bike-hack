import React from 'react'
import Posicion from './Posicion'

import { connect } from 'react-redux';


const Ubication = ({navigateTo}) => (
  <div className="heigth-100">
  <div className="progress"> 1 - 2 - 3</div>
  <p className="main-paragraph">Finalmente envianos tu ubicación</p>
  <div className="flex">
  <Posicion/>
  </div>
  <br/>
  <div className="flex"><input className="input" type="text" disabled/></div>
  
  <div className="Center">
    <button className="btn">REGRESAR</button>
    <button className="btn"  onClick={() => navigateTo('pagina-5')}>FINALIZAR</button>

  </div>
  <br/>
  <br/>
  <p className="text-center">*Ten en cuenta que verificaremos tu ubicación con la direccion que figura en tu DNI</p>
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
)(Ubication);
