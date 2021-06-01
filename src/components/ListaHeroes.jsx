import React from 'react';
import '../css/listaheroes.css';
import Card from '../components/Card';

const ListaHeroes = () => {
  return (
    <>
      <div className="list-container">
        <div className="col">
          <div className="row">
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};

export default ListaHeroes;
