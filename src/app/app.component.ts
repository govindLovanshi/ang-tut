import { Component } from '@angular/core';

@Component({ // component decoratiors 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   
// ng Style
  myStyles : any = {
    width : "100px",
    height : "150px",
    backgroundColor : "red",
    color :'yellow'
  }


  addStyle(){
    this.myStyles['color'] = 'black',
    this.myStyles['border'] = '2px solid black'
  }

  // ng class

  myClass :any = {
    box : true,
    border : false,
    circles : false,
  }

  chnageShape(){ // true --> false (dynamic)
    this.myClass.border = !this.myClass.border,
    this.myClass.circle = !this.myClass.circle
  }




}
