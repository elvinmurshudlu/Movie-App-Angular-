import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITvShow } from 'src/app/model/model';
import { TvshowsService } from 'src/app/service/tvshows.service';

@Component({
  selector: 'app-genres-tv-shows',
  templateUrl: './genres-tv-shows.component.html',
  styleUrls: ['./genres-tv-shows.component.scss']
})
export class GenresTvShowsComponent implements OnInit {
  tvShows : ITvShow[] = []
  currentId : string = ""

  constructor(private tvShowsService: TvshowsService,
   private router :ActivatedRoute
    ){

    }

  ngOnInit(): void {

    this.router.params.subscribe(({id})=>{
      this.currentId = id
      this.getTvShowsByGenres(id)
    })
    
  }

  getTvShowsByGenres(id:string,page:number = 1){
    return this.tvShowsService.getTvShowsByGenres(id,page).subscribe((sub)=>{
      this.tvShows = sub
    })

  }

  onPageChange(event : any){
    this.getTvShowsByGenres(this.currentId,event.page+1)

  }

}
