import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Weather } from 'src/app/models/wheater';
@Component({
  selector: 'app-home-wheather-modal',
  templateUrl: './home-weather-modal.component.html',
  styleUrls: ['./home-weather-modal.component.scss']
})
export class HomeWheatherModalComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Weather) { }



}