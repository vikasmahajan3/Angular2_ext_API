import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../moviefinder/moviefinder.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'movie-details',
    templateUrl: './movie-details.components.html',
    providers: [MoviesService]
})
export class MovieDetailsComponent implements OnInit {
    id: string;
    movie: any;
    constructor(private _moviesService: MoviesService
        , private router: Router
        , private activeRoute: ActivatedRoute) { }

    ngOnInit() {
        this.activeRoute.params.subscribe((params) => {
            this.id = params['id'];
            this._moviesService.getMovie(this.id).subscribe((res: any) => {
                console.log(res);
                this.movie = res;
            });
        });
    }
}