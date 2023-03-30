import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBackdrop, ITvShow, IVideo } from 'src/app/model/model';
import { TvshowsService } from 'src/app/service/tvshows.service';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.scss']
})
export class TvShowComponent implements OnInit {
  //!TvShow details
  tvShowDetailed : ITvShow | null = null
  tvShowImages : IBackdrop[] = []
  tvShowVideos : IVideo[] = []
  similarTvShow : ITvShow[] = []

  constructor(private router:ActivatedRoute ,private tvShow :TvshowsService){}
  ngOnInit(): void {
    this.selectedTvShowData()
  }

    

  selectedTvShowData(){
    console.log("tvshowdur");

    this.router.params.subscribe(({id})=>{ 

      this.tvShow.getTvShowDetails(id).subscribe((sub)=>{
        console.log(sub);
        this.tvShowDetailed = sub
      })

      this.tvShow.getTvShowImages(id).subscribe((sub)=>{
        // console.log(sub);
        this.tvShowImages = sub
      })

      this.tvShow.getTvShowVideos(id).subscribe((sub)=>{
        // console.log(sub);
        this.tvShowVideos = sub
      })

      this.tvShow.getSimilarTvShow(id).subscribe((sub)=>{
        this.similarTvShow = sub
      })
    })
  }

}
