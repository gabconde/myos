import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../database/database';

/*
  Generated class for the EmpresaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EmpresaProvider {

  constructor(private dbProvider: DatabaseProvider) {
    console.log('Hello EmpresaProvider Provider');
  }

  public insert(empresa: Empresa) {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'insert into empresas (nome, razao, cnpj, endereco, cep, telefone, email) values (?, ?, ?, ?, ?, ?, ?)';
        let data = [empresa.nome, empresa.razao, empresa.cnpj, empresa.endereco, empresa.cep, empresa.telefone, empresa.email];

        return db.executeSql(sql, data)
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

  public update(empresa: Empresa) {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'update empresas set nome = ?, razao = ?, cnpj = ?, endereco = ?, cep = ?, telefone = ?, email = ? where id = ?';
        let data = [empresa.nome, empresa.razao, empresa.cnpj, empresa.endereco, empresa.cep, empresa.telefone, empresa.email, empresa.id]

        return db.executeSql(sql, data)
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

  public remove(id: number) {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'delete from empresas where id = ?';
        let data = [id];

        return db.executeSql(sql, data)
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

  public get(id: number) {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'select * from empresas where id = ?';
        let data = [id];

        return db.executeSql(sql, data)
          .then((data: any) => {
            if (data.rows.length > 0) {
              let item = data.rows.item(0);
              let empresa = new Empresa();
              empresa.id = item.id;
              empresa.nome = item.nome;
              empresa.razao = item.razao;
              empresa.cnpj = item.cnpj;
              empresa.endereco = item.endereco;
              empresa.cep = item.cep;
              empresa.telefone = item.telefone;
              empresa.email = item.email;

              return empresa;
            }

            return null;
          })
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

  public getAll() {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'select * from empresas';
        var data: any[];

        return db.executeSql(sql, data)
          .then((data: any) => {
            if (data.rows.length > 0) {
              let empresas: any[] = [];
              for (var i = 0; i < data.rows.length; i++) {
                var empresa = data.rows.item(i);
                empresas.push(empresa);
              }
              return empresas;
            } else {
              return [];
            }
          })
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }
}

export class Empresa {
  id: number;
  nome: string;
  razao: string;
  cnpj: string;
  endereco: string;
  cep: string;
  email: string;
  telefone: string;
}
