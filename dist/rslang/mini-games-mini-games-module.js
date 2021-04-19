(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mini-games-mini-games-module"],{

/***/ "6UaQ":
/*!*****************************************************************************!*\
  !*** ./src/app/mini-games/savanna/savanna-child/savanna-child.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SavannaChildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavannaChildComponent", function() { return SavannaChildComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _animations_savanna_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../animations/savanna-animations */ "uEwK");
/* harmony import */ var _services_game_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/game-utils.service */ "hXAj");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function SavannaChildComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SavannaChildComponent_div_4_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.checkOnClickEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.isClicked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", i_r2 + 1, ". ", option_r1, "");
} }
class SavannaChildComponent {
    constructor(el, gameUtils) {
        this.el = el;
        this.gameUtils = gameUtils;
        this.passAnswer = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isGameEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.options = Array(4).fill('');
        // the count is used to count "targetWord"s
        this.count = 0;
        // component pass this object to the savanna component
        this.gameAnswer = {
            isCorrect: true,
            answer: {
                answer: '',
                answerTranslate: '',
            },
            audio: '',
        };
        // the buttons should be disabled after first button click event
        this.isClicked = false;
        // targetWord has animation targetWord may be three different states 'top', 'bottom', 'answered'
        // default state is 'top'
        this.targetWordState = 'top';
        this.choosenOption = '';
        // these sounds will play after user choose any option or when "targetWord"s state is 'bottom'
        this.correctSound = new Audio();
        this.wrongSound = new Audio();
    }
    ngOnInit() {
        this.correctSound.src = '../../../../assets/savanna-game/correct.wav';
        this.wrongSound.src = '../../../../assets/savanna-game/wrong.wav';
        this.englishWords = this.words.map((wordObj) => wordObj.word);
        this.russianWords = this.words.map((wordObj) => wordObj.wordTranslate);
        // we begin new interval tochange words and animation states
        this.beginNewInterval();
    }
    // when component is destroyed, interval should stop.
    ngOnDestroy() {
        clearInterval(this.changeWordsInterval);
    }
    beginNewInterval() {
        // targetWord's state changes during the game('bottom', 'answered')
        // we have to assign  value 'top' to the targetWordState beginning new interval
        this.targetWordState = 'top';
        // when the state of targetWord is 'answered' , we begin new interwal
        // so that we have to clear old interval
        clearInterval(this.changeWordsInterval);
        // when the state of targetWord is 'answered' or 'bottom', our buttons takes styles
        // these styles should be visible as timeout value(0.5 second in our case)
        setTimeout(() => {
            // in the beginning of the game state of targetWord is 'top'
            // animation starts when the state changes so we change the state after 0.5 second
            // otherwise animaton starts after five second
            this.targetWordState = 'bottom';
            // change targetWord and options' values
            // otherwise they will be changed after five second
            this.changeWord();
            this.options = this.gameUtils.shuffleArray(this.makeOptions());
            // setInterval to change targetWord and options
            this.changeWordsInterval = setInterval(() => {
                // animation works only once
                // in order to make animation infinite we should change animation state every exact time
                this.changeAnimationState();
                this.changeWord();
                this.options = this.gameUtils.shuffleArray(this.makeOptions());
                // in order to animation happen we need tick
                setTimeout(() => {
                    this.changeAnimationState();
                }, 0);
            }, 7500);
        }, 1000);
    }
    changeAnimationState() {
        if (this.targetWordState === 'top') {
            this.targetWordState = 'bottom';
        }
        else {
            // when user doesn't choose any option we do
            this.inCaseTheAnswerFalse();
            this.targetWordState = 'top';
        }
    }
    // this function is called every round of the game
    // this function changes targetword and removes old button styles
    changeWord() {
        this.isClicked = false;
        this.gameUtils.removeStyles(this.choosenButton);
        this.gameUtils.removeStyles(this.correctButton);
        this.targetWord = this.englishWords[this.count++];
        // if words count graeter than or equal 21 the 'changeWordsInterval' should be cleared;
        if (this.count >= 21) {
            this.count = 0;
            this.isGameEnd.emit(true);
            clearInterval(this.changeWordsInterval);
        }
    }
    // every game has four different option and one of them is answer
    makeOptions() {
        let options = [];
        // since 'this.russianWords' must not change, we copy russianWords from 'this.russianWords'
        let russianWords = [...this.russianWords];
        // find answer from english words array
        this.answer = this.words.find((word) => {
            return word.word === this.targetWord;
        }).wordTranslate;
        // we should remove answer from russianWords, because it must not be duplicated in the options.
        russianWords.splice(russianWords.findIndex((word) => word === this.answer), 1);
        // make random options and then push the answer
        [options[0], options[1], options[2]] = this.gameUtils.shuffleArray(russianWords);
        options.push(this.answer);
        return options;
    }
    // the game must work with special keys also
    checkOnKeyboardEvent(event) {
        let key = +event.key;
        // we have only four posssible keys
        if (!this.isClicked) {
            if (key === 1 || key === 2 || key === 3 || key === 4) {
                this.choosenButton = this.el.nativeElement.querySelectorAll('.option-word button')[key - 1];
                this.checkAnswer();
            }
        }
    }
    checkOnClickEvent(event) {
        this.choosenButton = event.target;
        this.checkAnswer();
    }
    checkAnswer() {
        var _a;
        // make buttons disabled
        this.isClicked = true;
        // options structure : "{{ i + 1 }}. {{ option }}" , we should remove '{{ i + 1 }}. '.
        this.choosenOption = ((_a = this.choosenButton.textContent) === null || _a === void 0 ? void 0 : _a.slice(3).trim()) || "You haven't choosen.";
        if (this.choosenOption === this.answer) {
            this.inCaseTheAnswerTrue();
        }
        else {
            this.inCaseTheAnswerFalse();
        }
        // when the state of targetWord is 'answered', targetWord moves to the top(itselves default place).
        this.targetWordState = 'answered';
        // in order to animation happen we need tick
        setTimeout(() => {
            this.beginNewInterval();
        }, 0);
    }
    inCaseTheAnswerTrue() {
        this.correctSound.play();
        this.choosenButton.classList.add('correct');
        this.passGameAnswer(true);
    }
    inCaseTheAnswerFalse() {
        if (this.heartsCount === 1) {
            clearInterval(this.changeWordsInterval);
            this.isGameEnd.emit(true);
        }
        else {
            this.wrongSound.play();
            this.correctButton = Array.from(this.el.nativeElement.querySelectorAll('.option-word button')).find((button) => {
                var _a;
                return ((_a = button.textContent) === null || _a === void 0 ? void 0 : _a.slice(3).trim()) === this.answer;
            });
            this.correctButton.classList.add('correct');
            if (this.choosenButton) {
                this.choosenButton.classList.add('incorrect');
            }
        }
        this.passGameAnswer(false);
    }
    passGameAnswer(isCorrect) {
        this.gameAnswer.isCorrect = isCorrect;
        this.gameAnswer.answer = {
            answer: this.answer,
            answerTranslate: this.targetWord,
        };
        this.gameAnswer.audio = this.gameUtils.findAudio(this.answer, this.words);
        this.passAnswer.emit(this.gameAnswer);
    }
}
SavannaChildComponent.ɵfac = function SavannaChildComponent_Factory(t) { return new (t || SavannaChildComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_utils_service__WEBPACK_IMPORTED_MODULE_2__["GameUtilsService"])); };
SavannaChildComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SavannaChildComponent, selectors: [["app-savanna-child"]], hostBindings: function SavannaChildComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function SavannaChildComponent_keydown_HostBindingHandler($event) { return ctx.checkOnKeyboardEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, inputs: { heartsCount: "heartsCount", words: "words" }, outputs: { passAnswer: "passAnswer", isGameEnd: "isGameEnd" }, decls: 5, vars: 3, consts: [[1, "savanna-game-wrapper"], [1, "target-word"], [1, "option-words"], ["class", "option-word", 4, "ngFor", "ngForOf"], [1, "option-word"], [3, "disabled", "click"]], template: function SavannaChildComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SavannaChildComponent_div_4_Template, 3, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@moveTargetWord", ctx.targetWordState);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.targetWord, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".savanna-game-wrapper[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.savanna-game-wrapper[_ngcontent-%COMP%]   .target-word[_ngcontent-%COMP%], .savanna-game-wrapper[_ngcontent-%COMP%]   .option-words[_ngcontent-%COMP%] {\n  width: -webkit-max-content;\n  width: max-content;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  position: absolute;\n}\n.savanna-game-wrapper[_ngcontent-%COMP%]   .target-word[_ngcontent-%COMP%] {\n  top: 5%;\n  color: black;\n  background-color: white;\n  padding: 10px;\n  border-radius: 10px;\n}\n.savanna-game-wrapper[_ngcontent-%COMP%]   .option-words[_ngcontent-%COMP%] {\n  width: 80%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  top: 75%;\n}\n.savanna-game-wrapper[_ngcontent-%COMP%]   .option-words[_ngcontent-%COMP%]   .option-word[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 10px;\n  margin: 10px;\n  border-radius: 10px;\n  color: white;\n  background-color: black;\n  font-weight: bold;\n  font-size: 1.25rem;\n  transition: color, background-color 0.5s 0.1s ease-in;\n  border: 2px groove white;\n}\n.savanna-game-wrapper[_ngcontent-%COMP%]   .option-words[_ngcontent-%COMP%]   .option-word[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  filter: brightness(10%);\n}\n.savanna-game-wrapper[_ngcontent-%COMP%]   .option-words[_ngcontent-%COMP%]   .option-word[_ngcontent-%COMP%]   button.correct[_ngcontent-%COMP%] {\n  border-color: green;\n  color: green;\n}\n.savanna-game-wrapper[_ngcontent-%COMP%]   .option-words[_ngcontent-%COMP%]   .option-word[_ngcontent-%COMP%]   button.correct[_ngcontent-%COMP%]:disabled {\n  filter: brightness(100%);\n}\n.savanna-game-wrapper[_ngcontent-%COMP%]   .option-words[_ngcontent-%COMP%]   .option-word[_ngcontent-%COMP%]   button.incorrect[_ngcontent-%COMP%] {\n  border-color: red;\n  color: red;\n}\n.savanna-game-wrapper[_ngcontent-%COMP%]   .option-words[_ngcontent-%COMP%]   .option-word[_ngcontent-%COMP%]   button.incorrect[_ngcontent-%COMP%]:disabled {\n  filter: brightness(100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWluaS1nYW1lcy9zYXZhbm5hL3NhdmFubmEtY2hpbGQvc2F2YW5uYS1jaGlsZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7QUFDRTs7RUFFRSwwQkFBQTtFQUFBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUVFO0VBQ0UsT0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUFKO0FBR0U7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLFFBQUE7QUFESjtBQUlNO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUVFLGlCQUFBO0VBQ0Esa0JBQUE7RUFHRixxREFBQTtFQUNBLHdCQUFBO0FBTFI7QUFNUTtFQUNFLHVCQUFBO0FBSlY7QUFRTTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQU5SO0FBT1E7RUFDRSx3QkFBQTtBQUxWO0FBU007RUFDRSxpQkFBQTtFQUNBLFVBQUE7QUFQUjtBQVFRO0VBQ0Usd0JBQUE7QUFOViIsImZpbGUiOiJzcmMvYXBwL21pbmktZ2FtZXMvc2F2YW5uYS9zYXZhbm5hLWNoaWxkL3NhdmFubmEtY2hpbGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2F2YW5uYS1nYW1lLXdyYXBwZXIge1xuICBmb250LXNpemU6IDEuMjVyZW07XG5cbiAgLnRhcmdldC13b3JkLFxuICAub3B0aW9uLXdvcmRzIHtcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuXG4gIC50YXJnZXQtd29yZCB7XG4gICAgdG9wOiA1JTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG5cbiAgLm9wdGlvbi13b3JkcyB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgdG9wOiA3NSU7XG5cbiAgICAub3B0aW9uLXdvcmQge1xuICAgICAgYnV0dG9uIHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICBmb250OiB7XG4gICAgICAgICAgd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIHNpemU6IDEuMjVyZW07XG4gICAgICAgIH1cblxuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciwgYmFja2dyb3VuZC1jb2xvciAwLjVzIDAuMXMgZWFzZS1pbjtcbiAgICAgICAgYm9yZGVyOiAycHggZ3Jvb3ZlIHdoaXRlO1xuICAgICAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTAlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBidXR0b24uY29ycmVjdCB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogZ3JlZW47XG4gICAgICAgIGNvbG9yOiBncmVlbjtcbiAgICAgICAgJjpkaXNhYmxlZCB7XG4gICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDEwMCUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGJ1dHRvbi5pbmNvcnJlY3Qge1xuICAgICAgICBib3JkZXItY29sb3I6IHJlZDtcbiAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgJjpkaXNhYmxlZCB7XG4gICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDEwMCUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"], data: { animation: [_animations_savanna_animations__WEBPACK_IMPORTED_MODULE_1__["moveTargetWord"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SavannaChildComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-savanna-child',
                templateUrl: './savanna-child.component.html',
                styleUrls: ['./savanna-child.component.scss'],
                animations: [_animations_savanna_animations__WEBPACK_IMPORTED_MODULE_1__["moveTargetWord"]],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _services_game_utils_service__WEBPACK_IMPORTED_MODULE_2__["GameUtilsService"] }]; }, { heartsCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], words: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], passAnswer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], isGameEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], checkOnKeyboardEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:keydown', ['$event']]
        }] }); })();


