import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { routing } from './app.routing';
import { SpotifyComponent } from './components/spotify/spotify.component';

@NgModule({
  imports: [BrowserModule, HttpModule, FormsModule, routing],
  declarations: [AppComponent, ProfileComponent, SpotifyComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
