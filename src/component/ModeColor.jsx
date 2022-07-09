import React, { useContext } from "react";
import { DataContext } from "../context/DataProvider";

const ModeColor = ({ toggleStyles }) => {
  const { setTheme } = useContext(DataContext);

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  return (
    <>
      <div
        onChange={toggleStyles}
        className={`bg-mode-container mode-position flex`}
      >
        <label className="switch">
          <input id="checkBox" onChange={toggleTheme} type="checkbox" />
          <div className="circle"></div>
          <span className="icons-switch flex">
            <i className="fa-solid fa-sun"></i>
            <i className="fa-solid fa-moon"></i>
          </span>
        </label>
      </div>
    </>
  );
};
export default ModeColor;
