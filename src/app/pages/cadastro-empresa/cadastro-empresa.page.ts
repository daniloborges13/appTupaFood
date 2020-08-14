import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Post } from 'src/app/services/post.service';
import { Router } from '@angular/router';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-empresa',
  templateUrl: './cadastro-empresa.page.html',
  styleUrls: ['./cadastro-empresa.page.scss'],
})
export class CadastroEmpresaPage implements OnInit {

  constructor(private provider: Post,
    private router: Router,
    public toast: ToastController,
    public loading: LoadingController,
    public alertCtrl: AlertController,
    private frmBuilder: FormBuilder) { }

  formCadastroEmpresa: FormGroup;

  ngOnInit() {
    this.formCadastroEmpresa = this.frmBuilder.group({
      propriedade: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required],
      nome_estabelecimento: ['', Validators.required],
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

  async salvarCadastroEmpresa(){
    const loader = await this.loading.create({
      message: 'Por favor aguarde...',
    });
    loader.present();

    this.provider.dadosApi(this.formCadastroEmpresa.value).subscribe((res) => {
      if (res) {
        this.router.navigate(['login-empresa']);
        this.formCadastroEmpresa.reset();
        loader.dismiss();
        this.presentToast('Cadastrado com sucesso!');
        console.log('foi certo');
        console.log(res);
      } else {
        loader.dismiss();
        this.presentToast('Ocorreu um erro!');
        console.log(res.valueOf());
      }
    }, (res: any) => {
      loader.dismiss();
      this.presentToast('Ocorreu erro ao cadastrar!');
    });
  }

}
