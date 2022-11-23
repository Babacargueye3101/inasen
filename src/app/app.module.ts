import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FooterComponent } from './pages/footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule} from '@angular/fire/compat/storage';
import { HttpClientModule } from '@angular/common/http';
import { AproposComponent } from './pages/apropos/apropos.component';
import { EngagementComponent } from './pages/engagement/engagement.component';
import { ValeursComponent } from './pages/valeurs/valeurs.component';
import { JongueComponent } from './epices/jongue/jongue.component';
import { WelliComponent } from './epices/welli/welli.component';
import { GrandChefComponent } from './epices/grand-chef/grand-chef.component';
import { JolliComponent } from './epices/jolli/jolli.component';
import { ChocoricoComponent } from './epices/chocorico/chocorico.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AccueilComponent,
    AproposComponent,
    EngagementComponent,
    ValeursComponent,
    JongueComponent,
    WelliComponent,
    GrandChefComponent,
    JolliComponent,
    ChocoricoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
