import { Component, Input, SimpleChange, OnChanges } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  @Input()
  name: string = '';

  // @Input()   // this iks getter and setter
  // get name(): string {
  //   return this.name
  // }

  // set name(val : string) {
  //   this._name = val;

  //   if(val){
  //     this.uname = val.charAt(0) + val.substr(1);
  //   }

  uname! : string;

  @Input()
  dob!: string;

  age: number = 0;

  message: string = '';

  constructor() {}

  ngOnChanges(changes: { [propName: string]: SimpleChange }): void {
    const dobChange = changes['dob'];
    if (dobChange) {
      this.age = this.getAge(this.dob);

      if (this.age >= 10 && this.age <= 13) {
        this.message = 'You are a Kid';
      } else if (this.age >= 13 && this.age <= 18) {
        this.message = 'You are a teen';
      } else {
        this.message = 'You are mature';
      }
    }

    const nameChange = changes['name'];
    if(nameChange){
      this.uname = this.name.charAt(0) + this.name.substr(1);
    }

  }

  private getAge(dataOfBirth: string) {
    const dob = new Date(dataOfBirth).getTime();
    const currentDate = new Date().getTime();
    return Math.floor((currentDate - dob) / (1000 * 60 * 60 * 24 * 365));
  }
}