/***/ }),

/***/ "6ps1":
/*!*************************************************************!*\
  !*** ./src/app/shared/services/common-functions.service.ts ***!
  \*************************************************************/
/*! exports provided: CommonFunctionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonFunctionsService", function() { return CommonFunctionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CommonFunctionsService {
    constructor() {
        this.url = 'https://dispet.github.io/rslang-data/';
    }
    playAudio(url) {
        const audio = new Audio();
        audio.src = this.url + url;
        audio.load();
        audio.play();
        audio.addEventListener('ended', function () {
            if (audio.duration === audio.currentTime) {
                audio.play();
                audio.pause();
                audio.currentTime = 0.0;
            }
        });
    }
    getRandomWords(arr, wordsCount) {
        const result = [];
        let length = arr.length;
        if (wordsCount > length) {
            // для вывода информации в консоль при разработке
            console.error('Заданное количество слов для теста превышает предоставленный набор');
        }
        while (wordsCount) {
            let x = Math.floor(Math.random() * length);
            if (!result.includes(arr[x])) {
                result.push(arr[x]);
                wordsCount--;
            }
        }
        return result;
    }
}
CommonFunctionsService.ɵfac = function CommonFunctionsService_Factory(t) { return new (t || CommonFunctionsService)(); };
CommonFunctionsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CommonFunctionsService, factory: CommonFunctionsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonFunctionsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "BGKp":
/*!*************************************************!*\
  !*** ./src/app/mini-games/mini-games.module.ts ***!
  \*************************************************/
/*! exports provided: MiniGamesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniGamesModule", function() { return MiniGamesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared */ "M0ag");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../material */ "quTh");
/* harmony import */ var _mini_games_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mini-games-routing.module */ "GQXt");
/* harmony import */ var _services_game_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/game-utils.service */ "hXAj");
/* harmony import */ var _components_game_first_modal_game_first_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/game-first-modal/game-first-modal.component */ "FISY");
/* harmony import */ var _components_game_results_modal_game_results_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/game-results-modal/game-results-modal.component */ "yY33");
/* harmony import */ var _mini_games_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mini-games.component */ "lz1+");
/* harmony import */ var _audiocall_item_audio_call_item_audio_call_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./audiocall/item-audio-call/item-audio-call.component */ "hKzj");
/* harmony import */ var _audiocall_audio_call_audio_call_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./audiocall/audio-call/audio-call.component */ "vgQG");
/* harmony import */ var _audiocall_main_audio_call_main_audio_call_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./audiocall/main-audio-call/main-audio-call.component */ "HLlW");
/* harmony import */ var _savanna_savanna_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./savanna/savanna.component */ "ZLZz");
/* harmony import */ var _savanna_savanna_child_savanna_child_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./savanna/savanna-child/savanna-child.component */ "6UaQ");
/* harmony import */ var _type_me_type_me_type_me_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./type-me/type-me/type-me.component */ "J1IJ");
/* harmony import */ var _type_me_item_type_me_item_type_me_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./type-me/item-type-me/item-type-me.component */ "LpUT");
/* harmony import */ var _type_me_main_type_me_main_type_me_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./type-me/main-type-me/main-type-me.component */ "I1MN");


















