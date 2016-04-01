SC.initialize({
  client_id: '6538538c1dce7251c50d3ac3109bcc29'
});

var SearchSoundCloud = React.createClass({
  render: function() {
    return (
      <h4>Searching</h4>
    )
  }
});

var TrackSelector = React.createClass({
  render: function() {
    return (
      <h4>Searching</h4>
    )
  }
});

var JukeboxApp = React.createClass({
  render: function() {
    return (
      <section>
        <header className="container text-center">
          <h1>AJPlayer</h1>
        </header>
        <article className="container text-center">
          <SearchSoundCloud />
          <TrackSelector />
        </article>
        <footer className="fixed-footer">
          Footer
        </footer>
      </section>
    )
  }
});


ReactDOM.render(
  <JukeboxApp / > ,
  document.getElementById('App')
);
