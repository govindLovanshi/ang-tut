import { Component } from '@angular/core';

@Component({ // component decoratiors 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  chnagedHandler(event : any){
    console.warn("data===>" , event.target.value);
    
  }

}
