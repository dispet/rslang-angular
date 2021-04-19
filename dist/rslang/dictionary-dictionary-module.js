(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dictionary-dictionary-module"],{

/***/ "9PBO":
/*!************************************************!*\
  !*** ./src/app/dictionary/hard-words/index.ts ***!
  \************************************************/
/*! exports provided: HardWordsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hard_words_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hard-words.component */ "xDJw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HardWordsComponent", function() { return _hard_words_component__WEBPACK_IMPORTED_MODULE_0__["HardWordsComponent"]; });




/***/ }),

/***/ "BPfe":
/*!*****************************************************************************!*\
  !*** ./src/app/dictionary/words-in-learning/words-in-learning.component.ts ***!
  \*****************************************************************************/
/*! exports provided: WordsInLearningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordsInLearningComponent", function() { return WordsInLearningComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/state */ "/LE6");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");









function WordsInLearningComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043F\u0443\u0441\u0442\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WordsInLearningComponent_ng_template_2_mat_list_item_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "HARD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WordsInLearningComponent_ng_template_2_mat_list_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WordsInLearningComponent_ng_template_2_mat_list_item_1_span_4_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r5.word, " - ", item_r5.wordTranslate, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r5.hard);
} }
function WordsInLearningComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WordsInLearningComponent_ng_template_2_mat_list_item_1_Template, 6, 3, "mat-list-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r2.wordsInLearning$));
} }
function WordsInLearningComponent_mat_spinner_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
} }
class WordsInLearningComponent {
    constructor(stateFacade) {
        this.stateFacade = stateFacade;
        this.wordsInLearning$ = this.stateFacade.wordsInLearning$;
        this.isLoading$ = this.stateFacade.isLoading$;
    }
    ngOnInit() {
        this.loadLearningWords();
    }
    loadLearningWords() {
        this.stateFacade.loadWordsInLearning().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe();
    }
}
WordsInLearningComponent.ɵfac = function WordsInLearningComponent_Factory(t) { return new (t || WordsInLearningComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_state__WEBPACK_IMPORTED_MODULE_2__["FacadeService"])); };
WordsInLearningComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WordsInLearningComponent, selectors: [["app-words-in-learning"]], decls: 6, vars: 7, consts: [[4, "ngIf"], ["content", ""], [4, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf"], ["matLine", ""], [2, "flex-grow", "1"], ["class", "hard-indicator", 4, "ngIf"], [1, "hard-indicator"]], template: function WordsInLearningComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WordsInLearningComponent_div_0_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WordsInLearningComponent_ng_template_2_Template, 3, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WordsInLearningComponent_mat_spinner_4_Template, 1, 0, "mat-spinner", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        var tmp_0_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, ctx.wordsInLearning$)) == null ? null : tmp_0_0.length) == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, ctx.isLoading$))("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListItem"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatLine"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDivider"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatSpinner"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["mat-spinner[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGljdGlvbmFyeS93b3Jkcy1pbi1sZWFybmluZy93b3Jkcy1pbi1sZWFybmluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2RpY3Rpb25hcnkvd29yZHMtaW4tbGVhcm5pbmcvd29yZHMtaW4tbGVhcm5pbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtc3Bpbm5lciB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WordsInLearningComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-words-in-learning',
                templateUrl: './words-in-learning.component.html',
                styleUrls: ['./words-in-learning.component.scss'],
            }]
    }], function () { return [{ type: src_app_state__WEBPACK_IMPORTED_MODULE_2__["FacadeService"] }]; }, null); })();


/***/ }),

/***/ "MJEv":
/*!*********************************************************!*\
  !*** ./src/app/dictionary/dictionary-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: DictionaryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DictionaryRoutingModule", function() { return DictionaryRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _deleted_words__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deleted-words */ "dR5D");
/* harmony import */ var _dictionary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dictionary.component */ "P3WA");
/* harmony import */ var _hard_words__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hard-words */ "9PBO");
/* harmony import */ var _words_in_learning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./words-in-learning */ "iplb");








