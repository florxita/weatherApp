import React from "react";
import DayCard from "./DayCard";

const ExtendedContainer = () => {
  return (
    <section className="bottom-info flex col mt-1">
      <h2 className="med-sub-title mt-1">Pronóstico Extendido</h2>
      <div className="days-container flex">
        <DayCard />
      </div>
    </section>
  );
};
export default ExtendedContainer;
