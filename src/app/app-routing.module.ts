import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenresMovieComponent } from './pages/genres-movie/genres-movie.component';
import { GenresTvShowsComponent } from './pages/genres-tv-shows/genres-tv-shows.component';
import { GenresComponent } from './pages/genres/genres.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieComponent } from './pages/movie/movie.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvshowsComponent } from './pages/tvshows/tvshows.component';

const routes: Routes = [{
  path:"",
  component:HomeComponent
},
{
  path:"movies",
  component:MoviesComponent
}
,{
  path:"movies/:id",
  component:MovieComponent
}
,
{
  path:"tvshows",
  component:TvshowsComponent
},
{
  path:"tvshows/:id",
  component:TvshowsComponent
},
{
  path:"genres",
  component:GenresComponent
},
{
  path:"genres/movies/:id",
  component:GenresMovieComponent
}
,
{
  path:"genres/tvShows/:id",
  component:GenresTvShowsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
