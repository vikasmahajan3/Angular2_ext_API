import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class SpotifyService {
    constructor(private _http: Http) { }
    SearchMusic(str: string, type = "artist") {
        let url = 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=20&type=' + type + '&market=US';
        return this._http.get(url).map(res => res.json());
    }
    getArtist(artistID: string) {
        let url = 'https://api.spotify.com/v1/artists/' + artistID;
        return this._http.get(url).map(res => res.json());
    }
    getAlbums(artistID: string) {
        let url = 'https://api.spotify.com/v1/artists/' + artistID + '/albums';
        return this._http.get(url).map(res => res.json());
    }
    getAlbum(albumID: string) {
        let url = 'https://api.spotify.com/v1/albums/' + albumID;
        return this._http.get(url).map(res => res.json());
    }
}