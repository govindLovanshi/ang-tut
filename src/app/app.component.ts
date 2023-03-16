import { Component } from '@angular/core';

@Component({ // component decoratiors 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   

  constructor(){
    this.getData()
  }

  // ng-if

  selectedSkills : any = '' ;

  handleEvent(event : any){
    const value = event.target.value;
    this.selectedSkills = value;

  }

  // 2nd exapmle 

  data : any = '' ;
  isDataArrived :boolean = false;

  getData(){
    setTimeout(()=>{
      this.data = 'data from server',
      this.isDataArrived = true;

    } ,4000)
  }

}
