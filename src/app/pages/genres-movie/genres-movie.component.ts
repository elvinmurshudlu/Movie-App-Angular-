import { Component ,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from 'src/app/model/model';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-genres-movie',
  templateUrl: './genres-movie.component.html',
  styleUrls: ['./genres-movie.component.scss']
})
export class GenresMovieComponent implements OnInit {

  movies : IMovie[] = []
  currentId :string = ""

  constructor(private movie : MovieService, private router :ActivatedRoute){}

  ngOnInit(): void {
    this.router.params.subscribe(({id})=>{
      this.currentId = id
      this.getMovieByGenres(id)
    })

    
  }

  getMovieByGenres(id:string,page :number =1){
    this.movie.getMovieByGenres(id,page).subscribe((sub)=>{
      this.movies = sub

    })
  }

  onPageChange(event:any){
    this.getMovieByGenres(this.currentId,event.page+1)
  }

}
