import { Component, ElementRef, Input, Output, SimpleChanges, ViewChild, EventEmitter, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { City } from 'src/app/models/city';
import { WheaterService } from 'src/app/services/wheater.service';


const iconSize: L.PointExpression = [20, 30]
const iconAnchor: L.PointExpression = [17, 42]

const IconYellow = L.icon({
  iconUrl: './assets/marker_yellow.png',
  iconSize: iconSize,
  iconAnchor: iconAnchor,
});

const IconRed = L.icon({
  iconUrl: './assets/marker_red.png',
  iconSize: iconSize,
  iconAnchor: iconAnchor,
});

const IconGreen = L.icon({
  iconUrl: './assets/marker_green.png',
  iconSize: iconSize,
  iconAnchor: iconAnchor,
});


@Component({
  selector: 'app-home-map',
  templateUrl: './home-map.component.html',
  styleUrls: ['./home-map.component.scss']
})

export class HomeMapComponent {

  @ViewChild('host', { static: true }) host!: ElementRef<HTMLInputElement>;
  @Input() currentCity: City | null = null;
  @Input() cities: City[] | null = null;
  @Output() markerClick = new EventEmitter<City>();
  leafletMap!: L.Map;


  constructor(public wheaterService: WheaterService) {

  }



  /**
   * When data changes
   */
  ngOnChanges(changes: SimpleChanges): void {


    // First time ==> init map 
    if (changes.cities && changes.cities.isFirstChange()) {

      this.initMap();
    }

    // When currentCite change
    if (changes.currentCity.currentValue) {
      // Pan to current city 
      this.leafletMap.setView(changes.currentCity.currentValue, 11)

    } else {
      // view all markers when no city is selected
      this.fitBounds();
    }
  }

  initMap() {

    this.leafletMap = L.map(this.host.nativeElement);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.leafletMap);
    this.leafletMap.attributionControl.setPrefix('Created by Alessio Chen');
    this.drawMarkers();



  }


  /**
  * Fit map to display all markers
  */
  fitBounds() {
    const coords = this.cities?.map(m => new L.LatLng(m.lat, m.lng));

    if (coords) {
      const bounds = L.latLngBounds(coords);
      this.leafletMap.fitBounds(bounds, {
        padding: [10, 10]
      })
    }
  }

  /**
 * Draw all markers on map
 */

  drawMarkers(): void {

    this.cities?.forEach((city) => {
      this.wheaterService.fetchData(city.lat, city.lng).subscribe((data) => {
        let icon: L.Icon
        if (data.current.temp_c < 22) {
          icon = IconGreen;
        } else if (data.current.temp_c < 30) {
          icon = IconYellow;
        } else {
          icon = IconRed;
        }

        L.marker([city.lat, city.lng], { icon: icon })
          .bindTooltip(`${city.city}`)
          .bindPopup(`${city.city} \n ${data.current.temp_c}°C`)
          .on('click', () => {
            this.markerClick.emit(city)
          })
          .addTo(this.leafletMap);
      })
    })

  }




}
