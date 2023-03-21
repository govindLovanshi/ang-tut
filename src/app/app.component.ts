import { Component , AfterViewInit, ViewChild, ElementRef, Directive } from '@angular/core';

@Directive({
  selector : "[fileInput]"
})

export class FileDirective {
  constructor(public eleRef : ElementRef ) {}
}

@Component({ // component decoratiors 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  
  @ViewChild(FileDirective) inpRef! : FileDirective;

  constructor(){

  }
  
  ngAfterViewInit(): void {
    const inp = this.inpRef.eleRef.nativeElement;

    inp.addEventListener("change "  , ()=> {
      console.log(inp.files);
    })

   console.log(FileDirective) 
  }


}
