import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-cadempresa',
  templateUrl: 'cadempresa.html'
})
export class CadEmpresaPage {

  private nomeEmpresa: string;
  private razaoEmpresa: string;
  private cnpjEmpresa: number;
  private enderecoEmpresa: string;
  private cepEmpresa: number;
  private telefoneEmpresa: number;
  private emailEmpresa: string;

  constructor(public navCtrl: NavController) {

  }

}
