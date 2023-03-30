import { Component ,OnInit } from '@angular/core';
import { IGenre } from 'src/app/model/model';
import { MovieService } from 'src/app/service/movie.service';
import { TvshowsService } from 'src/app/service/tvshows.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {

  genresMovies : IGenre[] = []
  genresTvShows : IGenre[] = []

  constructor(private movie:MovieService ,private tvShow : TvshowsService){}

  ngOnInit(): void {
    this.getGenresMovie()
    this.getGenresTvShow()


  }

  getGenresMovie(){
    this.movie.getGenres().subscribe((sub)=>{
      this.genresMovies = sub
    })
  }

  getGenresTvShow(){
    this.tvShow.getGenres().subscribe((sub)=>{
      this.genresTvShows = sub
    })
  }

}
