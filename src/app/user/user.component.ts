import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  constructor(){
    console.log("cont called")
  }

  ngOnInit(): void{
    console.log("ngOnInit called")
  }
}
