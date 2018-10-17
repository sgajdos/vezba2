import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';


import { QuizItem } from '../model/quiz-item.model';

@Component({
  selector: 'app-quiz-item',
  templateUrl: './quiz-item.component.html',
  styleUrls: ['./quiz-item.component.css']
})
export class QuizItemComponent implements OnInit, OnChanges {
  @Input() quizItemData: QuizItem;

  buttonTitle = 'Prikaži';

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(`ngOnChanges - data = ${this.quizItemData}`);
    for (let key in changes) {
      console.log(`${key} - is changed`);
      console.log('Current: - ' + changes[key].currentValue);
      console.log('Previos: - ' + changes[key].previousValue);
      changes[key].currentValue.buttonTitle
    }
  }

  klik() {
    console.log('klik item');
  }

  toggleHideAnswer() {
    if (this.quizItemData.hideAnswer) {
      this.buttonTitle = 'Sakrij';
    } else {
      this.buttonTitle = 'Prikaži';
    }
    this.quizItemData.hideAnswer = !this.quizItemData.hideAnswer;
  }

}