const routes = [
    { path: '', component: _dictionary_component__WEBPACK_IMPORTED_MODULE_3__["DictionaryComponent"],
        children: [
            { path: 'hard-words', component: _hard_words__WEBPACK_IMPORTED_MODULE_4__["HardWordsComponent"] },
            { path: 'deleted-words', component: _deleted_words__WEBPACK_IMPORTED_MODULE_2__["DeletedWordsComponent"] },
            { path: 'words-in-learning', component: _words_in_learning__WEBPACK_IMPORTED_MODULE_5__["WordsInLearningComponent"] },
            { path: '', redirectTo: 'words-in-learning', pathMatch: 'full' }
        ],
    }
];
class DictionaryRoutingModule {
}
DictionaryRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DictionaryRoutingModule });
DictionaryRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DictionaryRoutingModule_Factory(t) { return new (t || DictionaryRoutingModule)(); }, providers: [], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DictionaryRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DictionaryRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                declarations: [],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
                providers: [],
            }]
    }], null, null); })();


/***/ }),

/***/ "P3WA":
/*!****************************************************!*\
  !*** ./src/app/dictionary/dictionary.component.ts ***!
  \****************************************************/
/*! exports provided: DictionaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DictionaryComponent", function() { return DictionaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");





class DictionaryComponent {
    constructor() { }
}
DictionaryComponent.ɵfac = function DictionaryComponent_Factory(t) { return new (t || DictionaryComponent)(); };
DictionaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DictionaryComponent, selectors: [["app-dictionary"]], decls: 11, vars: 0, consts: [[1, "dictionary"], [1, "navigation"], ["value", "app-words-in-learning", "routerLink", "/dictionary/words-in-learning"], ["value", "app-hard-words", "routerLink", "/dictionary/hard-words"], ["value", "app-deleted-words", "routerLink", "/dictionary/deleted-words"]], template: function DictionaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-button-toggle-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-button-toggle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0418\u0437\u0443\u0447\u0430\u0435\u043C\u044B\u0435 \u0441\u043B\u043E\u0432\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-button-toggle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0421\u043B\u043E\u0436\u043D\u044B\u0435 \u0441\u043B\u043E\u0432\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-button-toggle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0423\u0434\u0430\u043B\u0435\u043D\u043D\u044B\u0439 \u0441\u043B\u043E\u0432\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleGroup"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggle"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDivider"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".dictionary[_ngcontent-%COMP%] {\n  min-height: 84%;\n}\n.dictionary[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.dictionary[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   mat-button-toggle-group[_ngcontent-%COMP%] {\n  margin: 0 0.5rem;\n  flex-grow: 1;\n}\n.dictionary[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   mat-button-toggle-group[_ngcontent-%COMP%]   mat-button-toggle[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  font-size: 1rem;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGljdGlvbmFyeS9kaWN0aW9uYXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUNKO0FBQ0k7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUFDTjtBQUFNO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUVSIiwiZmlsZSI6InNyYy9hcHAvZGljdGlvbmFyeS9kaWN0aW9uYXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpY3Rpb25hcnkge1xuICBtaW4taGVpZ2h0OiA4NCU7XG5cbiAgLm5hdmlnYXRpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICBtYXQtYnV0dG9uLXRvZ2dsZS1ncm91cCB7XG4gICAgICBtYXJnaW46IDAgMC41cmVtO1xuICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgbWF0LWJ1dHRvbi10b2dnbGUge1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DictionaryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dictionary',
                templateUrl: './dictionary.component.html',
                styleUrls: ['./dictionary.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "dR5D":
/*!***************************************************!*\
  !*** ./src/app/dictionary/deleted-words/index.ts ***!
  \***************************************************/
/*! exports provided: DeletedWordsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _deleted_words_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleted-words.component */ "s1AY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeletedWordsComponent", function() { return _deleted_words_component__WEBPACK_IMPORTED_MODULE_0__["DeletedWordsComponent"]; });




/***/ }),

/***/ "iplb":
/*!*******************************************************!*\
  !*** ./src/app/dictionary/words-in-learning/index.ts ***!
  \*******************************************************/
/*! exports provided: WordsInLearningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _words_in_learning_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./words-in-learning.component */ "BPfe");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WordsInLearningComponent", function() { return _words_in_learning_component__WEBPACK_IMPORTED_MODULE_0__["WordsInLearningComponent"]; });




/***/ }),

/***/ "s1AY":
/*!*********************************************************************!*\
  !*** ./src/app/dictionary/deleted-words/deleted-words.component.ts ***!
  \*********************************************************************/
