import { Component, OnInit } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: NativeStorage,
    public navCtrl: NavController
  ) {
    this.initializeApp();
  }


  ngOnInit() {

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.storage.getItem('storage_xxx').then((res) => {
      if (res == null) {
        this.navCtrl.navigateRoot(['/login-cliente']);
      } else {
        this.navCtrl.navigateRoot(['/empresas']);
      }
    });

  }
}
