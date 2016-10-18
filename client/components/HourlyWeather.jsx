var HourlyWeather = ({hourly}) => (
  <div>
    <p>{hourly[0].summary}</p>
  </div>
);

window.HourlyWeather = HourlyWeather;
