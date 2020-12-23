import axios from "axios";
import React, { createContext, useReducer } from "react";
import {
  GET_CLIENT,
  SIGN_UP,
  DELETE_CLIENT,
  UPDATE_CLIENT,
  GET_CLIENTS,
} from "../constants/actionTypes";
import { clienteReducer } from "../reducer/clientReducer";

export const ClienteContext = createContext();

export const ClienteContextProvider = (props) => {
  const initialState = {
    clientsList: [],
    currentClient: null,
  };

  const [state, dispatch] = useReducer(clienteReducer, initialState);

  const obtenerClientes = async () => {
    try {
      const { data: clients } = await axios.get(`/clientes`);

      dispatch({
        type: GET_CLIENTS,
        payload: clients,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const registrarCliente = async (cliente) => {
    try {
      const { data: client } = await axios.post(`/clientes`, cliente);
      dispatch({
        type: SIGN_UP,
        payload: client,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const obtenerCliente = async (cliente) => {
    try {
      let clienteActual = null;
      if (cliente) {
        const { data: client } = await axios.get(
          `/clientes/${cliente.idCliente}`
        );
        clienteActual = client;
      }

      dispatch({
        type: GET_CLIENT,
        payload: clienteActual,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const modificarCliente = async (cliente) => {
    try {
      const { data: client } = await axios.put("/clientes", cliente);
      dispatch({
        type: UPDATE_CLIENT,
        payload: client,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const eliminarCliente = async (idCliente) => {
    try {
      await axios.delete(`/clientes/${idCliente}`);
      dispatch({
        type: DELETE_CLIENT,
        payload: idCliente,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ClienteContext.Provider
      value={{
        clientsList: state.clientsList,
        currentClient: state.currentClient,
        obtenerClientes,
        obtenerCliente,
        registrarCliente,
        modificarCliente,
        eliminarCliente,
      }}
    >
      {props.children}
    </ClienteContext.Provider>
  );
};