/*! exports provided: DeletedWordsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletedWordsComponent", function() { return DeletedWordsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared */ "M0ag");
/* harmony import */ var src_app_shared_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/utils */ "9uVP");
/* harmony import */ var src_app_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/state */ "/LE6");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");














function DeletedWordsComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043F\u0443\u0441\u0442\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DeletedWordsComponent_ng_template_17_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeletedWordsComponent_ng_template_17_li_1_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const item_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.playAudio(item_r6.audio, item_r6.audioMeaning, item_r6.audioExample); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "volume_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeletedWordsComponent_ng_template_17_li_1_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const item_r6 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.deleteWord(item_r6._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "restore_from_trash");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r5.url, "/", item_r6.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", item_r6.word);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r6.word, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", item_r6.transcription, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" - ", item_r6.wordTranslate, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", item_r6.textMeaning, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" - ", item_r6.textMeaningTranslate, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", item_r6.textExample, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" - ", item_r6.textExampleTranslate, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r6.learningResults, " ");
} }
function DeletedWordsComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DeletedWordsComponent_ng_template_17_li_1_Template, 31, 11, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r3.deletedWords$));
} }
function DeletedWordsComponent_mat_spinner_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
} }
class DeletedWordsComponent {
    constructor(stateFacade) {
        this.stateFacade = stateFacade;
        this.deletedWords$ = this.stateFacade.deletedWords$;
        this.isLoading$ = this.stateFacade.isLoading$;
        this.url = src_app_shared__WEBPACK_IMPORTED_MODULE_2__["DATA_URL"];
    }
    ngOnInit() {
        this.loadDeletedWords();
    }
    loadDeletedWords() {
        this.stateFacade.loadDeletedWords().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe();
    }
    deleteWord(id) {
        this.stateFacade.deleteUserWord(id);
        this.loadDeletedWords();
    }
    playAudio(url1, url2, url3) {
        Object(src_app_shared_utils__WEBPACK_IMPORTED_MODULE_3__["playAudio"])(this.url, url1, url2, url3);
    }
}
DeletedWordsComponent.ɵfac = function DeletedWordsComponent_Factory(t) { return new (t || DeletedWordsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_state__WEBPACK_IMPORTED_MODULE_4__["FacadeService"])); };
DeletedWordsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeletedWordsComponent, selectors: [["app-deleted-words"]], decls: 21, vars: 7, consts: [["type", "button", "mat-button", "", 3, "click"], ["position", "end"], ["drawer", ""], ["vertical", ""], [4, "ngIf"], ["content", ""], [4, "ngIf", "ngIfElse"], [1, "list"], ["class", "list-item", 4, "ngFor", "ngForOf"], [1, "list-item"], [1, "list-item-container"], [1, "item-image"], [3, "src", "alt"], [1, "item-content"], [1, "item-title"], ["mat-icon-button", "", 3, "click"], ["mat-list-icon", ""], [1, "item-description"], [3, "innerHTML"], [1, "item-controls"], [3, "click"]], template: function DeletedWordsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeletedWordsComponent_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0438\u0433\u0440\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-drawer-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-drawer", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-button-toggle-group", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-button-toggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0421\u0430\u0432\u0430\u043D\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-button-toggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0410\u0443\u0434\u0438\u043E\u0432\u044B\u0437\u043E\u0432");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-button-toggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0421\u043F\u0440\u0438\u043D\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-button-toggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0421\u0432\u043E\u044F \u0438\u0433\u0440\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DeletedWordsComponent_div_15_Template, 3, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DeletedWordsComponent_ng_template_17_Template, 3, 3, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DeletedWordsComponent_mat_spinner_19_Template, 1, 0, "mat-spinner", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
        var tmp_0_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 3, ctx.deletedWords$)) == null ? null : tmp_0_0.length) == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 5, ctx.isLoading$))("ngIfElse", _r2);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDivider"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatDrawer"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleGroup"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggle"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListIconCssMatStyler"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatSpinner"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]], styles: [".list[_ngcontent-%COMP%] {\n  padding: 0 1rem;\n}\n.list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-top: 1rem;\n}\n.list[_ngcontent-%COMP%]   .list-item-container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 1rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.list[_ngcontent-%COMP%]   .list-item-container[_ngcontent-%COMP%]   .item-image[_ngcontent-%COMP%] {\n  height: 150px;\n}\n.list[_ngcontent-%COMP%]   .list-item-container[_ngcontent-%COMP%]   .item-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.list[_ngcontent-%COMP%]   .list-item-container[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%] {\n  padding: 0 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: stretch;\n  flex-grow: 1;\n}\n.list[_ngcontent-%COMP%]   .list-item-container[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]   .item-title[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.list[_ngcontent-%COMP%]   .list-item-container[_ngcontent-%COMP%]   .item-description[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: stretch;\n}\n.list[_ngcontent-%COMP%]   .list-item-container[_ngcontent-%COMP%]   .item-controls[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]:nth-child(2n-1) {\n  background-color: white;\n}\nmat-spinner[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n@media screen and (max-width: 800px) {\n  .list[_ngcontent-%COMP%]   .list-item-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n  }\n  .list[_ngcontent-%COMP%]   .list-item-container[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%] {\n    align-items: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGljdGlvbmFyeS9kZWxldGVkLXdvcmRzL2RlbGV0ZWQtd29yZHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0Y7QUFDRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFDSjtBQUNJO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtBQUNOO0FBQ007RUFDRSxhQUFBO0FBQ1I7QUFBUTtFQUNFLFlBQUE7QUFFVjtBQUVNO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FBQVI7QUFFUTtFQUNFLGlCQUFBO0FBQVY7QUFJTTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7QUFGUjtBQUtNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBSFI7QUFRRTtFQUNFLHVCQUFBO0FBTko7QUFVQTtFQUNFLGNBQUE7QUFQRjtBQVVBO0VBR007SUFDRSxzQkFBQTtJQUNBLDJCQUFBO0lBQ0EsbUJBQUE7RUFUTjtFQVdNO0lBQ0UsbUJBQUE7RUFUUjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZGljdGlvbmFyeS9kZWxldGVkLXdvcmRzL2RlbGV0ZWQtd29yZHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdCB7XG4gIHBhZGRpbmc6IDAgMXJlbTtcblxuICAubGlzdC1pdGVtIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuXG4gICAgJi1jb250YWluZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuICAgICAgLml0ZW0taW1hZ2Uge1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICBpbWcge1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuaXRlbS1jb250ZW50IHtcbiAgICAgICAgcGFkZGluZzogMCAxcmVtO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG5cbiAgICAgICAgLml0ZW0tdGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5pdGVtLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgIH1cblxuICAgICAgLml0ZW0tY29udHJvbHMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5saXN0LWl0ZW06bnRoLWNoaWxkKDJuIC0xKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIH1cbn1cblxubWF0LXNwaW5uZXIge1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmxpc3Qge1xuICAgIC5saXN0LWl0ZW0ge1xuICAgICAgJi1jb250YWluZXIge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgLml0ZW0tY29udGVudCB7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeletedWordsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-deleted-words',
                templateUrl: './deleted-words.component.html',
                styleUrls: ['./deleted-words.component.scss'],
            }]
    }], function () { return [{ type: src_app_state__WEBPACK_IMPORTED_MODULE_4__["FacadeService"] }]; }, null); })();


