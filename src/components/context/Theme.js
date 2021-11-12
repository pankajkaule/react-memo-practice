import React, { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import themeReducer from "../utils/reducers/themeReducer";
import themeState from "../utils/store/theme";

export const ThemeContext = createContext();

const ThemeStore = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, themeState);
  return (
    <ThemeContext.Provider
      value={{ themeState: state, themeDispatch: dispatch }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

ThemeStore.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeStore;
