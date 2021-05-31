import React from 'react';
const Equipo = () => {
  return (
    <>
      <div className="equipo container">
        <h1>Crea tu Equipo</h1>
        <div className="datos-equipo">
          <form action="">
            <label htmlFor="name">Nombre del equipo</label>
            <input type="text" placeholder="Ingresa el nombre" />
            <button>Crear Equipo</button>
          </form>
        </div>
        <div className="heroes-list"> </div>
      </div>
    </>
  );
};

export default Equipo;
