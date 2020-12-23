import React, { useContext } from "react";
import { ClienteContext } from "../../context/clientContext";

import { ModalContext } from "../../context/ModalContext";

const RowClient = ({ cliente }) => {
  const { setShowModal, setModalTitle } = useContext(ModalContext);
  const { obtenerCliente, eliminarCliente } = useContext(ClienteContext);

  const handleDelete = () => {
    eliminarCliente(cliente.idCliente);
  };

  const openModalUpdateClient = () => {
    obtenerCliente(cliente);
    setModalTitle("Actualizar Cliente");
    setShowModal(true);
  };

  return (
    <tr>
      <td>
        <button
          className="button is-small is-info mr-1"
          title="Modificar"
          onClick={openModalUpdateClient}
        >
          <span className="icon is-small">
            <i className="fas fa-user-edit"></i>
          </span>
        </button>
        <button
          className="button is-small is-danger"
          title="Eliminar"
          onClick={handleDelete}
        >
          <span className="icon is-small">
            <i className="fas fa-trash"></i>
          </span>
        </button>
      </td>
      <td>{cliente.nombres}</td>
      <td>{cliente.apellidos}</td>
      <td>{cliente.direccion}</td>
      <td>{cliente.telefono}</td>
      <td>{cliente.email}</td>
    </tr>
  );
};

export default RowClient;
