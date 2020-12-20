import { createContext, useState } from "react";
import React from "react";

export const ModalContext = createContext();

export const ModalProvider = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  return (
    <ModalContext.Provider
      value={{ showModal, modalTitle, setModalTitle, setShowModal }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};
