import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FeEditableRowTableModule } from 'fe-editable-row-table';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FeEditableRowTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
