(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["words-list-words-list-module"],{

/***/ "/8zo":
/*!****************************************************!*\
  !*** ./src/app/words-list/words-list.component.ts ***!
  \****************************************************/
/*! exports provided: WordsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordsListComponent", function() { return WordsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_constants___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/constants/ */ "LzQu");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/utils */ "9uVP");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../state */ "/LE6");
/* harmony import */ var _state_settings_facade_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../state/settings-facade.service */ "i5wm");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");

















function WordsListComponent_mat_button_toggle_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-button-toggle", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WordsListComponent_mat_button_toggle_4_Template_mat_button_toggle_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const group_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.pickGroup(group_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](group_r7);
} }
function WordsListComponent_mat_button_toggle_12_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-button-toggle", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WordsListComponent_mat_button_toggle_12_Template_mat_button_toggle_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const game_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.goGame(game_r10.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](game_r10.label);
} }
function WordsListComponent_ng_template_13_li_1_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" - ", item_r14.wordTranslate, "");
} }
function WordsListComponent_ng_template_13_li_1_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" - ", item_r14.textMeaningTranslate, "");
} }
function WordsListComponent_ng_template_13_li_1_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" - ", item_r14.textExampleTranslate, "");
} }
function WordsListComponent_ng_template_13_li_1_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WordsListComponent_ng_template_13_li_1_div_26_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r22.addToHard(item_r14.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "new_label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WordsListComponent_ng_template_13_li_1_div_26_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.addToDeleted(item_r14.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WordsListComponent_ng_template_13_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WordsListComponent_ng_template_13_li_1_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const item_r14 = ctx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r27.playAudio(item_r14.audio, item_r14.audioMeaning, item_r14.audioExample); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "volume_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, WordsListComponent_ng_template_13_li_1_span_13_Template, 2, 1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, WordsListComponent_ng_template_13_li_1_span_18_Template, 2, 1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, WordsListComponent_ng_template_13_li_1_span_22_Template, 2, 1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, WordsListComponent_ng_template_13_li_1_div_26_Template, 7, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r13.url, "/", item_r14.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", item_r14.word);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r14.word, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", item_r14.transcription, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 12, ctx_r13.isTranslationDisplay$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", item_r14.textMeaning, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 14, ctx_r13.isTranslationDisplay$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", item_r14.textExample, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 16, ctx_r13.isTranslationDisplay$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r14.learningResults, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 18, ctx_r13.isControlsDisplay$));
} }
function WordsListComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WordsListComponent_ng_template_13_li_1_Template, 29, 20, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r4.listWords$));
} }
function WordsListComponent_mat_spinner_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
} }
function WordsListComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r6.page, " / 30");
} }
class WordsListComponent {
    constructor(stateFacade, settingsFacade, route, router) {
        this.stateFacade = stateFacade;
        this.settingsFacade = settingsFacade;
        this.route = route;
        this.router = router;
        this.isTranslationDisplay$ = this.settingsFacade.isTranslationDisplay$;
        this.isControlsDisplay$ = this.settingsFacade.isControlsDisplay$;
        this.listWords$ = this.stateFacade.listWords$;
        this.userWords$ = this.stateFacade.userWords$;
        this.pagination$ = this.stateFacade.pagination$;
        this.userStatistics$ = this.stateFacade.userStatistics$;
        this.isLoading$ = this.stateFacade.isLoading$;
        this.url = _shared_constants___WEBPACK_IMPORTED_MODULE_3__["DATA_URL"];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.gamesName = _shared_constants___WEBPACK_IMPORTED_MODULE_3__["GAMES_NAME"];
        this.groupsAmount = [1, 2, 3, 4, 5, 6];
        this.MAX_GROUP_COUNT = 6;
        this.MIN_GROUP_COUNT = 1;
        this.MAX_PAGE_COUNT = 30;
        this.MIN_PAGE_COUNT = 1;
    }
    ngOnInit() {
        this.loadDataFromRoute('list');
        this.loadUserWords();
        this.loadUserSettings();
        this.loadUserStatistics();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    pickGroup(group) {
        this.router.navigate(['words-list', group, 1]);
    }
    isFirstPage() {
        return +this.page === this.MIN_PAGE_COUNT;
    }
    isLastPage() {
        return +this.page === this.MAX_PAGE_COUNT;
    }
    nextPage() {
        if (!this.isLastPage()) {
            this.router.navigate(['words-list', this.group, +this.page + 1]);
        }
    }
    prevPage() {
        if (!this.isFirstPage()) {
            this.router.navigate(['words-list', this.group, +this.page - 1]);
        }
    }
    firstPage() {
        this.router.navigate(['words-list', this.group, this.MIN_PAGE_COUNT]);
    }
    lastPage() {
        this.router.navigate(['words-list', this.group, this.MAX_PAGE_COUNT]);
    }
    setRouteValuesInWrongCase() {
        this.router.navigate(['words-list', this.MIN_GROUP_COUNT, this.MIN_PAGE_COUNT]);
    }
    convertToNum(value) {
        return parseInt(value.trim());
    }
    isCorrectPassedGroupAndPage(group, page) {
        const isCorrectGroup = !isNaN(this.convertToNum(group)) ? this.checkGroupRange(group) : false;
        const isCorrectPage = !isNaN(this.convertToNum(page)) ? this.checkPageRange(page) : false;
        if (isCorrectGroup && isCorrectPage)
            return true;
        return false;
    }
    checkGroupRange(group) {
        const groupNum = this.convertToNum(group);
        return (groupNum >= this.MIN_GROUP_COUNT) && (groupNum <= this.MAX_GROUP_COUNT);
    }
    checkPageRange(page) {
        const pageNum = this.convertToNum(page);
        return (pageNum >= this.MIN_PAGE_COUNT) && (pageNum <= this.MAX_PAGE_COUNT);
    }
    loadDataFromRoute(direction) {
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((params) => {
            if (this.isCorrectPassedGroupAndPage(params['group'], params['page'])) {
                this.group = params['group'];
                this.page = params['page'];
                return this.stateFacade.loadListWords(this.group, this.page, direction);
            }
            else {
                this.setRouteValuesInWrongCase();
                return rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"];
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe();
    }
    loadUserWords() {
        this.stateFacade.loadUserWords().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe();
    }
    loadUserSettings() {
        this.settingsFacade.loadUserSettings();
    }
    loadUserStatistics() {
        this.stateFacade.loadUserStatistics().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe();
    }
    addToHard(id) {
        this.stateFacade.addWordToHard(id);
        this.loadUserWords();
    }
    addToDeleted(id) {
        this.stateFacade.addWordToDeleted(id);
        this.loadUserWords();
    }
    playAudio(url1, url2, url3) {
        Object(_shared_utils__WEBPACK_IMPORTED_MODULE_4__["playAudio"])(this.url, url1, url2, url3);
    }
    goGame(gameName) {
        if (gameName === 'savanna') {
            this.router.navigate(['/mini-games/savanna']);
            return;
        }
        this.router.navigate(['/mini-games', gameName, this.group, this.page]);
    }
}
WordsListComponent.ɵfac = function WordsListComponent_Factory(t) { return new (t || WordsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_state__WEBPACK_IMPORTED_MODULE_5__["FacadeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_state_settings_facade_service__WEBPACK_IMPORTED_MODULE_6__["SettingsFacade"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
WordsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WordsListComponent, selectors: [["app-words-list"]], decls: 33, vars: 11, consts: [[1, "actions"], ["type", "button", "mat-button", "", 3, "click"], [1, "actions-group"], [3, "click", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "routerLink", "/words-list/settings", 1, "settings"], ["mat-list-icon", ""], ["position", "end"], ["drawer", ""], ["vertical", ""], ["content", ""], [4, "ngIf", "ngIfElse"], [1, "paginator"], [3, "click"], [3, "disabled", "click"], ["class", "current-page", 4, "ngIf"], [1, "list"], ["class", "list-item", 4, "ngFor", "ngForOf"], [1, "list-item"], [1, "list-item-container"], [1, "item-image"], [3, "src", "alt"], [1, "item-content"], [1, "item-title"], ["mat-icon-button", "", 3, "click"], [4, "ngIf"], [1, "item-description"], [3, "innerHTML"], ["class", "item-controls", 4, "ngIf"], [1, "item-controls"], [1, "current-page"]], template: function WordsListComponent_Template(rf, ctx) { if (rf & 1) {
        const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WordsListComponent_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); return _r1.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0438\u0433\u0440\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-button-toggle-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WordsListComponent_mat_button_toggle_4_Template, 2, 1, "mat-button-toggle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-drawer-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-drawer", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-button-toggle-group", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, WordsListComponent_mat_button_toggle_12_Template, 2, 1, "mat-button-toggle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, WordsListComponent_ng_template_13_Template, 3, 3, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, WordsListComponent_mat_spinner_15_Template, 1, 0, "mat-spinner", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-button-toggle-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-button-toggle", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WordsListComponent_Template_mat_button_toggle_click_19_listener() { return ctx.firstPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "first_page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-button-toggle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WordsListComponent_Template_mat_button_toggle_click_22_listener() { return ctx.prevPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "chevron_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, WordsListComponent_div_25_Template, 3, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-button-toggle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WordsListComponent_Template_mat_button_toggle_click_27_listener() { return ctx.nextPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "chevron_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-button-toggle", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WordsListComponent_Template_mat_button_toggle_click_30_listener() { return ctx.lastPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "last_page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.groupsAmount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.gamesName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 7, ctx.isLoading$))("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isFirstPage());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 9, ctx.pagination$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isLastPage());
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListIconCssMatStyler"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatDrawer"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggle"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDivider"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatSpinner"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]], styles: [".actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.actions-group[_ngcontent-%COMP%] {\n  margin: 0 2rem;\n  flex-grow: 1;\n}\n.actions-group[_ngcontent-%COMP%]   mat-button-toggle[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  font-size: 1rem;\n  font-weight: 700;\n}\n.list[_ngcontent-%COMP%] {\n  padding: 0 1rem;\n}\n.list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-top: 1rem;\n}\n.list[_ngcontent-%COMP%]   .list-item-container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 1rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.list[_ngcontent-%COMP%]   .list-item-container[_ngcontent-%COMP%]   .item-image[_ngcontent-%COMP%] {\n  height: 150px;\n}\n.list[_ngcontent-%COMP%]   .list-item-container[_ngcontent-%COMP%]   .item-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.list[_ngcontent-%COMP%]   .list-item-container[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%] {\n  padding: 0 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: stretch;\n  flex-grow: 1;\n}\n.list[_ngcontent-%COMP%]   .list-item-container[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]   .item-title[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.list[_ngcontent-%COMP%]   .list-item-container[_ngcontent-%COMP%]   .item-description[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: stretch;\n}\n.list[_ngcontent-%COMP%]   .list-item-container[_ngcontent-%COMP%]   .item-controls[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]:nth-child(2n-1) {\n  background-color: white;\n}\nmat-spinner[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n.paginator[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.paginator[_ngcontent-%COMP%]   mat-button-toggle[_ngcontent-%COMP%] {\n  outline: none;\n}\n.paginator[_ngcontent-%COMP%]   .current-page[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 1.2rem;\n}\n@media screen and (max-width: 800px) {\n  .list[_ngcontent-%COMP%]   .list-item-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n  }\n  .list[_ngcontent-%COMP%]   .list-item-container[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%] {\n    align-items: center;\n  }\n  .list[_ngcontent-%COMP%]   .list-item-container[_ngcontent-%COMP%]   .item-controls[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yZHMtbGlzdC93b3Jkcy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFDRjtBQUNFO0VBQ0UsY0FBQTtFQUNBLFlBQUE7QUFDSjtBQUFJO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUVOO0FBR0E7RUFDRSxlQUFBO0FBQUY7QUFFRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFBSjtBQUVJO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtBQUFOO0FBRU07RUFDRSxhQUFBO0FBQVI7QUFDUTtFQUNFLFlBQUE7QUFDVjtBQUdNO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FBRFI7QUFHUTtFQUNFLGlCQUFBO0FBRFY7QUFLTTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7QUFIUjtBQU1NO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBSlI7QUFTRTtFQUNFLHVCQUFBO0FBUEo7QUFXQTtFQUNFLGNBQUE7QUFSRjtBQVdBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBUkY7QUFVRTtFQUNFLGFBQUE7QUFSSjtBQVdFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFUSjtBQWFBO0VBR007SUFDRSxzQkFBQTtJQUNBLDJCQUFBO0lBQ0EsbUJBQUE7RUFaTjtFQWNNO0lBQ0UsbUJBQUE7RUFaUjtFQWVNO0lBQ0UsbUJBQUE7RUFiUjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvd29yZHMtbGlzdC93b3Jkcy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgJi1ncm91cCB7XG4gICAgbWFyZ2luOiAwIDJyZW07XG4gICAgZmxleC1ncm93OiAxO1xuICAgIG1hdC1idXR0b24tdG9nZ2xlIHtcbiAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgfVxuICB9XG59XG5cbi5saXN0IHtcbiAgcGFkZGluZzogMCAxcmVtO1xuXG4gIC5saXN0LWl0ZW0ge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG5cbiAgICAmLWNvbnRhaW5lciB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXG4gICAgICAuaXRlbS1pbWFnZSB7XG4gICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5pdGVtLWNvbnRlbnQge1xuICAgICAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcblxuICAgICAgICAuaXRlbS10aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLml0ZW0tZGVzY3JpcHRpb24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgfVxuXG4gICAgICAuaXRlbS1jb250cm9scyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmxpc3QtaXRlbTpudGgtY2hpbGQoMm4gLTEpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxufVxuXG5tYXQtc3Bpbm5lciB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ucGFnaW5hdG9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgbWF0LWJ1dHRvbi10b2dnbGUge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cblxuICAuY3VycmVudC1wYWdlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmxpc3Qge1xuICAgIC5saXN0LWl0ZW0ge1xuICAgICAgJi1jb250YWluZXIge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgLml0ZW0tY29udGVudCB7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pdGVtLWNvbnRyb2xzIHtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WordsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-words-list',
                templateUrl: './words-list.component.html',
                styleUrls: ['./words-list.component.scss'],
            }]
    }], function () { return [{ type: _state__WEBPACK_IMPORTED_MODULE_5__["FacadeService"] }, { type: _state_settings_facade_service__WEBPACK_IMPORTED_MODULE_6__["SettingsFacade"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, null); })();


/***/ }),

/***/ "3K8S":
/*!*********************************************************!*\
  !*** ./src/app/words-list/words-list-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: WordsListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordsListRoutingModule", function() { return WordsListRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../settings */ "8XW/");
/* harmony import */ var _words_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./words-list.component */ "/8zo");






const routes = [
    { path: 'settings', component: _settings__WEBPACK_IMPORTED_MODULE_2__["SettingsComponent"] },
    { path: ':group/:page', component: _words_list_component__WEBPACK_IMPORTED_MODULE_3__["WordsListComponent"] },
    { path: '', redirectTo: '1/1', pathMatch: 'full' },
];
class WordsListRoutingModule {
}
WordsListRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WordsListRoutingModule });
WordsListRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WordsListRoutingModule_Factory(t) { return new (t || WordsListRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WordsListRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WordsListRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "70H3":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _state_settings_facade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/settings-facade.service */ "i5wm");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");










function SettingsComponent_div_5_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0414\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SettingsComponent_div_5_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041D\u0435\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SettingsComponent_div_5_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0414\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SettingsComponent_div_5_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041D\u0435\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SettingsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0425\u043E\u0447\u0443 \u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043F\u0435\u0440\u0435\u0432\u043E\u0434");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-slide-toggle", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toggleChange", function SettingsComponent_div_5_Template_mat_slide_toggle_toggleChange_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.changeTranslationDisplay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SettingsComponent_div_5_span_9_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SettingsComponent_div_5_ng_template_10_Template, 2, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u0425\u043E\u0447\u0443 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0442\u044C \u0441\u043B\u043E\u0432\u0430 \u0432 \"\u0421\u043B\u043E\u0436\u043D\u044B\u0435\" \"\u0423\u0434\u0430\u043B\u0435\u043D\u043D\u044B\u0435\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-slide-toggle", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toggleChange", function SettingsComponent_div_5_Template_mat_slide_toggle_toggleChange_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.changeControlsDisplay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SettingsComponent_div_5_span_19_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SettingsComponent_div_5_ng_template_20_Template, 2, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const settings_r1 = ctx.ngIf;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", settings_r1.translation);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", settings_r1.translation)("ngIfElse", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", settings_r1.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", settings_r1.controls)("ngIfElse", _r3);
} }
class SettingsComponent {
    constructor(settingsFacade, location) {
        this.settingsFacade = settingsFacade;
        this.location = location;
        this.isTranslationDisplay$ = this.settingsFacade.isTranslationDisplay$;
        this.isControlsDisplay$ = this.settingsFacade.isControlsDisplay$;
    }
    ngOnInit() {
        this.settings$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([this.isTranslationDisplay$, this.isControlsDisplay$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(([translation, controls]) => {
            return { translation, controls };
        }));
    }
    changeTranslationDisplay() {
        this.settingsFacade.changeTranslateSetting();
    }
    changeControlsDisplay() {
        this.settingsFacade.changeControlsSetting();
    }
    backToPreviousPage() {
        this.location.back();
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_state_settings_facade_service__WEBPACK_IMPORTED_MODULE_3__["SettingsFacade"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"])); };
SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["app-settings"]], decls: 7, vars: 3, consts: [[1, "settings"], [1, "back-button"], [3, "click"], ["class", "controls", 4, "ngIf"], [1, "controls"], [1, "controls-title"], [1, "control-translation"], [1, "translation-subtitle"], [1, "slider-section"], ["color", "primary", 1, "slider-margin", 3, "checked", "toggleChange"], [4, "ngIf", "ngIfElse"], ["no", ""], [1, "control-buttons"], [1, "buttons-subtitle"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_2_listener() { return ctx.backToPreviousPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SettingsComponent_div_5_Template, 22, 6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 1, ctx.settings$));
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggle"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDivider"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".settings[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: stretch;\n}\n.settings[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n}\n.settings[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.settings[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%] {\n  padding: 2rem;\n  flex-grow: 1;\n}\n.settings[_ngcontent-%COMP%]   .controls-title[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n.settings[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .translation-subtitle[_ngcontent-%COMP%], .settings[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .buttons-subtitle[_ngcontent-%COMP%] {\n  margin: 1rem;\n}\n.settings[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .eslider-section[_ngcontent-%COMP%] {\n  height: 3rem;\n  margin-left: 1rem;\n  display: flex;\n  align-content: center;\n  align-items: center;\n}\n.settings[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .slider-margin[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0FBQ0Y7QUFDRTtFQUNFLGVBQUE7QUFDSjtBQUNJO0VBQ0UsWUFBQTtBQUNOO0FBR0U7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQURKO0FBR0k7RUFDRSxpQkFBQTtBQUROO0FBSUk7O0VBRUUsWUFBQTtBQUZOO0FBS0k7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUhOO0FBTUk7RUFDRSxZQUFBO0FBSk4iLCJmaWxlIjoic3JjL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXR0aW5ncyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG5cbiAgLmJhY2stYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAycmVtIDA7XG5cbiAgICBidXR0b24ge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgfVxuXG4gIC5jb250cm9scyB7XG4gICAgcGFkZGluZzogMnJlbTtcbiAgICBmbGV4LWdyb3c6IDE7XG5cbiAgICAmLXRpdGxlIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgIH1cblxuICAgIC50cmFuc2xhdGlvbi1zdWJ0aXRsZSxcbiAgICAuYnV0dG9ucy1zdWJ0aXRsZSB7XG4gICAgICBtYXJnaW46IDFyZW07XG4gICAgfVxuXG4gICAgLmVzbGlkZXItc2VjdGlvbiB7XG4gICAgICBoZWlnaHQ6IDNyZW07XG4gICAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgIC5zbGlkZXItbWFyZ2luIHtcbiAgICAgIG1hcmdpbjogMTBweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-settings',
                templateUrl: './settings.component.html',
                styleUrls: ['./settings.component.scss'],
            }]
    }], function () { return [{ type: _state_settings_facade_service__WEBPACK_IMPORTED_MODULE_3__["SettingsFacade"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }]; }, null); })();


