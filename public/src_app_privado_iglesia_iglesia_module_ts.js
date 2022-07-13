"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_privado_iglesia_iglesia_module_ts"],{

/***/ 7176:
/*!***********************************************************!*\
  !*** ./src/app/privado/iglesia/iglesia-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IglesiaPageRoutingModule": () => (/* binding */ IglesiaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _iglesia_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iglesia.page */ 5520);




const routes = [
    {
        path: '',
        component: _iglesia_page__WEBPACK_IMPORTED_MODULE_0__.IglesiaPage
    }
];
let IglesiaPageRoutingModule = class IglesiaPageRoutingModule {
};
IglesiaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], IglesiaPageRoutingModule);



/***/ }),

/***/ 682:
/*!***************************************************!*\
  !*** ./src/app/privado/iglesia/iglesia.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IglesiaPageModule": () => (/* binding */ IglesiaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _iglesia_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iglesia-routing.module */ 7176);
/* harmony import */ var _iglesia_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iglesia.page */ 5520);







let IglesiaPageModule = class IglesiaPageModule {
};
IglesiaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _iglesia_routing_module__WEBPACK_IMPORTED_MODULE_0__.IglesiaPageRoutingModule
        ],
        declarations: [_iglesia_page__WEBPACK_IMPORTED_MODULE_1__.IglesiaPage]
    })
], IglesiaPageModule);



/***/ }),

/***/ 5520:
/*!*************************************************!*\
  !*** ./src/app/privado/iglesia/iglesia.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IglesiaPage": () => (/* binding */ IglesiaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _iglesia_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iglesia.page.html?ngResource */ 539);
/* harmony import */ var _iglesia_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iglesia.page.scss?ngResource */ 9042);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);






let IglesiaPage = class IglesiaPage {
    constructor(route, menu) {
        this.route = route;
        this.menu = menu;
    }
    salir() {
        this.route.navigate(['login']);
    }
    ionViewWillEnter() {
        this.menu.enable(false);
    }
    ionViewWillLeave() {
        this.menu.enable(false);
    }
};
IglesiaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.MenuController }
];
IglesiaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-iglesia',
        template: _iglesia_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_iglesia_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], IglesiaPage);



/***/ }),

/***/ 9042:
/*!**************************************************************!*\
  !*** ./src/app/privado/iglesia/iglesia.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "page-places-detail ion-row {\n  background-color: #019689;\n}\n\n.my-custom-menu {\n  --width: 500px;\n}\n\n#botonSalir {\n  width: 20px;\n  float: left;\n}\n\n#tituloPrincipal {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlnbGVzaWEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0kseUJBQUE7QUFBUjs7QUFJQTtFQUNJLGNBQUE7QUFESjs7QUFJQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtBQURKIiwiZmlsZSI6ImlnbGVzaWEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicGFnZS1wbGFjZXMtZGV0YWlsIHtcclxuICAgIGlvbi1yb3cge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTk2ODk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5teS1jdXN0b20tbWVudSB7XHJcbiAgICAtLXdpZHRoOiA1MDBweDtcclxufVxyXG5cclxuI2JvdG9uU2FsaXIge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuI3RpdHVsb1ByaW5jaXBhbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */";

/***/ }),

/***/ 539:
/*!**************************************************************!*\
  !*** ./src/app/privado/iglesia/iglesia.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-button id=\"botonSalir\" color=\"primary\" shape=\"round\" fill=\"solid\" (click)=\"salir()\"> \r\n      Salir</ion-button>\r\n    <ion-title id=\"tituloPrincipal\">Pagina Principal</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-item detail href=\"../iglesia-matriz/\">\r\n        <img src=\"../../../assets/icon/Iglesia.jpeg \" style=\"height: 100px; width: 150px; margin-right: 10px; margin-bottom: 50px; margin-top: 50px;\">\r\n      <ion-label>\r\n        <h2>Iglesia de Gualaceo</h2>\r\n        <p>Ubicacion: <a href=\"https://maps.google.com/?q=-2.889692978845055, -78.77878400341795\">Aqui</a></p>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item detail href=\"../calle/\">\r\n        <img src=\"../../../assets/icon/CalleGC.jpeg\" style=\"height: 100px; width: 150px; margin-right: 10px; margin-bottom: 50px; margin-top: 50px;\">\r\n      <ion-label>\r\n        <h2>Calle Gran Colombia</h2>\r\n        <p>Ubicacion: <a href=\"https://maps.google.com/?q=-2.8899217627170795, -78.77957520358747\">Aqui</a></p>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item detail href=\"../acueducto/\">\r\n        <img src=\"../../../assets/icon/Acueducto.jpg\" style=\"height: 100px; width: 150px; margin-right: 10px; margin-bottom: 50px; margin-top: 50px;\">\r\n      <ion-label>\r\n        <h2>Canal de riego</h2>\r\n        <p>Ubicacion: <a href=\"https://maps.google.com/?q=-2.903407969576315, -78.77972910708982\">Aqui</a></p>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_privado_iglesia_iglesia_module_ts.js.map