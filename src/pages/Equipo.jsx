import React, { useState, useEffect } from 'react';
import '../css/equipo.css';
import EquipoList from '../components/EquipoList';
import { getHeroes } from '../helpers/rutaHeroes';
const Equipo = () => {
  const [teamList, useTeamList] = useState([]);
  const onClick = (hero) => {
    useTeamList = [...teamList, hero];
  };

  useEffect(() => {
    getHeroes().then((hero) => {
      console.log(hero);
    });
  }, []);

  return (
    <>
      {teamList.length === 0 && <h1 className="team-title">Crea tu Equipo</h1>}
      <EquipoList
        onClick={onClick}
        teamList={teamList}
        useTeamList={useTeamList}
      />
    </>
  );
};

export default Equipo;
