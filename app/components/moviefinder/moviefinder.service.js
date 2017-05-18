"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/Rx");
var MoviesService = (function () {
    function MoviesService(_jsonp) {
        this._jsonp = _jsonp;
        this.now = new Date();
        this.nowless7 = new Date();
        this.api_key = '9a30790369ff04aab86bf2e697c42be0';
        this.nowless7.setDate(this.now.getDate() - 7);
    }
    MoviesService.prototype.getPopular = function () {
        var url = 'https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key=' + this.api_key;
        return this._jsonp.get(url).map(function (res) { return res.json(); });
    };
    MoviesService.prototype.getInTheatre = function () {
        // let url = 'https://api.themoviedb.org/3//discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte='
        //  + this.dateToString(this.nowless7) +
        //     '&primary_release_date.lte=' + this.dateToString(this.now) + '&api_key=' + this.api_key;
        var url = 'https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte='
            + this.dateToString(this.nowless7) + '&primary_release_date.lte=' + this.dateToString(this.now) +
            '&api_key=' + this.api_key;
        return this._jsonp.get(url).map(function (res) { return res.json(); });
    };
    MoviesService.prototype.dateToString = function (obj) {
        console.log(obj.getMonth(), 'obj');
        return obj.getFullYear().toString() + '-' + (obj.getMonth() + 1) + '-' + obj.getDate().toString();
    };
    MoviesService.prototype.serachMovie = function (searchStr) {
        var url = 'https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK&query='
            + searchStr + '&sort_by=popularity.desc&api_key=' + this.api_key;
        return this._jsonp.get(url).map(function (res) { return res.json(); });
    };
    MoviesService.prototype.getMovie = function (id) {
        var url = 'https://api.themoviedb.org/3/movie/' + id + '?callback=JSONP_CALLBACK&api_key=' + this.api_key;
        return this._jsonp.get(url).map(function (res) { return res.json(); });
    };
    return MoviesService;
}());
MoviesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Jsonp])
], MoviesService);
exports.MoviesService = MoviesService;
