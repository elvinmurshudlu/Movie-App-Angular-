import { Component,OnInit } from '@angular/core';
import { ITvShow } from 'src/app/model/model';
import { TvshowsService } from 'src/app/service/tvshows.service';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.scss']
})
export class TvshowsComponent implements OnInit {
  tvShows:ITvShow[] = []
  search : string = ""
  currentPage :number = 1

  constructor(private tvShow: TvshowsService){}

  ngOnInit(): void {
    this.fetchTvShows(1)
    
  }

  fetchTvShows(page:number,search?:string){
    this.tvShow.getTvShows("popular",page,search).subscribe((sub)=>{
      this.tvShows = sub
    })
  }

  onPageChange(event:any){
    this.currentPage = event.page+1 
    this.fetchTvShows(this.currentPage,this.search)
  }

  onSearch(){
    this.fetchTvShows(this.currentPage,this.search)

  }


}
