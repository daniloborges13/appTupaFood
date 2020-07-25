import { Post } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {

  constructor(private provider: Post, public toast: ToastController) { }

  ngOnInit() {
  }

  async listarProdutos() {

    let dados = {
      requisicao : 'listar-produtos',
      
    }


  }

}
