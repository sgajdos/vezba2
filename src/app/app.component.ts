import { Component } from '@angular/core';
import { QuizItem } from './model/quiz-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vezba2';
  quizItem = new QuizItem('content question', 'content ', false);

  klik() {
    console.log('klik root');
  }
}
