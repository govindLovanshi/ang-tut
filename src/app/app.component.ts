import { Component } from '@angular/core';

@Component({ // component decoratiors 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentUser : any = null;
  isDisablebe = true;


  names : string[] = ['govind' , 'abhishek' , 'hari' , 'sanket' , 'sushant'];


  newNames = [
    {
      name: 'Abhishek',
      age: 20,
      gender:'male'
    },
    {
      name: 'Govind',
      age: 30,
      gender: 'male'
    },
    {
      name: 'Hari',
      age: 40,
      gender:'male'
    },
    {
      name: 'Sanket',
      age: 50,
      gender:'male'
    }
  ]

  showAndEdit(index : number ){
    this.isDisablebe = true;
    this.currentUser = this.newNames[index]
  }

  setValue(event : any){
    const keyName = event.target.name;
    const val = event.target.value;
    this.currentUser[keyName] = val;


  }
  enableEditing(){
    this.isDisablebe = false;
  }
  

}
