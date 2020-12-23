import React, { useContext, useEffect } from "react";

import { ClienteContext } from "../../context/clientContext";

import RowClient from "./RowClient";

const TableClient = () => {
  const { clientsList, obtenerClientes } = useContext(ClienteContext);

  useEffect(() => {
    obtenerClientes();
    // eslint-disable-next-line
  }, []);

  if (clientsList.length === 0) {
    return <p className="has-text-centered py-2">No existe clientes.</p>;
  }

  return (
    <div className="table-container">
      <table className="table is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>Acciones</th>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Dirección</th>
            <th>Teléfono</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {clientsList.map((cliente) => (
            <RowClient cliente={cliente} key={cliente.idCliente} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableClient;
