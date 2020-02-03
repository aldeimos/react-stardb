import React, {Component} from 'react';
import './app-header.css';

export default class AppHeader extends Component {
  render() {
    return (
      <header className="header">
        <h1 className="header__logo">Star DB</h1>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a className="header__nav-link" href="https://the-flow.ru">People</a>
            </li>
            <li className="header__nav-item">
            <a className="header__nav-link" href="https://the-flow.ru">Planets</a>
            </li>
            <li className="header__nav-item">
            <a className="header__nav-link" href="https://the-flow.ru">Starships</a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}