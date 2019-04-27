import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppMaterialModule } from './modules/app-material.module';
import swal from 'sweetalert';
import { AuthComponent } from './auth/auth/auth.component';
import { LayoutsComponent } from './layouts/layouts/layouts.component';
import { NavbarComponent } from './components/navbar/navbar.component' ;
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { SpotifyService } from './services/spotify.service';
import {  HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LayoutsComponent,
    NavbarComponent,
    AboutComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
