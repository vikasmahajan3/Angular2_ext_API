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
var moviefinder_service_1 = require("../moviefinder/moviefinder.service");
var router_1 = require("@angular/router");
var MovieDetailsComponent = (function () {
    function MovieDetailsComponent(_moviesService, router, activeRoute) {
        this._moviesService = _moviesService;
        this.router = router;
        this.activeRoute = activeRoute;
    }
    MovieDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.params.subscribe(function (params) {
            _this.id = params['id'];
            _this._moviesService.getMovie(_this.id).subscribe(function (res) {
                console.log(res);
                _this.movie = res;
            });
        });
    };
    return MovieDetailsComponent;
}());
MovieDetailsComponent = __decorate([
    core_1.Component({
        selector: 'movie-details',
        templateUrl: './movie-details.components.html',
        providers: [moviefinder_service_1.MoviesService]
    }),
    __metadata("design:paramtypes", [moviefinder_service_1.MoviesService,
        router_1.Router,
        router_1.ActivatedRoute])
], MovieDetailsComponent);
exports.MovieDetailsComponent = MovieDetailsComponent;
