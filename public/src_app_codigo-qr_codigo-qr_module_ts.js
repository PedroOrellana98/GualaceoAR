"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_codigo-qr_codigo-qr_module_ts"],{

/***/ 7081:
/*!*******************************************************!*\
  !*** ./src/app/codigo-qr/codigo-qr-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodigoQRPageRoutingModule": () => (/* binding */ CodigoQRPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _codigo_qr_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./codigo-qr.page */ 6829);




const routes = [
    {
        path: '',
        component: _codigo_qr_page__WEBPACK_IMPORTED_MODULE_0__.CodigoQRPage
    }
];
let CodigoQRPageRoutingModule = class CodigoQRPageRoutingModule {
};
CodigoQRPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CodigoQRPageRoutingModule);



/***/ }),

/***/ 5331:
/*!***********************************************!*\
  !*** ./src/app/codigo-qr/codigo-qr.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodigoQRPageModule": () => (/* binding */ CodigoQRPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _codigo_qr_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./codigo-qr-routing.module */ 7081);
/* harmony import */ var _codigo_qr_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./codigo-qr.page */ 6829);







let CodigoQRPageModule = class CodigoQRPageModule {
};
CodigoQRPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _codigo_qr_routing_module__WEBPACK_IMPORTED_MODULE_0__.CodigoQRPageRoutingModule
        ],
        declarations: [_codigo_qr_page__WEBPACK_IMPORTED_MODULE_1__.CodigoQRPage]
    })
], CodigoQRPageModule);



/***/ }),

/***/ 6829:
/*!*********************************************!*\
  !*** ./src/app/codigo-qr/codigo-qr.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodigoQRPage": () => (/* binding */ CodigoQRPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _codigo_qr_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./codigo-qr.page.html?ngResource */ 5960);
/* harmony import */ var _codigo_qr_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./codigo-qr.page.scss?ngResource */ 4719);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);





let CodigoQRPage = class CodigoQRPage {
    constructor(menu) {
        this.menu = menu;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.menu.enable(true);
    }
};
CodigoQRPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.MenuController }
];
CodigoQRPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-codigo-qr',
        template: _codigo_qr_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_codigo_qr_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CodigoQRPage);



/***/ }),

/***/ 4719:
/*!**********************************************************!*\
  !*** ./src/app/codigo-qr/codigo-qr.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "#botonIglesia {\n  float: left;\n  width: 50%;\n  margin-top: 10%;\n  margin-left: 30%;\n  margin-bottom: 10%;\n}\n\n#botonCalle {\n  float: left;\n  width: 50%;\n  margin-top: 10%;\n  margin-left: 30%;\n  margin-bottom: 10%;\n}\n\n#botonAcueducto {\n  float: left;\n  width: 55%;\n  margin-top: 10%;\n  margin-left: 28%;\n  margin-bottom: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvZGlnby1xci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0oiLCJmaWxlIjoiY29kaWdvLXFyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNib3RvbklnbGVzaWEge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwJTtcclxufVxyXG5cclxuI2JvdG9uQ2FsbGUge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwJTtcclxufVxyXG5cclxuI2JvdG9uQWN1ZWR1Y3RvIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDU1JTtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyOCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbn0iXX0= */";

/***/ }),

/***/ 5960:
/*!**********************************************************!*\
  !*** ./src/app/codigo-qr/codigo-qr.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n          <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n    <ion-title>Escaneo de códigos QR</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n \r\n<ion-content>\r\n    <ion-list>\r\n        <ion-item>\r\n          <ion-label>\r\n            <img src=\"../../assets/icon/Iglesia_de_Gualaceo.png\" id=\"imagen\">\r\n            <ion-button id=\"botonIglesia\" href=\"https://s.qrfy.mobi/aFq4T3i\" color=\"primary\" >Redireccion Iglesia</ion-button>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <img src=\"../../assets/icon/Calle_Gran_Colombia.png\" id=\"imagen\">\r\n            <ion-button id=\"botonCalle\" href=\"https://drive.google.com/file/d/1UIl31s3NfglwZTzEzMJj2jY2SIZDy35u/view\" color=\"primary\" >Redireccion Calle</ion-button>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <img src=\"../../assets/icon/Canal_de_riego.png\" id=\"imagen\">\r\n            <ion-button id=\"botonAcueducto\" href=\"https://drive.google.com/file/d/1PEssdvK-uVu_Wgroa_kic4OgZg5Ru09y/view\" color=\"primary\" >Redireccion Acueducto</ion-button>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_codigo-qr_codigo-qr_module_ts.js.map