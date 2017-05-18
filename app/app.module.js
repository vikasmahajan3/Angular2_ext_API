"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var profile_component_1 = require("./components/profile/profile.component");
var app_routing_1 = require("./app.routing");
var spotify_component_1 = require("./components/spotify/spotify.component");
var artist_component_1 = require("./components/artist/artist.component");
var album_component_1 = require("./components/album/album.component");
var moviefinder_component_1 = require("./components/moviefinder/moviefinder.component");
var movie_details_component_1 = require("./components/movie-details/movie-details.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, http_1.JsonpModule, forms_1.FormsModule, app_routing_1.routing],
        declarations: [app_component_1.AppComponent,
            profile_component_1.ProfileComponent,
            spotify_component_1.SpotifyComponent,
            artist_component_1.ArtistComponent,
            album_component_1.AlbumComponent,
            moviefinder_component_1.MovieFinderComponent, movie_details_component_1.MovieDetailsComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
