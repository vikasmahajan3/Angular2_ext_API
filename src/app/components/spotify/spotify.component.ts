import { Component, OnInit } from '@angular/core';
import { SpotifyService } from './spotify.service';
import { Artist } from '../models/artist';
@Component({
    selector: 'spotify',
    templateUrl: './spotify.component.html',
    styleUrls: ['./spotify.component.scss'],
    providers: [SpotifyService]
})
export class SpotifyComponent implements OnInit {
    searchStr: string;
    searchRes: Artist[];
    constructor(private _spotifyService: SpotifyService) { }

    ngOnInit() { }
    searchMusic() {
        this._spotifyService.SearchMusic(this.searchStr).subscribe((res: any) => {
            console.log(res);
            this.searchRes = res.artist.items;
        }, (error) => { },
            () => { console.log('ONCompleted'); })
    }
}