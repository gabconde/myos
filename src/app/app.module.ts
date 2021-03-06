import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ServicosPage } from '../pages/servicos/servicos';
import { EmpresasPage } from '../pages/empresas/empresas';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CadEmpresaPage } from '../pages/cadempresa/cadempresa';

import { SQLite } from '@ionic-native/sqlite'
import { DatabaseProvider } from '../providers/database/database';
import { EmpresaProvider } from '../providers/empresa/empresa';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    ServicosPage,
    EmpresasPage,
    HomePage,
    TabsPage,
    CadEmpresaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ServicosPage,
    EmpresasPage,
    HomePage,
    TabsPage,
    CadEmpresaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    SQLite,
    DatabaseProvider,
    EmpresaProvider
  ]
})
export class AppModule { }
