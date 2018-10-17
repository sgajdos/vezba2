import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { QuizItem } from '../model/quiz-item.model';

@Component({
  selector: 'app-quiz-item-form',
  templateUrl: './quiz-item-form.component.html',
  styleUrls: ['./quiz-item-form.component.css']
})
export class QuizItemFormComponent implements OnInit {
  @Output() quizItemCreated = new EventEmitter<QuizItem>();

  constructor() { }

  ngOnInit() {
  }

  createQuizItem(q: string, a: string, ha: boolean) {
    this.quizItemCreated.emit(new QuizItem(q, a, true));
  }

}
