import React, {Component} from 'react';
import './person-details.css';

export default class PersonDetails extends Component {
  render() {
    return (
      <div className="person-details">
        <img className="person-details__picture" alt="Person" src="https://starwars-visualguide.com/assets/img/characters/10.jpg"/>
        <div className="person-details__wrapper">
          <h2 className="person-details__name">Obi Wan</h2>
          <ul className="person-details__list">
            <li className="person-details__item">
              Gender: male
            </li>
            <li className="person-details__item">
              Birth year: 43
            </li>
            <li className="person-details__item">
              Eye Color: red
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
