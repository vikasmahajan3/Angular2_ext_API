import { Component } from '@angular/core';
import { ProfileService } from './components/profile/profile.service'

@Component({
  selector: 'my-app',
  template: `<nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" 
          data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" routerLink="/">External API</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li ><a routerLink="/">Home</a></li>
            <li><a routerLink="/spotify">Spotify</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
    <div class="container"><router-outlet></router-outlet></div>`,
  providers: [ProfileService]
})
export class AppComponent { name = 'Angular'; }
