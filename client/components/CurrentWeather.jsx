let CurrentWeather = ({currently}) => (
  <div className="currently">
    <h3>Current Weather Below</h3>
    <p>It is {currently.summary.toLowerCase()} out right now. The temperature is {Math.round(currently.temperature)}&deg; F.</p>
    <div className="icon-div">
      <canvas id="icon1" width="40" height="40"></canvas>
      {setTimeout(function(){skycons.add("icon1", currently.icon)}, 100)}
    </div>
  </div>
);

window.CurrentWeather = CurrentWeather;
