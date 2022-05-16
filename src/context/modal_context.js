import React, { useContext, useReducer } from "react";
import reducer from "../reducers/modal_reducer";

const initialState = {
  createNewAccountModalIsHidden: false,
};

const ModalContext = React.createContext();

export const ModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //show modal

  const showCreateAccountModalHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "ShowCreateAccountModal" });
  };

  return (
    <ModalContext.Provider value={{ ...state, showCreateAccountModalHandler }}>
      {children}
    </ModalContext.Provider>
  );
};

//make use of context
export const useModalContext = () => {
  return useContext(ModalContext);
};
