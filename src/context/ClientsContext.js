import { createContext, useState } from "react";
import React from "react";

export const ClientsContext = createContext();

export const ClientsProvider = ({ children }) => {
  const [clientesList, setClientesList] = useState([]);
  return (
    <ClientsContext.Provider value={{ clientesList, setClientesList }}>
      {children}
    </ClientsContext.Provider>
  );
};
