import React, { useState, useEffect } from 'react';
import '../css/listaheroes.css';
import Card from '../components/Card';
import HeroSearch from '../components/HeroSearch';
import { getHeroes } from '../helpers/rutaHeroes';

const ListaHeroes = () => {
  const [heroes, setHeroes] = useState({
    data: [],
    loading: true,
  });

  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    getHeroes().then((hero) => {
      setHeroes({
        data: hero,
        loading: false,
      });
    });
  }, []);

  const datosHeroes = heroes.data.map((item) => {
    return item;
  });

  let heroesFilter = [];
  if (!heroes.loading) {
    heroesFilter = heroes.data.filter((heroes) => {
      return heroes.name.includes(inputValue);
    });
  }

  return (
    <>
      <div className="home-title">
        <h1>Todos los Personajes</h1>
      </div>
      <div className="search">
        <HeroSearch inputValue={inputValue} setInputValue={setInputValue} />
      </div>

      <div className="list-container">
        {heroes.loading && (
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
        {!heroes.loading && (
          <div className="row">
            {heroesFilter.map((item) => {
              // console.log(item);
              return <Card key={item.id} item={item} />;
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default ListaHeroes;
