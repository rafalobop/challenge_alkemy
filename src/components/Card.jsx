import React, { useState } from 'react';
import '../css/card.css';
import ModalHero from '../components/ModalHero';

const Card = ({ item }) => {
  const [openModal, setOpenModal] = useState(false);
  const toggle = () => setOpenModal(!openModal);

  return (
    <>
      <div className="card" key={item.id} onClick={toggle}>
        <div className="face back">
          <div className="card-back-container">
            <div className="back-img-container">
              <img src={item.images.sm} alt={item.name} className="back-img" />
              <ModalHero openModal={openModal} toggle={toggle} item={item} />
            </div>
            <div className="bottom">
              <div className="hero-stats">
                <div className="stats-container">
                  <p>Inteligencia: {item.powerstats.intelligence}</p>
                  <p>Fuerza: {item.powerstats.strength}</p>
                  <p>Velocidad: {item.powerstats.speed}</p>
                  <p>Dureza: {item.powerstats.durability}</p>
                  <p>Poder: {item.powerstats.power}</p>
                  <p>Combate: {item.powerstats.combat}</p>
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
            <div className="card-item">
              <div className="card-header">
                <div className="top">
                  <div className="publisher">
                    <p>{item.biography.publisher}</p>
                  </div>
                  <div className="card-number">
                    <h4>{item.id}</h4>
                  </div>
                </div>
                <div className="bottom">
                  <div className="card-title">
                    <h3>{item.name}</h3>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="img-container">
                  <img
                    src={item.images.md}
                    alt={item.name}
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
                      <p>{item.appearance.height[1]}</p>
                    </div>
                    <div className="weight">
                      <h4>Weight</h4>
                      <hr />
                      <p>{item.appearance.weight[1]}</p>
                    </div>
                  </div>
                  <div className="orientation">
                    <p className="alignment">{item.biography.alignment}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
