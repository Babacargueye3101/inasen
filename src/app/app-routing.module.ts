import { ChocoricoComponent } from './epices/chocorico/chocorico.component';
import { JolliComponent } from './epices/jolli/jolli.component';
import { GrandChefComponent } from './epices/grand-chef/grand-chef.component';
import { WelliComponent } from './epices/welli/welli.component';
import { ValeursComponent } from './pages/valeurs/valeurs.component';
import { EngagementComponent } from './pages/engagement/engagement.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { AproposComponent } from './pages/apropos/apropos.component';
import { JongueComponent } from './epices/jongue/jongue.component';

const routes: Routes = [
  { path :'' ,component:AccueilComponent},
  { path :'apropos' ,component:AproposComponent},
  { path :'engagement' ,component:EngagementComponent},
  { path :'valeurs' ,component:ValeursComponent},
  { path :'epices/jongue' ,component:JongueComponent},
  { path :'epices/welli' ,component:WelliComponent},
  { path :'epices/grand-chef' ,component:GrandChefComponent},
  { path :'epices/jolli' ,component:JolliComponent},
  { path :'epices/chocorico' ,component:ChocoricoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
