import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BooringService } from './booring.service';

import { AppComponent } from './app.component';
import { TheActivityComponent } from './the-activity/the-activity.component';

@NgModule({
  declarations: [AppComponent, TheActivityComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [BooringService],
  bootstrap: [AppComponent],
})
export class AppModule {}