class MiniGamesModule {
}
MiniGamesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MiniGamesModule });
MiniGamesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MiniGamesModule_Factory(t) { return new (t || MiniGamesModule)(); }, providers: [_services_game_utils_service__WEBPACK_IMPORTED_MODULE_5__["GameUtilsService"]], imports: [[_mini_games_routing_module__WEBPACK_IMPORTED_MODULE_4__["MiniGamesRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _material__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MiniGamesModule, { declarations: [_audiocall_audio_call_audio_call_component__WEBPACK_IMPORTED_MODULE_10__["AudioCallComponent"],
        _mini_games_component__WEBPACK_IMPORTED_MODULE_8__["MiniGamesComponent"],
        _audiocall_item_audio_call_item_audio_call_component__WEBPACK_IMPORTED_MODULE_9__["ItemAudioCallComponent"],
        _audiocall_main_audio_call_main_audio_call_component__WEBPACK_IMPORTED_MODULE_11__["MainAudioCallComponent"],
        _components_game_first_modal_game_first_modal_component__WEBPACK_IMPORTED_MODULE_6__["GameFirstModalComponent"],
        _savanna_savanna_child_savanna_child_component__WEBPACK_IMPORTED_MODULE_13__["SavannaChildComponent"],
        _type_me_type_me_type_me_component__WEBPACK_IMPORTED_MODULE_14__["TypeMeComponent"],
        _type_me_item_type_me_item_type_me_component__WEBPACK_IMPORTED_MODULE_15__["ItemTypeMeComponent"],
        _type_me_main_type_me_main_type_me_component__WEBPACK_IMPORTED_MODULE_16__["MainTypeMeComponent"],
        _savanna_savanna_component__WEBPACK_IMPORTED_MODULE_12__["SavannaComponent"]], imports: [_mini_games_routing_module__WEBPACK_IMPORTED_MODULE_4__["MiniGamesRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _material__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MiniGamesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _audiocall_audio_call_audio_call_component__WEBPACK_IMPORTED_MODULE_10__["AudioCallComponent"],
                    _mini_games_component__WEBPACK_IMPORTED_MODULE_8__["MiniGamesComponent"],
                    _audiocall_item_audio_call_item_audio_call_component__WEBPACK_IMPORTED_MODULE_9__["ItemAudioCallComponent"],
                    _audiocall_main_audio_call_main_audio_call_component__WEBPACK_IMPORTED_MODULE_11__["MainAudioCallComponent"],
                    _components_game_first_modal_game_first_modal_component__WEBPACK_IMPORTED_MODULE_6__["GameFirstModalComponent"],
                    _savanna_savanna_child_savanna_child_component__WEBPACK_IMPORTED_MODULE_13__["SavannaChildComponent"],
                    _type_me_type_me_type_me_component__WEBPACK_IMPORTED_MODULE_14__["TypeMeComponent"],
                    _type_me_item_type_me_item_type_me_component__WEBPACK_IMPORTED_MODULE_15__["ItemTypeMeComponent"],
                    _type_me_main_type_me_main_type_me_component__WEBPACK_IMPORTED_MODULE_16__["MainTypeMeComponent"],
                    _savanna_savanna_component__WEBPACK_IMPORTED_MODULE_12__["SavannaComponent"],
                ],
                imports: [_mini_games_routing_module__WEBPACK_IMPORTED_MODULE_4__["MiniGamesRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _material__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
                entryComponents: [_components_game_results_modal_game_results_modal_component__WEBPACK_IMPORTED_MODULE_7__["GameResultsModalComponent"]],
                providers: [_services_game_utils_service__WEBPACK_IMPORTED_MODULE_5__["GameUtilsService"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "FISY":
/*!**************************************************************************************!*\
  !*** ./src/app/mini-games/components/game-first-modal/game-first-modal.component.ts ***!
  \**************************************************************************************/
/*! exports provided: GameFirstModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameFirstModalComponent", function() { return GameFirstModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function GameFirstModalComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameFirstModalComponent_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const group_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.chooseGameLevel(group_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](group_r1);
} }
class GameFirstModalComponent {
    constructor() {
        this.passGameLevel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.difficultyGroups = [1, 2, 3, 4, 5, 6];
    }
    ngOnInit() { }
    chooseGameLevel(group) {
        this.passGameLevel.emit((+group - 1));
    }
}
GameFirstModalComponent.ɵfac = function GameFirstModalComponent_Factory(t) { return new (t || GameFirstModalComponent)(); };
GameFirstModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameFirstModalComponent, selectors: [["app-game-first-modal"]], inputs: { info: "info" }, outputs: { passGameLevel: "passGameLevel" }, decls: 15, vars: 3, consts: [[1, "first-modal"], [1, "modal-window"], [1, "game-info"], [1, "title"], [1, "info"], [1, "choose-difficulty-level"], [3, "click", 4, "ngFor", "ngForOf"], [1, "learned-words"], [3, "click"]], template: function GameFirstModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u0440\u043E\u0432\u0435\u043D\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, GameFirstModalComponent_button_12_Template, 2, 1, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0418\u0437\u0443\u0447\u0430\u0435\u043C\u044B\u0435 \u0441\u043B\u043E\u0432\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.info.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.info.info);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.difficultyGroups);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".first-modal[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  z-index: 99;\n}\n.first-modal[_ngcontent-%COMP%]   .modal-window[_ngcontent-%COMP%] {\n  padding: 30px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  overflow: auto;\n  background-color: rgba(255, 255, 255, 0.75);\n  color: black;\n  border-radius: 5px;\n  height: -webkit-max-content;\n  height: max-content;\n  font-size: 20px;\n}\n.first-modal[_ngcontent-%COMP%]   .modal-window[_ngcontent-%COMP%]   .game-info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: brown;\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 2rem;\n}\n.first-modal[_ngcontent-%COMP%]   .modal-window[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  color: brown;\n}\n.first-modal[_ngcontent-%COMP%]   .modal-window[_ngcontent-%COMP%]   .choose-difficulty-level[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  flex-direction: row;\n}\n.first-modal[_ngcontent-%COMP%]   .modal-window[_ngcontent-%COMP%]   .choose-difficulty-level[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-color: brown;\n  border-radius: 10px;\n  background-color: brown;\n  color: white;\n  margin-top: 10px;\n  padding: 10px;\n  font-size: 20px;\n}\n.first-modal[_ngcontent-%COMP%]   .modal-window[_ngcontent-%COMP%]   .choose-difficulty-level[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(.learned-words) {\n  min-width: 50px;\n  width: 15%;\n}\n.first-modal[_ngcontent-%COMP%]   .modal-window[_ngcontent-%COMP%]   .choose-difficulty-level[_ngcontent-%COMP%]   .learned-words[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWluaS1nYW1lcy9jb21wb25lbnRzL2dhbWUtZmlyc3QtbW9kYWwvZ2FtZS1maXJzdC1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0VBQ0EsMkNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUFBLG1CQUFBO0VBQ0EsZUFBQTtBQUNKO0FBRU07RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFBUjtBQUlJO0VBQ0UsWUFBQTtBQUZOO0FBS0k7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFITjtBQUtNO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFIUjtBQUtRO0VBQ0UsZUFBQTtFQUNBLFVBQUE7QUFIVjtBQU9NO0VBQ0UsV0FBQTtBQUxSIiwiZmlsZSI6InNyYy9hcHAvbWluaS1nYW1lcy9jb21wb25lbnRzL2dhbWUtZmlyc3QtbW9kYWwvZ2FtZS1maXJzdC1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maXJzdC1tb2RhbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogOTk7XG5cbiAgLm1vZGFsLXdpbmRvdyB7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcblxuICAgIC5nYW1lLWluZm8ge1xuICAgICAgLnRpdGxlIHtcbiAgICAgICAgY29sb3I6IGJyb3duO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBociB7XG4gICAgICBjb2xvcjogYnJvd247XG4gICAgfVxuXG4gICAgLmNob29zZS1kaWZmaWN1bHR5LWxldmVsIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG4gICAgICBidXR0b24ge1xuICAgICAgICBib3JkZXItY29sb3I6IGJyb3duO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG5cbiAgICAgICAgJjpub3QoLmxlYXJuZWQtd29yZHMpIHtcbiAgICAgICAgICBtaW4td2lkdGg6IDUwcHg7XG4gICAgICAgICAgd2lkdGg6IDE1JTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAubGVhcm5lZC13b3JkcyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameFirstModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-game-first-modal',
                templateUrl: './game-first-modal.component.html',
                styleUrls: ['./game-first-modal.component.scss'],
            }]
    }], function () { return []; }, { passGameLevel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], info: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "GQXt":
/*!*********************************************************!*\
  !*** ./src/app/mini-games/mini-games-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: MiniGamesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniGamesRoutingModule", function() { return MiniGamesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _mini_games_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mini-games.component */ "lz1+");
/* harmony import */ var _audiocall_audio_call_audio_call_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./audiocall/audio-call/audio-call.component */ "vgQG");
/* harmony import */ var _audiocall_main_audio_call_main_audio_call_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./audiocall/main-audio-call/main-audio-call.component */ "HLlW");
/* harmony import */ var _savanna_savanna_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./savanna/savanna.component */ "ZLZz");
/* harmony import */ var _type_me_type_me_type_me_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./type-me/type-me/type-me.component */ "J1IJ");
/* harmony import */ var _type_me_main_type_me_main_type_me_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./type-me/main-type-me/main-type-me.component */ "I1MN");










const routes = [
    { path: 'savanna', component: _savanna_savanna_component__WEBPACK_IMPORTED_MODULE_5__["SavannaComponent"] },
    { path: 'audio-call', component: _audiocall_main_audio_call_main_audio_call_component__WEBPACK_IMPORTED_MODULE_4__["MainAudioCallComponent"] },
    { path: 'audio-call/:group', component: _audiocall_audio_call_audio_call_component__WEBPACK_IMPORTED_MODULE_3__["AudioCallComponent"] },
    { path: 'audio-call/:group/:page', component: _audiocall_audio_call_audio_call_component__WEBPACK_IMPORTED_MODULE_3__["AudioCallComponent"] },
    { path: 'type-me', component: _type_me_main_type_me_main_type_me_component__WEBPACK_IMPORTED_MODULE_7__["MainTypeMeComponent"] },
    { path: 'type-me/:group', component: _type_me_type_me_type_me_component__WEBPACK_IMPORTED_MODULE_6__["TypeMeComponent"] },
    { path: 'type-me/:group/:page', component: _type_me_type_me_type_me_component__WEBPACK_IMPORTED_MODULE_6__["TypeMeComponent"] },
    { path: '', component: _mini_games_component__WEBPACK_IMPORTED_MODULE_2__["MiniGamesComponent"] },
];
class MiniGamesRoutingModule {
}
MiniGamesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MiniGamesRoutingModule });
MiniGamesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MiniGamesRoutingModule_Factory(t) { return new (t || MiniGamesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MiniGamesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MiniGamesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "HLlW":
/*!***********************************************************************************!*\
  !*** ./src/app/mini-games/audiocall/main-audio-call/main-audio-call.component.ts ***!
  \***********************************************************************************/
/*! exports provided: MainAudioCallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainAudioCallComponent", function() { return MainAudioCallComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/header/header.component */ "aZ8m");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







const _c0 = function (a2) { return ["/mini-games", "audio-call", a2]; };
function MainAudioCallComponent_mat_card_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0412\u044B\u0431\u0440\u0430\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../assets/icons/level_", group_r1, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "\u0423\u0440\u043E\u0432\u0435\u043D\u044C ", group_r1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, group_r1));
} }
class MainAudioCallComponent {
    constructor() {
        this.groupsAmount = [1, 2, 3, 4, 5, 6];
    }
    ngOnInit() { }
}
MainAudioCallComponent.ɵfac = function MainAudioCallComponent_Factory(t) { return new (t || MainAudioCallComponent)(); };
MainAudioCallComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainAudioCallComponent, selectors: [["app-main-audio-call"]], decls: 4, vars: 1, consts: [[1, "mini-games"], [1, "game-cards"], [4, "ngFor", "ngForOf"], ["mat-card-image", "", 3, "src", "alt"], ["mat-button", "", 3, "routerLink"]], template: function MainAudioCallComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MainAudioCallComponent_mat_card_3_Template, 5, 5, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.groupsAmount);
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], styles: [".mini-games[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: linear-gradient(to left, #8fd7fd, #8ffde4);\n}\n.mini-games[_ngcontent-%COMP%]   .game-cards[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.mini-games[_ngcontent-%COMP%]   .game-cards[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  max-width: 20rem;\n  margin: 1rem;\n  display: flex;\n  flex-direction: column;\n  align-self: center;\n  border-radius: 1rem;\n}\n.mini-games[_ngcontent-%COMP%]   .game-cards[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  align-self: center;\n}\n.mini-games[_ngcontent-%COMP%]   .game-cards[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 10rem;\n}\n.mini-games[_ngcontent-%COMP%]   .game-cards[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.mini-games[_ngcontent-%COMP%]   .game-cards[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]:hover {\n  box-shadow: rgba(0, 0, 0, 0.52) 0px 8px 24px;\n}\n@media screen and (max-height: 590px) {\n  .mini-games[_ngcontent-%COMP%] {\n    height: auto;\n  }\n\n  .game-cards[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .game-cards[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n    max-width: 10rem;\n  }\n}\n@media screen and (max-width: 1280px) {\n  .mini-games[_ngcontent-%COMP%] {\n    height: auto;\n  }\n}\n@media screen and (max-width: 920px) {\n  .game-cards[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .game-cards[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n    max-width: 10rem;\n  }\n}\n@media screen and (max-width: 800px) {\n  .game-cards[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n    max-width: 10rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWluaS1nYW1lcy9hdWRpb2NhbGwvbWFpbi1hdWRpby1jYWxsL21haW4tYXVkaW8tY2FsbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNEQUFBO0FBQ0Y7QUFDRTtFQUVFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFBSjtBQUVJO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUFOO0FBRU07RUFDRSxrQkFBQTtBQUFSO0FBR007RUFDRSxpQkFBQTtBQURSO0FBSU07RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFGUjtBQU1JO0VBQ0UsNENBQUE7QUFKTjtBQVNBO0VBQ0U7SUFDRSxZQUFBO0VBTkY7O0VBUUE7SUFDRSxlQUFBO0VBTEY7RUFPRTtJQUNFLGdCQUFBO0VBTEo7QUFDRjtBQVNBO0VBQ0U7SUFDRSxZQUFBO0VBUEY7QUFDRjtBQVVBO0VBQ0U7SUFDRSxlQUFBO0VBUkY7RUFVRTtJQUNFLGdCQUFBO0VBUko7QUFDRjtBQVlBO0VBT0k7SUFDRSxnQkFBQTtFQWhCSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWluaS1nYW1lcy9hdWRpb2NhbGwvbWFpbi1hdWRpby1jYWxsL21haW4tYXVkaW8tY2FsbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5taW5pLWdhbWVzIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjOGZkN2ZkLCAjOGZmZGU0KTtcblxuICAuZ2FtZS1jYXJkcyB7XG4gICAgLy9tYXgtd2lkdGg6IDUwcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgbWF0LWNhcmQge1xuICAgICAgbWF4LXdpZHRoOiAyMHJlbTtcbiAgICAgIG1hcmdpbjogMXJlbTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcblxuICAgICAgJi1oZWFkZXIge1xuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIGltZyB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDEwcmVtO1xuICAgICAgfVxuXG4gICAgICAmLWFjdGlvbnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtYXQtY2FyZDpob3ZlciB7XG4gICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNTIpIDBweCA4cHggMjRweDtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDU5MHB4KSB7XG4gIC5taW5pLWdhbWVzIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgLmdhbWUtY2FyZHMge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgIG1hdC1jYXJkIHtcbiAgICAgIG1heC13aWR0aDogMTByZW07XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xuICAubWluaS1nYW1lcyB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkyMHB4KSB7XG4gIC5nYW1lLWNhcmRzIHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICBtYXQtY2FyZCB7XG4gICAgICBtYXgtd2lkdGg6IDEwcmVtO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAubWluaS1nYW1lcyB7XG4gICAgLy9oZWlnaHQ6IHVuc2V0O1xuICAgIC8vbWluLWhlaWdodDogODQlO1xuICAgIC8vIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLmdhbWUtY2FyZHMge1xuICAgIG1hdC1jYXJkIHtcbiAgICAgIG1heC13aWR0aDogMTByZW07XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainAudioCallComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-audio-call',
                templateUrl: './main-audio-call.component.html',
                styleUrls: ['./main-audio-call.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "I1MN":
/*!***************************************************************************!*\
  !*** ./src/app/mini-games/type-me/main-type-me/main-type-me.component.ts ***!
  \***************************************************************************/
/*! exports provided: MainTypeMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainTypeMeComponent", function() { return MainTypeMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/header/header.component */ "aZ8m");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







const _c0 = function (a2) { return ["/mini-games", "type-me", a2]; };
function MainTypeMeComponent_mat_card_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0412\u044B\u0431\u0440\u0430\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../assets/icons/level_", group_r1, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "\u0423\u0440\u043E\u0432\u0435\u043D\u044C ", group_r1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, group_r1));
} }
class MainTypeMeComponent {
    constructor() {
        this.groupsAmount = [1, 2, 3, 4, 5, 6];
    }
    ngOnInit() { }
}
MainTypeMeComponent.ɵfac = function MainTypeMeComponent_Factory(t) { return new (t || MainTypeMeComponent)(); };
MainTypeMeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainTypeMeComponent, selectors: [["app-main-type-me"]], decls: 4, vars: 1, consts: [[1, "mini-games"], [1, "game-cards"], [4, "ngFor", "ngForOf"], ["mat-card-image", "", 3, "src", "alt"], ["mat-button", "", 3, "routerLink"]], template: function MainTypeMeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MainTypeMeComponent_mat_card_3_Template, 5, 5, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.groupsAmount);
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], styles: [".mini-games[_ngcontent-%COMP%] {\n  height: 84%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: linear-gradient(to left, #0f46e4, #0fa5e4);\n}\n.mini-games[_ngcontent-%COMP%]   .game-cards[_ngcontent-%COMP%] {\n  max-width: 50rem;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.mini-games[_ngcontent-%COMP%]   .game-cards[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  max-width: 20rem;\n  margin: 1rem;\n  display: flex;\n  flex-direction: column;\n  align-self: center;\n  border-radius: 1rem;\n}\n.mini-games[_ngcontent-%COMP%]   .game-cards[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  align-self: center;\n}\n.mini-games[_ngcontent-%COMP%]   .game-cards[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 10rem;\n}\n.mini-games[_ngcontent-%COMP%]   .game-cards[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.mini-games[_ngcontent-%COMP%]   .game-cards[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]:hover {\n  box-shadow: rgba(0, 0, 0, 0.52) 0 8px 24px;\n}\n@media screen and (max-width: 800px) {\n  .mini-games[_ngcontent-%COMP%] {\n    height: unset;\n    min-height: 84%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWluaS1nYW1lcy90eXBlLW1lL21haW4tdHlwZS1tZS9tYWluLXR5cGUtbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzREFBQTtBQUNGO0FBQ0U7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFDSjtBQUNJO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUNOO0FBQ007RUFDRSxrQkFBQTtBQUNSO0FBRU07RUFDRSxpQkFBQTtBQUFSO0FBR007RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFEUjtBQUlJO0VBQ0UsMENBQUE7QUFGTjtBQU9BO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsZUFBQTtFQUpGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9taW5pLWdhbWVzL3R5cGUtbWUvbWFpbi10eXBlLW1lL21haW4tdHlwZS1tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5taW5pLWdhbWVzIHtcbiAgaGVpZ2h0OiA4NCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzBmNDZlNCwgIzBmYTVlNCk7XG5cbiAgLmdhbWUtY2FyZHMge1xuICAgIG1heC13aWR0aDogNTByZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICBtYXQtY2FyZCB7XG4gICAgICBtYXgtd2lkdGg6IDIwcmVtO1xuICAgICAgbWFyZ2luOiAxcmVtO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuXG4gICAgICAmLWhlYWRlciB7XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgaW1nIHtcbiAgICAgICAgbWF4LWhlaWdodDogMTByZW07XG4gICAgICB9XG5cbiAgICAgICYtYWN0aW9ucyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgfVxuICAgIH1cbiAgICBtYXQtY2FyZDpob3ZlciB7XG4gICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNTIpIDAgOHB4IDI0cHg7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5taW5pLWdhbWVzIHtcbiAgICBoZWlnaHQ6IHVuc2V0O1xuICAgIG1pbi1oZWlnaHQ6IDg0JTtcbiAgICAvLyBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainTypeMeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-type-me',
                templateUrl: './main-type-me.component.html',
                styleUrls: ['./main-type-me.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "J1IJ":
/*!*****************************************************************!*\
  !*** ./src/app/mini-games/type-me/type-me/type-me.component.ts ***!
  \*****************************************************************/
/*! exports provided: TypeMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeMeComponent", function() { return TypeMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services */ "ZF+8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_services_common_functions_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/common-functions.service */ "6ps1");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/header/header.component */ "aZ8m");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _item_type_me_item_type_me_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../item-type-me/item-type-me.component */ "LpUT");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");












function TypeMeComponent_div_1_mat_tab_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-item-type-me", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("answer", function TypeMeComponent_div_1_mat_tab_2_Template_app_item_type_me_answer_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.getAnswer($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const word_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("label", i_r6 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("word", word_r5);
} }
function TypeMeComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab-group", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TypeMeComponent_div_1_mat_tab_2_Template, 3, 2, "mat-tab", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.words);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: ", ctx_r0.resultCounter, " / ", ctx_r0.MAX_WORDS_COUNT, "");
} }
function TypeMeComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TypeMeComponent_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.sendDate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TypeMeComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\u0421\u043B\u043E\u0432\u0430 \u043D\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043B\u0438\u0441\u044C");
} }
class TypeMeComponent {
    constructor(apiService, route, commonFunctions) {
        this.apiService = apiService;
        this.route = route;
        this.commonFunctions = commonFunctions;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"]();
        this.answersForStatistic = [];
        this.MAX_WORDS_COUNT = 7;
        this.answersCounter = 0;
        this.resultCounter = 0;
    }
    ngOnInit() {
        this.loadDataFromRoute();
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    loadDataFromRoute() {
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe((params) => {
            this.groupFromUrl = +params.get('group');
            this.pageFromUrl = +params.get('page');
            if (this.groupFromUrl && this.pageFromUrl) {
                this.getWords(this.groupFromUrl - 1, this.groupFromUrl - 1);
            }
            else if (this.groupFromUrl) {
                const pageNumber = Math.floor(Math.random() * 30) - 1;
                this.getWords(this.groupFromUrl - 1, pageNumber);
            }
            else {
                this.getWords(1, 1);
            }
        });
    }
    getWords(group, page) {
        this.apiService
            .getWords(group, page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$))
            .subscribe((words) => {
            this.words = this.commonFunctions.getRandomWords(words, this.MAX_WORDS_COUNT);
        }, (error) => console.error(error));
    }
    getAnswer(isTrue) {
        ++this.answersCounter;
        this.resultCounter += isTrue;
        if (isTrue) {
            this.answersForStatistic.push('true');
        }
        else {
            this.answersForStatistic.push('false');
        }
    }
    sendDate() {
        this.sendStatistic();
        this.sendWordsForStudying();
    }
    sendStatistic() {
        let arrIds = [];
        this.words.map((word) => arrIds.push(word.id));
        this.apiService.updateUserStatisticsByGame('ownGame', arrIds, this.answersForStatistic);
    }
    sendWordsForStudying() {
        const body = {
            difficulty: 'normal',
            optional: {
                learned: true,
            },
        };
        this.words.map((word) => this.apiService.createUserWordByWordId(word.id, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe());
    }
}
TypeMeComponent.ɵfac = function TypeMeComponent_Factory(t) { return new (t || TypeMeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_common_functions_service__WEBPACK_IMPORTED_MODULE_5__["CommonFunctionsService"])); };
TypeMeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TypeMeComponent, selectors: [["app-type-me"]], decls: 5, vars: 3, consts: [[4, "ngIf", "ngIfElse"], ["mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["loading", ""], ["dynamicHeight", "", "backgroundColor", "primary"], [3, "label", 4, "ngFor", "ngForOf"], [3, "label"], [1, "example-large-box", "mat-elevation-z4"], [3, "word", "answer"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function TypeMeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TypeMeComponent_div_1_Template, 6, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TypeMeComponent_button_2_Template, 2, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TypeMeComponent_ng_template_3_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.words)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.answersCounter === ctx.MAX_WORDS_COUNT);
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTab"], _item_type_me_item_type_me_component__WEBPACK_IMPORTED_MODULE_9__["ItemTypeMeComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"]], styles: [".example-small-box[_ngcontent-%COMP%], .example-large-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 16px;\n  padding: 16px;\n  border-radius: 8px;\n}\n\n.example-large-box[_ngcontent-%COMP%] {\n  height: 500px;\n  width: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWluaS1nYW1lcy90eXBlLW1lL3R5cGUtbWUvdHlwZS1tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9taW5pLWdhbWVzL3R5cGUtbWUvdHlwZS1tZS90eXBlLW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtc21hbGwtYm94LFxuLmV4YW1wbGUtbGFyZ2UtYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMTZweDtcbiAgcGFkZGluZzogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4uZXhhbXBsZS1sYXJnZS1ib3gge1xuICBoZWlnaHQ6IDUwMHB4O1xuICB3aWR0aDogNDAwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TypeMeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-type-me',
                templateUrl: './type-me.component.html',
                styleUrls: ['./type-me.component.scss'],
            }]
    }], function () { return [{ type: _shared_services__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _shared_services_common_functions_service__WEBPACK_IMPORTED_MODULE_5__["CommonFunctionsService"] }]; }, null); })();


