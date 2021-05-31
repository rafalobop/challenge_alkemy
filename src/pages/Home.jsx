import React from 'react';
import ListaHeroes from '../components/ListaHeroes';
import '../css/home.css';

const Home = () => {
  return (
    <>
      <div className="home-title">
        <h1>Todos los Personajes</h1>
      </div>
      <ListaHeroes />
    </>
  );
};

export default Home;
