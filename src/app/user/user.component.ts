import { Component , Input , Attribute} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @Input() itype: string = '';
  public isEmail: boolean = false;

  constructor(@Attribute('itype') t : string){
    this.isEmail = t.includes('email') 
  }

}
