const React = require('react');

class New extends React.Component{
  render(){
    return(
      <form action="/logs" method="POST">
      title: <input type="text" name="title"/><br/>
      entry: <input type="textarea" name="entry"/><br/>
      ship malfunction: <input type="checkbox" name="shipIsBroken"/><br/>
      <input type="submit"/>
      </form>
    )
  }
}
module.exports=New;
