(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main-page/mainPage.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main-page/mainPage.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-top-bar></app-top-bar>\r\n<app-search-card></app-search-card>\r\n<app-vehicle-list></app-vehicle-list>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modal-window/modal-window.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal-window/modal-window.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <h1>Add New Vehicle</h1>\r\n  <div>\r\n    <h4>Name: </h4>\r\n    <input type=\"text\" placeholder=\"Vehicle Name\" [(ngModel)]= \"newVehicle.name\">\r\n  </div>\r\n  <div>\r\n    <h4>Type: </h4>\r\n    <select [(ngModel)]=\"newVehicle.carType\">\r\n      <option *ngFor=\"let type of keys(carTypes)\" [ngValue]=\"type\">{{carTypes[type]}}</option>\r\n    </select>\r\n  </div>\r\n  <div>\r\n    <h4>Time Created: </h4>\r\n    <input type=\"date\" placeholder=\"Time Created\"\r\n           [(ngModel)]=\"newVehicle.createdTime\">\r\n  </div>\r\n  <div>\r\n    <h4>Last Successful Connection: </h4>\r\n    <input type=\"date\" placeholder=\"Last Successful Connection\"\r\n           [(ngModel)]=\"newVehicle.lastSuccessfulConnection\">\r\n  </div>\r\n  <button class=\"styled-button save-button\" (click)=\"saveVehicle()\">Save</button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/search-card/search-card.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search-card/search-card.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\r\n  <div class=\"search-title-container\">\r\n    <h1 class=\"search-title\">Search Vehicles</h1>\r\n  </div>\r\n  <div class=\"container\">\r\n    <div>\r\n      <h4>Name: </h4>\r\n      <input type=\"text\" placeholder=\"Vehicle Name\" [(ngModel)]=\"inputName\">\r\n    </div>\r\n    <div>\r\n      <h4>Type: </h4>\r\n      <select [(ngModel)]=\"inputType\">\r\n        <option *ngFor=\"let type of keys(carTypes)\" [ngValue]=\"type\">{{carTypes[type]}}</option>\r\n      </select>\r\n    </div>\r\n    <div>\r\n      <h4>Time Created: </h4>\r\n      <input type=\"text\" placeholder=\"From\" onfocus=\"(this.type='date')\" onblur=\"(this.type='text')\" [(ngModel)]=\"inputCreateFrom\">\r\n      <input type=\"text\" placeholder=\"To\" onfocus=\"(this.type='date')\" onblur=\"(this.type='text')\" [(ngModel)]=\"inputCreateTo\">\r\n    </div>\r\n    <div>\r\n      <h4>Last Successful Connection: </h4>\r\n      <input type=\"text\" placeholder=\"From\" onfocus=\"(this.type='date')\" onblur=\"(this.type='text')\" [(ngModel)]=\"inputLastConnectionFrom\">\r\n      <input type=\"text\" placeholder=\"To\" onfocus=\"(this.type='date')\" onblur=\"(this.type='text')\" [(ngModel)]=\"inputLastConnectionTo\">\r\n    </div>\r\n    <button class=\"styled-button clear-button\" (click)=\"clearFilters()\">Clear filters</button>\r\n    <button class=\"styled-button search-button\" (click)=\"filterVehicles()\">Search</button>\r\n  </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/top-bar/top-bar.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/top-bar/top-bar.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"top-bar\">\r\n  <img class=\"logo\" src=\"assets/Argus.png\">\r\n  <h1>Vehicles</h1>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle-list/vehicle-list.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle-list/vehicle-list.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"list-container\">\r\n  <ul>\r\n    <button class=\"styled-button add-button\" (click)=\"openDialog(newVehicle)\">Add new vehicle!</button>\r\n    <label>Sort By: </label>\r\n    <select [(ngModel)]=\"sortType\" (change)=\"sortVehicles()\">\r\n      <option value=\"older\">Created Time - older first</option>\r\n      <option value=\"newer\">Created Time - newer first</option>\r\n      <option value=\"lastConn\">Last Successful Connection</option>\r\n    </select>\r\n    <li *ngFor=\"let vehicle of mainPage.AllVehicles\">\r\n      <a>\r\n        <div class=\"vehicle-card\">\r\n          {{vehicle.carType}} - {{vehicle.name}}\r\n          <button class=\"styled-button delete-button\" (click)=\"deleteVehicle(vehicle.id)\">Delete</button>\r\n          <button class=\"styled-button details-button\" (click)=\"openDialog(vehicle)\">Details</button>\r\n        </div>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n  <h1 [ngClass]=\"{'hidden': showPlaceHolder}\">No vehicles to show</h1>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/ClientServices/vehicle.service.ts":
/*!***************************************************!*\
  !*** ./src/app/ClientServices/vehicle.service.ts ***!
  \***************************************************/
/*! exports provided: VehicleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleService", function() { return VehicleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let VehicleService = class VehicleService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080/';
    }
    getAllVehicles() {
        return this.http.get(this.baseUrl + 'vehicles');
    }
    getVehicleById(id) {
        return this.http.get(this.baseUrl + 'vehicles/' + id);
    }
    addVehicle(vehicle) {
        return this.http.post(this.baseUrl + 'vehicles/', vehicle);
    }
    updateVehicle(vehicle) {
        return this.http.put(this.baseUrl + 'vehicles/', vehicle);
    }
    deleteVehicle(id) {
        return this.http.delete(this.baseUrl + 'vehicles/' + id);
    }
};
VehicleService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
VehicleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], VehicleService);



/***/ }),

