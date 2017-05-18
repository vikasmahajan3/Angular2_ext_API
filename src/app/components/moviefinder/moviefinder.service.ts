import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/Rx';
@Injectable()

export class MoviesService {
    api_key: string;

    now: Date = new Date();
    nowless7: Date = new Date();
    constructor(private _jsonp: Jsonp) {
        this.api_key = '9a30790369ff04aab86bf2e697c42be0';
        this.nowless7.setDate(this.now.getDate() - 7);
    }
    getPopular() {
        let url = 'https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key=' + this.api_key;
        return this._jsonp.get(url).map(res => res.json());
    }
    getInTheatre() {
        // let url = 'https://api.themoviedb.org/3//discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte='
        //  + this.dateToString(this.nowless7) +
        //     '&primary_release_date.lte=' + this.dateToString(this.now) + '&api_key=' + this.api_key;
        let url = 'https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte='
            + this.dateToString(this.nowless7) + '&primary_release_date.lte=' + this.dateToString(this.now) +
            '&api_key=' + this.api_key
        return this._jsonp.get(url).map(res => res.json());
    }
    dateToString(obj: Date) {
        console.log(obj.getMonth(), 'obj');
        return obj.getFullYear().toString() + '-' + (obj.getMonth() + 1) + '-' + obj.getDate().toString();
    }

    serachMovie(searchStr: string) {
        let url = 'https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK&query='
            + searchStr + '&sort_by=popularity.desc&api_key=' + this.api_key;
        return this._jsonp.get(url).map(res => res.json());

    }
    getMovie(id: string) {
        let url = 'https://api.themoviedb.org/3/movie/' + id + '?callback=JSONP_CALLBACK&api_key=' + this.api_key;
        return this._jsonp.get(url).map(res => res.json());
    } 
}