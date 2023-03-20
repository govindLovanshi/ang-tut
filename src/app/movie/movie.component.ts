import { Component, Input } from '@angular/core';
import {Movie} from "../interfaces/movie"

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  @Input()
  movie : Movie | any ;

  constructor(){}

  releasedMovie() : void {
    if(this.movie.isReleased){
      return ;
    }
    this.movie.isReleased =  true ;
  }
}