/***/ "./src/app/Models/carType.enum.ts":
/*!****************************************!*\
  !*** ./src/app/Models/carType.enum.ts ***!
  \****************************************/
/*! exports provided: CarType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarType", function() { return CarType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var CarType;
(function (CarType) {
    CarType["SUV"] = "SUV";
    CarType["Truck"] = "Truck";
    CarType["Hybrid"] = "Hybrid";
})(CarType || (CarType = {}));


/***/ }),

/***/ "./src/app/Models/vehicle.model.ts":
/*!*****************************************!*\
  !*** ./src/app/Models/vehicle.model.ts ***!
  \*****************************************/
/*! exports provided: Vehicle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vehicle", function() { return Vehicle; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Vehicle {
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _main_page_mainPage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-page/mainPage.component */ "./src/app/main-page/mainPage.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./top-bar/top-bar.component */ "./src/app/top-bar/top-bar.component.ts");
/* harmony import */ var _search_card_search_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search-card/search-card.component */ "./src/app/search-card/search-card.component.ts");
/* harmony import */ var _vehicle_list_vehicle_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vehicle-list/vehicle-list.component */ "./src/app/vehicle-list/vehicle-list.component.ts");
/* harmony import */ var _modal_window_modal_window_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modal-window/modal-window.component */ "./src/app/modal-window/modal-window.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _main_page_mainPage_component__WEBPACK_IMPORTED_MODULE_5__["MainPageComponent"],
            _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_7__["TopBarComponent"],
            _search_card_search_card_component__WEBPACK_IMPORTED_MODULE_8__["SearchCardComponent"],
            _vehicle_list_vehicle_list_component__WEBPACK_IMPORTED_MODULE_9__["VehicleListComponent"],
            _modal_window_modal_window_component__WEBPACK_IMPORTED_MODULE_10__["ModalWindowComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"]
        ],
        entryComponents: [
            _modal_window_modal_window_component__WEBPACK_IMPORTED_MODULE_10__["ModalWindowComponent"]
        ],
        providers: [],
        bootstrap: [_main_page_mainPage_component__WEBPACK_IMPORTED_MODULE_5__["MainPageComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/main-page/mainPage.component.css":
/*!**************************************************!*\
  !*** ./src/app/main-page/mainPage.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4tcGFnZS9tYWluUGFnZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/main-page/mainPage.component.ts":
/*!*************************************************!*\
  !*** ./src/app/main-page/mainPage.component.ts ***!
  \*************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainPageComponent = class MainPageComponent {
    constructor() {
        this.AllVehicles = [];
    }
    ngOnInit() {
    }
};
MainPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mainPage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main-page/mainPage.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mainPage.component.css */ "./src/app/main-page/mainPage.component.css")).default]
    })
], MainPageComponent);



/***/ }),

