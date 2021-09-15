import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactHeaderComponent } from './contacts/components/contact-header/contact-header.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
