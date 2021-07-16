import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Wheater } from '../models/wheater';


const base_url = 'http://api.weatherapi.com/v1/current.json';
const key = environment.WHEATER_API_KEY;

@Injectable({
  providedIn: 'root'
})

export class WheaterService {



  constructor(private httpClient: HttpClient) { }

  /**
  * fetch Wheater (locations)
  * @param lat
  * @param long
  */
  fetchData(lat: number, long: number): Observable<Wheater> {
    return this.httpClient.get<Wheater>(`${base_url}?key=${key}&q=${lat},${long}&aqi=no`)
  }












}