/***/ "./src/app/modal-window/modal-window.component.css":
/*!*********************************************************!*\
  !*** ./src/app/modal-window/modal-window.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1{\r\n    text-align: center;\r\n}\r\n\r\nh4{\r\n    display: inline-block;\r\n    width: 7vw;\r\n}\r\n\r\ninput{\r\n    display: inline-block;\r\n    margin-left: 1vw;\r\n}\r\n\r\nselect{\r\n    display: inline-block;\r\n    margin-left: 1vw;\r\n}\r\n\r\n.container{\r\n    width: 55vh;\r\n    height: auto;\r\n}\r\n\r\n.styled-button{\r\n    height: auto;\r\n    font-size: 1vw;\r\n    padding: 0.3em 1.2em;\r\n    border: 0.16em solid rgba(255,255,255,0);\r\n    border-radius: 2em;\r\n    text-shadow: 0 0.04em 0.04em rgba(0,0,0,0.35);\r\n    margin-top: 3vh;\r\n    margin-bottom: 3vh;\r\n}\r\n\r\n.styled-button:hover{\r\n    border-color: #dededf;\r\n    cursor: pointer;\r\n}\r\n\r\n.styled-button:focus{\r\n    outline: 0;\r\n}\r\n\r\n.save-button{\r\n    background-color: #2fc5f2;\r\n    color: #ffff;\r\n    float: right;\r\n    width: 5vw;\r\n    padding-right: 4vw;\r\n}\r\n\r\n.save-button:hover{\r\n    border-color: #dededf;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWwtd2luZG93L21vZGFsLXdpbmRvdy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLG9CQUFvQjtJQUNwQix3Q0FBd0M7SUFDeEMsa0JBQWtCO0lBQ2xCLDZDQUE2QztJQUM3QyxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvbW9kYWwtd2luZG93L21vZGFsLXdpbmRvdy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmg0e1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDd2dztcclxufVxyXG5cclxuaW5wdXR7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogMXZ3O1xyXG59XHJcblxyXG5zZWxlY3R7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogMXZ3O1xyXG59XHJcblxyXG4uY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDU1dmg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5zdHlsZWQtYnV0dG9ue1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAxdnc7XHJcbiAgICBwYWRkaW5nOiAwLjNlbSAxLjJlbTtcclxuICAgIGJvcmRlcjogMC4xNmVtIHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyZW07XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwLjA0ZW0gMC4wNGVtIHJnYmEoMCwwLDAsMC4zNSk7XHJcbiAgICBtYXJnaW4tdG9wOiAzdmg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzdmg7XHJcbn1cclxuXHJcbi5zdHlsZWQtYnV0dG9uOmhvdmVye1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZGVkZWRmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc3R5bGVkLWJ1dHRvbjpmb2N1c3tcclxuICAgIG91dGxpbmU6IDA7XHJcbn1cclxuXHJcbi5zYXZlLWJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZmM1ZjI7XHJcbiAgICBjb2xvcjogI2ZmZmY7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB3aWR0aDogNXZ3O1xyXG4gICAgcGFkZGluZy1yaWdodDogNHZ3O1xyXG59XHJcblxyXG4uc2F2ZS1idXR0b246aG92ZXJ7XHJcbiAgICBib3JkZXItY29sb3I6ICNkZWRlZGY7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modal-window/modal-window.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modal-window/modal-window.component.ts ***!
  \********************************************************/
/*! exports provided: ModalWindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalWindowComponent", function() { return ModalWindowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _Models_vehicle_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Models/vehicle.model */ "./src/app/Models/vehicle.model.ts");
/* harmony import */ var _Models_carType_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Models/carType.enum */ "./src/app/Models/carType.enum.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






let ModalWindowComponent = class ModalWindowComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.newVehicle = new _Models_vehicle_model__WEBPACK_IMPORTED_MODULE_3__["Vehicle"]();
        this.keys = Object.keys;
        this.carTypes = _Models_carType_enum__WEBPACK_IMPORTED_MODULE_4__["CarType"];
    }
    ngOnInit() {
        this.newVehicle = this.data;
    }
    saveVehicle() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Saved!', 'The vehicle has been saved', 'success').then(() => this.dialogRef.close(this.newVehicle));
    }
};
ModalWindowComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
ModalWindowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-window',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modal-window.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modal-window/modal-window.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modal-window.component.css */ "./src/app/modal-window/modal-window.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], ModalWindowComponent);



