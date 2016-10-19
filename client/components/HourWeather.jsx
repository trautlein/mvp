let HourWeather = (props) => (
  <div>
    <p>In {props.ind + 1} {props.ind === 0 ? "hour" : "hours"} it will be {props.item.summary.toLowerCase()} and {Math.round(props.item.temperature)}&deg;. The chance of rain is {props.item.precipProbability}%.</p>
    <div className="icon-div">
      <canvas id={props.ind.toString()} width="40" height="40"></canvas>
      {setTimeout(function(){skycons.add(props.ind.toString(), props.item.icon)}, 50)}
    </div>
  </div>
);

window.HourWeather = HourWeather;
