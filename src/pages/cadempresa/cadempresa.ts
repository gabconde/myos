import { EmpresaProvider, Empresa } from './../../providers/empresa/empresa';
import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-cadempresa',
  templateUrl: 'cadempresa.html'
})
export class CadEmpresaPage {
  empresa: Empresa;
  //empresa = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController,
    private empresaProvider: EmpresaProvider) {

    this.empresa = new Empresa();

    if (this.navParams.data.id) {
      this.empresaProvider.get(this.navParams.data.id)
        .then((result: any) => {
          this.empresa = result;
        })
    }
  }

  submitEmpresa() {
    this.cadastrarEmpresa()
      .then(() => {
        this.toast.create({ message: 'Produto salvo.', duration: 3000, position: 'botton' }).present();
        this.navCtrl.pop();
      })
      .catch(() => {
        this.toast.create({ message: 'Erro ao salvar o produto.', duration: 3000, position: 'botton' }).present();
      });
  }

  private cadastrarEmpresa() {
    console.log(this.empresa);
    return this.empresaProvider.insert(this.empresa);
  }

}


