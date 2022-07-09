import React, { useState, createContext, useReducer } from "react";
// import DataReducer from "./DataReducer";
// import { initialStyle } from "./DataReducer";

export const DataContext = createContext(false);

const DataProvider = ({ children }) => {
  // const [style, dispatch] = useReducer(DataReducer, initialStyle);

  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [location, setLocation] = useState("");
  const [forecast, setForecast] = useState([]);
  const [tempmax, setTempmax] = useState([]);
  // const [position, setPosition] = useState("center-position");
  const [theme, setTheme] = useState("light");
  const [styles, setStyles] = useState("normal");
  // const [title, setTitle] = useState("");

  const searchLocation = async () => {
    const apiKey = "391a62551c59651d2d1a72a58879d3cd";
    let urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}&lang=es&units=metric`;
    let urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&APPID=${apiKey}&lang=es&units=metric&xclude=current,hourly,minutely,alerts`;

    const responseWeather = await fetch(urlWeather);
    if (responseWeather.status !== 200) {
      setError(true);
    } else {
      const dataWeather = await responseWeather.json();
      const objWeather = createInfo(dataWeather);
      setData(objWeather);
      setLocation("");
    }

    const responseForecast = await fetch(urlForecast);
    const dataForecast = await responseForecast.json();

    const sunrise = dataForecast.list.filter((res) =>
      res.dt_txt.includes("06:00:00")
    );

    const res1 = sunrise.slice(0, 3);

    const sunset = dataForecast.list.filter((res) =>
      res.dt_txt.includes("18:00:00")
    );
    const res2 = sunset.slice(0, 3);
    const resultadoMax = res2.map((t) => t.main.temp);

    setForecast(res1);
    setTempmax(resultadoMax);
  };

  const createInfo = (data) => {
    const {
      cod,
      main: { temp, temp_min, temp_max, humidity },
      name,
      clouds: { all },
      sys: { country, sunrise, sunset },
      weather,
      wind: { speed },
    } = data;
    const { main: description, icon } = weather[0];

    return {
      cod,
      temp,
      temp_min,
      temp_max,
      humidity,
      name,
      country,
      sunrise,
      sunset,
      description,
      icon,
      speed,
      all,
    };
  };

  const dateBuilder = (d) => {
    let months = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];

    let days = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miercoles",
      "Jueves",
      "Viernes",
      "Sabado",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  Date.prototype.addDays = function (days) {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };

  const value = {
    data,
    location,
    searchLocation,
    setData,
    setLocation,
    forecast,
    setForecast,
    createInfo,
    dateBuilder,
    tempmax,
    // position,
    // setPosition,
    theme,
    setTheme,
    error,
    setError,
    // title,
    // setTitle,
    // style,
    // dispatch,
    styles,
    setStyles,
  };

  return (
    <DataContext.Provider value={value}> {children} </DataContext.Provider>
  );
};
export default DataProvider;
