import React from "react";
import TableClient from "../components/clients/TableClient";
import { ToolbarClient } from "../components/clients/ToolbarClient";
import Layout from "../components/commons/Layout";
import Modal from "../components/commons/Modal";

const Clients = () => {
  return (
    <Layout>
      <div className="panel">
        <div className="panel-heading">Clientes</div>
        <div className="box">
          <ToolbarClient />
          <TableClient />
        </div>
      </div>
      <Modal  />
    </Layout>
  );
};

export default Clients;