/***/ }),

/***/ "./src/app/search-card/search-card.component.css":
/*!*******************************************************!*\
  !*** ./src/app/search-card/search-card.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1{\r\n    text-align: center;\r\n}\r\n\r\nh4{\r\n    color: #dededf;\r\n    font-size: 1vw;\r\n    display: inline-block;\r\n    width: 7vw;\r\n    margin-top: 1vh;\r\n    margin-bottom: 2vh;\r\n}\r\n\r\nh5{\r\n    display: inline-block;\r\n}\r\n\r\ninput{\r\n    width: 6vw;\r\n    height: auto;\r\n    margin-right: 0.5vw;\r\n    font-size: 0.75vw;\r\n}\r\n\r\n.styled-button{\r\n    height: auto;\r\n    font-size: 1vw;\r\n    padding: 0.3em 1.2em;\r\n    border: 0.16em solid rgba(255,255,255,0);\r\n    border-radius: 2em;\r\n    text-shadow: 0 0.04em 0.04em rgba(0,0,0,0.35);\r\n    margin-top: 3vh;\r\n    margin-bottom: 3vh;\r\n}\r\n\r\n.styled-button:hover{\r\n    border-color: #dededf;\r\n    cursor: pointer;\r\n}\r\n\r\n.styled-button:focus{\r\n    outline: 0;\r\n}\r\n\r\n.search-button{\r\n    background-color: #2fc5f2;\r\n    color: #282828;\r\n    float: right;\r\n    width: 5vw;\r\n    padding-right: 4vw;\r\n}\r\n\r\n.search-button:hover{\r\n    border-color: #dededf;\r\n}\r\n\r\n.clear-button{\r\n    background-color: #dededf;\r\n    color: #282828;\r\n    float: left;\r\n    width: 8vw;\r\n}\r\n\r\n.clear-button:hover{\r\n    border-color: #ffff;\r\n}\r\n\r\n.add-button{\r\n    background-color: #4ef18f; \r\n    width: 13vw;\r\n    margin-left: 2vw;\r\n    display: -webkit-box;\r\n    display: flex;\r\n}\r\n\r\n.add-button:hover{\r\n    border-color: #ffff;\r\n}\r\n\r\n.search-title{\r\n    font-size: 2vw;\r\n    margin: 0px;\r\n}\r\n\r\n.search-title-container{\r\n    border-bottom: #dededf;\r\n    border-bottom-style: solid;\r\n}\r\n\r\n.card {\r\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n    background: #282828;\r\n    color: #2fc5f2;\r\n    width: 25vw;\r\n    margin-left: 2vw;\r\n    margin-top: 4vh;\r\n    border-radius: 20px;\r\n    width: 28vw;\r\n    height: auto;\r\n    float: left;\r\n}\r\n\r\n.container {\r\n    padding: 2px 16px;\r\n}\r\n\r\n.aaa{\r\n    \r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLWNhcmQvc2VhcmNoLWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsd0NBQXdDO0lBQ3hDLGtCQUFrQjtJQUNsQiw2Q0FBNkM7SUFDN0MsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxZQUFZO0lBQ1osVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG9CQUFhO0lBQWIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBOztBQUVBIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoLWNhcmQvc2VhcmNoLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5oNHtcclxuICAgIGNvbG9yOiAjZGVkZWRmO1xyXG4gICAgZm9udC1zaXplOiAxdnc7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogN3Z3O1xyXG4gICAgbWFyZ2luLXRvcDogMXZoO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnZoO1xyXG59XHJcblxyXG5oNXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuaW5wdXR7XHJcbiAgICB3aWR0aDogNnZ3O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjV2dztcclxuICAgIGZvbnQtc2l6ZTogMC43NXZ3O1xyXG59XHJcblxyXG4uc3R5bGVkLWJ1dHRvbntcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMXZ3O1xyXG4gICAgcGFkZGluZzogMC4zZW0gMS4yZW07XHJcbiAgICBib3JkZXI6IDAuMTZlbSBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDApO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMmVtO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMC4wNGVtIDAuMDRlbSByZ2JhKDAsMCwwLDAuMzUpO1xyXG4gICAgbWFyZ2luLXRvcDogM3ZoO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3ZoO1xyXG59XHJcblxyXG4uc3R5bGVkLWJ1dHRvbjpob3ZlcntcclxuICAgIGJvcmRlci1jb2xvcjogI2RlZGVkZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnN0eWxlZC1idXR0b246Zm9jdXN7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG59XHJcblxyXG4uc2VhcmNoLWJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZmM1ZjI7XHJcbiAgICBjb2xvcjogIzI4MjgyODtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHdpZHRoOiA1dnc7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0dnc7XHJcbn1cclxuXHJcbi5zZWFyY2gtYnV0dG9uOmhvdmVye1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZGVkZWRmO1xyXG59XHJcblxyXG4uY2xlYXItYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RlZGVkZjtcclxuICAgIGNvbG9yOiAjMjgyODI4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogOHZ3O1xyXG59XHJcblxyXG4uY2xlYXItYnV0dG9uOmhvdmVye1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmZjtcclxufVxyXG5cclxuLmFkZC1idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGVmMThmOyBcclxuICAgIHdpZHRoOiAxM3Z3O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJ2dztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5hZGQtYnV0dG9uOmhvdmVye1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmZjtcclxufVxyXG5cclxuLnNlYXJjaC10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMnZ3O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtdGl0bGUtY29udGFpbmVye1xyXG4gICAgYm9yZGVyLWJvdHRvbTogI2RlZGVkZjtcclxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjgyODI4O1xyXG4gICAgY29sb3I6ICMyZmM1ZjI7XHJcbiAgICB3aWR0aDogMjV2dztcclxuICAgIG1hcmdpbi1sZWZ0OiAydnc7XHJcbiAgICBtYXJnaW4tdG9wOiA0dmg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgd2lkdGg6IDI4dnc7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAycHggMTZweDtcclxufVxyXG5cclxuLmFhYXtcclxuICAgIFxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/search-card/search-card.component.ts":
/*!******************************************************!*\
  !*** ./src/app/search-card/search-card.component.ts ***!
  \******************************************************/
