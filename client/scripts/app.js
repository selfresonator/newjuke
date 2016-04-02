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
            autoComplete="false"/>
            <span></span>
        </div>
      </div>
    )
  }
});

var TrackSelector = React.createClass({
  render: function() {
    return (
      <h4>Track selector</h4>
    )
  }
});

var JukeboxApp = React.createClass({
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
