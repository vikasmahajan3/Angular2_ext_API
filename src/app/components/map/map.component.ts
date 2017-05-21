import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
    lat: number = 30.7333;
    lng: number = 76.7794;
    constructor() { }

    ngOnInit() {

    }
}