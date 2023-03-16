import { Component } from '@angular/core';

@Component({ // component decoratiors 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  person : any = {
    name : '',
    email : '',
    cmp : '',
    sal : '',
  }

  isDataSubmitted = false ;

  setValues(event : any ){
    const keyName = event.target.name ;
    console.log(keyName)
    const value = event.target.value ;
    this.person[keyName] = value;
  }


  submitData(){
    for(const key in this.person){
      const val = this.person[key];

      if(val.trim().length === 0){
        alert('Please fill all the fields');
        return;
      }
    }

    this.isDataSubmitted = true
    console.log(this.person)
  }

  resetForm(){ // property binding
    this.person = {
      name : '',
      email : '',
      cmp : '',
      sal : '',
    };
    this.isDataSubmitted = false;
  }
}
