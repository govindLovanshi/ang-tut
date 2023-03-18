import { Component } from '@angular/core';

@Component({ // component decoratiors 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    data : number = 0;

    addToQty(value: number){
    this.data = value;
  }

  showData(value: number){
    this.data = value // this value is coming from child components
  }
}