/***/ }),

/***/ "sT7z":
/*!*************************************************!*\
  !*** ./src/app/dictionary/dictionary.module.ts ***!
  \*************************************************/
/*! exports provided: DictionaryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DictionaryModule", function() { return DictionaryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _words_in_learning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./words-in-learning */ "iplb");
/* harmony import */ var _hard_words__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hard-words */ "9PBO");
/* harmony import */ var _deleted_words__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deleted-words */ "dR5D");
/* harmony import */ var _dictionary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dictionary.component */ "P3WA");
/* harmony import */ var _dictionary_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dictionary-routing.module */ "MJEv");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared */ "M0ag");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









class DictionaryModule {
}
DictionaryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DictionaryModule });
DictionaryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DictionaryModule_Factory(t) { return new (t || DictionaryModule)(); }, providers: [], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _shared__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _dictionary_routing_module__WEBPACK_IMPORTED_MODULE_5__["DictionaryRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DictionaryModule, { declarations: [_words_in_learning__WEBPACK_IMPORTED_MODULE_1__["WordsInLearningComponent"], _hard_words__WEBPACK_IMPORTED_MODULE_2__["HardWordsComponent"], _deleted_words__WEBPACK_IMPORTED_MODULE_3__["DeletedWordsComponent"], _dictionary_component__WEBPACK_IMPORTED_MODULE_4__["DictionaryComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _shared__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _dictionary_routing_module__WEBPACK_IMPORTED_MODULE_5__["DictionaryRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DictionaryModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _shared__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _dictionary_routing_module__WEBPACK_IMPORTED_MODULE_5__["DictionaryRoutingModule"]],
                declarations: [_words_in_learning__WEBPACK_IMPORTED_MODULE_1__["WordsInLearningComponent"], _hard_words__WEBPACK_IMPORTED_MODULE_2__["HardWordsComponent"], _deleted_words__WEBPACK_IMPORTED_MODULE_3__["DeletedWordsComponent"], _dictionary_component__WEBPACK_IMPORTED_MODULE_4__["DictionaryComponent"]],
                exports: [],
                providers: [],
            }]
    }], null, null); })();


