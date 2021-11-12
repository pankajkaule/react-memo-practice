import React, { useContext } from "react";
import { ThemeContext } from "../context/Theme";
const Contextcard = () => {
  const { themeState, themeDispatch } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: themeState.theme === "dark" ? "green" : "blue",
      }}
    >
      contextcard
      <h1>{themeState.theme}</h1>
      <button
        onClick={() => {
          themeDispatch({ type: "TOGGLE_THEME" });
        }}
      >
        click here
      </button>
    </div>
  );
};

export default Contextcard;
