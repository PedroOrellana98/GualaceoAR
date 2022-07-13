"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_privado_iglesia-matriz_iglesia-matriz_module_ts"],{

/***/ 3782:
/*!*************************************************************************!*\
  !*** ./src/app/privado/iglesia-matriz/iglesia-matriz-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IglesiaMatrizPageRoutingModule": () => (/* binding */ IglesiaMatrizPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _iglesia_matriz_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iglesia-matriz.page */ 2722);




const routes = [
    {
        path: '',
        component: _iglesia_matriz_page__WEBPACK_IMPORTED_MODULE_0__.IglesiaMatrizPage
    }
];
let IglesiaMatrizPageRoutingModule = class IglesiaMatrizPageRoutingModule {
};
IglesiaMatrizPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], IglesiaMatrizPageRoutingModule);



/***/ }),

/***/ 2733:
/*!*****************************************************************!*\
  !*** ./src/app/privado/iglesia-matriz/iglesia-matriz.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IglesiaMatrizPageModule": () => (/* binding */ IglesiaMatrizPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _iglesia_matriz_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iglesia-matriz-routing.module */ 3782);
/* harmony import */ var _iglesia_matriz_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iglesia-matriz.page */ 2722);







let IglesiaMatrizPageModule = class IglesiaMatrizPageModule {
};
IglesiaMatrizPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _iglesia_matriz_routing_module__WEBPACK_IMPORTED_MODULE_0__.IglesiaMatrizPageRoutingModule
        ],
        declarations: [_iglesia_matriz_page__WEBPACK_IMPORTED_MODULE_1__.IglesiaMatrizPage]
    })
], IglesiaMatrizPageModule);



/***/ }),

/***/ 2722:
/*!***************************************************************!*\
  !*** ./src/app/privado/iglesia-matriz/iglesia-matriz.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IglesiaMatrizPage": () => (/* binding */ IglesiaMatrizPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _iglesia_matriz_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iglesia-matriz.page.html?ngResource */ 1756);
/* harmony import */ var _iglesia_matriz_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iglesia-matriz.page.scss?ngResource */ 772);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);






let IglesiaMatrizPage = class IglesiaMatrizPage {
    constructor(route, menu) {
        this.route = route;
        this.menu = menu;
    }
    regresar() {
        this.route.navigate(['privado/iglesia']);
    }
    ionViewWillEnter() {
        this.menu.enable(false);
    }
    ionViewWillLeave() {
        this.menu.enable(false);
    }
};
IglesiaMatrizPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.MenuController }
];
IglesiaMatrizPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-iglesia-matriz',
        template: _iglesia_matriz_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_iglesia_matriz_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], IglesiaMatrizPage);



/***/ }),

/***/ 772:
/*!****************************************************************************!*\
  !*** ./src/app/privado/iglesia-matriz/iglesia-matriz.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "#botonRegresar {\n  width: 90px;\n  float: left;\n}\n\n#tituloPrincipal {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlnbGVzaWEtbWF0cml6LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKIiwiZmlsZSI6ImlnbGVzaWEtbWF0cml6LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNib3RvblJlZ3Jlc2FyIHtcclxuICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbiN0aXR1bG9QcmluY2lwYWwge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */";

/***/ }),

/***/ 1756:
/*!****************************************************************************!*\
  !*** ./src/app/privado/iglesia-matriz/iglesia-matriz.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-button id=\"botonRegresar\" color=\"primary\" shape=\"round\" fill=\"solid\" (click)=\"regresar()\"> \r\n      Regresar</ion-button>\r\n    <ion-title id=\"tituloPrincipal\">Iglesia de Gualaceo</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-text>\r\n    <p style=\"text-align: justify; margin-left: 5%; margin-right: 5%;\">\r\n      El Padre Andrade reporta que el antiguo templo fue edificado en 1850, estando presente para la colocación de la primera piedra el franciscano, Monseñor José Manuel Plaza, octavo Obispo de Cuenca. Esta primera piedra “que lleva una leyenda fue encontrada y adosada en la pared del templo actual, donde permanece visible, frente a la plaza Guayaquil” (Ibid., p. 95). Continúa con la descripción de aquel templo, aún recordado por muchos: “Lo rescatable del templo antiguo era unos altares laterales, tallados en madera y recubiertos de pan de oro, al estilo de los templos coloniales, los mismos que seguramente, eran parte de un templo anterior, ese sí colonial.\r\n    </p>\r\n    <iframe style=\"margin-left: 5%; margin-right: 5%; width: 90%;\" src=\"https://www.youtube.com/embed/HQwBbAUErBc\" title=\"IGLESIA ANTIGUA DE GUALACEO\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\r\n    <p style=\"text-align: justify; margin-left: 5%; margin-right: 5%;\">\r\n      Desde el 20 de abril de 1952, iniciado bajo la dirección del P. Tarquino Muñoz Burgos y levantado por el dinámico y entusiasta P. Guillermo Andrade Moreno, Vicario de Gualaceo in illo tempore, con el esfuerzo y la generosidad de los gualaceños, siempre abiertos a las grandes manifestaciones espirituales que permiten, la realización de gigantescas empresas para la mayor gloria de Dios.\r\n    </p>\r\n    <p style=\"text-align: justify; margin-left: 5%; margin-right: 5%;\">\r\n      Hace ya 50 años, concretamente el 8 de diciembre de 1962, Monseñor Miguel Cordero Crespo, Vicario General de la Arquidióceis de Cuenca, inauguraba solemnemente este templo construido por espacio de una década.\r\n    </p>\r\n    <p style=\"text-align: justify; margin-left: 5%; margin-right: 5%;\">\r\n      Tiempo despues el 24 de Julio de 2013 en la iglesia de Gualaceo se coloco la imagen en honor al Apóstol Santiago el Mayor, patrono de la ciudad, llamado comúnmente “El Patrón Santiago”.\r\n    </p>\r\n  </ion-text>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_privado_iglesia-matriz_iglesia-matriz_module_ts.js.map