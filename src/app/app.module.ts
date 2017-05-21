import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { routing } from './app.routing';
import { SpotifyComponent } from './components/spotify/spotify.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';
import { MovieFinderComponent } from './components/moviefinder/moviefinder.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { MapComponent } from './components/map/map.component';

@NgModule({
  imports: [BrowserModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    routing,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCpXwB_ZlZgDFLP2506bxbNQMq0-gXBCM8'
    })],
  declarations: [AppComponent,
    ProfileComponent,
    SpotifyComponent,
    ArtistComponent,
    AlbumComponent, MapComponent,
    MovieFinderComponent, MovieDetailsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
