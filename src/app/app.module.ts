import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { ToHourMinPipe } from './to-hour-min.pipe';
import { NumOfStopsPipe } from './num-of-stops.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TicketListComponent,
    ToHourMinPipe,
    NumOfStopsPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
