import { Component , OnInit} from '@angular/core';
import {UserComponent} from './user/user.component'
@Component({ // component decoratiors 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private readonly UserComponent : UserComponent  ){
    // this.UserComponent.ngOnInit(); 
  }

  ngOnInit(): void{
    // console.log("ngOnInit called")
  }
}
