import React from 'react';
import { connect } from 'react-redux';

  const Inscription = ({navigateTo}) => (
    <div className="Inscription Center">
      <h1>¡Bienvenidos(a)</h1>
      <p>Para ser parte de nuetra comunidad completa los siguientes datos por favor! </p><br/>
      <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Name"/><br/>
      <input type="password" className="form-control" placeholder="DNI" /><br/>
      <input type="password" className="form-control" placeholder="Phone" /><br/>
      <div className="Center">
        <button className="btn"  onClick={() => navigateTo('pagina-1')}>REGRESAR</button>
        <button  className="btn" onClick={() => navigateTo('pagina-3')}>SIGUIENTE</button><br/>
      </div>
    </div>
  )
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
  )(Inscription);