/***/ }),

/***/ "LpUT":
/*!***************************************************************************!*\
  !*** ./src/app/mini-games/type-me/item-type-me/item-type-me.component.ts ***!
  \***************************************************************************/
/*! exports provided: ItemTypeMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemTypeMeComponent", function() { return ItemTypeMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_common_functions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/common-functions.service */ "6ps1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");










class ItemTypeMeComponent {
    constructor(commonFunctions) {
        this.commonFunctions = commonFunctions;
        this.url = 'https://dispet.github.io/rslang-data/';
        this.isAnswerButtonDisable = false;
        this.correctAnswer = '';
        this.answer = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    playAudio(url) {
        this.commonFunctions.playAudio(url);
    }
    sendResult(answer) {
        this.isCorrect = answer.toLowerCase().trim() === this.word.word ? 1 : 0;
        this.isAnswerButtonDisable = true;
        this.correctAnswer = this.word.word;
        this.answer.emit(this.isCorrect);
    }
}
ItemTypeMeComponent.ɵfac = function ItemTypeMeComponent_Factory(t) { return new (t || ItemTypeMeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_common_functions_service__WEBPACK_IMPORTED_MODULE_1__["CommonFunctionsService"])); };
ItemTypeMeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemTypeMeComponent, selectors: [["app-item-type-me"]], inputs: { word: "word" }, outputs: { answer: "answer" }, decls: 22, vars: 7, consts: [[3, "src", "alt"], ["mat-icon-button", "", 3, "click"], ["mat-list-icon", ""], [3, "ngClass"], [3, "innerHTML"], [1, "example-form"], [1, "example-full-width"], ["matInput", "", "id", "answer", "name", "answer"], ["answer", ""], ["align", "start"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"]], template: function ItemTypeMeComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemTypeMeComponent_Template_button_click_2_listener() { return ctx.playAudio(ctx.word.audio); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "volume_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u041D\u0430\u043F\u0438\u0441\u0430\u043D\u0438\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-hint", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0441\u043B\u043E\u0432\u043E \u043F\u043E-\u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemTypeMeComponent_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16); return ctx.sendResult(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx.url, "/", ctx.word.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.word.word);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isCorrect === 1 ? "green" : "red");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.correctAnswer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.word.wordTranslate, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isAnswerButtonDisable);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListIconCssMatStyler"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatHint"]], styles: ["button[_ngcontent-%COMP%] {\n  margin: 1rem;\n}\n\n.red[_ngcontent-%COMP%] {\n  color: #e30303;\n}\n\n.green[_ngcontent-%COMP%] {\n  color: #04bb00;\n}\n\n.example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWluaS1nYW1lcy90eXBlLW1lL2l0ZW0tdHlwZS1tZS9pdGVtLXR5cGUtbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUVGOztBQUNBO0VBQ0UsV0FBQTtBQUVGIiwiZmlsZSI6InNyYy9hcHAvbWluaS1nYW1lcy90eXBlLW1lL2l0ZW0tdHlwZS1tZS9pdGVtLXR5cGUtbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xuICBtYXJnaW46IDFyZW07XG59XG5cbi5yZWQge1xuICBjb2xvcjogI2UzMDMwMztcbn1cblxuLmdyZWVuIHtcbiAgY29sb3I6ICMwNGJiMDA7XG59XG4uZXhhbXBsZS1mb3JtIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemTypeMeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-item-type-me',
                templateUrl: './item-type-me.component.html',
                styleUrls: ['./item-type-me.component.scss'],
            }]
    }], function () { return [{ type: _shared_services_common_functions_service__WEBPACK_IMPORTED_MODULE_1__["CommonFunctionsService"] }]; }, { word: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], answer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "ZLZz":
