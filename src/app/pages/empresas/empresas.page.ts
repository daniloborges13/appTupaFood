import { NavController, ToastController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.page.html',
  styleUrls: ['./empresas.page.scss'],
})
export class EmpresasPage implements OnInit {
  datastorage: any;
  nome: string;

  constructor(
    private storage: NativeStorage,
    public navCtrl: NavController,
    private toastCtrl: ToastController
    ) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.storage.getItem('storage_xxx').then((res)=>{
      console.log(res);
      this.datastorage = res;
      this.nome = this.datastorage.seu_nome;
    });
  }



  async logout(){
    this.storage.clear();
    this.navCtrl.navigateRoot(['/inicio']);
    const toast = await this.toastCtrl.create({
      message: 'Logout realizado com sucesso!',
      duration: 1500
    });
    toast.present();
  }

}
