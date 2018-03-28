import React from 'react'
import Posicion from './Posicion'


const Ubication = () => (
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
    <button className="btn">FINALIZAR</button>
  </div>
  <br/>
  <br/>
  <p className="text-center">*Ten en cuenta que verificaremos tu ubicación con la direccion que figura en tu DNI</p>
  </div>
 
);
export default Ubication