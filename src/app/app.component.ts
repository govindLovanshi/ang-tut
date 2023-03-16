import { Component } from '@angular/core';

@Component({ // component decoratiors 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  text = '';
  textSize = 3 ;
  textSizeInPx :any ;
  textClass = ' ';

  setText(event : any){
    const val = event.target.value;
    this.text = val;
}

setSize(operation :any){
  if(operation == 'inc'){
    this.textSize += 1;
  }
  else{
    this.textSize -= 1;
  }

  this.textSizeInPx = this.textSize + 'px'

}

setColorChange(event : any){
  let colormy = event.target.value;
  console.log(colormy)
  this.textClass = colormy
}

setSizeByRange(event : any){
  let val = event.target.value;
  this.textSize = val;
}

}
