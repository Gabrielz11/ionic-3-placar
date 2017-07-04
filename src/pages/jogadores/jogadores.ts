import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the JogadoresPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-jogadores',
  templateUrl: 'jogadores.html',
})
export class JogadoresPage {
 //variáveis
  public nomeUsuario:string = "Gabriel Aires";
  public vitoriaUsuario:number;
  public num1:number = 2;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaDoisNumero(num1:number): void{
    this.vitoriaUsuario = num1;
}

  ionViewDidLoad() {
     this.somaDoisNumero(2);
  }

}
