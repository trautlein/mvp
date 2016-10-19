let HourlyWeather = ({hourly}) => (
  <div>
    {hourly.slice(0,12).map((item, index, array) => <HourWeather item={item} key={index} ind={index}/>)}
  </div>
);

window.HourlyWeather = HourlyWeather;
