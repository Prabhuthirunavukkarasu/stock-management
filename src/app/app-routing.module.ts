import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockComponent } from './stock/stock.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {path: "",redirectTo:"stock",pathMatch:"full"},
  {path: "stock",component:StockComponent},
  {path:"profile",component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
