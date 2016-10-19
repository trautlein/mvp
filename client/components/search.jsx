let Search = (prop) => (
  <div>
    <input type="text" className="latBox" name="latBox" placeholder="Latitude..." value="37.786"/>
    <input type="text" className="longBox" name="longBox" placeholder="Longitude..." value="-122.408981"/>
    <button type="submit" onClick={function() { prop.state.updateLocation() }}>Search!</button>
  </div>
);

window.Search = Search;
