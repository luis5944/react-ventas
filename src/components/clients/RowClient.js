import React, { useContext } from "react";
import { ClientsContext } from "../../context/ClientsContext";
import { ModalContext } from "../../context/ModalContext";

const RowClient = ({ cliente }) => {
  const { clientesList, setClientesList } = useContext(ClientsContext);

  const handleDelete = async () => {
    await fetch(`http://localhost:9090/api/clientes/${cliente.idCliente}`, {
      method: "DELETE",
    });
    setClientesList(
      clientesList.filter((c) => c.idCliente !== cliente.idCliente)
    );
  };

  const { setShowModal, setModalTitle } = useContext(ModalContext);

  const openModalUpdateClient = () => {
    setShowModal(true);
    setModalTitle("Actualizar Cliente");
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
