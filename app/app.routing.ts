import { SpotifyComponent } from './components/spotify/spotify.component';
import { ProfileComponent } from './components/profile/profile.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ArtistComponent } from './components/artist/artist.component';

const appRoutes: Routes = [
    {
        path: '', component: ProfileComponent
    },
    {
        path: 'spotify', component: SpotifyComponent
    },
    {
        path: 'artist/:id', component: ArtistComponent
    }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);