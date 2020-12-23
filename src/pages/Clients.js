import React from "react";
import FormClient from "../components/clients/FormClient";
import TableClient from "../components/clients/TableClient";
import { ToolbarClient } from "../components/clients/ToolbarClient";
import Layout from "../components/commons/Layout";
import Modal from "../components/commons/Modal";
import { ClienteContextProvider } from "../context/clientContext";

const Clients = () => {
  return (
    <Layout>
      <ClienteContextProvider>
        <div className="panel">
          <div className="panel-heading">Clientes</div>
          <div className="box">
            <ToolbarClient />
            <TableClient />
          </div>
        </div>
        <Modal>
          <FormClient />
        </Modal>
      </ClienteContextProvider>
    </Layout>
  );
};

export default Clients;
