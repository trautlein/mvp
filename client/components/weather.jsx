// class Weather extends React.Component {
//   constructor(weather) {
//     super(weather);
//   }

//   render() { 
//     return (
//       <div>
//         {/*Checks to see if alerts exists, and if there are any it displays them.
//            A great candidate for later refactoring! REFACTOR */}
//         {weather.hasOwnProperty('alerts') ? weather.alerts.map((item, index, array) => 
//           <WeatherAlert item={item} key={item.time}/>
//         ) : null}
//         <CurrentWeather currently={weather.currently} />
//         <hr />
//         {/*<HourlyWeather hourly={weather.hourly.data} key={weather.hourly.data.time} />*/}
//         <hr />
//         <pre>Powered By DarkSky.net</pre>
//       </div>
//     )
//   }
// }


let Weather = ({weather}) => (
  <div>
    {/*Checks to see if alerts exists, and if there are any it displays them.
       A great candidate for later refactoring! REFACTOR */}
    {weather.hasOwnProperty('alerts') ? weather.alerts.map((item, index, array) => 
      <WeatherAlert item={item} key={item.time}/>
    ) : null}
    <CurrentWeather currently={weather.currently} />
    <hr />
    <HourlyWeather hourly={weather.hourly.data} key={weather.hourly.data.time} />
    <hr />
  </div>
);

window.Weather = Weather;
