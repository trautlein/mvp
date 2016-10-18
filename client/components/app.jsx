class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: false,
      lat: null,
      long: null,
      updateLocation: this.updateLocation.bind(this),
      weather: null
    };
  }

  render() {
    if (!this.state.location) {
      return (<div>
                <Search state={this.state} />
                <h1>Your weather will appear here!</h1>
              </div>
      );
    }
    return (
      <div>
        <div>
          <h3>Thanks for searching! Want to search again?</h3>
          <Search state={this.state} />
        </div>
        <hr />
        <div>
          <h2>Your current weather is below!</h2>
          <Weather weather={this.state.weather} />
        </div>
      </div>
    );
  }

  updateLocation() {
    let lat1 = $('.latBox').val();
    let long1 = $('.longBox').val();

    this.setState({
      location: true,
      lat: lat1,
      long: long1,
      weather: exampleWeatherData
    }, function afterUpdateLocationState () {
      $('.latBox').val('');
      $('.longBox').val('');
    });
  }

}

ReactDOM.render(<App />, document.getElementById('app'));
