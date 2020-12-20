import React from "react";
import TableClient from "../components/clients/TableClient";
import Layout from "../components/commons/Layout";

const Clients = () => {
  return (
    <Layout>
      <div className="panel">
        <div className="panel-heading">Clientes</div>
        <div className="box">
          <div className="container has-text-centered">
            <button className="button is-small is-warning">
              <span className="icon is-small">
                <i className="fas fa-user-plus"></i>
              </span>
              <span>Nuevo Cliente</span>
            </button>
          </div>
          <TableClient />
        </div>
      </div>
    </Layout>
  );
};

export default Clients;
