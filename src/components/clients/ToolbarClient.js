import React, { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";

export const ToolbarClient = () => {
  const { setShowModal, setModalTitle } = useContext(ModalContext);

  const openModal = () => {
    setShowModal(true);
    setModalTitle("Agregar Cliente");
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
