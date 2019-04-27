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

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LayoutsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
