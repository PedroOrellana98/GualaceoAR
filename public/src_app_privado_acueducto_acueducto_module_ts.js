"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_privado_acueducto_acueducto_module_ts"],{

/***/ 8558:
/*!***************************************************************!*\
  !*** ./src/app/privado/acueducto/acueducto-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AcueductoPageRoutingModule": () => (/* binding */ AcueductoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _acueducto_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./acueducto.page */ 3499);




const routes = [
    {
        path: '',
        component: _acueducto_page__WEBPACK_IMPORTED_MODULE_0__.AcueductoPage
    }
];
let AcueductoPageRoutingModule = class AcueductoPageRoutingModule {
};
AcueductoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AcueductoPageRoutingModule);



/***/ }),

/***/ 3846:
/*!*******************************************************!*\
  !*** ./src/app/privado/acueducto/acueducto.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AcueductoPageModule": () => (/* binding */ AcueductoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _acueducto_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./acueducto-routing.module */ 8558);
/* harmony import */ var _acueducto_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./acueducto.page */ 3499);







let AcueductoPageModule = class AcueductoPageModule {
};
AcueductoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _acueducto_routing_module__WEBPACK_IMPORTED_MODULE_0__.AcueductoPageRoutingModule
        ],
        declarations: [_acueducto_page__WEBPACK_IMPORTED_MODULE_1__.AcueductoPage]
    })
], AcueductoPageModule);



/***/ }),

/***/ 3499:
/*!*****************************************************!*\
  !*** ./src/app/privado/acueducto/acueducto.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AcueductoPage": () => (/* binding */ AcueductoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _acueducto_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./acueducto.page.html?ngResource */ 2754);
/* harmony import */ var _acueducto_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./acueducto.page.scss?ngResource */ 4136);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);






let AcueductoPage = class AcueductoPage {
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
AcueductoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.MenuController }
];
AcueductoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-acueducto',
        template: _acueducto_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_acueducto_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AcueductoPage);



/***/ }),

/***/ 4136:
/*!******************************************************************!*\
  !*** ./src/app/privado/acueducto/acueducto.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "#botonRegresar {\n  width: 90px;\n  float: left;\n}\n\n#tituloPrincipal {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdWVkdWN0by5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSiIsImZpbGUiOiJhY3VlZHVjdG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2JvdG9uUmVncmVzYXIge1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuI3RpdHVsb1ByaW5jaXBhbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */";

/***/ }),

/***/ 2754:
/*!******************************************************************!*\
  !*** ./src/app/privado/acueducto/acueducto.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-button id=\"botonRegresar\" color=\"primary\" shape=\"round\" fill=\"solid\" (click)=\"regresar()\"> \r\n      Regresar</ion-button>\r\n    <ion-title id=\"tituloPrincipal\">Acueducto</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-text>\r\n    <p style=\"text-align: justify; margin-left: 5%; margin-right: 5%;\">\r\n      Es una estructura hidráulica que data quizás de la época prehispánica y colonial. Estos sistemas utilizados para el transporte de agua por gravedad es una galería que cuenta con miles de años de existencia, tiempo durante el cual han sido usados para la derivación de agua para su aprovechamiento agrícola, a estas obras se les conoce como sistemas de riego pequeños. \r\n    </p>\r\n    <img src=\"../../../assets/icon/Acueducto.jpg\" style=\"margin-left: 5%; margin-right: 5%; width: 90%;\">\r\n    <p style=\"text-align: justify; margin-left: 5%; margin-right: 5%;\">\r\n      Según estudios sobre este tipo de sistemas nos han demostrado que tienen un alto grado de sostenibilidad, bajos costos económicos y altos rendimientos de producción agrícola, pudiéndose considerar como una importante alternativa en la generación de desarrollo.\r\n    </p>\r\n    <p style=\"text-align: justify; margin-left: 5%; margin-right: 5%;\">\r\n      Hacia llegar el agua al otro lado del rio Sta. Bárbara, servía para transportar agua para riego, es un lugar por cierto privilegiado porque se encuentra en la parte alta de la cuenca del río Santa Bárbara desde donde se observa el serpenteante recorrido\r\n    </p>\r\n    <p style=\"text-align: justify; margin-left: 5%; margin-right: 5%;\">\r\n      El ancho del canal es de aproximadamente 1 metro paralelos al rio Guaymincay. Si al desbordarse el rio Guaymincay el agua se traslade por los arcos para evitar una inundación.\r\n    </p>\r\n  </ion-text>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_privado_acueducto_acueducto_module_ts.js.map