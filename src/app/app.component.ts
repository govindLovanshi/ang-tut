import { Component } from '@angular/core';
import { Movie } from './interfaces/movie';

@Component({ // component decoratiors 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  movie : Movie = {id : 1 , name : "the gaurs" , isReleased : false};

  constructor(){}

}