/*!*********************************************************!*\
  !*** ./src/app/mini-games/savanna/savanna.component.ts ***!
  \*********************************************************/
/*! exports provided: SavannaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavannaComponent", function() { return SavannaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _animations_savanna_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../animations/savanna-animations */ "uEwK");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared */ "M0ag");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_game_first_modal_game_first_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/game-first-modal/game-first-modal.component */ "FISY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _savanna_child_savanna_child_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./savanna-child/savanna-child.component */ "6UaQ");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");









function SavannaComponent_app_game_first_modal_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-game-first-modal", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("passGameLevel", function SavannaComponent_app_game_first_modal_1_Template_app_game_first_modal_passGameLevel_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.beginTheGame($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("info", ctx_r0.gameInfo);
} }
function SavannaComponent_app_game_results_modal_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-results-modal", 5);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r1.game);
} }
function SavannaComponent_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "favorite");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@flyTopDown", "top");
} }
function SavannaComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SavannaComponent_div_3_div_2_Template, 4, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-savanna-child", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("isGameEnd", function SavannaComponent_div_3_Template_app_savanna_child_isGameEnd_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.endGame($event); })("passAnswer", function SavannaComponent_div_3_Template_app_savanna_child_passAnswer_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.recieveAnswer($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const words_r5 = ctx.ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r2.savannaWrapperHeight);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.heartsCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("heartsCount", ctx_r2.heartsCount.length)("words", words_r5);
} }
class SavannaComponent {
    constructor(apiService) {
        this.apiService = apiService;
        this.displayFirstModal = true;
        this.displayResultsModal = false;
        this.isGameOver = false;
        this.heartsCount = Array(5).fill('h');
        this.game = {
            correctAnswers: [],
            incorrectAnswers: [],
            correctAnswersTranslate: [],
            incorrectAnswersTranslate: [],
            correctAnswerAudios: [],
            incorrectAnswerAudios: [],
        };
        this.savannaWrapperHeight = { height: '100%' };
        this.bgpY = '100%';
        this.backgroundPositionY = { 'background-position-y': this.bgpY };
        this.gameInfo = {
            name: 'Саванна',
            info: 'Вы можете выбрать ответ с помощью цифр 1, 2, 3 или 4 на клавиатуре или с помощью мыши.',
        };
    }
    beginTheGame(level) {
        this.getChoosenGroupWords(level);
        this.displayFirstModal = false;
    }
    recieveAnswer(answerObject) {
        if (answerObject.isCorrect === false) {
            this.decreaseHeart();
            this.game.incorrectAnswers.push(answerObject.answer.answer);
            this.game.incorrectAnswersTranslate.push(answerObject.answer.answerTranslate);
            this.game.incorrectAnswerAudios.push(answerObject.audio);
        }
        else {
            this.game.correctAnswers.push(answerObject.answer.answer);
            this.game.correctAnswersTranslate.push(answerObject.answer.answerTranslate);
            this.game.correctAnswerAudios.push(answerObject.audio);
        }
        this.bgpY = `${+this.bgpY.replace(/\%/g, '') - 5}%`;
        this.backgroundPositionY = { 'background-position-y': this.bgpY };
    }
    closeResultsModal() {
        this.savannaWrapperHeight = { height: '100%' };
        this.displayFirstModal = false;
    }
    endGame() {
        this.isGameOver = true;
        this.openResultsModal();
    }
    getChoosenGroupWords(level) {
        const randomPage = Math.floor(Math.random() * 20);
        this.words$ = this.apiService.getWords(level, randomPage);
    }
    openResultsModal() {
        this.displayResultsModal = true;
        this.savannaWrapperHeight = { height: '0%' };
    }
    decreaseHeart() {
        this.heartsCount.pop();
        if (this.heartsCount.length === 0) {
            this.endGame();
        }
    }
}
SavannaComponent.ɵfac = function SavannaComponent_Factory(t) { return new (t || SavannaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
SavannaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SavannaComponent, selectors: [["app-savanna"]], decls: 5, vars: 6, consts: [[1, "savanna-game", 3, "ngStyle"], [3, "info", "passGameLevel", 4, "ngIf"], [3, "data", 4, "ngIf"], ["class", "savanna-wrapper", 3, "ngStyle", 4, "ngIf"], [3, "info", "passGameLevel"], [3, "data"], [1, "savanna-wrapper", 3, "ngStyle"], [1, "control"], ["class", "hearts", 4, "ngFor", "ngForOf"], [1, "exit"], ["routerLink", "../../mini-games"], [3, "heartsCount", "words", "isGameEnd", "passAnswer"], [1, "hearts"], [1, "heart"]], template: function SavannaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SavannaComponent_app_game_first_modal_1_Template, 1, 1, "app-game-first-modal", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SavannaComponent_app_game_results_modal_2_Template, 1, 1, "app-game-results-modal", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SavannaComponent_div_3_Template, 8, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.backgroundPositionY);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayFirstModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayResultsModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isGameOver && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx.words$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _components_game_first_modal_game_first_modal_component__WEBPACK_IMPORTED_MODULE_4__["GameFirstModalComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _savanna_child_savanna_child_component__WEBPACK_IMPORTED_MODULE_6__["SavannaChildComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: [".savanna-game[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: url('savanna.jpg');\n}\n.savanna-game[_ngcontent-%COMP%]   .savanna-wrapper[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.5);\n  position: relative;\n}\n.savanna-game[_ngcontent-%COMP%]   .savanna-wrapper[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  padding: 10px;\n}\n.savanna-game[_ngcontent-%COMP%]   .savanna-wrapper[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   .hearts[_ngcontent-%COMP%] {\n  display: flex;\n}\n.savanna-game[_ngcontent-%COMP%]   .savanna-wrapper[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   .hearts[_ngcontent-%COMP%]   .heart[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n.savanna-game[_ngcontent-%COMP%]   .savanna-wrapper[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   .exit[_ngcontent-%COMP%] {\n  margin: 10px 20px;\n}\n.savanna-game[_ngcontent-%COMP%]   .savanna-wrapper[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   .exit[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: none;\n  font-size: 20px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWluaS1nYW1lcy9zYXZhbm5hL3NhdmFubmEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0FBQ0Y7QUFDRTtFQUNFLG9DQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUNJO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQUNOO0FBQ007RUFDRSxhQUFBO0FBQ1I7QUFBUTtFQUNFLFlBQUE7QUFFVjtBQU1NO0VBQ0UsaUJBQUE7QUFKUjtBQU1RO0VBQ0UsNkJBQUE7RUFDQSxZQUFBO0VBRUUsZUFBQTtFQUNBLGlCQUFBO0FBTFoiLCJmaWxlIjoic3JjL2FwcC9taW5pLWdhbWVzL3NhdmFubmEvc2F2YW5uYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zYXZhbm5hLWdhbWUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvc2F2YW5uYS1nYW1lL3NhdmFubmEuanBnXCIpO1xuXG4gIC5zYXZhbm5hLXdyYXBwZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAuY29udHJvbCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICAgIC5oZWFydHMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAuaGVhcnQge1xuICAgICAgICAgIG1hcmdpbjogMTBweDtcblxuICAgICAgICAgIC8vbWF0LWljb24ge1xuICAgICAgICAgIC8vICBjb2xvcjogcmVkO1xuICAgICAgICAgIC8vfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5leGl0IHtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDIwcHg7XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgZm9udDoge1xuICAgICAgICAgICAgc2l6ZTogMjBweDtcbiAgICAgICAgICAgIHdlaWdodDogYm9sZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvL2Ege1xuICAgICAgICAgIC8vICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgLy99XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"], data: { animation: [_animations_savanna_animations__WEBPACK_IMPORTED_MODULE_1__["flyTopDown"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SavannaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-savanna',
                templateUrl: './savanna.component.html',
                styleUrls: ['./savanna.component.scss'],
                animations: [_animations_savanna_animations__WEBPACK_IMPORTED_MODULE_1__["flyTopDown"]],
            }]
    }], function () { return [{ type: src_app_shared__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "hKzj":
/*!***********************************************************************************!*\
  !*** ./src/app/mini-games/audiocall/item-audio-call/item-audio-call.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ItemAudioCallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemAudioCallComponent", function() { return ItemAudioCallComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_common_functions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/common-functions.service */ "6ps1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function ItemAudioCallComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemAudioCallComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const variant_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.sendResult(variant_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const variant_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.isAnswerButtonDisable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", variant_r1, " ");
} }
class ItemAudioCallComponent {
    constructor(commonFunctions) {
        this.commonFunctions = commonFunctions;
        this.isAnswerButtonDisable = false;
        this.correctAnswer = '';
        this.answer = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    playAudio(url) {
        this.commonFunctions.playAudio(url);
    }
    sendResult(answer) {
        this.isCorrect = answer === this.word.wordTranslate ? 1 : 0;
        this.isAnswerButtonDisable = true;
        this.correctAnswer = this.word.wordTranslate;
        this.answer.emit(this.isCorrect);
    }
}
ItemAudioCallComponent.ɵfac = function ItemAudioCallComponent_Factory(t) { return new (t || ItemAudioCallComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_common_functions_service__WEBPACK_IMPORTED_MODULE_1__["CommonFunctionsService"])); };
ItemAudioCallComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemAudioCallComponent, selectors: [["app-item-audio-call"]], inputs: { getVariantsRu: "getVariantsRu", word: "word" }, outputs: { answer: "answer" }, decls: 8, vars: 3, consts: [["mat-icon-button", "", 3, "click"], ["mat-list-icon", ""], [3, "ngClass"], ["mat-raised-button", "", "color", "basic", 3, "disabled", "click", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "basic", 3, "disabled", "click"]], template: function ItemAudioCallComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemAudioCallComponent_Template_button_click_1_listener() { return ctx.playAudio(ctx.word.audio); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "volume_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ItemAudioCallComponent_button_7_Template, 2, 2, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isCorrect === 1 ? "green" : "red");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.correctAnswer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getVariantsRu);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListIconCssMatStyler"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["button[_ngcontent-%COMP%] {\n  margin: 1rem;\n}\n\n.red[_ngcontent-%COMP%] {\n  color: #e30303;\n}\n\n.green[_ngcontent-%COMP%] {\n  color: #04bb00;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWluaS1nYW1lcy9hdWRpb2NhbGwvaXRlbS1hdWRpby1jYWxsL2l0ZW0tYXVkaW8tY2FsbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21pbmktZ2FtZXMvYXVkaW9jYWxsL2l0ZW0tYXVkaW8tY2FsbC9pdGVtLWF1ZGlvLWNhbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xuICBtYXJnaW46IDFyZW07XG59XG5cbi5yZWQge1xuICBjb2xvcjogI2UzMDMwMztcbn1cblxuLmdyZWVuIHtcbiAgY29sb3I6ICMwNGJiMDA7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemAudioCallComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-item-audio-call',
                templateUrl: './item-audio-call.component.html',
                styleUrls: ['./item-audio-call.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _shared_services_common_functions_service__WEBPACK_IMPORTED_MODULE_1__["CommonFunctionsService"] }]; }, { getVariantsRu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], word: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], answer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "hXAj":
/*!***********************************************************!*\
  !*** ./src/app/mini-games/services/game-utils.service.ts ***!
  \***********************************************************/
/*! exports provided: GameUtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameUtilsService", function() { return GameUtilsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class GameUtilsService {
    constructor() { }
    findAudio(answerWord, words) {
        let audioSrc = words.find((word) => {
            return word.wordTranslate === answerWord;
        }).audio;
        return audioSrc;
    }
    // we use this function to shuffle options and change words position in words arrray
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    removeStyles(button) {
        // button may be undefined at the beginning of the game
        if (button) {
            button.classList.remove('correct');
            button.classList.remove('incorrect');
        }
    }
}
GameUtilsService.ɵfac = function GameUtilsService_Factory(t) { return new (t || GameUtilsService)(); };
GameUtilsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GameUtilsService, factory: GameUtilsService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameUtilsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "lz1+":
/*!****************************************************!*\
  !*** ./src/app/mini-games/mini-games.component.ts ***!
  \****************************************************/
/*! exports provided: MiniGamesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniGamesComponent", function() { return MiniGamesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/constants */ "LzQu");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/components/header/header.component */ "aZ8m");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");








function MiniGamesComponent_mat_card_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0418\u0433\u0440\u0430\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](game_r1.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../assets/icons/", game_r1.name, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", game_r1.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", game_r1.name);
} }
class MiniGamesComponent {
    constructor() {
        this.gameNames = _shared_constants__WEBPACK_IMPORTED_MODULE_1__["GAMES_NAME"];
    }
}
MiniGamesComponent.ɵfac = function MiniGamesComponent_Factory(t) { return new (t || MiniGamesComponent)(); };
MiniGamesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MiniGamesComponent, selectors: [["app-mini-games"]], decls: 5, vars: 1, consts: [[1, "mini-games"], [1, "game-cards"], [4, "ngFor", "ngForOf"], ["mat-card-image", "", 3, "src", "alt"], ["mat-button", "", 3, "routerLink"]], template: function MiniGamesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MiniGamesComponent_mat_card_3_Template, 8, 4, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.gameNames);
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: [".mini-games[_ngcontent-%COMP%] {\n  height: 94%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: linear-gradient(to left, #0575e6, #021b79);\n}\n.mini-games[_ngcontent-%COMP%]   .game-cards[_ngcontent-%COMP%] {\n  max-width: 50rem;\n  display: flex;\n  justify-content: center;\n}\n.mini-games[_ngcontent-%COMP%]   .game-cards[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  max-width: 20rem;\n  margin: 1rem;\n  display: flex;\n  flex-direction: column;\n  align-self: center;\n  border-radius: 1rem;\n}\n.mini-games[_ngcontent-%COMP%]   .game-cards[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  align-self: center;\n}\n.mini-games[_ngcontent-%COMP%]   .game-cards[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 10rem;\n}\n.mini-games[_ngcontent-%COMP%]   .game-cards[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.mini-games[_ngcontent-%COMP%]   .game-cards[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]:hover {\n  box-shadow: rgba(0, 0, 0, 0.52) 0px 8px 24px;\n}\n.mat-stepper-vertical[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n@media screen and (max-width: 800px) {\n  .mini-games[_ngcontent-%COMP%] {\n    height: unset;\n    min-height: 84%;\n  }\n\n  .game-cards[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWluaS1nYW1lcy9taW5pLWdhbWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0RBQUE7QUFDRjtBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFDSjtBQUVJO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUFOO0FBRU07RUFDRSxrQkFBQTtBQUFSO0FBR007RUFDRSxpQkFBQTtBQURSO0FBSU07RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFGUjtBQU1JO0VBQ0UsNENBQUE7QUFKTjtBQVNBO0VBQ0UsZUFBQTtBQU5GO0FBU0E7RUFDRSxnQkFBQTtBQU5GO0FBU0E7RUFDRTtJQUNFLGFBQUE7SUFDQSxlQUFBO0VBTkY7O0VBU0E7SUFDRSxlQUFBO0VBTkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21pbmktZ2FtZXMvbWluaS1nYW1lcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5taW5pLWdhbWVzIHtcbiAgaGVpZ2h0OiA5NCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzA1NzVlNiwgIzAyMWI3OSk7XG5cbiAgLmdhbWUtY2FyZHMge1xuICAgIG1heC13aWR0aDogNTByZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAvL2ZsZXgtd3JhcDogd3JhcDtcblxuICAgIG1hdC1jYXJkIHtcbiAgICAgIG1heC13aWR0aDogMjByZW07XG4gICAgICBtYXJnaW46IDFyZW07XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG5cbiAgICAgICYtaGVhZGVyIHtcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICBpbWcge1xuICAgICAgICBtYXgtaGVpZ2h0OiAxMHJlbTtcbiAgICAgIH1cblxuICAgICAgJi1hY3Rpb25zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWF0LWNhcmQ6aG92ZXIge1xuICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjUyKSAwcHggOHB4IDI0cHg7XG4gICAgfVxuICB9XG59XG5cbi5tYXQtc3RlcHBlci12ZXJ0aWNhbCB7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLm1pbmktZ2FtZXMge1xuICAgIGhlaWdodDogdW5zZXQ7XG4gICAgbWluLWhlaWdodDogODQlO1xuICAgIC8vIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLmdhbWUtY2FyZHMge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MiniGamesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mini-games',
                templateUrl: './mini-games.component.html',
                styleUrls: ['./mini-games.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "uEwK":
/*!*************************************************************!*\
  !*** ./src/app/mini-games/animations/savanna-animations.ts ***!
  \*************************************************************/
/*! exports provided: moveTargetWord, flyTopDown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveTargetWord", function() { return moveTargetWord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flyTopDown", function() { return flyTopDown; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

const moveTargetWord = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('moveTargetWord', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('top', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ top: '5%' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('bottom', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ top: '70%' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('answered', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('top => bottom', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('6000ms 500ms')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('bottom => top', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(1000)),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('answered => top', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, offset: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, offset: 0.99 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, offset: 1 })]))),
]);
const flyTopDown = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('flyTopDown', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('top', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void <=> *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ top: '-100%', fontSize: '50px', color: 'blue' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(500)]),
]);


/***/ }),

