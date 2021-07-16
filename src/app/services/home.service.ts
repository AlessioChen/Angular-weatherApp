import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { MOCK } from "../moc/moc-data";
import { City, MarkedCity } from "../models/city";
import { Wheater } from "../models/wheater";
import { WheaterService } from "./wheater.service";

@Injectable({
    providedIn: 'root'
})


export class HomeService {

    private _cities$ = new BehaviorSubject<City[] | null>([]);
    private _currentCity$ = new BehaviorSubject<City | null>(null);
  

    cities$ = this._cities$.asObservable();
    currentCity$ = this._currentCity$.asObservable();

    markedCities: MarkedCity[] = []; 


    constructor(private wheaterService: WheaterService) { }

    /**
    * Load all Cities (locations)
    */
    getCities(): void {
        this._cities$.next(MOCK);
    }

    /**
   * Select a city
   * It opens a modal when a city is selected.
   * @param city
   */
    setSelectedHandler(city: City | null) {
        this._currentCity$.next(city);
    }





}
