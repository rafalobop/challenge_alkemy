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
  const [contarPagina, setContarPagina] = useState(0);
  useEffect(() => {
    getHeroes(contarPagina).then((datos) => {
      setHeroes({
        data: datos,
        loading: false,
      });
    });
  }, [contarPagina]);

  const [inputValue, setInputValue] = useState('');
  let heroesFilter = [];

  useEffect(() => {
    getHeroes().then((hero) => {
      setHeroes({
        data: hero,
        loading: false,
      });
    });
  }, []);

  const handlePaginaNext = () => {
    let cantidadArray = heroes.data.length;
    if (cantidadArray >= 10) {
      setContarPagina(contarPagina + 10);
    }
  };

  const handlePaginaPrev = () => {
    if (contarPagina >= 10) {
      setContarPagina(contarPagina - 10);
    }
  };

  const datosHeroes = heroes.data.map((item) => {
    return item;
  });

  if (!heroes.loading) {
    heroesFilter = heroes.data.filter((heroes) => {
      // console.log(heroes.name.includes(inputValue));
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
      <div className="pagination">
        <button
          className="btn btn-outline-info mr-2"
          onClick={handlePaginaPrev}
          disabled={contarPagina === 0 ? true : false}
        >
          <i className="fa fa-chevron-left" aria-hidden="true"></i>
        </button>
        <button
          className="btn btn-outline-info"
          onClick={handlePaginaNext}
          disabled={heroes.data.length < 10 ? true : false}
        >
          <i className="fa fa-chevron-right" aria-hidden="true"></i>
        </button>
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
