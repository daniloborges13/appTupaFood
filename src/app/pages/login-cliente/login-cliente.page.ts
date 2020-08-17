import { FormGroup } from '@angular/forms';
import { ToastController, AlertController, LoadingController, NavController } from '@ionic/angular';
import { Post } from '../../services/post.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';


@Component({
  selector: 'app-login-cliente',
  templateUrl: './login-cliente.page.html',
  styleUrls: ['./login-cliente.page.scss'],
})
export class LoginClientePage implements OnInit {

  email: string = "";
  senha: string = "";
  disableButton: boolean;
  formLoginCliente: FormGroup;

  constructor(
    public alertController: AlertController,
    private storage: NativeStorage,
    private router: Router,
    private provider: Post,
    public toast: ToastController,
    public loading: LoadingController,
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  async presentToast(a) {
    const toast = await this.toast.create({
      message: a,
      duration: 1500,
      position: 'top'
    });
    toast.present();
  }

  ionViewDidEnter() {
    this.disableButton = false;
  }

  async tryLogin() {
    if (this.email == "") {
      this.presentToast('O campo email é obrigatório');
    } else if (this.senha == "") {
      this.presentToast('O campo senha é obrigatório');
    }
    else {
      this.disableButton = true;
      const loader = await this.loading.create({
        message: 'Por favor aguarde...',
      });
      loader.present();

      return new Promise(resolve => {
        let body = {
          email: this.email,
          senha: this.senha
        }

        this.provider.dadosApi(this.formLoginCliente.value).subscribe((res) => {
          if (res) {
            loader.dismiss();
            this.presentToast('Logado com sucesso!');
            this.storage.setItem('storage_xxx', res);
            this.navCtrl.navigateRoot(['/empresas']);
          } else {
            loader.dismiss();
            this.disableButton = false;
            this.presentToast('Ocorreu um erro!');
          }
        }, (err) => {
          loader.dismiss();
          this.disableButton = false;
          this.presentToast('Email ou senha incorretos!');
        });
      });
    }
  }
}