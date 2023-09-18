import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountsComponent } from './accounts/accounts.component';
import { FatheraccountsComponent } from './fatheraccounts/fatheraccounts.component';
import {DisplaysComponent} from "./displays/displays.component";
import {VoterComponent} from "./voter/voter.component";
import { CounterComponent } from './counter/counter.component';
import { DisplayCounterComponent } from './display-counter/display-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    FatheraccountsComponent,
    DisplaysComponent,
    VoterComponent,
    CounterComponent,
    DisplayCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
