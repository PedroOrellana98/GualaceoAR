"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_privado_calle_calle_module_ts"],{

/***/ 204:
/*!*******************************************************!*\
  !*** ./src/app/privado/calle/calle-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CallePageRoutingModule": () => (/* binding */ CallePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _calle_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calle.page */ 4479);




const routes = [
    {
        path: '',
        component: _calle_page__WEBPACK_IMPORTED_MODULE_0__.CallePage
    }
];
let CallePageRoutingModule = class CallePageRoutingModule {
};
CallePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CallePageRoutingModule);



/***/ }),

/***/ 3338:
/*!***********************************************!*\
  !*** ./src/app/privado/calle/calle.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CallePageModule": () => (/* binding */ CallePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _calle_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calle-routing.module */ 204);
/* harmony import */ var _calle_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calle.page */ 4479);







let CallePageModule = class CallePageModule {
};
CallePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _calle_routing_module__WEBPACK_IMPORTED_MODULE_0__.CallePageRoutingModule
        ],
        declarations: [_calle_page__WEBPACK_IMPORTED_MODULE_1__.CallePage]
    })
], CallePageModule);



/***/ }),

/***/ 4479:
/*!*********************************************!*\
  !*** ./src/app/privado/calle/calle.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CallePage": () => (/* binding */ CallePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _calle_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calle.page.html?ngResource */ 5199);
/* harmony import */ var _calle_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calle.page.scss?ngResource */ 7622);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);






let CallePage = class CallePage {
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
CallePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.MenuController }
];
CallePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-calle',
        template: _calle_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_calle_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CallePage);



/***/ }),

/***/ 7622:
/*!**********************************************************!*\
  !*** ./src/app/privado/calle/calle.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "#botonRegresar {\n  width: 90px;\n  float: left;\n}\n\n#tituloPrincipal {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKIiwiZmlsZSI6ImNhbGxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNib3RvblJlZ3Jlc2FyIHtcclxuICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbiN0aXR1bG9QcmluY2lwYWwge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */";

/***/ }),

/***/ 5199:
/*!**********************************************************!*\
  !*** ./src/app/privado/calle/calle.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-button id=\"botonRegresar\" color=\"primary\" shape=\"round\" fill=\"solid\" (click)=\"regresar()\"> \r\n      Regresar</ion-button>\r\n    <ion-title id=\"tituloPrincipal\">Gran Colombia</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-text>\r\n    <p style=\"text-align: justify; margin-left: 5%; margin-right: 5%;\">\r\n      El origen del nombre de “La Gran Colombia” o “Republica de Colombia” fue un estado creado por el Congreso de Angostura, que existió entre los años 1820 y 1831, y era conformado por Venezuela y la Nueva Granada, además de Panamá, Quito y Guayaquil.\r\n    </p>\r\n    <br>\r\n    <p style=\"text-align: justify; margin-left: 5%; margin-right: 5%;\">\r\n      A continuacion algunas de las imagenes referentes a la Calle Gran Colombia:\r\n    </p>\r\n    <br>\r\n    <p style=\"text-align: justify; margin-left: 5%; margin-right: 5%;\">\r\n      Casa de oficinas y despachos públicos entre los años 1920 – 1930 \r\n    </p>\r\n    <img src=\"../../../assets/icon/callePrimera.jpeg\" style=\"margin-left: 5%; margin-right: 5%; width: 90%;\">\r\n    <p style=\"text-align: justify; margin-left: 5%; margin-right: 5%;\">\r\n      Dia de feria en la plaza de Gualaceo entre los años 1920 – 1930 \r\n    </p>\r\n    <img src=\"../../../assets/icon/calleSegunda.jpeg\" style=\"margin-left: 5%; margin-right: 5%; width: 90%;\">\r\n    <p style=\"text-align: justify; margin-left: 5%; margin-right: 5%;\">\r\n      Calle Bolivar entre los años 1920 – 1930 \r\n    </p>\r\n    <img src=\"../../../assets/icon/calleTercera.jpeg\" style=\"margin-left: 5%; margin-right: 5%; width: 90%;\">\r\n    <p style=\"text-align: justify; margin-left: 5%; margin-right: 5%;\">\r\n      Autor de las imágenes previamente expuestas: Serrano Manuel Jesús; Cuenca, Azuay\r\n    </p>\r\n  </ion-text>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_privado_calle_calle_module_ts.js.map