/*! exports provided: SearchCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchCardComponent", function() { return SearchCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ClientServices_vehicle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ClientServices/vehicle.service */ "./src/app/ClientServices/vehicle.service.ts");
/* harmony import */ var _main_page_mainPage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../main-page/mainPage.component */ "./src/app/main-page/mainPage.component.ts");
/* harmony import */ var _Models_carType_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Models/carType.enum */ "./src/app/Models/carType.enum.ts");





let SearchCardComponent = class SearchCardComponent {
    constructor(service, mainPage) {
        this.service = service;
        this.mainPage = mainPage;
        this.keys = Object.keys;
        this.carTypes = _Models_carType_enum__WEBPACK_IMPORTED_MODULE_4__["CarType"];
        this.inputName = "";
        this.inputType = "";
        this.inputCreateFrom = "";
        this.inputCreateTo = "";
        this.inputLastConnectionFrom = "";
        this.inputLastConnectionTo = "";
        this.filteredVehicles = [];
    }
    ngOnInit() {
    }
    filterVehicles() {
        for (let i = 0; i < this.mainPage.AllVehicles.length; i++) {
            if ((this.mainPage.AllVehicles[i].name === this.inputName || this.inputName === "") &&
                (this.mainPage.AllVehicles[i].carType === this.inputType || this.inputType === "") &&
                (this.mainPage.AllVehicles[i].createdTime >= this.inputCreateFrom || this.inputCreateFrom === "") &&
                (this.mainPage.AllVehicles[i].createdTime <= this.inputCreateTo || this.inputCreateTo === "") &&
                (this.mainPage.AllVehicles[i].lastSuccessfulConnection >= this.inputLastConnectionFrom || this.inputLastConnectionFrom === "") &&
                (this.mainPage.AllVehicles[i].lastSuccessfulConnection <= this.inputLastConnectionTo || this.inputLastConnectionTo === "")) {
                this.filteredVehicles.push(this.mainPage.AllVehicles[i]);
            }
        }
        console.log(this.mainPage.AllVehicles);
        this.mainPage.AllVehicles = this.filteredVehicles;
        console.log(this.mainPage.AllVehicles);
        this.filteredVehicles = [];
    }
    refreshVehicles() {
        this.service.getAllVehicles().subscribe(data => {
            this.mainPage.AllVehicles = data;
        });
    }
    clearFilters() {
        this.inputName = "";
        this.inputType = "";
        this.inputCreateFrom = "";
        this.inputCreateTo = "";
        this.inputLastConnectionFrom = "";
        this.inputLastConnectionTo = "";
        this.refreshVehicles();
    }
};
SearchCardComponent.ctorParameters = () => [
    { type: _ClientServices_vehicle_service__WEBPACK_IMPORTED_MODULE_2__["VehicleService"] },
    { type: _main_page_mainPage_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"] }
];
SearchCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/search-card/search-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search-card.component.css */ "./src/app/search-card/search-card.component.css")).default]
    })
], SearchCardComponent);



