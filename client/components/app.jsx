class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: false,
      lat: null,
      long: null,
      updateLocation: this.updateLocation.bind(this)
    };
  }

  render() {
    if (!this.state.location) {
      return (<div>
                <Search state={this.state} />
              </div>);
    }
    return (
      <div>

      </div>
    );
  }

  updateLocation() {
    var lat1 = $('.latBox').val();
    var long1 = $('.longBox').val();

    console.log(lat1, long1, this.state.location);

    this.setState({
      location: true,
      lat: lat1,
      long: long1
    }, function afterUpdateLocationState () {
      console.log(this.state.location);
    })

    console.log(this.state.location);

    $('.latBox').val('');
    $('.longBox').val('');

    // console.log('Lat:', this.state.lat, 'Long:', this.state.long);
  }

}

ReactDOM.render(<App />, document.getElementById('app'));
