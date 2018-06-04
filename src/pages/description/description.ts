import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the DescriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-description',
  templateUrl: 'description.html',
})
export class DescriptionPage {

	receta: any;  //receta actual
	


  constructor(public navCtrl: NavController, public navParams: NavParams) {

  	this.receta = navParams.get('item'); //pilla la receta
  	
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad DescriptionPage');

    	
  }

}
