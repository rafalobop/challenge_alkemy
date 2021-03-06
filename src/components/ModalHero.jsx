import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../css/modalhero.css';
import swal from 'sweetalert';
const ModalHero = ({ openModal, toggle, item }) => {
  const [team, setTeam] = useState([]);

  const agregarHeroe = (id, name) => {
    console.log(id, name);
    swal({
      title: 'Listo!',
      text: 'Heroe agregado al equipo!',
      icon: 'success',
    });
    toggle();
  };
  // useEffect((id) => {
  //   setTeam([...team, id]);
  // }, []);
  return (
    <>
      <Modal isOpen={openModal} toggle={toggle} className="modal-hero">
        <ModalHeader>
          <div className="modal-header-top">
            <div className="modal-top">
              <div className="modal-publisher">
                <p>{item.biography.publisher}</p>
              </div>
              <div className="modal-card-number">
                <h4>{item.id}</h4>
              </div>
            </div>
            <div className="modal-bottom">
              <div className="modal-card-title">
                <h3>{item.name}</h3>
              </div>
            </div>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="modal-left">
            <div className="modal-img-container">
              <img src={item.images.md} alt={item.name} />
            </div>
          </div>
          <div className="modal-right">
            <div className="modal-info">
              <p>Peso: {item.appearance.weight[1]}</p>
              <p>Altura: {item.appearance.height[1]}</p>
              <p>Nombre: {item.name}</p>
              <p>Alias: {item.biography.aliases}</p>
              <p>Color de Ojos: {item.appearance.eyeColor}</p>
              <p>Color de Pelo: {item.appearance.hairColor}</p>
              <p>Lugar de Trabajo: {item.work.base}</p>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button className="button-modal" onClick={toggle}>
            Cerrar
          </Button>
          <Button className="button-add" onClick={() => agregarHeroe(item)}>
            Agregar al Equipo
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ModalHero;
