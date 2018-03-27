import React from 'react'
import MyMap from './map'
import './styles.css';


const Autentication = () => (
  <div className="heigth-100">
  <div className="progress "> 1 - 2 - 3</div>
  <p className="main-paragraph" >Para nosotros es importante tu seguidad, <br/> Completa tu inscripción con lo siguiente</p>
  <MyMap/>
  <MyMap/>
  <div className="flex last-box">
  <MyMap/>
  </div>
  <button className=" btn float-rigth">Siguiente</button>
  
  </div>
);
export default Autentication