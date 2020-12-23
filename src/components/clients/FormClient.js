import React, { useContext, useEffect, useState } from "react";
import { ClienteContext } from "../../context/clientContext";
import { ModalContext } from "../../context/ModalContext";

const FormClient = () => {
  const initialState = {
    nombres: "",
    apellidos: "",
    direccion: "",
    telefono: "",
    email: "",
  };

  const {
    currentClient,
    registrarCliente,
    modificarCliente,
    obtenerCliente,
  } = useContext(ClienteContext);

  const [datosForm, setDatosForm] = useState(initialState);
  const [mensaje, setMensaje] = useState(null);
  useEffect(() => {
    if (currentClient !== null) {
      setDatosForm({
        ...currentClient,
        direccion:
          currentClient.direccion  ? currentClient.direccion : "",
        telefono: currentClient.telefono  ? currentClient.telefono : "",
      });
    } else {
      setDatosForm(initialState);
    }
    // eslint-disable-next-line
  }, [currentClient]);

  const { setShowModal } = useContext(ModalContext);

  const handleChange = (e) => {
    setDatosForm({
      ...datosForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    //validar
    if (
      datosForm.nombres.trim() === "" ||
      datosForm.apellidos.trim() === "" ||
      datosForm.email.trim() === ""
    ) {
      setMensaje("Los camposs nombre, apellidos y email son obligatorios.");
      return;
    }

    currentClient !== null
      ? modificarCliente(client())
      : registrarCliente(client());

    closeModal();
  };

  const client = () => {
    let clientTemp = { ...datosForm };
    if (datosForm.direccion === "") delete clientTemp.direccion;
    if (datosForm.telefono === "") delete clientTemp.telefono;

    return clientTemp;
  };

  const cleanForm = () => {
    setMensaje(null);
    setDatosForm(initialState);
  };

  const closeModal = () => {
    setShowModal(false);
    cleanForm();
    obtenerCliente(null);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      {mensaje ? <div className="notification is-danger">{mensaje}</div> : null}
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Nombre Completo</label>
        </div>
        <div className="field-body">
          <div className="field">
            <p className="control is-expanded has-icons-left">
              <input
                autoComplete="off"
                className="input"
                type="text"
                placeholder="Nombre"
                name="nombres"
                value={datosForm.nombres}
                onChange={handleChange}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control is-expanded">
              <input
                autoComplete="off"
                className="input"
                type="text"
                placeholder="Apellidos"
                name="apellidos"
                value={datosForm.apellidos}
                onChange={handleChange}
              />
            </p>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Direccion</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control is-expanded has-icons-left">
              <input
                autoComplete="off"
                className="input"
                type="text"
                placeholder="Ingrese su direccion"
                name="direccion"
                value={datosForm.direccion}
                onChange={handleChange}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-map-marked-alt"></i>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Telefono</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control is-expanded has-icons-left">
              <input
                autoComplete="off"
                className="input"
                type="text"
                placeholder="Telefono"
                name="telefono"
                value={datosForm.telefono}
                onChange={handleChange}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-phone"></i>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Email</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control is-expanded has-icons-left">
              <input
                autoComplete="off"
                className="input"
                type="email"
                placeholder="Ingrese su Email"
                name="email"
                value={datosForm.email}
                onChange={handleChange}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label"></div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-primary mr-1">
                Guardar
              </button>
              <button type="button" className="button" onClick={closeModal}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormClient;
