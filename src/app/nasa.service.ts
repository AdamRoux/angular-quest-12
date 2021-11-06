import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Nasa } from './nasa.interface';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  constructor(private http : HttpClient){}

  public getImageOfTheDay() {
    return this.http.get<Nasa>(
      'https://api.nasa.gov/planetary/apod?api_key=Z7yPYRxlGFis2ulr6YA32MkVmCNaRZA73fKagchs'
    );
  }
}
