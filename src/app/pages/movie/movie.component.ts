
import { Component ,OnInit } from '@angular/core';
import { ActivatedRoute , NavigationEnd, NavigationStart, Router} from '@angular/router';
import { IBackdrop, IMovie, ITvShow, IVideo } from 'src/app/model/model';
import { MovieService } from 'src/app/service/movie.service';
import { TvshowsService } from 'src/app/service/tvshows.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit{
//!Movie Details
  movieDetailed : IMovie | null = null
  movieImages : IBackdrop[] = []
  movieVideos : IVideo[] = []
  similarMovies : IMovie[] = []



  currentPath : string = ""
  
  constructor (private router:ActivatedRoute , 
    private movie: MovieService,
    
    
     ){

  }

  ngOnInit(): void {

    

    this.selectedMovieData()

    
  }


  selectedMovieData(){
    console.log("Moviedir");
    this.router.params.subscribe(({id})=>{ 

      this.movie.getMovieDetails(id).subscribe((sub)=>{
        this.movieDetailed = sub
      })

      this.movie.getMovieImages(id).subscribe((sub)=>{
        // console.log(sub);
        this.movieImages = sub
      })

      this.movie.getMovieVideos(id).subscribe((sub)=>{
        console.log(sub);
        this.movieVideos = sub
      })

      this.movie.getSimilarMovie(id).subscribe((sub)=>{
        this.similarMovies = sub
      })
    })
  }


  


}
