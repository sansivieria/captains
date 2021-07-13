const React = require('react');
const DefaultLayout = require('./layouts/Default');

class Show extends React.Component {
  render() {
    const log = this.props.log;
    return (
      <div>
        <p>{log.entry}</p>
        <p>ship malfunction: {log.shipIsBroken? 'yes' : 'ship is working' }</p>
        <a href= '/logs'>return home</a>
      </div>
    )
  }
};

module.exports = Show;
