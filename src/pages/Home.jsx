import React, { useState } from 'react';
import HeroSearch from '../components/HeroSearch';
import ListaHeroes from '../components/ListaHeroes';
import '../css/home.css';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  return (
    <>
      <div className="home-title">
        <h1>Todos los Personajes</h1>
      </div>
      <HeroSearch inputValue={inputValue} setInputValue={setInputValue} />
      <ListaHeroes />
    </>
  );
};

export default Home;
