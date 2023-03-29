import { Component ,Input} from '@angular/core';
import { IMovie, ITvShow } from 'src/app/model/model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() movie : IMovie | null = null
  @Input() tvShow : ITvShow | null = null

}
