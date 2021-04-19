(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dictionary-dictionary-module~words-list-words-list-module"],{

/***/ "/LE6":
/*!********************************!*\
  !*** ./src/app/state/index.ts ***!
  \********************************/
/*! exports provided: StateService, FacadeService, SettingsFacade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state.service */ "UBXS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return _state_service__WEBPACK_IMPORTED_MODULE_0__["StateService"]; });

/* harmony import */ var _state_facade_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state-facade.service */ "xJB1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FacadeService", function() { return _state_facade_service__WEBPACK_IMPORTED_MODULE_1__["FacadeService"]; });

/* harmony import */ var _settings_facade_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings-facade.service */ "i5wm");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SettingsFacade", function() { return _settings_facade_service__WEBPACK_IMPORTED_MODULE_2__["SettingsFacade"]; });






/***/ }),

/***/ "9uVP":
/*!*********************************!*\
  !*** ./src/app/shared/utils.ts ***!
  \*********************************/
/*! exports provided: playAudio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playAudio", function() { return playAudio; });
function playAudio(dataUrl, url1, url2, url3) {
    const audio1 = new Audio();
    const audio2 = new Audio();
    const audio3 = new Audio();
    audio1.src = `${dataUrl}/${url1}`;
    audio2.src = `${dataUrl}/${url2}`;
    audio3.src = `${dataUrl}/${url3}`;
    audio1.load();
    audio1.play();
    audio1.addEventListener('ended', function () {
        if (audio1.duration === audio1.currentTime) {
            audio2.play();
        }
    });
    audio2.addEventListener('ended', function () {
        if (audio2.duration === audio2.currentTime) {
            audio3.play();
        }
    });
}


/***/ }),

/***/ "UBXS":
/*!****************************************!*\
  !*** ./src/app/state/state.service.ts ***!
  \****************************************/
/*! exports provided: StateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return StateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class StateService {
    constructor() {
        this.translationDisplaySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.controlsDisplaySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.listWordsSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.paginationSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({
            group: 0,
            page: 0
        });
        this.userWordsSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.wordsInLearningSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.hardWordsSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.deletedWordsSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.userStatisticsSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.translationDisplay$ = this.translationDisplaySubject$.asObservable();
        this.controlsDisplay$ = this.controlsDisplaySubject$.asObservable();
        this.listWords$ = this.listWordsSubject$.asObservable();
        this.userWords$ = this.userWordsSubject$.asObservable();
        this.wordsInLearning$ = this.wordsInLearningSubject$.asObservable();
        this.hardWords$ = this.hardWordsSubject$.asObservable();
        this.deletedWords$ = this.deletedWordsSubject$.asObservable();
        this.pagination$ = this.paginationSubject$.asObservable();
        this.userStatistics$ = this.userStatisticsSubject$.asObservable();
        this.MAX_PAGE_COUNT = 29;
        this.MIN_PAGE_COUNT = 0;
    }
    setTranslationDisplay(isDisplay) {
        this.translationDisplaySubject$.next(+isDisplay ? true : false);
    }
    setControlsDisplay(isDisplay) {
        this.controlsDisplaySubject$.next(+isDisplay ? true : false);
    }
    setPaginationValues(navigate) {
        this.updatePagination(navigate);
    }
    setUserStatistics(statistics) {
        this.userStatisticsSubject$.next(statistics);
    }
    setWords(words, direction) {
        switch (direction) {
            case 'user':
                this.userWordsSubject$.next(words);
                break;
            case 'list':
                this.listWordsSubject$.next(words);
                break;
            case 'learning':
                this.wordsInLearningSubject$.next(words);
                break;
            case 'hard':
                this.hardWordsSubject$.next(words);
                break;
            case 'deleted':
                this.deletedWordsSubject$.next(words);
                break;
        }
    }
    updatePagination(value) {
        var _a, _b;
        const nextValue = this.paginationSubject$.getValue();
        nextValue.group = (_a = value.group) !== null && _a !== void 0 ? _a : nextValue.group;
        nextValue.page = (_b = value.page) !== null && _b !== void 0 ? _b : nextValue.page;
        this.paginationSubject$.next(nextValue);
    }
}
StateService.ɵfac = function StateService_Factory(t) { return new (t || StateService)(); };
StateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StateService, factory: StateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ "i5wm":
/*!**************************************************!*\
  !*** ./src/app/state/settings-facade.service.ts ***!
  \**************************************************/
