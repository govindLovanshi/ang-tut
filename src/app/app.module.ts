import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [ // component declarations
    AppComponent,
    NavComponent,
    HeaderComponent, // it automtic get added here
  ],
  imports: [ // model imports
    BrowserModule
  ],
  providers: [], // dependency injection
  bootstrap: [AppComponent] // render the component
})
export class AppModule { }
