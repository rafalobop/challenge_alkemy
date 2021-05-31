import React, { useState, useEffect } from 'react';
import '../css/listaheroes.css';
import { getHeroes } from '../helpers/rutaHeroes';

const ListaHeroes = () => {
  const [heroe, setHeroe] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getHeroes().then((hero) => {
      setHeroe({
        data: hero,
        loading: false,
      });
    });
  }, []);
  const datosHeroes = heroe.data.map((datos) => {
    // console.log(datos);
    return datos;
  });
  console.log(`datos:`, datosHeroes);
  return (
    <>
      <div className="list-container">
        <div className="col">
          <div className="row">
            {datosHeroes.map((info) => {
              console.log(info.id);
              return (
                <div className="card">
                  <div className="face back">
                    <div className="card-back-container">
                      <div className="back-img-container">
                        <img
                          src={info.images.sm}
                          alt={info.name}
                          className="back-img"
                        />
                      </div>
                      <div className="bottom">
                        <div className="hero-stats">
                          <div className="stats-container">
                            <p>Inteligencia: {info.powerstats.intelligence}</p>
                            <p>Fuerza: {info.powerstats.strength}</p>
                            <p>Velocidad: {info.powerstats.speed}</p>
                            <p>Dureza: {info.powerstats.durability}</p>
                            <p>Poder: {info.powerstats.power}</p>
                            <p>Combate: {info.powerstats.combat}</p>
                          </div>
                        </div>
                        <div className="overall-container">
                          <div className="overall">
                            <p></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="face front">
                    <div className="card-front-container">
                      <div className="card-info">
                        <div className="card-header">
                          <div className="top">
                            <div className="publisher">
                              <p>{info.biography.publisher}</p>
                            </div>
                            <div className="card-number">
                              <h4>{info.id}</h4>
                            </div>
                          </div>
                          <div className="bottom">
                            <div className="card-title">
                              <h3>{info.name}</h3>
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="img-container">
                            <img
                              src={info.images.md}
                              alt={info.name}
                              className="card-img"
                            />
                          </div>
                        </div>
                        <div className="card-footer">
                          <div className="top">
                            <div className="hero-info">
                              <div className="height">
                                <h4>Height</h4>
                                <hr />
                                <p>{info.appearance.height[1]}</p>
                              </div>
                              <div className="weight">
                                <h4>Weight</h4>
                                <hr />
                                <p>{info.appearance.weight[1]}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListaHeroes;
