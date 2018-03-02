import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-cadempresa',
  templateUrl: 'cadempresa.html'
})
export class CadEmpresaPage {

  empresa = {};

  constructor(public navCtrl: NavController) {

  }

  cadastrarEmpresa() {
    console.log(this.empresa);
  }

}
