import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Album } from '../models/album';
import { Artist } from '../models/artist';
import { SpotifyService } from '../spotify/spotify.service';
@Component({
    selector: 'artist',
    templateUrl: './artist.component.html',
    styleUrls:['./artist.component.scss'],
    providers: [SpotifyService]
})
export class ArtistComponent implements OnInit {
    id: string;
    artist: Artist[];
    album: Album[];
    constructor(private _spotifyService: SpotifyService
        , private router: Router
        , private activeRoute: ActivatedRoute) { }

    ngOnInit() {
        this.activeRoute.params.subscribe((params) => {
            this.id = params['id'];
        })
        console.log(this.id, 'id');
        this._spotifyService.getArtist(this.id).subscribe((res) => {
            this.artist = res;
            console.log(res);
        })
    }

}