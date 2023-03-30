import { Component,Input } from '@angular/core';
import {IGenre} from "../../model/model"

@Component({
  selector: 'app-genres-banner',
  templateUrl: './genres-banner.component.html',
  styleUrls: ['./genres-banner.component.scss']
})
export class GenresBannerComponent {
  @Input() genres: IGenre[] = []
  @Input() title :string = ""
  @Input() path : string = ""

}
