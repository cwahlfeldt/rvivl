import React, { Component } from 'react';
import './Content.css';

var number = 0;

class Content extends Component {
  /*constructor(props, context) {
    super(props, context);

  };*/

  addContent() {
   console.log(number);
   number++;
  };

  getNumber() {
    return ({number});
  };

  render() {
    return (
      <div
        className="Content">
        {this.props.id}
        <button className="btn" onClick={this.addContent}>Click Me!</button>
      </div>
    );
  }

}

export default Content;
