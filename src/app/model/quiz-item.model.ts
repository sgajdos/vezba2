export class QuizItem {
  question: string;
  answer: string;
  hideAnswer: boolean;

  constructor(q, a, ha) {
    this.question = q;
    this.answer = a;
    this.hideAnswer = ha;
  }

  toggle() {
    this.hideAnswer = !this.hideAnswer;
  }


}
