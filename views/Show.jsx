import React, { Component } from 'react'

export default class Show extends Component {
  render() {
    const log = this.props.log;
    return (
      <div>
        <h1>My Log</h1>
        <h3>{log.title}</h3>
        <p>{log.entry}</p>
        {log.shipIsBroken? 'Unfortunatly, my ship is broken...':'Luckily, my ship is returning as a whole!'} <br />
        <a href="/logs">Back to all my Logs</a>
      </div>
    )
  }
}
