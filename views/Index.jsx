
import React, { Component } from 'react'

export default class Index extends Component {
  render() {
    return (
        <div>
          <h1>Captain's Logs </h1>
          <nav>
            <a href='/logs/new'>Create a New Log</a>
          </nav>
          <ul>
            {this.props.logs.map((log, i) => {
              return (
                <li>
                  <a href={`/logs/${log.id}`}> {log.title} </a>
                  <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="DELETE"/>
                  </form>
                  <a href={`/logs/${log._id}/edit`}>Edit This Log</a>
                </li>
              );
            })}
          </ul>
        </div>
      );
  }
}
