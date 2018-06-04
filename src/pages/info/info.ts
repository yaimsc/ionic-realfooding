import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

	//array con informacion para realfooding

	informacion: Array<any> = [

	{
		descripcion: "El Realfooding es un estilo de vida basado en comer comida real y evitar los ultraprocesados. Es un movimiento que defiende el derecho a una alimentación saludable para la población. Es una revolución que lucha con conocimiento y conciencia contra el lado oscuro de la industria alimentaria",
		ultraprocesados: "1- Refrescos, 2- Bebidas energéticas, 3- Zumos envasados, 4- Lácteos azucarados, 5- Bollería, 6- Pan blanco,  7- Carnes procesadas, 8- Pizzas comerciales, 9- Galletas,  10- Cereales refinados y barritas, 11- Precocinados, 12- Patatas fritas, 13- Dulces y helados, 14- Productos dietéticos, 15- Salsas comerciales",
		foto: '../../assets/imgs/realfooding.jpg'

	}

	]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

}