/***/ "vgQG":
/*!*************************************************************************!*\
  !*** ./src/app/mini-games/audiocall/audio-call/audio-call.component.ts ***!
  \*************************************************************************/
/*! exports provided: AudioCallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioCallComponent", function() { return AudioCallComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services */ "ZF+8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_services_common_functions_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/common-functions.service */ "6ps1");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/header/header.component */ "aZ8m");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _item_audio_call_item_audio_call_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../item-audio-call/item-audio-call.component */ "hKzj");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");












function AudioCallComponent_div_1_mat_tab_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-item-audio-call", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("answer", function AudioCallComponent_div_1_mat_tab_2_Template_app_item_audio_call_answer_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.getAnswer($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const word_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("label", i_r6 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("word", word_r5)("getVariantsRu", ctx_r4.rusVariantsSubArray[i_r6]);
} }
function AudioCallComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab-group", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AudioCallComponent_div_1_mat_tab_2_Template, 3, 3, "mat-tab", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.words);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: ", ctx_r0.resultCounter, " / ", ctx_r0.MAX_WORDS_COUNT, "");
} }
function AudioCallComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudioCallComponent_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.sendStatistic(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AudioCallComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\u0421\u043B\u043E\u0432\u0430 \u043D\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043B\u0438\u0441\u044C");
} }
class AudioCallComponent {
    constructor(apiService, route, commonFunctions) {
        this.apiService = apiService;
        this.route = route;
        this.commonFunctions = commonFunctions;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"]();
        this.MAX_VARIANTS_COUNT = 4;
        this.MAX_WORDS_COUNT = 7;
        this.answersCounter = 0;
        this.resultCounter = 0;
        this.answersForStatistic = [];
    }
    ngOnInit() {
        this.loadDataFromRoute();
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    loadDataFromRoute() {
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe((params) => {
            this.groupFromUrl = +params.get('group');
            this.pageFromUrl = +params.get('page');
            if (this.groupFromUrl && this.pageFromUrl) {
                this.getWords(this.groupFromUrl - 1, this.groupFromUrl - 1);
            }
            else if (this.groupFromUrl) {
                const pageNumber = Math.floor(Math.random() * 30) - 1;
                this.getWords(this.groupFromUrl - 1, pageNumber);
            }
            else {
                this.getWords(1, 1);
            }
        });
    }
    getWords(group, page) {
        this.apiService
            .getWords(group, page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$))
            .subscribe((words) => {
            this.words = this.commonFunctions.getRandomWords(words, this.MAX_WORDS_COUNT);
            this.rusVariantsArray = this.getAllVariantsRu(words);
            this.rusVariantsSubArray = this.getVariantsRu(this.words, this.rusVariantsArray, this.MAX_VARIANTS_COUNT);
        }, (error) => console.error(error));
    }
    getAllVariantsRu(words) {
        const collectionWords = [];
        for (let i = 0; i < words.length; i++) {
            collectionWords.push(words[i].wordTranslate);
        }
        return collectionWords;
    }
    getVariantsRu(words, allVariantsRu, variantsCount) {
        let length = allVariantsRu.length;
        let resultArr = [];
        for (let i = 0; i < words.length; i++) {
            let result = [];
            result.push(words[i].wordTranslate);
            let n = variantsCount;
            while (n - 1) {
                let x = Math.floor(Math.random() * length);
                if (!result.includes(allVariantsRu[x])) {
                    result.push(allVariantsRu[x]);
                    n--;
                }
            }
            result.sort(function () {
                return Math.random() - 0.5;
            });
            resultArr.push(result);
        }
        return resultArr;
    }
    getAnswer(isCorrect) {
        ++this.answersCounter;
        this.resultCounter += isCorrect;
        if (isCorrect) {
            this.answersForStatistic.push('true');
        }
        else {
            this.answersForStatistic.push('false');
        }
    }
    sendDate() {
        this.sendStatistic();
        this.sendWordsForStudying();
    }
    sendStatistic() {
        let arrIds = [];
        this.words.map((word) => arrIds.push(word.id));
        this.apiService.updateUserStatisticsByGame('audioCall', arrIds, this.answersForStatistic);
    }
    sendWordsForStudying() {
        const body = {
            difficulty: 'normal',
            optional: {
                learned: true,
            },
        };
        this.words.map((word) => this.apiService.createUserWordByWordId(word.id, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe());
    }
}
AudioCallComponent.ɵfac = function AudioCallComponent_Factory(t) { return new (t || AudioCallComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_common_functions_service__WEBPACK_IMPORTED_MODULE_5__["CommonFunctionsService"])); };
AudioCallComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AudioCallComponent, selectors: [["app-audio-call"]], decls: 5, vars: 3, consts: [[4, "ngIf", "ngIfElse"], ["mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["loading", ""], ["dynamicHeight", ""], [3, "label", 4, "ngFor", "ngForOf"], [3, "label"], [1, "example-large-box", "mat-elevation-z4"], [3, "word", "getVariantsRu", "answer"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function AudioCallComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AudioCallComponent_div_1_Template, 6, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AudioCallComponent_button_2_Template, 2, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AudioCallComponent_ng_template_3_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.words)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.answersCounter === ctx.MAX_WORDS_COUNT);
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTab"], _item_audio_call_item_audio_call_component__WEBPACK_IMPORTED_MODULE_9__["ItemAudioCallComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"]], styles: [".example-small-box[_ngcontent-%COMP%], .example-large-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 16px;\n  padding: 16px;\n  border-radius: 8px;\n}\n\n.example-small-box[_ngcontent-%COMP%] {\n  height: 100px;\n  width: 100px;\n}\n\n.example-large-box[_ngcontent-%COMP%] {\n  height: 300px;\n  width: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWluaS1nYW1lcy9hdWRpb2NhbGwvYXVkaW8tY2FsbC9hdWRpby1jYWxsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9taW5pLWdhbWVzL2F1ZGlvY2FsbC9hdWRpby1jYWxsL2F1ZGlvLWNhbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1zbWFsbC1ib3gsXG4uZXhhbXBsZS1sYXJnZS1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAxNnB4O1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5leGFtcGxlLXNtYWxsLWJveCB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuLmV4YW1wbGUtbGFyZ2UtYm94IHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDMwMHB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AudioCallComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-audio-call',
                templateUrl: './audio-call.component.html',
                styleUrls: ['./audio-call.component.scss'],
            }]
    }], function () { return [{ type: _shared_services__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _shared_services_common_functions_service__WEBPACK_IMPORTED_MODULE_5__["CommonFunctionsService"] }]; }, null); })();


