import React, { useContext } from "react";
import { ClienteContext } from "../../context/clientContext";
import { ModalContext } from "../../context/ModalContext";

export const ToolbarClient = () => {
  const { setShowModal, setModalTitle } = useContext(ModalContext);
  const { obtenerCliente } = useContext(ClienteContext);

  const openModal = () => {
    setShowModal(true);
    setModalTitle("Agregar Cliente");
    obtenerCliente(null);
  };

  return (
    <div className="container has-text-centered">
      <button className="button is-small is-warning" onClick={openModal}>
        <span className="icon is-small">
          <i className="fas fa-user-plus"></i>
        </span>
        <span>Nuevo Cliente</span>
      </button>
    </div>
  );
};