/*! exports provided: SettingsFacade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsFacade", function() { return SettingsFacade; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state.service */ "UBXS");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared */ "M0ag");




class SettingsFacade {
    constructor(stateService, apiService, localStoage) {
        this.stateService = stateService;
        this.apiService = apiService;
        this.localStoage = localStoage;
        this.isTranslationDisplay$ = this.stateService.translationDisplay$;
        this.isControlsDisplay$ = this.stateService.controlsDisplay$;
    }
    loadUserSettings() {
        const translate = this.localStoage.getTranslateSetting();
        console.log('translate', translate);
        if (translate) {
            this.stateService.setTranslationDisplay(translate);
        }
        else {
            this.localStoage.createTranslateSetting();
            this.stateService.setTranslationDisplay(this.localStoage.getTranslateSetting());
        }
        const controls = this.localStoage.getControlsSetting();
        console.log('controls', controls);
        if (controls) {
            this.stateService.setControlsDisplay(controls);
        }
        else {
            this.localStoage.createControlsSetting();
            this.stateService.setControlsDisplay(this.localStoage.getControlsSetting());
        }
    }
    changeTranslateSetting() {
        if (+this.localStoage.getTranslateSetting()) {
            this.localStoage.setTranslateDisplay(0);
        }
        else {
            this.localStoage.setTranslateDisplay(1);
        }
        this.stateService.setTranslationDisplay(this.localStoage.getTranslateSetting());
    }
    changeControlsSetting() {
        if (+this.localStoage.getControlsSetting()) {
            this.localStoage.setControlsSetting(0);
        }
        else {
            this.localStoage.setControlsSetting(1);
        }
        this.stateService.setControlsDisplay(this.localStoage.getControlsSetting());
    }
}
SettingsFacade.ɵfac = function SettingsFacade_Factory(t) { return new (t || SettingsFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_state_service__WEBPACK_IMPORTED_MODULE_1__["StateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"])); };
SettingsFacade.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SettingsFacade, factory: SettingsFacade.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsFacade, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _state_service__WEBPACK_IMPORTED_MODULE_1__["StateService"] }, { type: _shared__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: _shared__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] }]; }, null); })();


/***/ }),

/***/ "xJB1":
/*!***********************************************!*\
  !*** ./src/app/state/state-facade.service.ts ***!
  \***********************************************/
/*! exports provided: FacadeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacadeService", function() { return FacadeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state.service */ "UBXS");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared */ "M0ag");






