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
var profile_service_1 = require("./profile.service");
var ProfileComponent = (function () {
    function ProfileComponent(profileSvc) {
        this.profileSvc = profileSvc;
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.searchUser = function () {
        var _this = this;
        this.profileSvc.updateUser(this.username);
        this.profileSvc.getUser().subscribe(function (res) {
            console.log(res);
            _this.user = res;
        });
        this.profileSvc.getRepos().subscribe(function (res) {
            console.log(res);
            _this.repos = res;
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    core_1.Component({
        selector: 'profile',
        templateUrl: './profile.component.html',
        styleUrls: ['./profile.component.scss']
    }),
    __metadata("design:paramtypes", [profile_service_1.ProfileService])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
