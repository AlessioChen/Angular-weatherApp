import { Component, ElementRef, Input, Output, SimpleChanges, ViewChild, EventEmitter } from '@angular/core';
import * as L from 'leaflet';
import { City } from 'src/app/models/city';

const mapTheme = 'https://{s}.tile.openstreetmap.org';
const IconWhite = L.icon({
  iconUrl: 'src/assets/marker_white.png',
  iconSize: [34, 44],
  iconAnchor: [17, 42],
});

const IconRed = L.icon({
  iconUrl: './assets/marker_red.png',
  iconSize: [34, 44],
  iconAnchor: [17, 42],
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


  constructor() { }

  /**
   * When data changes
   */
  ngOnChanges(changes: SimpleChanges): void {

    // First time ==> init map 
    if (changes.cities.isFirstChange() && changes.cities.isFirstChange()) {
      this.initMap();
    }

    // When currentCite change
    if (changes.currentCity.currentValue) {
      // Pan to current city 
      this.leafletMap.setView(changes.currentCity.currentValue, 11);
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
      this.leafletMap.fitBounds(bounds)
    }
  }

  /**
 * Draw all markers on map
 */

  drawMarkers(): void {
    this.cities?.forEach((city) => {
      L.marker([city.lat, city.lng]).addTo(this.leafletMap).bindPopup(`${city.city}`);
    })
  }


}
