import { Component } from '@angular/core';

import { ServicosPage } from '../servicos/servicos';
import { EmpresasPage } from '../empresas/empresas';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ServicosPage;
  tab3Root = EmpresasPage;

  constructor() {

  }
}
