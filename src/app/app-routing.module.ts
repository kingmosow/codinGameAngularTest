import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DisplayCounterComponent} from "./display-counter/display-counter.component";
import {DisplaysComponent} from "./displays/displays.component";
import {FatheraccountsComponent} from "./fatheraccounts/fatheraccounts.component";
import {AccountsComponent} from "./accounts/accounts.component";

const routes: Routes = [
  {path: 'displays_counter' , component: DisplayCounterComponent},
  {path: 'displays_vote' , component: DisplaysComponent},
  {path: 'father_accounts' , component: FatheraccountsComponent},
  {path: 'transactions' , component: FatheraccountsComponent},
  {path: 'accounts' , component: AccountsComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
