import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroEmpresaPageRoutingModule } from './cadastro-empresa-routing.module';

import { CadastroEmpresaPage } from './cadastro-empresa.page';
import { NgxMessageErrorModule } from 'ngx-message-error';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroEmpresaPageRoutingModule,
    ReactiveFormsModule,
    NgxMessageErrorModule
  ],
  declarations: [CadastroEmpresaPage]
})
export class CadastroEmpresaPageModule {}
