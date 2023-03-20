import { Component , OnInit , AfterContentChecked , AfterContentInit, ContentChild } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { MovieComponent } from '../movie/movie.component';
import { ajax } from "rxjs/ajax";

interface Comment {
  body : string;
  email : string;
}


@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['./marvel.component.css']
})
export class MarvelComponent implements AfterContentChecked , AfterContentInit , OnInit {
  
  @ContentChild(MovieComponent) movieCmp!: MovieComponent
  
  releasedMovie!: Movie;
  movieComponent!: Comment[];
  
  ngAfterContentInit(): void {

  }
  
  
  ngOnInit(): void {

  }
  
  ngAfterContentChecked(): void {

    console.log("called")
    // based condition 
    if(this.releasedMovie){
      return;
    }

    if(this.movieCmp.movie.isReleased){
      this.releasedMovie = this.movieCmp.movie;
      this.fetchComments();
    }
  }

  private fetchComments(){
    const url = `https://jsonplaceholder.typicode.com/posts/${this.releasedMovie.id}/comments`;

    ajax.getJSON< Comment[]>(url).subscribe((comments)=>{
      this.movieComponent = comments || []
    })
  }

}
