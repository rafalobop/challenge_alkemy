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
                    </div>
                  </div>
                  <div className="face front">
                    <div className="card-front-container">
                      <div className="card-info">
                        <div className="card-header">
                          <div className="publisher">
                            <p>{info.biography.publisher}</p>
                          </div>
                          <div className="card-title">
                            <h3>{info.name}</h3>
                          </div>
                          <div className="card-number">
                            <h4>{info.id}</h4>
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
                          <div className="hero-info">
                            <ul>
                              <li>{info.appearance.height[1]}</li>
                              <li>{info.appearance.weight[1]}</li>
                            </ul>
                          </div>
                          <div className="hero-description">
                            <ul>
                              <li>{info.biography.fullName}</li>
                              <li>{info.biography.aliases[0]}</li>
                              <li>{info.biography.placeOfBirth}</li>
                            </ul>
                          </div>

                          <div className="hero stats">
                            <ul>
                              <li>{info.powerstats.intelligence}</li>
                              <li>{info.powerstats.strenght}</li>
                              <li>{info.powerstats.speed}</li>
                              <li>{info.powerstats.durability}</li>
                              <li>{info.powerstats.power}</li>
                              <li>{info.powerstats.combat}</li>
                            </ul>
                          </div>
                          <div className="overall-container">
                            <div className="overall">
                              <p></p>
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
