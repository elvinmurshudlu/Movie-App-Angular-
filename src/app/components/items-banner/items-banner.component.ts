import { Component,Input } from '@angular/core';
import { IMovie, ITvShow } from 'src/app/model/model';

@Component({
  selector: 'app-items-banner',
  templateUrl: './items-banner.component.html',
  styleUrls: ['./items-banner.component.scss']
})
export class ItemsBannerComponent {
  @Input() movies: IMovie [] = []
  @Input() title : string = ''
  @Input() tvShows : ITvShow[] = []

}
