import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { WheaterService } from 'src/app/services/wheater.service';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit {

  constructor(
    public homeService: HomeService,
  
    ) { }


  ngOnInit(): void {
    this.homeService.getCities();
  }

}
