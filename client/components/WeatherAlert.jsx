var WeatherAlert = (prop) => (
  <div className="alert">
    <h1>Important Weather Alert!</h1>
    <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
    <h3 >{prop.item.title}</h3>
    <p>{prop.item.description}</p>
    <a href={prop.item.uri}>For more information about this alert click here!</a>
  </div>
);

window.WeatherAlert = WeatherAlert;
