var React = require('react');
var Router = require('react-router');
var Route = Router.Route, DefaultRoute = Router.DefaultRoute,
    RouteHandler = Router.RouteHandler, Link = Router.Link;

var App = React.createClass({
  render: function () {
    return (
      <div>
        <header className={"cf"}>
          <h1>
            Isomorphic
          </h1>
          <nav>
            <ul>
              <li><Link to="app">Home</Link></li>
              <li><Link to="article" params={{id: 'about'}}>About</Link></li>
            </ul>
          </nav>
        </header>
        <section className={"content markdown-body"}>
          <RouteHandler/>
        </section>
      </div>
    );
  }
});

module.exports = App;
