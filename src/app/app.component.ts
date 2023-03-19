import { Component } from '@angular/core';

@Component({ // component decoratiors 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
public userIds = [3,4,5,1]
public selectedId : number = 0 ;

constructor(){

}

onIdSelection(newId : number) : void{
  this.selectedId = newId;
}

}
