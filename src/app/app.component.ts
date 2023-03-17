import { Component } from '@angular/core';

@Component({ // component decoratiors 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  foods : any[] = [];

  importingDataFromChild(evt : any){
    console.log(evt)
    this.foods.push(evt);
  }
}
