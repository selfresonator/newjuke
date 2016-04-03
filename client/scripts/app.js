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
            autoComplete="false"/><br/>
            <input type="submit" value="Search!"/>
        </div>
      </div>
    )
  }
});

var PlayerView = React.createClass({
  getInitialState: function() {
    return {tracks: []}
  },

  placeTrack: function(genre) {
    var that = this;
    SC.get('/tracks', {
      genres: genre,
    }, function(tracks) {
      // that.setState({'tracks': tracks});
      console.log('the tracklist: ',that.state.tracks);
      // console.log('the tracks: ',tracks);
      var random = Math.floor(Math.random() * tracks.length - 1);
      SC.oEmbed(tracks[random].uri, { auto_play: false, show_comments:true, maxheight:166 }, document.getElementById('trackselect'));
      // so here i need to put the line that will fill my
    });
  },

  render: function() {
    return (
      <div id="trackselect">{ this.placeTrack('vaporwave') }</div>
    )
  }
});

var TrackSelector = React.createClass({

  render: function() {
    return (
      <div className="container">
        <h2>TrackSelector</h2>
          <ul className="list-group">
            <li className="list-group-item list-group-item-info">First Track</li>
            <li className="list-group-item list-group-item-info">Second Track</li>
            <li className="list-group-item list-group-item-info">Third Track</li>
          </ul>
      </div>
    )
  }
});

var PlaylistView = React.createClass({

  render: function() {
    return (
      <div>
         <div>Playlist here</div>
      </div>
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
          <PlayerView />
          <TrackSelector />
        </article>

        <footer className="fixed-footer">
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