/***/ }),

/***/ "./src/app/top-bar/top-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/top-bar/top-bar.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1{\r\n    margin: 0;\r\n    font-size: 3.5vw;\r\n    font-style: italic;\r\n    bottom: 1px;\r\n    position: relative;\r\n}\r\n\r\nimg{\r\n    width: 15%;\r\n    height: auto;\r\n}\r\n\r\n.top-bar{\r\n    background: #282828;\r\n    color: #dededf;\r\n    padding-bottom: 2vh;\r\n    padding-top: 2vh;\r\n    border-bottom-color: #2fc5f2;\r\n    border-bottom-style: solid;\r\n}\r\n\r\n.logo{\r\n    float: left;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wLWJhci90b3AtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsNEJBQTRCO0lBQzVCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3RvcC1iYXIvdG9wLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDMuNXZ3O1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgYm90dG9tOiAxcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbmltZ3tcclxuICAgIHdpZHRoOiAxNSU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi50b3AtYmFye1xyXG4gICAgYmFja2dyb3VuZDogIzI4MjgyODtcclxuICAgIGNvbG9yOiAjZGVkZWRmO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDJ2aDtcclxuICAgIHBhZGRpbmctdG9wOiAydmg7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjMmZjNWYyO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XHJcbn1cclxuXHJcbi5sb2dve1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/top-bar/top-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/top-bar/top-bar.component.ts ***!
  \**********************************************/
/*! exports provided: TopBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopBarComponent", function() { return TopBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TopBarComponent = class TopBarComponent {
    constructor() { }
    ngOnInit() {
    }
};
TopBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-top-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./top-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/top-bar/top-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./top-bar.component.css */ "./src/app/top-bar/top-bar.component.css")).default]
    })
], TopBarComponent);



/***/ }),

