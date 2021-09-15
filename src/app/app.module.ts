import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactHeaderComponent } from './contacts/components/contact-header/contact-header.component';
import { ContactFilterComponent } from './contacts/components/contact-filter/contact-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactHeaderComponent,
    ContactFilterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
