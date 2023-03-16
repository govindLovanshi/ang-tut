import { Component } from '@angular/core';

@Component({ // component decoratiors 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name : string = 'gOViND LOvanshI';
  today = new Date;
  num = 2.567;
  percentage = 1.234;
  myCurrency = 7.23;

  persons = {
    name : 'John',
    age : 20,
    country : 'USA'
  }

  mySclice = 'mynameisgovind';
  
}
