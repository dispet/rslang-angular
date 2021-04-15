import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from '../shared';

interface MiniStats {
  nameMiniGame: string;
  learnedWordsPerDay: number;
  maxSeries?: number;
  rightWords: number;
  wrongWords: number;
}

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit, OnDestroy {
  private statisticsSubscription: Subscription;
  public primaryXAxis: Object;
  public chartData: Object[];
  public titleAmount: string;
  public titleIncrease: string;
  public primaryYAxis: Object;
  public primaryZAxis: Object;
  public isStatistics = false;
  public data: MiniStats[] = [];

  constructor(private apiService: ApiService) {
    this.titleAmount = 'Количество изученных слов по дням';
    this.titleIncrease = 'Увеличение общего количества изученных слов по дням';
  }

  ngOnInit(): void {
    this.statisticsSubscription = this.apiService.getUserStatistics().subscribe(
      (res) => {
        const date = new Date(Date.now());
        const dateNum = Number(
          new Date(date.getFullYear(), date.getMonth(), date.getDate())
            .toLocaleString('ru', {
              year: '2-digit',
              month: '2-digit',
              day: '2-digit',
            })
            .split('.')
            .join(''),
        );
        const allWords = [];
        let allLearnedWordsPerDay = 0;
        let allLearnedWords = 0;
        let allLearnedWordsByIds = new Set();
        let allRightWords = 0;
        let allWrongWords = 0;
        Object.entries(res.optional).map(([key, value]) => {
          if (key && value.words) {
            allWords.push(...value.words);
            let learnedWordsPerDay = 0;
            let learnedWords = 0;
            let learnedWordsByIds = new Set();
            let rightWords = 0;
            let wrongWords = 0;
            let maxSeries = 0;
            value.words.forEach((item) => {
              if (item.timeStamp === dateNum) {
                learnedWords = learnedWordsByIds.size;
                allLearnedWords = allLearnedWordsByIds.size;
                learnedWordsByIds = new Set([...learnedWordsByIds, ...item.wordsId]);
                allLearnedWordsByIds = new Set([...allLearnedWordsByIds, ...item.wordsId]);
                const learnedWordsInTraining = learnedWordsByIds.size - learnedWords;
                const allLearnedWordsInTraining = allLearnedWordsByIds.size - allLearnedWords;
                learnedWordsPerDay = (learnedWordsPerDay || 0) + learnedWordsInTraining;
                allLearnedWordsPerDay = (allLearnedWordsPerDay || 0) + allLearnedWordsInTraining;
                let series = 0;
                item.answers.forEach((ans) => {
                  if (ans === 'true') {
                    series += 1;
                    rightWords += 1;
                    allRightWords += 1;
                  } else {
                    maxSeries = maxSeries > series ? maxSeries : series;
                    series = 0;
                    wrongWords += 1;
                    allWrongWords += 1;
                  }
                });
              }
            });

            this.data.push({
              nameMiniGame: key,
              learnedWordsPerDay: learnedWordsPerDay,
              maxSeries: maxSeries,
              rightWords: rightWords,
              wrongWords: wrongWords,
            });
          }
        });

        this.data.push({
          nameMiniGame: 'Общая',
          learnedWordsPerDay: allLearnedWordsPerDay,
          rightWords: allRightWords,
          wrongWords: allWrongWords,
        });

        const learnedWordsPerDay: { [key: string]: number } = {};
        let learnedWords = 0;
        let learnedWordsByIds = new Set();
        allWords.forEach((item) => {
          learnedWords = learnedWordsByIds.size;
          learnedWordsByIds = new Set([...learnedWordsByIds, ...item.wordsId]);
          const learnedWordsInTraining = learnedWordsByIds.size - learnedWords;

          learnedWordsPerDay[item.timeStamp] = (learnedWordsPerDay[item.timeStamp] || 0) + learnedWordsInTraining;
        });

        const dates = Object.keys(learnedWordsPerDay);
        const amountWords = Object.values(learnedWordsPerDay);
        const calculationSum = ((sum: number) => {
          return (value: number) => {
            return (sum += value);
          };
        })(0);
        const increaseWords = amountWords.map(calculationSum);

        this.chartData = [];
        dates.forEach((item, index) =>
          this.chartData.push({
            x: item,
            y: amountWords[index],
            z: increaseWords[index],
          }),
        );

        this.primaryXAxis = {
          interval: 10000,
          title: 'Дата',
        };
        this.primaryYAxis = {
          minimum: 0,
          maximum: Math.max(...amountWords) + 5,
          interval: Math.trunc((Math.max(...amountWords) + 5) / 10),
          title: 'Количество слов',
        };
        this.primaryZAxis = {
          minimum: 0,
          maximum: increaseWords[increaseWords.length - 1] + 10,
          interval: Math.trunc((increaseWords[increaseWords.length - 1] + 10) / 10),
          title: 'Количество слов',
        };
        this.isStatistics = true;
      },
      (error) => {
        this.isStatistics = false;
        console.log(error);
      },
    );
  }

  ngOnDestroy() {
    this.statisticsSubscription.unsubscribe();
  }
}
