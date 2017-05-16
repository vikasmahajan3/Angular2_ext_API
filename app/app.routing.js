"use strict";
var spotify_component_1 = require("./components/spotify/spotify.component");
var profile_component_1 = require("./components/profile/profile.component");
var router_1 = require("@angular/router");
var artist_component_1 = require("./components/artist/artist.component");
var album_component_1 = require("./components/album/album.component");
var appRoutes = [
    {
        path: '', component: profile_component_1.ProfileComponent
    },
    {
        path: 'spotify', component: spotify_component_1.SpotifyComponent
    },
    {
        path: 'artist/:id', component: artist_component_1.ArtistComponent
    },
    {
        path: 'album/:id', component: album_component_1.AlbumComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
