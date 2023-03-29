import { Component ,OnInit} from '@angular/core';
import { IMovie } from 'src/app/model/model';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies:IMovie[] = []
  search:string = ""
  currentPage :number =1

  constructor(private movie:MovieService){}

  ngOnInit(): void {
    this.getMovies(this.currentPage)
    
  }

  getMovies(page:number , search ? :string){
    this.movie.getMovies("popular",page,search).subscribe((sub)=>{
      this.movies = sub
    })
  }

  onPageChange(event:any){
    this.currentPage = event.page+1 
    this.getMovies(this.currentPage,this.search)
  }

  onSearch(){
    this.getMovies(this.currentPage,this.search)
  }

}
