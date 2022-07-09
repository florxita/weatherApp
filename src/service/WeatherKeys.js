  export const apiKey = '391a62551c59651d2d1a72a58879d3cd'
  export let urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}&lang=es&units=metric`;
  export let urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&APPID=${apiKey}&lang=es&units=metric&xclude=current,hourly,minutely,alerts`


      