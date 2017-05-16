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
var router_1 = require("@angular/router");
var spotify_service_1 = require("../spotify/spotify.service");
var AlbumComponent = (function () {
    function AlbumComponent(_spotifyService, router, activeRoute) {
        this._spotifyService = _spotifyService;
        this.router = router;
        this.activeRoute = activeRoute;
    }
    AlbumComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        console.log(this.id, 'id');
        this._spotifyService.getAlbum(this.id).subscribe(function (res) {
            _this.album = res;
            console.log(res);
        });
    };
    return AlbumComponent;
}());
AlbumComponent = __decorate([
    core_1.Component({
        selector: 'artist',
        templateUrl: './album.component.html',
        //styleUrls: ['./album.component.scss'],
        providers: [spotify_service_1.SpotifyService]
    }),
    __metadata("design:paramtypes", [spotify_service_1.SpotifyService,
        router_1.Router,
        router_1.ActivatedRoute])
], AlbumComponent);
exports.AlbumComponent = AlbumComponent;
