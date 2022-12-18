import React, { Component } from 'react'

export default class Edit extends Component {
  render() {
    const {log} = this.props
    return (
      <div>
        <h1>Edit my log</h1>
        <form action={`/logs/${log._id}?_method=PUT`} method="POST">
          Title: <input type="text" name="title" defaultValue={log.title}/><br/>
          Content: <input type="textarea" name="entry"  defaultValue={log.entry}/><br/>
          My ship is broken?
              {log.shipIsBroken? <input type="checkbox" name="" />: <input type="checkbox" name=""/> }
          <br/>
          <input type="submit" value="Submit Changes"/>
        </form> 
      </div>
    )
  }
}
