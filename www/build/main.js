webpackJsonp([2],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InfoPage = /** @class */ (function () {
    function InfoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.informacion = [
            {
                descripcion: "El Realfooding es un estilo de vida basado en comer comida real y evitar los ultraprocesados. Es un movimiento que defiende el derecho a una alimentación saludable para la población. Es una revolución que lucha con conocimiento y conciencia contra el lado oscuro de la industria alimentaria",
                comidareal: "1- Verduras y hortalizas, 2- Frutas, 3- Frutos secos y semillas, 4- Tubérculos y raíces, 5- Legumbres, 6- Pescados y mariscos, 7- Huevos, 8- Carnes, 9- Cereales integrales, 10- Aceites vírgenes, 11- Lácteos de calidad, 12- Café, cacao e infusiones, 13- Hierbas y especias",
                ultraprocesados: "1- Refrescos, 2-Bebidas"
            }
        ];
    }
    InfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InfoPage');
    };
    InfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-info',template:/*ion-inline-start:"D:\ionic\recetas\src\pages\info\info.html"*/'<!--\n  Generated template for the InfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="secondary"><!--cambiar estilo a secondary-->\n    <ion-title>Realfooding ¿Qué es?</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-list *ngFor="let item of informacion"><!--recorre el array informacion-->\n\n		<!-- saca la infromacion del array de infromacion-->\n		\n			<p>{{ item.descripcion }}</p><br>\n			<b>COMIDA REAL:</b><br>\n			<img src="{{item.foto}}"><br>\n			<b>ULTRAPROCESADOS A EVITAR:</b><br>\n			<p>{{ item.ultraprocesados }}</p>\n			\n	</ion-list>\n	\n</ion-content>\n'/*ion-inline-end:"D:\ionic\recetas\src\pages\info\info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], InfoPage);
    return InfoPage;
}());

//# sourceMappingURL=info.js.map

