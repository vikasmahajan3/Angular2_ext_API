import { Component, OnInit } from '@angular/core';
import { MapMarkerService } from './map-marker.service'
@Component({
    selector: 'map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss'],
    providers: [MapMarkerService]
    //http://www.latlong.net/
})
export class MapComponent implements OnInit {
    lat: number = 42.858217;
    lng: number = -70.929990;
    zoom: number = 10;
    markerName: string;
    markerLat: string;
    markerLng: string;
    markerDraggable: string;
    markers: Marker[] = [];

    constructor(private _mapMarkerService: MapMarkerService) { }
    mapClickd(event: any) {
        let newmarker: Marker = {
            name: 'new mark',
            draggable: false,
            lng: event.coords.lng,
            lat: event.coords.lat
        }
        this.markers.push(newmarker)
    }
    markerClickd(marker: any, index: number) { }
    markerDragEnd(marker: any, $event: any) {
        console.log(marker, 'tttt')
        let updatedmark: Marker = {
            draggable: false,
            lat: parseFloat(marker.lat),
            lng: parseFloat(marker.lng),
            name: marker.name
        }

        let newlat = $event.coords.lat;
        let newlng = $event.coords.lng;
        this._mapMarkerService.updateMarker(updatedmark, newlat, newlng);
    }
    ngOnInit() {
        this.markers = this._mapMarkerService.getMarkers()
    }

    addMarker() {

        let newmarker: Marker = {
            name: this.markerName,
            draggable: (this.markerDraggable === 'yes') ? true : false,
            lng: parseFloat(this.markerLng),
            lat: parseFloat(this.markerLat)
        }
        //this.markers.push(newmarker)
        this._mapMarkerService.addmarker(newmarker);

    }
    removeMarker(marker: any) {
        for (let i = 0; i < this.markers.length; i++) {
            if (this.markers[i].lat == marker.lat && this.markers[i].lng == marker.lng) {
               this.markers.splice(i, 1);
            }
        } 
        this._mapMarkerService.removeMarker(marker)

    }


}


interface Marker {
    name?: string;
    lat: number;
    lng: number;
    draggable: boolean;
}