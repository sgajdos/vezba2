import { Component, OnInit, ViewChild, ViewChildren, AfterViewInit, QueryList } from '@angular/core';
import { QuizItem } from '../model/quiz-item.model';
import { QuizItemComponent } from '../quiz-item/quiz-item.component';


@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit, AfterViewInit {
  quizItems: QuizItem[];

  @ViewChildren(QuizItemComponent) quizItemViewChildren: QueryList<QuizItemComponent>;

  constructor() {
    this.quizItems = [
      new QuizItem('First question', 'First answer', false),
      new QuizItem('Second question', 'Second answer', true),
      new QuizItem('Third question', 'Third answer', true),
      new QuizItem('Fourth question', 'Fourth answer', false),
    ];

   }

  ngOnInit() {
  }

  ngAfterViewInit() {
    let quizItemFromView: QuizItemComponent[] = this.quizItemViewChildren.toArray();
    for (let qItem of quizItemFromView) {
      console.log(qItem.quizItemData.question);
    }
  }

  addQuizItem(quizItem) {
    this.quizItems.unshift(quizItem);
  }

  klik() {
    console.log('klik list');
  }



}
