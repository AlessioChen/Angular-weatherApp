import * as L from 'leaflet';
import { Wheater } from './wheater';
export interface City {
    city: string;
    lat: number;
    lng: number;

}

export class MarkedCity{
    city!: City; 
    icon!: L.Icon; 
    wheater!: Wheater;
}