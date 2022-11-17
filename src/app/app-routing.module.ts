import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { AproposComponent } from './pages/apropos/apropos.component';

const routes: Routes = [
  { path :'' ,component:AccueilComponent},
  { path :'apropos' ,component:AproposComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
