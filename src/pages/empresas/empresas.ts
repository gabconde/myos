import { CadEmpresaPage } from './../cadempresa/cadempresa';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-empresas',
  templateUrl: 'empresas.html'
})
export class EmpresasPage {

  cadempresaPage: any;
  //params = Object;

  constructor(public navCtrl: NavController) {
    this.cadempresaPage = CadEmpresaPage;
    //this.params = { id: 42 };
  }

}