/***/ "./src/app/vehicle-list/vehicle-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/vehicle-list/vehicle-list.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1{\r\n text-align: center;    \r\n}\r\n\r\nul{\r\n    margin-top: 10vh;\r\n    list-style-type: none;\r\n}\r\n\r\na{\r\n    text-decoration: none;\r\n}\r\n\r\nli{\r\n    overflow: auto;\r\n    overflow-y: hidden;\r\n    overflow-x: hidden;\r\n    width: 55vw;\r\n}\r\n\r\n.styled-button{\r\n    font-size: 1vw;\r\n    text-align: center;\r\n    border: 0.16em solid rgba(255,255,255,0);\r\n    border-radius: 2em;\r\n    text-shadow: 0 0.04em 0.04em rgba(0,0,0,0.35);\r\n    color: #ffff;\r\n    height: 4vh;\r\n    float: right;\r\n    margin-right: 2vh;\r\n}\r\n\r\n.styled-button:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n.styled-button:focus{\r\n    outline: 0;\r\n}\r\n\r\n.delete-button{\r\n    background-color: #f14e4e;\r\n    width: 5vw;\r\n    height: 4.5vh;\r\n    min-width: 60px;\r\n    margin-top: -1vh;\r\n}\r\n\r\n.delete-button:hover{\r\n    border-color: #dededf;\r\n}\r\n\r\n.details-button{\r\n    background-color: #2fc5f2;\r\n    width: 5vw;\r\n    height: 4.5vh;\r\n    min-width: 60px;\r\n    margin-top: -1vh;\r\n}\r\n\r\n.details-button:hover{\r\n    border-color: #dededf;\r\n}\r\n\r\n.add-button{\r\n    background-color: #2fc5f2; \r\n    width: 13vw;\r\n    height: 4.5vh;\r\n    margin-top: -2vh;\r\n    float: right;\r\n    min-width: 80px;\r\n}\r\n\r\n.add-button:hover{\r\n    border-color: #ffff;\r\n}\r\n\r\n.list-container{\r\n    display: inline-block;\r\n    width: 60vw;\r\n}\r\n\r\n.vehicle-card{\r\n    background: #ffff;\r\n    margin-top: 3vh;\r\n    border-style: solid;\r\n    border-color: #2fc5f2;\r\n    border-radius: 10px;\r\n    color: #282828;\r\n    height: 5vh;\r\n    font-size: 22px;\r\n    padding-left: 5vw;\r\n    padding-top: 3vh;\r\n    padding-bottom: 1vh;\r\n}\r\n\r\n.hidden{\r\n    display: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVoaWNsZS1saXN0L3ZlaGljbGUtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsd0NBQXdDO0lBQ3hDLGtCQUFrQjtJQUNsQiw2Q0FBNkM7SUFDN0MsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YsYUFBYTtJQUNiLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsVUFBVTtJQUNWLGFBQWE7SUFDYixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUdBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLFdBQVc7SUFDWCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvdmVoaWNsZS1saXN0L3ZlaGljbGUtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XHJcbiB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgIFxyXG59XHJcblxyXG51bHtcclxuICAgIG1hcmdpbi10b3A6IDEwdmg7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbmF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmxpe1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICB3aWR0aDogNTV2dztcclxufVxyXG5cclxuLnN0eWxlZC1idXR0b257XHJcbiAgICBmb250LXNpemU6IDF2dztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlcjogMC4xNmVtIHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyZW07XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwLjA0ZW0gMC4wNGVtIHJnYmEoMCwwLDAsMC4zNSk7XHJcbiAgICBjb2xvcjogI2ZmZmY7XHJcbiAgICBoZWlnaHQ6IDR2aDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogMnZoO1xyXG59XHJcblxyXG4uc3R5bGVkLWJ1dHRvbjpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnN0eWxlZC1idXR0b246Zm9jdXN7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG59XHJcblxyXG4uZGVsZXRlLWJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMTRlNGU7XHJcbiAgICB3aWR0aDogNXZ3O1xyXG4gICAgaGVpZ2h0OiA0LjV2aDtcclxuICAgIG1pbi13aWR0aDogNjBweDtcclxuICAgIG1hcmdpbi10b3A6IC0xdmg7XHJcbn1cclxuXHJcbi5kZWxldGUtYnV0dG9uOmhvdmVye1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZGVkZWRmO1xyXG59XHJcblxyXG4uZGV0YWlscy1idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmZjNWYyO1xyXG4gICAgd2lkdGg6IDV2dztcclxuICAgIGhlaWdodDogNC41dmg7XHJcbiAgICBtaW4td2lkdGg6IDYwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMXZoO1xyXG59XHJcblxyXG4uZGV0YWlscy1idXR0b246aG92ZXJ7XHJcbiAgICBib3JkZXItY29sb3I6ICNkZWRlZGY7XHJcbn1cclxuXHJcblxyXG4uYWRkLWJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZmM1ZjI7IFxyXG4gICAgd2lkdGg6IDEzdnc7XHJcbiAgICBoZWlnaHQ6IDQuNXZoO1xyXG4gICAgbWFyZ2luLXRvcDogLTJ2aDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1pbi13aWR0aDogODBweDtcclxufVxyXG5cclxuLmFkZC1idXR0b246aG92ZXJ7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZmZmO1xyXG59XHJcblxyXG4ubGlzdC1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNjB2dztcclxufVxyXG5cclxuLnZlaGljbGUtY2FyZHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmO1xyXG4gICAgbWFyZ2luLXRvcDogM3ZoO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogIzJmYzVmMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBjb2xvcjogIzI4MjgyODtcclxuICAgIGhlaWdodDogNXZoO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1dnc7XHJcbiAgICBwYWRkaW5nLXRvcDogM3ZoO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDF2aDtcclxufVxyXG5cclxuLmhpZGRlbntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/vehicle-list/vehicle-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/vehicle-list/vehicle-list.component.ts ***!
  \********************************************************/
