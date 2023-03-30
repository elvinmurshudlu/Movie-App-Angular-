import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { IGenreDto, IImages, IMovie, IMovieDetail, IMovieDto, IVideoDto } from '../model/model';
import {switchMap ,of}from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  baseUrl : string = "https://api.themoviedb.org/3/movie/"
  searchUrl :string = "https://api.themoviedb.org/3/search/movie"
  apikey :string = "84e200155d804fe86bfad2c4357cad83"
  mainUrl :string = "https://api.themoviedb.org/3/"

  constructor(private http:HttpClient) { }

  getMovies(type:string , page ? :number , search? : string){    
    return this.http.get<IMovieDto>(`${search ? this.searchUrl: this.baseUrl+type}?api_key=${this.apikey}${page ? "&page=" + page : ""}${search ? "&query="+ search: ""}`).pipe(
      switchMap((res) => {
        return of(res.results)
      })
    )

  }

  getMovieDetails(id:string){
    return this.http.get<IMovie>(`${this.baseUrl + id}?api_key=${this.apikey}`)
  }

  getMovieImages(id:string){
    return this.http.get<IImages>(`${this.baseUrl + id}/images?api_key=${this.apikey}`).pipe(switchMap((map)=>{
      return of(map.backdrops)
    }))
  }
  getMovieVideos(id:string){
    return this.http.get<IVideoDto>(`${this.baseUrl + id}/videos?api_key=${this.apikey}`).pipe(switchMap((map)=>{
      return of(map.results)
    }))
  }

  getSimilarMovie(id : string){
    return this.http.get<IMovieDto>(`${this.baseUrl + id}/similar?api_key=${this.apikey}`).pipe(switchMap((map)=>{
      return of(map.results)
    }))
  }
  getGenres(){
    return this.http.get<IGenreDto>(`${this.mainUrl}/genre/movie/list?api_key=${this.apikey}`).pipe(switchMap((map)=>{
      return of(map.genres)
    }))
  }

  getMovieByGenres(genresId : string,page:number =1){
    return this.http.get<IMovieDto>(`${this.mainUrl}discover/movie?api_key=${this.apikey}&page=${page}&with_genres=${genresId}`).pipe(switchMap((map)=>{
      return of(map.results)
    }))

  }


  
}
