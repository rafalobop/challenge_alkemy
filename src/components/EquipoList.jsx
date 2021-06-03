import React, { useState } from 'react';
import swal from 'sweetalert';

const EquipoList = () => {
  const [teamName, setTeamName] = useState({
    name: '',
    heroes: [],
  });
  //   console.log(teamName);

  const handleChange = (e) => {
    setTeamName({
      name: e.target.value,
    });
  };
  const saveTeam = (e) => {
    e.preventDefault();
    setTeamName({
      name: e.target.value,
    });
    console.log(teamName);
    swal({
      title: 'Listo!',
      text: 'Equipo Creado!',
      icon: 'success',
    });
    e.target.reset();
  };
  return (
    <>
      <div className="equipo-container">
        <div className="datos-equipo">
          <form action="" onSubmit={saveTeam}>
            <label htmlFor="name">Nombre del equipo</label>
            <input
              type="text"
              placeholder="Ingresa el nombre"
              onChange={handleChange}
            />
            <button>Crear Equipo</button>
          </form>
        </div>
        <div className="heroes-list"></div>
      </div>
    </>
  );
};

export default EquipoList;
