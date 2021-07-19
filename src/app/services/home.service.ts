import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { BehaviorSubject } from "rxjs";
import { HomeWheatherModalComponent } from "../components/home/home-weather-modal/home-wheather-modal.component";
import { MOCK } from "../moc/moc-data";
import { City } from "../models/city";
import { Weather } from "../models/wheater";

@Injectable({
    providedIn: 'root'
})


export class HomeService {

    private _cities$ = new BehaviorSubject<City[] | null>([]);
    private _currentCity$ = new BehaviorSubject<City | null>(null);


    cities$ = this._cities$.asObservable();
    currentCity$ = this._currentCity$.asObservable();


    constructor(public dialog: MatDialog) { }

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

    /**
     * Open the wheater modal after clicking markers
     */
    openWheaterModal(weather: Weather): void {


        //Open dialog
        const dialogRef = this.dialog.open(
            HomeWheatherModalComponent,
            { data: weather }

        )

        //After close



    }



}
