import React, { createContext, useReducer } from 'react';

export default function (reducer, actions, initialState) {
  const Context = createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const bindActionCreators = {};

    for (let key in actions) {
      bindActionCreators[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...bindActionCreators }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
}
