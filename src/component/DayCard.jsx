import { DataContext } from "../context/DataProvider";
import { useContext } from "react";

const DayCard = () => {
  const { forecast, dateBuilder, tempmax } = useContext(DataContext);

  return (
    <>
      {forecast &&
        forecast.map((f, i) => {
          return (
            <div
              className="day-card col flex b-radius color-txt mt-1"
              key={f.dt_txt}
            >
              <span className="small-sub-title">
                {dateBuilder(new Date(f.dt_txt))
                  .split(" ")
                  .slice(0, 2)
                  .join(" ")}
              </span>
              <img src={`src/img/icons/${f.weather[0].icon}.svg`} alt="" />
              <div className="min-max flex g-1">
                <span className="temp-num">
                  <i className="fa-solid fa-arrow-down-long"></i>
                  <p className="small-text">{f.main.temp_min.toFixed()}°</p>
                </span>
                <span className="temp-num">
                  <i className="fa-solid fa-arrow-up-long"></i>
                  <p className="small-text">{tempmax[i].toFixed()}</p>
                </span>
              </div>
            </div>
          );
        })}
    </>
  );
};
export default DayCard;
