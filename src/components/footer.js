
import React from 'react';
import './Header.css';

const Footer = () =>(
  <footer>
      <div className="container-fluid">
        <div className="row text-center">
          <div className="col-xs-4">
            <h1><span className="glyphicon glyphicon-globe" aria-hidden="true"></span></h1>
            <p >Explora</p>
          </div>
          <div className="col-xs-4">
            <h1><span className="glyphicon glyphicon-pushpin" aria-hidden="true"></span></h1>
            <p >Grabar ruta</p>
          </div>
          <div className="col-xs-4">
          <h1><span className="glyphicon glyphicon-user" aria-hidden="true"></span></h1>
          <p >Perfil</p>
          </div>

        </div>

      </div>

    </footer>
)
 export default Footer
