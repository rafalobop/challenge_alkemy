import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import Card from '../components/Card';
const ModalHero = ({ openModal, toggle, item }) => {
  console.log(item);

  return (
    <>
      <Modal isOpen={openModal} toggle={toggle} className="modal-hero">
        <ModalHeader>
          <div className="modal-header">
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
            <img src={item.images.md} alt={item.name} />
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
          <Button color="primary" onClick={toggle}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ModalHero;
