"use strict";
var spotify_component_1 = require("./components/spotify/spotify.component");
var profile_component_1 = require("./components/profile/profile.component");
var router_1 = require("@angular/router");
var appRoutes = [
    {
        path: '', component: profile_component_1.ProfileComponent
    },
    {
        path: 'spotify', component: spotify_component_1.SpotifyComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
