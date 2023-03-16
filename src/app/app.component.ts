import { Component } from '@angular/core';

@Component({ // component decoratiors 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  name : string = '';
  uname : string = '';

  handleClick(){
    console.log('clicked by click me ');
  }

  handleInput(event : any){
    // if(event.key != 'Enter'){
    //   return;
    // }
    let inputhere = event.target.value;
    console.log(inputhere)
    this.uname = inputhere;
  }

handleSlect(event : any){
  let val = event.target.value;
  console.log(val)

}


}
