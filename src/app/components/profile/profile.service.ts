import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {
    private userName: string;
    private client_Id = '0c08b64aeb13fc21f879';
    private client_secret = 'bc41e820bf4c79a65daa72e982ad09593988c0ec';
    constructor(private _http: Http) {
        //this.userName = 'bradtraversy';

    }
    updateUser(username: string) {
        this.userName = username;
    }
    getUser() {
        return this._http.get('http://api.github.com/users/' + this.userName + '?client_id='
            + this.client_Id + '&client_secret=' + this.client_secret).map(
            (res) => res.json());
    }
    getRepos() {
        return this._http.get('http://api.github.com/users/' + this.userName + '/repos?client_id='
            + this.client_Id + '&client_secret=' + this.client_secret).map(
            (res) => res.json());
    }
}