import { ToastController, LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Post } from './../../services/post.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Component, OnInit } from '@angular/core';
import { resolve } from 'dns';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.page.html',
  styleUrls: ['./cadastro-cliente.page.scss'],
})
export class CadastroClientePage implements OnInit {
  disableButton: boolean;

  constructor(private storage: NativeStorage,
    private provider: Post,
    private router: Router,
    public toast: ToastController,
    public loading: LoadingController,
    public alertCtrl: AlertController) { }

  ngOnInit() {
    
  }

  ionViewDidEnter(){
    this.disableButton = false;
  }

  nome : string = "";
  email : string = "";
  senha : string = "";
  confSenha : string = "";
  endereco : string = "";
  numero : string = "";
  bairro : string = "";
  complemento : string = "";
  telefone : string = "";

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

  async tryRegister(){
    if(this.nome==""){
      this.presentToast('O campo nome é obrigatório');
    }else if(this.email==""){
      this.presentToast('O campo email é obrigatório');
    }else if(this.senha==""){
      this.presentToast('O campo senha é obrigatório');
    }else if(this.endereco==""){
      this.presentToast('O campo endereco é obrigatório');
    }else if(this.numero==""){
      this.presentToast('O campo numero é obrigatório');
    }else if(this.bairro==""){
      this.presentToast('O campo bairro é obrigatório');
    }else if(this.complemento==""){
      this.presentToast('O campo complemento é obrigatório');
    }else if(this.telefone==""){
      this.presentToast('O campo telefone é obrigatório');
    }else if(this.confSenha!=this.senha){
      this.presentToast('As senhas devem ser iguais!');
    }else{
      this.disableButton = true;
      const loader = await this.loading.create({
        message: 'Por favor aguarde...',
      });
      loader.present();

      return new Promise(resolve => {
        let body = {
          requisicao: 'add',
          nome : this.nome,
          email : this.email,
          senha : this.senha,
          endereco : this.endereco,
          numero : this.numero,
          bairro : this.bairro,
          complemento : this.complemento,
          celular : this.telefone
        }
        this.provider.dadosApi(body, 'apiCadastroCliente.php').subscribe((res:any)=>{
          if(res.success==true){
            loader.dismiss();
            this.disableButton = false;
            this.presentToast(res.msg);
            this.router.navigate(['/login-cliente']);
          }else{
            loader.dismiss();
            this.disableButton = false;
            this.presentToast(res.msg);
          }
        },(err) =>{
          loader.dismiss();
          this.disableButton = false;
          this.presentAlert('Timeout')
        })
      });

    }
  }

  async presentAlert(a){
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: a,
      backdropDismiss: false,
      buttons: [
        {
          text: 'Close',
          cssClass: 'warning',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Tente novamente',
          handler: () => {
            this.tryRegister();
          }
        }
      ]
    });
    await alert.present();
  }


}
