import React, { useState } from 'react';
import swal from 'sweetalert';
import MyTeam from '../components/MyTeam';
// import { Formik, Form, Field } from 'formik';

const EquipoList = () => {
  const [team, setTeam] = useState({
    name: '',
    heroes: [],
  });

  const handleChange = (e) => {
    setTeam({
      [team.name]: e.target.value,
    });
  };
  const saveTeam = (e) => {
    e.preventDefault();
    setTeam({
      [team.name]: e.target.value,
    });
    swal({
      title: 'Listo!',
      text: 'Equipo Creado!',
      icon: 'success',
    });
    e.target.reset();
  };

  return (
    <>
      <h1>{team.name}</h1>
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
      <MyTeam />;
    </>
  );
};

export default EquipoList;
