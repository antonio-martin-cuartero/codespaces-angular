import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotonesComponent } from './botones/botones.component';
import { ButtonSplashComponent } from './button-splash/button-splash.component';

@NgModule({
  declarations: [
    AppComponent,
    BotonesComponent,
    ButtonSplashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ButtonSplashComponent]
})
export class AppModule { }
