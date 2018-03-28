import React from 'react'
import { connect } from 'react-redux';


const Acceso = ({navigateTo}) => (

  <div className="Center">
     <br/>
    <h3 className="text-center white">Tu código: SB-1421</h3><br/><br/><br/>
    <button className="btn-acc imgacc1">Mi tiempo <img className="icoacc" src="https://image.ibb.co/bUf1qS/reloj.png" alt="reloj" /></button>
    <br/>
    <button onClick={() => navigateTo('pagina-6')} className="btn-acc imgacc2">Mapa <img className="icoacc"  src="https://image.ibb.co/cPhsx7/mapa.png" alt="mapa" /></button>
    <button className="btn-acc imgacc2">Otra Bici <img className="icoacc"  src="https://image.ibb.co/ft5qjn/bici.png" alt="bici" /></button>
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
  )(Acceso);



