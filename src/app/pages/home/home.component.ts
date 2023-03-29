import { Component,OnInit } from '@angular/core';
import { IMovie } from 'src/app/model/model';

import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies : IMovie[] =[]
  topRated :IMovie[] = []
  popularMovies: IMovie[]=[]


  constructor(private movie:MovieService){}
  
  ngOnInit(): void {
    this.getUpcoming()
    this.getTopRated()
    this.getPopular()
    
  }
  getUpcoming(){
    this.movie.getMovies("upcoming").subscribe((subs)=>{
      this.movies = subs      
    })  

  }

  getTopRated(){
    this.movie.getMovies("top_rated").subscribe((subs)=>{
      this.topRated = subs      
    })
  }
  getPopular(){
    this.movie.getMovies("popular").subscribe((subs)=>{
      this.popularMovies = subs      
    })
  }


}
