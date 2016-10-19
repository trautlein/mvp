let HourlyWeather = ({hourly}) => (
  <div>
    <p>In one hour it will be {hourly[1].summary.toLowerCase()} and {hourly[1].temperature}</p>
    <p>In two hours it will be {hourly[2].summary.toLowerCase()} and {hourly[2].temperature}</p>
    <p>In three hours it will be {hourly[3].summary.toLowerCase()} and {hourly[3].temperature}</p>
    <p>In six hours it will be {hourly[6].summary.toLowerCase()} and {hourly[6].temperature}</p>
    <p>In twelve hours it will be {hourly[12].summary.toLowerCase()} and {hourly[12].temperature}</p>
  </div>
);

window.HourlyWeather = HourlyWeather;
