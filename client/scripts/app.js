// Initialize Client ID for API call
SC.initialize({
  client_id: '6538538c1dce7251c50d3ac3109bcc29'
});

/*
================================================================================
=========================STAND ALONE COMPONENTS=================================
================================================================================
*/

var Title = React.createClass({
  render: function(){
    return (
      <h1>NewJuke!</h1>
    );
  }
});


var GetUserName = React.createClass({
  getInitialState: function() {
    return {userName: prompt('What is your username?', 'Enter user name here')};
  },

  render: function(){
    return (
        <h3>Hello {this.state.userName}! What are you in the mood to hear?</h3>
    );
  }
});

/*
================================================================================
===========================MASTER AND DEPENDENTS================================
================================================================================
*/
var PlaylistView = React.createClass({
  render: function() {
    return (
      <div>
        Playlist here
      </div>
    )
  }
});

var SearchSoundCloud = React.createClass({
  getInitialState: function() {
    return {
      query: ''
    }
  },

  updateQuery: function(event) {
    this.setState({
      query: event.target.value
    });
  },

  getTracks: function(genre) {
    SC.get('/tracks', {
      genre: genre
    }, function(tracks) {
      console.log(tracks)
      var random = Math.floor(Math.random() * tracks.length - 1);
      SC.oEmbed(tracks[random].uri, { auto_play: false, show_comments:true }, document.getElementById('trackselect'));
    });
  },

  render: function() {
    return (
      <div className="row">
        <div className="form-group has-feedback">
          <input name="query"
            type="text"
            placeholder="Find Tracks!"
            className = "form-control"
            value = { this.state.query }
            onChange = { this.updateQuery }
            autoComplete="false"/>
            <span></span>
        </div>
        <h3 id="trackselect">Track selector { this.getTracks('vapowave') }</h3>
      </div>
    )
  }
});

var TrackSelector = React.createClass({

  render: function() {
    return (
      <div>TrackSelector</div>
    )
  }
});

var JukeboxApp = React.createClass({
  // TODO: try and make this a modal. it looks better.
  render: function() {
    return (
      <section>

        <header className="container text-center">
          <Title />
          <div id="username">
            <GetUserName />
          </div>
        </header>

        <article className="container text-center">
          <SearchSoundCloud />
          <TrackSelector />
        </article>

        <footer className="fixed-footer">
          Footer
          <PlaylistView />
        </footer>

      </section>
    )
  }
});

/*
==============================
============RENDER============
==============================
*/
ReactDOM.render(
  <JukeboxApp / > ,
  document.getElementById('App')
);
