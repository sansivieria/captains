const React = require('react');

class Edit extends React.Component{
  render(){
    const log = this.props.log
    return(
      <form action={`/logs/${log._id}?_method=PUT`} method="POST">
      title: <input type="text" name="title" defaultValue={log.title}/><br/>
      entry: <input type="textarea" name="entry" defaultValue={log.entry}/><br/>
      ship malfunction:
        { log.shipIsBroken
          ? <input type="checkbox" name="shipIsBroken" defaultChecked />
          : <input type="checkbox" name="shipIsBroken" />
        }<br/>
      <input type="submit"/>
      </form>
    )
  }
}
module.exports = Edit