/***/ }),

/***/ "yY33":
/*!******************************************************************************************!*\
  !*** ./src/app/mini-games/components/game-results-modal/game-results-modal.component.ts ***!
  \******************************************************************************************/
/*! exports provided: GameResultsModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameResultsModalComponent", function() { return GameResultsModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



function GameResultsModalComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "audio", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameResultsModalComponent_div_15_Template_mat_icon_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.playWordAudio(_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "volume_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://dispet.github.io/rslang-data/", ctx_r0.data.incorrectAnswerAudios[i_r3], "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.data.incorrectAnswersTranslate[i_r3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" - ", answer_r2, " ");
} }
function GameResultsModalComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "audio", 15, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameResultsModalComponent_div_18_Template_mat_icon_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.playWordAudio(_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "volume_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://dispet.github.io/rslang-data/", ctx_r1.data.correctAnswerAudios[i_r8], "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.data.correctAnswersTranslate[i_r8]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" - ", answer_r7, " ");
} }
class GameResultsModalComponent {
    constructor(router) {
        this.router = router;
        this.currentUrl = this.router.url;
        this.specificParts = '';
    }
    ngOnInit() {
        this.correct = this.data.correctAnswers.length;
        this.incorrect = this.data.incorrectAnswers.length;
        if (this.correct > 18) {
            this.feedback = 'Отличный результат, не переставайте учиться!';
        }
        else if (this.correct > 10 && this.correct < 18) {
            this.feedback = 'Хороший результат, больше работай над собой.';
        }
        else {
            this.feedback = 'Узнайте больше и попробуйте еще раз.';
        }
    }
    playWordAudio(audio) {
        audio.play();
    }
    reload() {
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate([this.currentUrl]);
        });
    }
}
GameResultsModalComponent.ɵfac = function GameResultsModalComponent_Factory(t) { return new (t || GameResultsModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
GameResultsModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameResultsModalComponent, selectors: [["app-game-results-modal"]], inputs: { data: "data" }, decls: 25, vars: 8, consts: [[1, "results-modal"], [1, "modal-window"], [1, "modal-content"], [1, "specific-parts"], [1, "feedback"], [1, "statistics"], [1, "answers"], ["class", "incorrect-answers", 4, "ngFor", "ngForOf"], ["class", "correct-answers", 4, "ngFor", "ngForOf"], [1, "action-buttons"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "primary"], ["routerLink", "../../mini-games"], [1, "incorrect-answers"], [1, "single-answer"], [3, "src"], ["incorrectAnswerAudio", ""], [2, "color", "red", 3, "click"], [1, "answer", 2, "color", "red"], [1, "correct-answers"], ["correctAnswerAudio", ""], [2, "color", "green", 3, "click"], [1, "answer", 2, "color", "green"]], template: function GameResultsModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "P\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, GameResultsModalComponent_div_15_Template, 10, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, GameResultsModalComponent_div_18_Template, 10, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameResultsModalComponent_Template_button_click_20_listener() { return ctx.reload(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u041D\u0430\u0447\u0430\u0442\u044C \u0437\u0430\u043D\u043E\u0432\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043A \u043C\u0438\u043D\u0438-\u0438\u0433\u0440\u0430\u043C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.specificParts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.feedback);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.correct, " \u0441\u043B\u043E\u0432 \u0438\u0437\u0443\u0447\u0435\u043D\u043E, ", ctx.incorrect, " \u043D\u0435 \u0438\u0437\u0443\u0447\u0435\u043D\u043E.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u041E\u0428\u0418\u0411\u041E\u041A: ", ctx.incorrect, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.incorrectAnswers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0417\u041D\u0410\u042E: ", ctx.correct, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.correctAnswers);
    } }, styles: [".results-modal[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  top: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  position: fixed;\n  z-index: 99;\n  overflow: hidden;\n}\n.results-modal[_ngcontent-%COMP%]   .modal-window[_ngcontent-%COMP%] {\n  padding: 40px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: white;\n  color: black;\n  height: 80vh;\n  font-size: 20px;\n}\n.results-modal[_ngcontent-%COMP%]   .modal-window[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 900;\n}\n.results-modal[_ngcontent-%COMP%]   .modal-window[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.results-modal[_ngcontent-%COMP%]   .modal-window[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  box-shadow: inset 3px 3px 3px 3px white;\n  border-radius: 5px;\n}\n.results-modal[_ngcontent-%COMP%]   .modal-window[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .answers[_ngcontent-%COMP%] {\n  height: 40vh;\n  overflow: auto;\n  margin: 20px 0;\n}\n.results-modal[_ngcontent-%COMP%]   .modal-window[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .answers[_ngcontent-%COMP%]   .single-answer[_ngcontent-%COMP%] {\n  display: flex;\n}\n.results-modal[_ngcontent-%COMP%]   .modal-window[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.results-modal[_ngcontent-%COMP%]   .modal-window[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWluaS1nYW1lcy9jb21wb25lbnRzL2dhbWUtcmVzdWx0cy1tb2RhbC9nYW1lLXJlc3VsdHMtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFDRTtFQVVFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQVJKO0FBVEk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFXTjtBQVJJO0VBQ0UsZ0JBQUE7QUFVTjtBQUdJO0VBQ0UsdUNBQUE7RUFDQSxrQkFBQTtBQUROO0FBR007RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFEUjtBQUdRO0VBQ0UsYUFBQTtBQURWO0FBdUJNO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBckJSO0FBdUJRO0VBQ0UsWUFBQTtBQXJCViIsImZpbGUiOiJzcmMvYXBwL21pbmktZ2FtZXMvY29tcG9uZW50cy9nYW1lLXJlc3VsdHMtbW9kYWwvZ2FtZS1yZXN1bHRzLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlc3VsdHMtbW9kYWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIC5tb2RhbC13aW5kb3cge1xuICAgIGgxIHtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgfVxuXG4gICAgaDIge1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG5cbiAgICBwYWRkaW5nOiA0MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGhlaWdodDogODB2aDtcbiAgICBmb250LXNpemU6IDIwcHg7XG5cbiAgICAubW9kYWwtY29udGVudCB7XG4gICAgICBib3gtc2hhZG93OiBpbnNldCAzcHggM3B4IDNweCAzcHggd2hpdGU7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG5cbiAgICAgIC5hbnN3ZXJzIHtcbiAgICAgICAgaGVpZ2h0OiA0MHZoO1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG5cbiAgICAgICAgLnNpbmdsZS1hbnN3ZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgICAvLy5hbnN3ZXIge1xuICAgICAgICAgIC8vICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIC8vICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgLy99XG5cbiAgICAgICAgICAvL21hdC1pY29uIHtcbiAgICAgICAgICAvLyAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgLy8gIGNvbG9yOiBnYWluc2Jvcm87XG4gICAgICAgICAgLy9cbiAgICAgICAgICAvLyAgJjpob3ZlciB7XG4gICAgICAgICAgLy8gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIC8vICB9XG4gICAgICAgICAgLy9cbiAgICAgICAgICAvLyAgJjphY3RpdmUge1xuICAgICAgICAgIC8vICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICAvLyAgfVxuICAgICAgICAgIC8vfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5hY3Rpb24tYnV0dG9ucyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIG1hcmdpbjogMTBweDtcblxuICAgICAgICAgIC8vYSB7XG4gICAgICAgICAgLy8gIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAvL31cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameResultsModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-game-results-modal',
                templateUrl: './game-results-modal.component.html',
                styleUrls: ['./game-results-modal.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=mini-games-mini-games-module.js.map