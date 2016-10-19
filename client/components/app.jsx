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
        <hr />
        <div>
          <Weather weather={this.state.weather} />
        </div>
        <pre className="attribution">Powered By DarkSky.net</pre>
      </div>
    );
  }

  updateLocation() {
    let coords = { lat: $('.latBox').val(), long: $('.longBox').val() };
    let context = this;

    $.ajax({
      url: 'http://127.0.0.1:1337/api',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(coords),

      success: function (data) {
        let parsedData = JSON.parse(data)
        console.info("Current timezone is:", parsedData.timezone);
        context.setState({
          weather: parsedData,
          lat: $('.latBox').val(),
          long: $('.longBox').val(),
          location: true
        });
      }, error: function (err) {
        console.error("Your data didn't go through! So sorry! Error is:\n",err);
      }
    })
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
