import React, {Component} from 'react';
import SwapiService from '../../services/swapi';
import Spinner from '../spinner/';
import ErrorIndicator from '../error-indicator/';


import './random-planet.css';

export default class RandomPlanet extends Component {
  constructor() {
    super();
    this.api = new SwapiService();
    this.state = {
      planet: {},
      loading: true
    }
    this.updatePlanet();
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false,
      error: false
    });
  }

  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    })
  }

  updatePlanet() {
    const id = 13;
    this.api.getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  }

  render() {
    const {planet, loading, error} = this.state;
    
    const dataReceived = !loading && !error;
    const spinner = loading ? <Spinner /> : null;
    const planetContent = dataReceived ? <Planet planet={planet} /> : null;
    const errorContent = error ? <ErrorIndicator /> : null;
    
    return (
      <div className="random-planet">
        {errorContent}
        {spinner}
        {planetContent}
      </div>
    )
  }
}

const Planet = ({planet}) => {
  const {id, planetName, population, rotationPeriod, diameter} = planet;

  return (
    <React.Fragment>
      <img className="random-planet__picture" alt="Planet" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
        <div className="random-planet__description">
          <h2 className="random-planet__name">
            {planetName}
          </h2>
          <ul className="random-planet__params">
            <li className="random-planet__param">
              Population: {population}
            </li>
            <li className="random-planet__param">
              Rotation Period: {rotationPeriod}
            </li>
            <li className="random-planet__param">
              Diameter: {diameter}
            </li>
          </ul>
        </div>
    </React.Fragment>
  )

}
