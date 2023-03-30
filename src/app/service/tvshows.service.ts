import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { IGenreDto, ITvShow, ITvShowDto } from '../model/model';
import {switchMap , of} from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class TvshowsService {
  
  

  constructor(private http:HttpClient) { } 
  baseUrl : string = "https://api.themoviedb.org/3/tv/"
  searchUrl : string = "https://api.themoviedb.org/3/search/tv"
  apiKey :string = "84e200155d804fe86bfad2c4357cad83" 
  mainUrl :string = "https://api.themoviedb.org/3/"

  getTvShows(type:string,page? : number , search? : string){
    return this.http.get<ITvShowDto>(`${search ? this.searchUrl : this.baseUrl + type}?api_key=${this.apiKey}${page ? "&page="+page : ""}${search ? "&query="+search :""}`).pipe(switchMap((res)=>{
      return of(res.results)
    }))

  }

  getGenres(){
    return this.http.get<IGenreDto>(`${this.mainUrl}/genre/tv/list?api_key=${this.apiKey}`).pipe(switchMap((map)=>{
      return of(map.genres)
    }))
  }
  

  getTvShowsByGenres(genresId : string,page:number =1){
    return this.http.get<ITvShowDto>(`${this.mainUrl}discover/tv?api_key=${this.apiKey}&page=${page}&with_genres=${genresId}`).pipe(switchMap((map)=>{
      return of(map.results)
    }))

  }

  


  


}
