import React, { useContext, useEffect } from "react";
import { ClientsContext } from "../../context/ClientsContext";

import RowClient from "./RowClient";

const TableClient = () => {
  const {clientesList, setClientesList} = useContext(ClientsContext);

  useEffect(() => {
    const API = async () => {
      const resp = await fetch("http://localhost:9090/api/clientes");
      const data = await resp.json();
      setClientesList(data);
    };
    API();
  }, [setClientesList]);



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
          {clientesList.map((cliente) => (
            <RowClient cliente={cliente} key={cliente.idCliente}/>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default TableClient;
