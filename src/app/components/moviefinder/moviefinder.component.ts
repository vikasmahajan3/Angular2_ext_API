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
    searchStr: string;
    searchRes: any;
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
    srachMovie() {
        console.log(this.searchStr)
        this._moviesService.serachMovie(this.searchStr).subscribe((res: any) => {
            console.log(res.results);
            this.searchRes = res.results;
        });
    }
    getMovie(id:string){

    }
}