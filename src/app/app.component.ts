import { Component } from '@angular/core';

@Component({ // component decoratiors 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isloggedIn : boolean = false; 

  names = ['govind', 'shubam' , 'shailendra']
  name = 'c';
}
