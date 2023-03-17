import { Component } from '@angular/core';

@Component({ // component decoratiors 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  data : string = '';
   
  passingValue(event : any){
    let newVAlue = event.target.value
    this.data = newVAlue ;
  }

}
