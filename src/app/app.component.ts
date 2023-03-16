import { Component } from '@angular/core';

@Component({ // component decoratiors 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  showNow(data: any){
   this.name =  data;
  }

  newSubmit(data : any){
    this.email = data
  }

  
}
