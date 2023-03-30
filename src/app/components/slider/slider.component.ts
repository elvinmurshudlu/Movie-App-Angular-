import { Component,OnInit , Input } from '@angular/core';
import { IMovie } from 'src/app/model/model';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('slideFade', [
      state('void', style({
      opacity: 0
    })),
      transition('void <=> *', [
        animate('1s')
      ]),
    ])
  ]
})
export class SliderComponent implements OnInit {
  @Input() isSlider : boolean = true
 @Input() items : IMovie[] = []
 currentSlider : number = 0


  constructor(){}

  ngOnInit(): void {

    this.isSlider && 
    setInterval(()=>{

      this.currentSlider = ++ this.currentSlider % this.items.length
    },2000)   
    
  }

 

  



}
