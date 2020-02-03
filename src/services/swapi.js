export default class SwapiService {
  constructor() {
    this._apiUrl = "https://swapi.co/api";
  }
  async getData(url) {
    const response = await fetch(`${this._apiUrl}${url}`);
    return await response.json(); // возвращаю промис, в котором лежит джсон
  }
  
  getAllPeople() {
    return this.getData(`/people/`).then(data => data.results);
  }
  async getPerson(id) {
    const person = await this.getData(`/people/${id}/`);
    return this._transofrmPerson(person);
  }
  getAllPlanets() {
    return this.getData(`/planets/`).then(data => data.results);
  }
  async getPlanet(id) {
    const planet = await this.getData(`/planets/${id}/`);
    console.log(planet);
    return this._transformPlanet(planet);
  }
  getAllShips() {
    return this.getData(`/starships/`).then(data => data.results);
  }
  async getShip(id) {
    const ship = await this.getData(`/starships/${id}/`);
    return this._transformStarship(ship);
  } 

  _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }
  _transformPlanet(planet) {
    return {
      id: this._extractId(planet),
      planetName: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    }
  }
  _transformStarship(starship) {
    return {
      id: this._extractId,
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passenger: starship.passenger,
      cargoCapacity: starship.cargoCapacity,
    }
  }
  _transofrmPerson(person) {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birthYear,
      eyeColor: person.eyeColor
    }
  }
}