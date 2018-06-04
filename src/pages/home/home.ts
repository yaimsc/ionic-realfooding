import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DescriptionPage } from '../description/description'; 
import { AlertController } from 'ionic-angular'; 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  //crear variables para inputs
  nombre: string;
  ingredientes: string; 
  descripcion: string; 

  // array de recetas vacio + todas las recetas en json
	recetas: Array<any> = [

		{
          nombre: "Mousse de Chocolate", 
          foto: "../../assets/imgs/moussedechocolate.jpg",
          ingredientes: "150gr de chocolate puro, 1 sobre de agar agar, 3 huevos, 10 gr de pistachos",
          descripcion: " Fundimos el chocolate al baño maria, añadimos los huevos y removemos bien hasta que se enfrie todo. Ponemos las claras al punto de nieve y vamos mezclandolo todo poco a poco. Una vez hecho esto añadimos el agar agar o la gelatina y dejamos minimo 4 horas enfriar en la nevera"

      } ,
      {
      	nombre: "Garbanzos Crujientes",
      	foto: "../../assets/imgs/garbanzos.jpg",
      	ingredientes: "400gr de garbanzos, 1 chorrito de aceite de oliva, 2-3 cucharadas de especias al gusto",
      	descripcion: "Precalentar el horno a 200ºC con el ventilador y calor arriba y abajo.Si los garbanzos son de bote, lavarlos y dejarlos bien escurridos. Si los hemos cocido nosotros, simplemente dejar escurrir. Colocar en una bandeja de horno un papel sulurizado (papel de horno) y poner encima los garbanzos. Verter la cucharada de aceite y remover bien con las manos, consiguiendo que queden bien impregnados y sin miedo a mancharnos.Espolvorear por encima las especias elegidas, y volver a mezclar bien con las manos, haciendo que queden todos bien especiados. Ordenar los garbanzos en la bandeja para que no queden amontonados.Meter en el horno a 200ºC unos 45-50 minutos (cuando veamos que están crujientes). A mitad de cocción, los saco, los remuevo y los vuelvo a meter para asegurarme que queden todos bien dorados. Dejar enfriar y guardar en un recipiente de cristal y hermético."
      }, 
      {
      	nombre:"Fingers de Pollo",
      	foto:"../../assets/imgs/fingers.jpg",
      	ingredientes:"300gr de pechuga de pollo, 1 huevo, 20gr de harina de almendras, 30gr copos de maiz, pimentón dulce, oregano, cebolla en polvo, curcuma y una pizca de sal",
      	descripcion: "Precalentamos el horno a 180º. Cortamos la pechuga de pollo limpia en tiras. En un plato hondo o cuenco batimos el huevo o ponemos las claras. En otro recipiente ponemos los copos de maíz triturados (no hace falta que queden completamente triturados), la harina de almendra y las especias y mezclamos bien para que el rebozado sea más uniforme. Preparamos una bandeja de horno con papel vegetal. Pasamos las tiras de pollo por el huevo y después por la mezcla de rebozado de cereales y especias. Vamos colocando las tiras a lo largo de toda la bandeja y colocamos la bandeja de horno en una posición que permita dorar más los fingers (en mi caso lo pongo un poquito más arriba). Horneamos durante unos 20-25 minutos y si es necesario les damos la vuelta para que se doren por ambos lados a mitad de horneado."
      }

	]
 

  //en el constructor meter las recetas que va a haber 
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  	//this.recetas = ["Mousse de Chocolate", "dsmvvsñasdvd", "hjdshdskasjña" ];    
      
  }

  // pasar una receta a la descripcion para que se abra la description page y la receta en si
  // haciendo le click a la receta elegida 

  recetaElegida(item){
  	this.navCtrl.push( DescriptionPage, {item: item}); 
 
  }

  //crear la receta con las variables para los inputs creadas anteriormente a las cuales se les asignan valores y 
  //se les añade a la lista del array

  crearReceta(){
    console.log(this.recetas);
    this.recetas.push({
      nombre: this.nombre, 
      ingredientes: this.ingredientes, 
      descripcion: this.descripcion
    }); 
    console.log(this.recetas); 

  }

  //creamos una alerta con los siguientes parametros dentro 
  //para poder utilizarla después al añadir receta

  presentAlert() {
  let alert = this.alertCtrl.create({
    title: 'Añadido!',
    subTitle: 'La nueva receta se ha añadido correctamente',
    buttons: ['Aceptar']
  });
  alert.present();
}

  //con index of elegimos el item de this.recetas que es el array
  //con splice le decimos que queremos borrar ese item al que le hemos llamado index y que solo ese

  eliminarReceta(item){
    const index: number=this.recetas.indexOf(item);
    (this.recetas).splice(index, 1); 
  }
 

}
