import React, {Component} from 'react';
import './item-list.css';

export default class ItemList extends Component {
  render() {
    return (
      <ul className="thing-list">
        <li className="thing-list__item">
          <a className="thing-list__link" href="https://the-flow.ru">Персонаж 1</a>
        </li>
        <li className="thing-list__item">
          <a className="thing-list__link" href="https://the-flow.ru">Персонаж 2</a>
        </li>
        <li className="thing-list__item">
          <a className="thing-list__link" href="https://the-flow.ru">Персонаж 3</a>
        </li>
      </ul>
    )
  }
}
