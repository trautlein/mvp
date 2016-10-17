class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: false
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
}

window.App = App;
