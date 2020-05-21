import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HighlightPlusModule } from 'ngx-highlightjs/plus';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxIpv4HelperModule } from 'projects/ngx-ipv4-helper/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HighlightPlusModule,
    FormsModule,
    ReactiveFormsModule,
    NgxIpv4HelperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
