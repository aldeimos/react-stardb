import React, {Component} from 'react';

import './error-indicator.css';

export default class ErrorIndicator extends Component {
  render() {
    return (
      <div className="error-indicator">
        <h3 className="error-indicator__title">
          Something went wrong
        </h3>
        <span className="error-indicator__text">
          Apparently, Kylo Ren has BROKEN THE SERVER again
        </span>
        <img className="error-indicator__picture" alt="Kaylo Ren" src="/img/kaylo404.jpg"/>
      </div>
    )
  }
}