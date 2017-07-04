/*
  Providers encapsula o consumo de informação.
  O Providers é o que cuida respostas externas para o app
*/
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class MovieProvider {

  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

getLatesMovies(){
  return this.http.get("http://");
}


}
