import React from 'react';

const Inscription = () => (
  <div className="Inscription Center">
      <h1>¡Bienvenidos(a)</h1>
      <p>Para ser parte de nuetra comunidad completa los siguientes datos por favor! </p><br/>
      <form>
        <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Name"/><br/>
        <input type="password" class="form-control" placeholder="DNI" /><br/>
        <input type="password" class="form-control" placeholder="Phone" /><br/>
        <div className="Center">
        <button type="submit" class="btn btn-primary">SIGUIENTE</button><br/>
        </div>
      </form>
  </div>
  )

export default Inscription