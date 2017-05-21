import { Injectable } from '@angular/core';
import { Init } from './init-marker';

@Injectable()
export class MapMarkerService extends Init {
    constructor() {
        super()
        console.log('service intialized');
        this.load();

    }
    getMarkers() {
        let markers = JSON.parse(localStorage.getItem('markers'));
        return markers;
    }
    addmarker(marker: any) {
        let markers = JSON.parse(localStorage.getItem('markers'));
        markers.push(marker);
        localStorage.setItem('markers', JSON.stringify(markers));
    }
    updateMarker(marker: any, lat: any, lng: any) {
        let markers = JSON.parse(localStorage.getItem('markers'));
        for (let i = 1; i < markers.length; i++) {
            if (markers[i].lat === marker.lat && markers[i].lng === marker.lng) {
                markers[i].lat = lat;
                markers[i].lng = lng;
            }
        }
        localStorage.setItem('markers', JSON.stringify(markers));
    }
    removeMarker(marker: any) {
        let markers = JSON.parse(localStorage.getItem('markers'));
        for (let i = 0; i < markers.length; i++) {
            if (markers[i].lat == marker.lat && markers[i].lng == marker.lng) {
               markers.splice(i, 1);
            }
        }        
        localStorage.setItem('markers', JSON.stringify(markers));
    }


}