/*! exports provided: VehicleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleListComponent", function() { return VehicleListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ClientServices_vehicle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ClientServices/vehicle.service */ "./src/app/ClientServices/vehicle.service.ts");
/* harmony import */ var _main_page_mainPage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../main-page/mainPage.component */ "./src/app/main-page/mainPage.component.ts");
/* harmony import */ var _modal_window_modal_window_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modal-window/modal-window.component */ "./src/app/modal-window/modal-window.component.ts");
/* harmony import */ var _Models_vehicle_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Models/vehicle.model */ "./src/app/Models/vehicle.model.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);








let VehicleListComponent = class VehicleListComponent {
    constructor(service, mainPage, dialog) {
        this.service = service;
        this.mainPage = mainPage;
        this.dialog = dialog;
        this.newVehicle = new _Models_vehicle_model__WEBPACK_IMPORTED_MODULE_5__["Vehicle"]();
        this.showPlaceHolder = true;
        this.sortType = "older";
    }
    ngOnInit() {
        this.refreshVehicles();
    }
    sortVehicles() {
        if (this.sortType === "newer") {
            this.mainPage.AllVehicles.sort((a, b) => { return b.createdTime - a.createdTime; });
        }
        else if (this.sortType === "older") {
            this.mainPage.AllVehicles.sort((a, b) => { return a.createdTime - b.createdTime; });
        }
        else {
            this.mainPage.AllVehicles.sort((a, b) => { return b.lastSuccessfulConnection - a.lastSuccessfulConnection; });
        }
    }
    refreshVehicles() {
        this.service.getAllVehicles().subscribe(data => {
            this.mainPage.AllVehicles = data;
            this.sortVehicles();
        });
    }
    deleteVehicle(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#2fc5f2',
            cancelButtonColor: '#f14e4e',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                this.service.deleteVehicle(id).subscribe((data) => {
                    this.refreshVehicles();
                    if (this.mainPage.AllVehicles.length === 1) {
                        this.showPlaceHolder = false;
                    }
                });
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Deleted!', 'The vehicle has been deleted', 'success');
            }
        });
    }
    // open the modal window
    openDialog(selectedVehicle) {
        if (selectedVehicle.id != undefined) {
            selectedVehicle.createdTime = this.convertDate(selectedVehicle.createdTime);
            selectedVehicle.lastSuccessfulConnection = this.convertDate(selectedVehicle.lastSuccessfulConnection);
        }
        const dialogRef = this.dialog.open(_modal_window_modal_window_component__WEBPACK_IMPORTED_MODULE_4__["ModalWindowComponent"], { data: selectedVehicle });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                result.createdTime = Date.parse(result.createdTime);
                result.lastSuccessfulConnection = Date.parse(result.lastSuccessfulConnection);
                if (result.id == undefined) {
                    result.id = null;
                    this.service.addVehicle(result).subscribe((data) => {
                        this.refreshVehicles();
                        if (this.mainPage.AllVehicles.length === 0) {
                            this.showPlaceHolder = true;
                        }
                    });
                }
                else {
                    this.service.updateVehicle(result).subscribe((data) => this.refreshVehicles());
                }
            }
        });
    }
    // convert the epoch to displayable date
    convertDate(date) {
        let convertedDate = new Date(date);
        return convertedDate.getFullYear() + '-' +
            ((convertedDate.getMonth() < 9 ? '0' : '') +
                (convertedDate.getMonth() + 1)) + '-' +
            ((convertedDate.getDate() < 10 ? '0' : '') + convertedDate.getDate());
    }
};
VehicleListComponent.ctorParameters = () => [
    { type: _ClientServices_vehicle_service__WEBPACK_IMPORTED_MODULE_2__["VehicleService"] },
    { type: _main_page_mainPage_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }
];
VehicleListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vehicle-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vehicle-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle-list/vehicle-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vehicle-list.component.css */ "./src/app/vehicle-list/vehicle-list.component.css")).default]
    })
], VehicleListComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Lavi\Projects\spring\Vehicles\src\main\resources\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map