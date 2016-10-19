let Search = (prop) => (
  <div>
    <input type="text" className="latBox" name="latBox" placeholder="Latitude..." />
    <input type="text" className="longBox" name="longBox" placeholder="Longitude..." />
    <button type="submit" onClick={function() { prop.state.updateLocation() }}>Search!</button>
  </div>
);

window.Search = Search;
