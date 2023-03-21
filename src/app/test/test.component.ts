import { Component , OnInit , HostListener } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  
  
  
  ngOnInit(): void {

  }

  @HostListener('document : keydown' , ['$event']) onKeydownHandler(event : KeyboardEvent){
    console.log(event.code)
  }



}
function HostListner(arg0: string, arg1: string[]) {
  throw new Error('Function not implemented.');
}