/***/ }),

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/description/description.module": [
		272,
		1
	],
	"../pages/info/info.module": [
		273,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info_info__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = /** @class */ (function () {
    function TabsPage() {
        //hacia donde redirige el tab 1
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__info_info__["a" /* InfoPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ionic\recetas\src\pages\tabs\tabs.html"*/'<ion-tabs>\n	<!-- tabs para lista -->\n  <ion-tab [root]="tab1Root" tabTitle="Lista Recetas" tabIcon="list"></ion-tab> \n  <!--saca el tab con el icono y su nombre que es lista --> \n  <ion-tab [root]="tab2Root" tabTitle="Realfooding" tabIcon="information-circle"></ion-tab>\n\n</ion-tabs>\n'/*ion-inline-end:"D:\ionic\recetas\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__description_description__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    //en el constructor meter las recetas que va a haber 
    function HomePage(navCtrl, navParams, alertCtrl) {
        //this.recetas = ["Mousse de Chocolate", "dsmvvsñasdvd", "hjdshdskasjña" ];    
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        // array de recetas vacio + todas las recetas en json
        this.recetas = [
            {
                nombre: "Mousse de Chocolate",
                foto: "../../assets/imgs/moussedechocolate.jpg",
                ingredientes: "150gr de chocolate puro, 1 sobre de agar agar, 3 huevos, 10 gr de pistachos",
                descripcion: " Fundimos el chocolate al baño maria, añadimos los huevos y removemos bien hasta que se enfrie todo. Ponemos las claras al punto de nieve y vamos mezclandolo todo poco a poco. Una vez hecho esto añadimos el agar agar o la gelatina y dejamos minimo 4 horas enfriar en la nevera"
            },
            {
                nombre: "Garbanzos Crujientes",
                foto: "../../assets/imgs/garbanzos.jpg",
                ingredientes: "400gr de garbanzos, 1 chorrito de aceite de oliva, 2-3 cucharadas de especias al gusto",
                descripcion: "Precalentar el horno a 200ºC con el ventilador y calor arriba y abajo.Si los garbanzos son de bote, lavarlos y dejarlos bien escurridos. Si los hemos cocido nosotros, simplemente dejar escurrir. Colocar en una bandeja de horno un papel sulurizado (papel de horno) y poner encima los garbanzos. Verter la cucharada de aceite y remover bien con las manos, consiguiendo que queden bien impregnados y sin miedo a mancharnos.Espolvorear por encima las especias elegidas, y volver a mezclar bien con las manos, haciendo que queden todos bien especiados. Ordenar los garbanzos en la bandeja para que no queden amontonados.Meter en el horno a 200ºC unos 45-50 minutos (cuando veamos que están crujientes). A mitad de cocción, los saco, los remuevo y los vuelvo a meter para asegurarme que queden todos bien dorados. Dejar enfriar y guardar en un recipiente de cristal y hermético."
            },
            {
                nombre: "Fingers de Pollo",
                foto: "../../assets/imgs/fingers.jpg",
                ingredientes: "300gr de pechuga de pollo, 1 huevo, 20gr de harina de almendras, 30gr copos de maiz, pimentón dulce, oregano, cebolla en polvo, curcuma y una pizca de sal",
                descripcion: "Precalentamos el horno a 180º. Cortamos la pechuga de pollo limpia en tiras. En un plato hondo o cuenco batimos el huevo o ponemos las claras. En otro recipiente ponemos los copos de maíz triturados (no hace falta que queden completamente triturados), la harina de almendra y las especias y mezclamos bien para que el rebozado sea más uniforme. Preparamos una bandeja de horno con papel vegetal. Pasamos las tiras de pollo por el huevo y después por la mezcla de rebozado de cereales y especias. Vamos colocando las tiras a lo largo de toda la bandeja y colocamos la bandeja de horno en una posición que permita dorar más los fingers (en mi caso lo pongo un poquito más arriba). Horneamos durante unos 20-25 minutos y si es necesario les damos la vuelta para que se doren por ambos lados a mitad de horneado."
            }
        ];
    }
    // pasar una receta a la descripcion para que se abra la description page y la receta en si
    // haciendo le click a la receta elegida 
    HomePage.prototype.recetaElegida = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__description_description__["a" /* DescriptionPage */], { item: item });
    };
    //crear la receta con las variables para los inputs creadas anteriormente a las cuales se les asignan valores y 
    //se les añade a la lista del array
    HomePage.prototype.crearReceta = function () {
        console.log(this.recetas);
        this.recetas.push({
            nombre: this.nombre,
            ingredientes: this.ingredientes,
            descripcion: this.descripcion
        });
        console.log(this.recetas);
    };
    //creamos una alerta con los siguientes parametros dentro 
    //para poder utilizarla después al añadir receta
    HomePage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Añadido!',
            subTitle: 'La nueva receta se ha añadido correctamente',
            buttons: ['Aceptar']
        });
        alert.present();
    };
    //con index of elegimos el item de this.recetas que es el array
    //con splice le decimos que queremos borrar ese item al que le hemos llamado index y que solo ese
    HomePage.prototype.eliminarReceta = function (item) {
        var index = this.recetas.indexOf(item);
        (this.recetas).splice(index, 1);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\ionic\recetas\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="secondary"> <!--cambio de estilo al navbar -->\n  	<button ion-button menuToggle icon-only>\n      <ion-icon name=\'menu\'></ion-icon>\n    </button>\n    <ion-title>Lista Recetas</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n		<!-- Medu de lado -->\n	<ion-menu [content]="content">\n		<ion-header>\n			<ion-toolbar color="secondary"> <!--cambio de estilo al toolbar-->\n				<ion-title>Añadir Receta</ion-title>\n			</ion-toolbar>\n		</ion-header>\n		<ion-content>\n			<!-- creador de recetas-->\n			<form>\n				<ion-list>\n				  <ion-item>\n				    <ion-label color="secondary">Nombre Receta</ion-label> <!--cambio de estilo al color de los labels de los inputs-->\n				    <ion-input [(ngModel)]="nombre" name="nombre" placeholder="Nombre"></ion-input>\n				  </ion-item>\n\n				   <ion-item>\n				    <ion-label color="secondary" stacked>Ingredientes</ion-label>\n				    <ion-textarea [(ngModel)]="ingredientes" name="ingredientes" placeholder="Escribir Ingredientes"></ion-textarea>\n				  </ion-item>\n\n					<ion-item>\n					  <ion-label color="secondary" stacked>Descripcion</ion-label>\n					  <ion-textarea [(ngModel)]="descripcion" name="descripcion" placeholder="Escribr Description"></ion-textarea>\n				 	</ion-item>\n 				</ion-list>\n				<button color="secondary" ion-button (click) = "crearReceta()"  (click) = "presentAlert()">Añadir</button>\n			</form>\n		</ion-content>\n	</ion-menu>\n\n	<ion-nav id="nav" #content [root]="rootPage">\n	</ion-nav>\n\n\n<ion-list>\n   <!-- Hacer un for que muestre un item de las recetas con la opcion de "Elegir receta" --> \n   <div ion-item *ngFor="let item of recetas" (click)="recetaElegida(item)">\n      {{ item.nombre }} <!--saca el nombre de las recetas de la lisa-->\n    <button (click)="eliminarReceta(item)"><ion-icon name="trash"></ion-icon></button> \n    <!--sirve para hacer clik en el icono de basura y que lleve a la funcion de eliminar-->\n  </div>\n</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"D:\ionic\recetas\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_description_description__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_info_info__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_description_description__["a" /* DescriptionPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_info_info__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/description/description.module#DescriptionPageModule', name: 'DescriptionPage', segment: 'description', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/info/info.module#InfoPageModule', name: 'InfoPage', segment: 'info', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_description_description__["a" /* DescriptionPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_info_info__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ionic\recetas\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\ionic\recetas\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DescriptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DescriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DescriptionPage = /** @class */ (function () {
    function DescriptionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.receta = navParams.get('item'); //pilla la receta
    }
    DescriptionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DescriptionPage');
    };
    DescriptionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-description',template:/*ion-inline-start:"D:\ionic\recetas\src\pages\description\description.html"*/'<!--\n  Generated template for the DescriptionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<!-- HEADER DE DESCRIPCION DE REECTA-->\n<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title>{{ receta.nombre }}</ion-title><!--el titulo de pagina es el nombre de la receta -->\n  </ion-navbar>\n\n</ion-header>\n\n<!--CONTENIDO DE DESCRIPCIONDE RECETA-->\n<ion-content padding>\n	<!--busca la imagen de la receta y si no la encuentra pilla una por defecto-->\n	<img src="{{ receta.foto }}" onerror="this.src=\'../../assets/imgs/default.jpg\';"/>\n	<ion-list>\n  \n     	 <p>{{ receta.ingredientes }}</p><br> <!--saca los ingredientes de la receta-->\n       <p>{{ receta.descripcion }}</p><!--saca la descripcion de la receta-->\n       \n\n\n  	</ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\recetas\src\pages\description\description.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DescriptionPage);
    return DescriptionPage;
}());

//# sourceMappingURL=description.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map