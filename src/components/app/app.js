import React, {Component} from 'react';
import AppHeader from '../app-header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import './app.css';


export default class App extends Component {
  render() {
    return (
      <div className="container">
        <AppHeader />
        <main className="main">
          <RandomPlanet />
          <div className="main__wrapper">
            <ItemList />
            <PersonDetails />
          </div>
        </main>
      </div>
    )
  }
}