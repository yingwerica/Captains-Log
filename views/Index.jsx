import React, { Component } from 'react'

export default class Index extends Component {
  render() {
    return (
        <div>
          <h1>Logs </h1>
          <nav>
            <a href='/logs/new'>Create a New Log</a>
          </nav>
          <ul>
            {this.props.logs.map((log, i) => {
              return (
                <li>
                  <a href={`/logs/${log.id}`}> {log.title} </a>
                </li>
              );
            })}
          </ul>
        </div>
      );
  }
}
