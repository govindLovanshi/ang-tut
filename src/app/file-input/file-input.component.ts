import { Component , AfterContentInit, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.css']
})
export class FileInputComponent implements AfterContentInit {
  
  public previewSrc! : string;

  public file!: File;


  @ContentChild("files") fileInputElement!: ElementRef<HTMLInputElement>

  constructor(){}
  
  
  
  ngAfterContentInit(): void {
    const {nativeElement} = this.fileInputElement;

    nativeElement.style.display = "none";

    nativeElement.addEventListener("change" , (evt)=>{
      this.previewImage(evt.target as HTMLInputElement)
    })

  }

  private previewImage(inRef: HTMLInputElement){

    const file = inRef.files?.item(0)

    this.file = file as File;

    const reader = new FileReader();

    reader.addEventListener("load" , (evt=>{
      this.previewSrc = evt.target?.result as string;
    }))

    reader.readAsDataURL(file as Blob);

  }
  


  openFileDialog() : void {
    this.fileInputElement.nativeElement.click();
  }

}
