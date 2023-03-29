import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { ITvShow, ITvShowDto } from '../model/model';
import {switchMap , of} from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class TvshowsService {
  
  

  constructor(private http:HttpClient) { } 
  baseUrl : string = "https://api.themoviedb.org/3/tv/"
  searchUrl : string = "https://api.themoviedb.org/3/search/tv"
  apiKey :string = "84e200155d804fe86bfad2c4357cad83" 

  getTvShows(type:string,page? : number , search? : string){
    return this.http.get<ITvShowDto>(`${search ? this.searchUrl : this.baseUrl + type}?api_key=${this.apiKey}${page ? "&page="+page : ""}${search ? "&query="+search :""}`).pipe(switchMap((res)=>{
      return of(res.results)
    }))

  }


  


}
