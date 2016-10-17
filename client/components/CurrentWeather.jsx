var CurrentWeather = ({currently}) => (
  <div className="currently">
    <h3>Current Weather Below</h3>
    <p>It is {currently.summary.toLowerCase()} out right now. The temperature is {Math.round(currently.temperature)}.</p>
  </div>
);

window.CurrentWeather = CurrentWeather;
