import { ToastController, LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Post } from './../../services/post.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.page.html',
  styleUrls: ['./cadastro-cliente.page.scss'],
})
export class CadastroClientePage implements OnInit {
  formCadastroCliente: FormGroup;

  constructor(
    private provider: Post,
    private router: Router,
    public toast: ToastController,
    public loading: LoadingController,
    public alertCtrl: AlertController,
    private frmBuilder: FormBuilder) { }

  ngOnInit() {
    this.formCadastroCliente = this.frmBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required],
      confSenha: ['', Validators.required],
      endereco: ['', Validators.required],
      numero: ['', Validators.required],
      bairro: ['', Validators.required],
      complemento: ['', Validators.required],
      telefone: ['', Validators.required]
    });
  }


  async mensagemSalvar(){
    const toast = await this.toast.create({
      message: 'Cadastro realizado com sucesso!',
      duration: 1000
    });
    toast.present();
  }

  async presentToast(a){
    const toast = await this.toast.create({
      message: a,
      duration: 1500,
      position: 'top'
    });
    toast.present();
  }

  async salvarCadastroCliente(){   
      const loader = await this.loading.create({
        message: 'Por favor aguarde...',
      });
      loader.present();

      return new Promise(resolve => {
        this.provider.dadosApi(this.formCadastroCliente.value, '').subscribe((res:any)=>{
          if(res.success==true){
            loader.dismiss();
            this.presentToast('Cadastrado com sucesso!');
            this.router.navigate(['/login-cliente']);       
          }else{
            loader.dismiss();
            this.presentToast(res.msg);
          }
        },(res:any) =>{
          loader.dismiss();
          this.presentToast('Ocorreu erro ao cadastrar!');
        });
      });

    }
  }
