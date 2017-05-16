import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Album } from '../models/album';
import { Artist } from '../models/artist';
import { SpotifyService } from '../spotify/spotify.service';
@Component({
    selector: 'artist',
    templateUrl: './album.component.html',
    //styleUrls: ['./album.component.scss'],
    providers: [SpotifyService]
})
export class AlbumComponent implements OnInit {
    id: string;

    album: any[];
    constructor(private _spotifyService: SpotifyService
        , private router: Router
        , private activeRoute: ActivatedRoute) { }

    ngOnInit() {
        this.activeRoute.params.subscribe((params) => {
            this.id = params['id'];
        })
        console.log(this.id, 'id');
        this._spotifyService.getAlbum(this.id).subscribe((res: any) => {
            this.album = res;
            console.log(res)
        })

    }

}