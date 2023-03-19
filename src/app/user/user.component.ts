// tsint: disable : forgin
import { Component , Input , OnChanges , SimpleChanges} from '@angular/core';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnChanges {
  @Input() userId : string = ' ';
  public user : Record<string, any> | undefined
  constructor(){

  }

  ngOnChanges(chnages : SimpleChanges ) : void {
    const id = chnages['userId'] ;
    if(perviousValue != currentValue){

    }
  }

  private setUserDetails(value : number) : void {
    this.http(value).subscribe((res)=>{
      this.user = res;
    })
  }

  private http(id : number) : Observable<any>  {
    const url = "https://jsonplaceholder.typicode.com/users" + id ;

    return from(fetch(url).then((response) => response.json()))
  }

}
