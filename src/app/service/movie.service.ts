import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { IMovie, IMovieDto } from '../model/model';
import {switchMap ,of}from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  baseUrl : string = "https://api.themoviedb.org/3/movie/"
  searchUrl :string = "https://api.themoviedb.org/3/search/movie"
  apikey :string = "84e200155d804fe86bfad2c4357cad83"

  constructor(private http:HttpClient) { }

  getMovies(type:string , page ? :number , search? : string){    
    return this.http.get<IMovieDto>(`${search ? this.searchUrl: this.baseUrl+type}?api_key=${this.apikey}${page ? "&page=" + page : ""}${search ? "&query="+ search: ""}`).pipe(
      switchMap((res) => {
        return of(res.results)
      })
    )

  }

  
}
