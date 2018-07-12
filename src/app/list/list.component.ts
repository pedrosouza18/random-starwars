import { Planet } from './../models/Planet';
import { PlanetService } from './../services/planet-service.service';
import { Component } from '@angular/core';

@Component({
    selector: 'list',
    templateUrl: '../list/list.component.html',
    styleUrls: ['../list/list.component.css']
})
export class ListComponent {

    public description: Planet;
    private service: PlanetService;
    public image: boolean = true;
    public hasValue: boolean = false;

    constructor(planetService: PlanetService) {
      this.service = planetService;
      this.description = this.service.create();
    }

    public getSpecificPlanet() {
      const randomNumber = Math.floor(Math.random() * 61 + 1);
      this.hasValue = false;
      this.service.getPlanets(randomNumber)
        .then((data: Planet) => {
          this.image = false;
          setTimeout(() => {
            this.description.name = data.name;
            this.description.climate = data.climate;
            this.description.terrain = data.terrain;
            this.description.population = data.population;
            this.description.films = data.films;
            this.hasValue = true;
          }, 1000);
        })
    }
}
