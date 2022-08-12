import React, { useContext, useState } from "react";
import { DataContext } from "../context/DataProvider";
import ExtendedContainer from "./ExtendedCard";

const Card = () => {
  const { data, dateBuilder } = useContext(DataContext);

  const {
    temp,
    temp_min,
    temp_max,
    speed,
    all,
    icon,
    description,
    humidity,
    name,
  } = data;

  return (
    <>
      {data.temp && (
        <div className="card flex col color-txt">
          <div className="flex col">
            <h1 className="huge-text ">{temp.toFixed()}°</h1>
            <h2 className="big-title">{name}</h2>
            <span className="actual-date">{dateBuilder(new Date())}</span>
          </div>
          <div className="center-info flex col">
            <figure className="icon-content">
              <img src={`assets/icons/${icon}.svg`} />
            </figure>
            <span className="description review-text">{description}</span>
            <div className="temp-day flex">
              <span>
                <i className="fa-solid fa-arrow-down-long"></i>
                {temp_min.toFixed()}°
              </span>
              <span>
                <i className="fa-solid fa-arrow-up-long"></i>
                {temp_max.toFixed()}°
              </span>
            </div>
          </div>

          <section className="extra-info flex g-1 mt-1">
            <div className="flex col">
              <span className="title">Lluvias</span>
              <span className="numb">{all} %</span>
            </div>
            <hr className="divisor" />
            <div className="flex col">
              <span className=" title">Húmedad</span>
              <span className="numb">{humidity} %</span>
            </div>
            <hr className="divisor" />
            <div className="flex col">
              <span className="title">Viento</span>
              <span className="numb">{speed.toFixed()}Km/h</span>
            </div>
          </section>

          <ExtendedContainer />
        </div>
      )}
    </>
  );
};
export default Card;
