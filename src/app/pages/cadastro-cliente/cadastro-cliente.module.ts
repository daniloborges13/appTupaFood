import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroClientePageRoutingModule } from './cadastro-cliente-routing.module';

import { CadastroClientePage } from './cadastro-cliente.page';
import { NgxMessageErrorModule } from 'ngx-message-error';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroClientePageRoutingModule,
    ReactiveFormsModule,
    NgxMessageErrorModule
  ],
  declarations: [CadastroClientePage]
})
export class CadastroClientePageModule {}
