import {
  DELETE_CLIENT,
  GET_CLIENT,
  GET_CLIENTS,
  SIGN_UP,
  UPDATE_CLIENT,
} from "../constants/actionTypes";

export const clienteReducer = (state, action) => {
  switch (action.type) {
    case GET_CLIENTS:
      return { ...state, clientsList: action.payload };

    case SIGN_UP:
      return { ...state, clientsList: [...state.clientsList, action.payload] };
    case GET_CLIENT:
      return { ...state, currentClient: action.payload };
    case UPDATE_CLIENT:
      return {
        ...state,
        clientsList: state.clientsList.map((cliente) =>
          cliente.idCliente === action.payload.idCliente
            ? action.payload
            : cliente
        ),
      };
    case DELETE_CLIENT:
      return {
        ...state,
        clientsList: state.clientsList.filter(
          (cliente) => cliente.idCliente !== action.payload
        ),
      };
    default:
      return state;
  }
};
