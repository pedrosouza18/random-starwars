import { API_URL } from './../app.url';
import { Planet } from './../models/Planet';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  constructor() { }

  getPlanets(randomNumber: number) {
    return new Promise((resolve, reject) => {
      fetch(`${API_URL}${randomNumber}/`)
        .then(data => data.json())
        .then(data => resolve(data))
        .catch(error => console.log(error));
    })
  }

  create(): Planet {
    return {
      name: undefined,
      population: undefined,
      climate: undefined,
      films: undefined,
      terrain: undefined
    }
  }
}
