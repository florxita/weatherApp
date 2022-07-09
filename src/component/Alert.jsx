import React, { useState, useContext } from "react";
import { DataContext } from "../context/DataProvider";

const Alert = ({ handleEvent, mensaje, setMsj }) => {
  const { setError, setLocation } = useContext(DataContext);

  const funcionBtn = () => {
    setMsj("");
    setError(false);
    setLocation("");
  };

  return (
    <>
      <section className="overlay flex col">
        <div
          onChange={handleEvent}
          className="alert-container flex col card g-1"
        >
          <span className="sub-title">Ups!</span>
          <p>{mensaje}</p>
          <button onClick={funcionBtn} className="btn ">
            <span>Aceptar</span>
          </button>
        </div>
      </section>
    </>
  );
};
export default Alert;
