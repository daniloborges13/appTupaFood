import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Post } from './services/post.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxMessageErrorModule, MessagesConfig } from 'ngx-message-error';

const customMessages: MessagesConfig = {
  min: 'Please enter a value greater than or equal to ?.',
  max: 'Please enter a value less than or equal to ?.',
  required: 'Este campo é obrigatório.',
  requiredTrue: 'Este campo é obrigatório.',
  email: 'Por favor preencha um email válido.',
  minlength: 'Caracteres mínimos não atingidos. ?/?',
  maxlength: 'Máximo de caracteres excedido. ?/?'
}


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxMessageErrorModule.forRoot(customMessages)
  
  ],
  providers: [
    NativeStorage,
    Post,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
