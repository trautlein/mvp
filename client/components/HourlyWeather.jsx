let HourlyWeather = ({hourly}) => (
  <div>
    <h3>Hourly Weather</h3>
    {hourly.slice(0,12).map((item, index, array) => <HourWeather item={item} key={index} ind={index}/>)}
  </div>
);

window.HourlyWeather = HourlyWeather;
