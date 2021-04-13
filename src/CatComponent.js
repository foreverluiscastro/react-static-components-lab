import React, { Component } from 'react';

export default class CatComponent extends Component {
  render() {
    return (
      <div className="bar" id="cat">
        <h3>{this.props.name}</h3>
        <img src="/cat.gif" />
      </div>
    );
  }
}
