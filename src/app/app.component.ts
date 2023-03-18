import { Component } from '@angular/core';

@Component({ // component decoratiors 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  clients = [
    {name  : 'John', paid : true ,money : 2345} ,
    {name  : 'hari', paid : true ,money : 123} ,
    {name  : 'sam', paid : true ,money : 657} ,
    {name  : 'ram', paid : false ,money : 57} ,
  ]

}
