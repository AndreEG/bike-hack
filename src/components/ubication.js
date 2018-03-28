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
    <button className="btn" data-toggle="modal" data-target="#exampleModal">FINALIZAR</button>

  </div>
  <br/>
  <br/>
  <p className="text-center">*Ten en cuenta que verificaremos tu ubicación con la direccion que figura en tu DNI</p>
    
  {/* modal */}
  <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body Center">
          <h1 className="modal-title Center" id="exampleModalLabel">Felicidades!!</h1><br/>
          <h3>Completaste todos los pasos tu codigo es:</h3>
          <div className="Codigo">
            <h3>SB-1421</h3>
          </div><br/>
          <button className="btn" data-dismiss="modal" onClick={() => navigateTo('pagina-5')}>OK</button> 
        </div>
        
      </div>
    </div>
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
)(Ubication);
