import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../moviefinder/moviefinder.service';

@Component({
    selector: 'moviefinder',
    templateUrl: './moviefinder.component.html',
    providers: [MoviesService]
    // styleUrls: ['./moviefinder.component.scss']
})
export class MovieFinderComponent implements OnInit {
    popularMovies: any;
    moviesInTheatre: any;
    constructor(private _moviesService: MoviesService) {
    }

    ngOnInit() {
        this._moviesService.getPopular().subscribe((res: any) => {
            this.popularMovies = res.results;
        });
        this._moviesService.getInTheatre().subscribe((res: any) => {
            this.moviesInTheatre = res.results;
        });
    }
}