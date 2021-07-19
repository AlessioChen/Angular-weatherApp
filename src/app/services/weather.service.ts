import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Weather } from '../models/wheater';


const base_url = 'http://api.weatherapi.com/v1/current.json';
const key = environment.WHEATER_API_KEY;

@Injectable({
  providedIn: 'root'
})

export class WeatherService {



  constructor(private httpClient: HttpClient) { }

  /**
  * fetch Weather (locations)
  * @param lat
  * @param long
  */
  fetchData(lat: number, long: number): Observable<Weather> {
    return this.httpClient.get<Weather>(`${base_url}?key=${key}&q=${lat},${long}&aqi=no`)
  }

}