/***/ }),

/***/ "8XW/":
/*!***********************************!*\
  !*** ./src/app/settings/index.ts ***!
  \***********************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.component */ "70H3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return _settings_component__WEBPACK_IMPORTED_MODULE_0__["SettingsComponent"]; });




/***/ }),

/***/ "Cw6w":
/*!*************************************************!*\
  !*** ./src/app/words-list/words-list.module.ts ***!
  \*************************************************/
/*! exports provided: WordsListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordsListModule", function() { return WordsListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared */ "M0ag");
/* harmony import */ var _words_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./words-list.component */ "/8zo");
/* harmony import */ var _words_list_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./words-list-routing.module */ "3K8S");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../settings */ "8XW/");







class WordsListModule {
}
WordsListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WordsListModule });
WordsListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WordsListModule_Factory(t) { return new (t || WordsListModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _words_list_routing_module__WEBPACK_IMPORTED_MODULE_4__["WordsListRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WordsListModule, { declarations: [_words_list_component__WEBPACK_IMPORTED_MODULE_3__["WordsListComponent"], _settings__WEBPACK_IMPORTED_MODULE_5__["SettingsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _words_list_routing_module__WEBPACK_IMPORTED_MODULE_4__["WordsListRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WordsListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_words_list_component__WEBPACK_IMPORTED_MODULE_3__["WordsListComponent"], _settings__WEBPACK_IMPORTED_MODULE_5__["SettingsComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _words_list_routing_module__WEBPACK_IMPORTED_MODULE_4__["WordsListRoutingModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=words-list-words-list-module.js.map