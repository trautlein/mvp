class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: true
    };
  }

  render() {
    if (this.state.test) {
      return (<div>
                <p>Hello World!</p>
              </div>);
    }
    return (
      <div>
        <Nav state={this.state} />
        <div className="col-md-7">
          <VideoPlayer state={this.state} video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList state={this.state} videos={this.state.Videos}/>
        </div>
      </div>
    );
  }


}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
