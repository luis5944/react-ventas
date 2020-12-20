import React, { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";

const Modal = (props) => {
  const { showModal, setShowModal, modalTitle, setModalTitle } = useContext(
    ModalContext
  );

  const cerrarModal = () => {
    setShowModal(false);
    setModalTitle("");
  };

  return (
    <div className={`modal ${showModal ? "is-active" : ""}`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{modalTitle}</p>
          <button
            className="delete"
            aria-label="close"
            onClick={cerrarModal}
          ></button>
        </header>
        <section className="modal-card-body">Contenido</section>
        <footer className="modal-card-foot">
          <button className="button is-success">Guardar Cambios</button>
          <button className="button" onClick={cerrarModal}>
            Cancelar
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Modal;
