import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { MOCK } from "../moc/moc-data";
import { City } from "../models/city";

@Injectable({
    providedIn: 'root'
})


export class HomeService {

    private _cities$ = new BehaviorSubject<City[] | null>([]);

    cities$ = this._cities$.asObservable();


    constructor() { }

    /**
    * Load all Cities (locations)
    */
    getCities(): void {
        this._cities$.next(MOCK);
    }
}
