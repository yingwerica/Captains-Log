import React, { Component } from 'react'

export default class New extends Component {
  render() {
    return ( 
       <div>
        <a href="/logs">Back to all my Logs</a>
        <h1>Create New Log</h1>
        <form action="/logs" method='POST'>
            Title: <input type="text" name="title" /><br />
            Content: <input type="textarea" name='entry' /><br />
            Is the ship broken?: <input type="checkbox" name='shipIsBroken' /><br />
            <input type="submit" name='' value='Create Log' />
        </form>
      </div>
    )
  }
}