class FacadeService {
    constructor(stateService, apiService) {
        this.stateService = stateService;
        this.apiService = apiService;
        this.pagination$ = this.stateService.pagination$;
        this.listWords$ = this.stateService.listWords$;
        this.userWords$ = this.stateService.userWords$;
        this.wordsInLearning$ = this.stateService.wordsInLearning$;
        this.hardWords$ = this.stateService.hardWords$;
        this.deletedWords$ = this.stateService.deletedWords$;
        this.userStatistics$ = this.stateService.userStatistics$;
        this.isLoadingSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.isLoading$ = this.isLoadingSubject$.asObservable();
    }
    loadListWords(group = 1, page = 1, direction) {
        const pagination = { group: group - 1, page: page - 1 };
        this.isLoadingSubject$.next(true);
        return this.apiService.getWords(pagination.group, pagination.page).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])({
            next: (data) => {
                this.stateService.setWords(data, direction);
            },
            error: (err) => {
                console.error(JSON.stringify(err));
                alert('не удалось загрузить слова');
            },
            complete: () => {
                this.isLoadingSubject$.next(false);
                this.stateService.updatePagination(pagination);
            },
        }));
    }
    loadUserWords() {
        return this.apiService.getUserWords().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])({
            next: (data) => {
                this.stateService.setWords(data, 'user');
            },
            error: (err) => {
                console.error(JSON.stringify(err));
                alert('не удалось загрузить слова пользователя');
            }
        }));
    }
    loadWordsInLearning() {
        this.isLoadingSubject$.next(true);
        return this.apiService.getUserAggregatedWords({ 'userWord.optional.learned': true })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])({
            next: (data) => {
                this.stateService.setWords(data[0].paginatedResults, 'learning');
                this.isLoadingSubject$.next(false);
            },
            error: (err) => {
                console.error(JSON.stringify(err));
                alert('Не удалось загрузить изучаемые слова');
            }
        }));
    }
    loadHardWords() {
        this.isLoadingSubject$.next(true);
        return this.apiService.getUserAggregatedWords({ 'userWord.difficulty': 'hard', 'userWord.optional.hard': true })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])({
            next: (data) => {
                this.stateService.setWords(data[0].paginatedResults, 'hard');
                this.isLoadingSubject$.next(false);
            },
            error: (err) => {
                console.error(JSON.stringify(err));
                alert('Не удалось загрузить сложные слова');
            }
        }));
    }
    loadDeletedWords() {
        this.isLoadingSubject$.next(true);
        return this.apiService.getUserAggregatedWords({ 'userWord.difficulty': 'normal', 'userWord.optional.deleted': true })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])({
            next: (data) => {
                this.stateService.setWords(data[0].paginatedResults, 'deleted');
                this.isLoadingSubject$.next(false);
            },
            error: (err) => {
                console.error(JSON.stringify(err));
                alert('Не удалось загрузить удаленные слова');
            }
        }));
    }
    loadUserStatistics() {
        return this.apiService.getUserStatistics().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])({
            next: (data) => {
                this.stateService.setUserStatistics(data);
            },
            error: (err) => {
                console.error(JSON.stringify(err));
                alert('Не удалось загрузить статистику пользователя');
            }
        }));
    }
    addWordWithParams(id, body) {
        this.apiService.createUserWordByWordId(id, body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe(data => data);
    }
    updateWordParams(id, body) {
        this.apiService.updateUserWordByWordId(id, body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe(data => data);
    }
    deleteUserWord(id) {
        this.apiService.deleteUserWordByWordId(id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe();
    }
    addWordToHard(id) {
        const body = {
            difficulty: 'hard',
            optional: {
                hard: true
            }
        };
        let words;
        this.userWords$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])({
            next: (data) => {
                words = data;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe();
        if (words.findIndex(word => word.wordId === id) > -1) {
            this.updateWordParams(id, body);
        }
        else {
            this.addWordWithParams(id, body);
        }
    }
    addWordToDeleted(id) {
        const body = {
            difficulty: 'normal',
            optional: {
                deleted: true
            }
        };
        let words;
        this.userWords$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])({
            next: (data) => {
                words = data;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe();
        if (words.findIndex(word => word.wordId === id) > -1) {
            this.updateWordParams(id, body);
        }
        else {
            this.addWordWithParams(id, body);
        }
    }
    addWordToLearning(id) {
        const body = {
            difficulty: 'normal',
            optional: {
                learned: true
            }
        };
        let words;
        this.userWords$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])({
            next: (data) => {
                words = data;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe();
        if (words.findIndex(word => word.wordId === id) > -1) {
            this.updateWordParams(id, body);
        }
        else {
            this.addWordWithParams(id, body);
        }
    }
}
FacadeService.ɵfac = function FacadeService_Factory(t) { return new (t || FacadeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared__WEBPACK_IMPORTED_MODULE_4__["ApiService"])); };
FacadeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FacadeService, factory: FacadeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacadeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"] }, { type: _shared__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~dictionary-dictionary-module~words-list-words-list-module.js.map