import { Component, OnInit } from '@angular/core';
import {QuestionService} from '../services/question.service';
import {Question} from './question/question';
import {Router} from '@angular/router';
@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit {
  questions: Question[];
  question: Question;
  answer: boolean;
  // tslint:disable-next-line:variable-name
  question_placard: boolean;

  message: string;
  i = 0;
  constructor(private questionService: QuestionService, private router: Router) {
    this.question_placard = true;
    this.questionService.getQuestions(1).subscribe( qs => {
        console.log(qs);
        this.questions = qs;
        this.questionPlacard();
      }
    );
  }

  ngOnInit() {
  }

  questionPlacard() {
    this.message = 'questions will start in 5 seconds please be prepared';
    setTimeout( () => {
      this.question_placard = false;
      this.startTest();
    }, 5000);
  }

  startTest() {
    this.answer = false;
    this.question = this.questions[this.i];
    setTimeout(() => {
        this.i++;
        console.log(this.questions[this.i - 1].question);
        if ( this.i === this.questions.length) {
          this.question_placard = true;
          this.answerPlacard();
        } else {
          this.startTest();
        }
    }, parseInt(this.questions[this.i].time, 10) * 1000);

  }
  answerPlacard() {
    this.message = 'answers will start in 5 seconds please be prepared';
    setTimeout( () => {
      this.question_placard = false;
      this.i = 0;
      this.answer = true;
      this.startAnswer();
    }, 5000);
  }
  startAnswer() {
    this.question = this.questions[this.i];
    setTimeout(() => {
      this.i++;
      console.log(this.questions[this.i - 1].question);
      if ( this.i === this.questions.length) {
        this.router.navigateByUrl('/').finally( () => {
            console.log('test completed');
          }
        );
      } else {
        this.startAnswer();
      }
    }, parseInt(this.questions[this.i].time, 10) * 1000);
  }


}
