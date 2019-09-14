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
  i = 0;
  constructor(private questionService: QuestionService, private router: Router) {
    this.questionService.getQuestions(1).subscribe( qs => {
        console.log(qs);
        this.questions = qs;
        this.startTest();
      }
    );
  }

  ngOnInit() {
  }
  startTest() {
    this.answer = false;
    this.question = this.questions[this.i];
    setTimeout(() => {
        this.i++;
        console.log(this.questions[this.i - 1].question);
        if ( this.i === this.questions.length) {
          this.i = 0;
          this.answer = true;
          this.startAnswer();
        } else {
          this.startTest();
        }
    }, parseInt(this.questions[this.i].time, 10) * 500);

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
    }, parseInt(this.questions[this.i].time, 10) * 500);
  }


}