/***/ }),

/***/ "xDJw":
/*!***************************************************************!*\
  !*** ./src/app/dictionary/hard-words/hard-words.component.ts ***!
  \***************************************************************/
/*! exports provided: HardWordsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HardWordsComponent", function() { return HardWordsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared */ "M0ag");
/* harmony import */ var src_app_shared_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/utils */ "9uVP");
/* harmony import */ var src_app_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/state */ "/LE6");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");














function HardWordsComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043F\u0443\u0441\u0442\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HardWordsComponent_ng_template_16_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HardWordsComponent_ng_template_16_li_1_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const item_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.playAudio(item_r6.audio, item_r6.audioMeaning, item_r6.audioExample); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "volume_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HardWordsComponent_ng_template_16_li_1_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const item_r6 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.deleteWord(item_r6._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "restore_from_trash");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r5.url, "/", item_r6.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", item_r6.word);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r6.word, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", item_r6.transcription, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" - ", item_r6.wordTranslate, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", item_r6.textMeaning, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" - ", item_r6.textMeaningTranslate, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", item_r6.textExample, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" - ", item_r6.textExampleTranslate, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r6.learningResults, " ");
} }
function HardWordsComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HardWordsComponent_ng_template_16_li_1_Template, 31, 11, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r3.hardWords$));
} }
function HardWordsComponent_mat_spinner_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
} }
class HardWordsComponent {
    constructor(stateFacade) {
        this.stateFacade = stateFacade;
        this.hardWords$ = this.stateFacade.hardWords$;
        this.isLoading$ = this.stateFacade.isLoading$;
        this.url = src_app_shared__WEBPACK_IMPORTED_MODULE_2__["DATA_URL"];
    }
    ngOnInit() {
        this.loadHardWords();
    }
    loadHardWords() {
        this.stateFacade.loadHardWords().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe();
    }
    deleteWord(id) {
        this.stateFacade.deleteUserWord(id);
        this.loadHardWords();
    }
    playAudio(url1, url2, url3) {
        Object(src_app_shared_utils__WEBPACK_IMPORTED_MODULE_3__["playAudio"])(this.url, url1, url2, url3);
    }
}
HardWordsComponent.ɵfac = function HardWordsComponent_Factory(t) { return new (t || HardWordsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_state__WEBPACK_IMPORTED_MODULE_4__["FacadeService"])); };
HardWordsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HardWordsComponent, selectors: [["app-hard-words"]], decls: 20, vars: 7, consts: [["type", "button", "mat-button", "", 3, "click"], ["position", "end"], ["drawer", ""], ["vertical", ""], [4, "ngIf"], ["content", ""], [4, "ngIf", "ngIfElse"], [1, "list"], ["class", "list-item", 4, "ngFor", "ngForOf"], [1, "list-item"], [1, "list-item-container"], [1, "item-image"], [3, "src", "alt"], [1, "item-content"], [1, "item-title"], ["mat-icon-button", "", 3, "click"], ["mat-list-icon", ""], [1, "item-description"], [3, "innerHTML"], [1, "item-controls"], [3, "click"]], template: function HardWordsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HardWordsComponent_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0438\u0433\u0440\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-drawer-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-drawer", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-button-toggle-group", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-button-toggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0421\u0430\u0432\u0430\u043D\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-button-toggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0410\u0443\u0434\u0438\u043E\u0432\u044B\u0437\u043E\u0432");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-button-toggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0421\u043F\u0440\u0438\u043D\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-button-toggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0421\u0432\u043E\u044F \u0438\u0433\u0440\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HardWordsComponent_div_14_Template, 3, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HardWordsComponent_ng_template_16_Template, 3, 3, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, HardWordsComponent_mat_spinner_18_Template, 1, 0, "mat-spinner", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
        var tmp_0_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 3, ctx.hardWords$)) == null ? null : tmp_0_0.length) == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 5, ctx.isLoading$))("ngIfElse", _r2);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatDrawer"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleGroup"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggle"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListIconCssMatStyler"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDivider"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatSpinner"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: [".list[_ngcontent-%COMP%] {\n  padding: 0 1rem;\n}\n.list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-top: 1rem;\n}\n.list[_ngcontent-%COMP%]   .list-item-container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 1rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.list[_ngcontent-%COMP%]   .list-item-container[_ngcontent-%COMP%]   .item-image[_ngcontent-%COMP%] {\n  height: 150px;\n}\n.list[_ngcontent-%COMP%]   .list-item-container[_ngcontent-%COMP%]   .item-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.list[_ngcontent-%COMP%]   .list-item-container[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%] {\n  padding: 0 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: stretch;\n  flex-grow: 1;\n}\n.list[_ngcontent-%COMP%]   .list-item-container[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]   .item-title[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.list[_ngcontent-%COMP%]   .list-item-container[_ngcontent-%COMP%]   .item-description[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: stretch;\n}\n.list[_ngcontent-%COMP%]   .list-item-container[_ngcontent-%COMP%]   .item-controls[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]:nth-child(2n-1) {\n  background-color: white;\n}\nmat-spinner[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n@media screen and (max-width: 800px) {\n  .list[_ngcontent-%COMP%]   .list-item-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n  }\n  .list[_ngcontent-%COMP%]   .list-item-container[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%] {\n    align-items: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGljdGlvbmFyeS9oYXJkLXdvcmRzL2hhcmQtd29yZHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0Y7QUFDRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFDSjtBQUNJO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtBQUNOO0FBQ007RUFDRSxhQUFBO0FBQ1I7QUFBUTtFQUNFLFlBQUE7QUFFVjtBQUVNO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FBQVI7QUFFUTtFQUNFLGlCQUFBO0FBQVY7QUFJTTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7QUFGUjtBQUtNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBSFI7QUFRRTtFQUNFLHVCQUFBO0FBTko7QUFVQTtFQUNFLGNBQUE7QUFQRjtBQVVBO0VBR007SUFDRSxzQkFBQTtJQUNBLDJCQUFBO0lBQ0EsbUJBQUE7RUFUTjtFQVdNO0lBQ0UsbUJBQUE7RUFUUjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZGljdGlvbmFyeS9oYXJkLXdvcmRzL2hhcmQtd29yZHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdCB7XG4gIHBhZGRpbmc6IDAgMXJlbTtcblxuICAubGlzdC1pdGVtIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuXG4gICAgJi1jb250YWluZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuICAgICAgLml0ZW0taW1hZ2Uge1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICBpbWcge1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuaXRlbS1jb250ZW50IHtcbiAgICAgICAgcGFkZGluZzogMCAxcmVtO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG5cbiAgICAgICAgLml0ZW0tdGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5pdGVtLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgIH1cblxuICAgICAgLml0ZW0tY29udHJvbHMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5saXN0LWl0ZW06bnRoLWNoaWxkKDJuIC0xKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIH1cbn1cblxubWF0LXNwaW5uZXIge1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmxpc3Qge1xuICAgIC5saXN0LWl0ZW0ge1xuICAgICAgJi1jb250YWluZXIge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgLml0ZW0tY29udGVudCB7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HardWordsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hard-words',
                templateUrl: './hard-words.component.html',
                styleUrls: ['./hard-words.component.scss'],
            }]
    }], function () { return [{ type: src_app_state__WEBPACK_IMPORTED_MODULE_4__["FacadeService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=dictionary-dictionary-module.js.map