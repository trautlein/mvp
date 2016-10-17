var Weather = (prop) => (
  <div>
    {/*Checks to see if alerts exists, and if there are any it displays them*/}
    {prop.state.weather.hasOwnProperty("alerts") ? prop.state.weather.alerts.map((item, index, array) => 
      <WeatherAlert item={item} key={item.time}/>
    ) : null}
    <CurrentWeather currently={prop.state.weather.currently} />
  </div>
);

window.Weather = Weather;
