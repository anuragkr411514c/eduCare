import { Component, OnInit } from '@angular/core';
import {QuestionService} from '../services/question.service';
import {Question} from './question/question';
import {Router} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {DomSanitizer} from '@angular/platform-browser';
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
  constructor(private questionService: QuestionService, private router: Router, private http: HttpClient, private sanitizer: DomSanitizer) {
    this.question_placard = true;
    const o = this.questionService.getQuestions(1);
    this.questionPlacard(o);
  }

  ngOnInit() {
  }

  questionPlacard(o: Observable<Question[]>) {
    this.message = 'questions will start in 5 seconds please be prepared';
    let qss: Question[];
    o.subscribe( qs => {
      console.log(qs);
      const list = ['ge', 'gh', 'be', 'bh'];
      for (const q of qs) {
        const img = new Image();
        img.src = q.image;
        q.imageUrl = img;
        q.audioElement = new Array<HTMLAudioElement>();
        for (const i of list) {
          const ad = new Audio();
          ad.src = '../../assets/' + i + '.mpeg';
          ad.load();
          q.audioElement.push( ad);
        }
      }
      qss = qs;
    });
    setTimeout( () => {
         this.questions = qss;
         this.startTest();
         this.question_placard = false;
    }, 5000);
  }

  startTest() {
    this.answer = false;
    this.question = this.questions[this.i];
    setTimeout(() => {
        this.i++;
        console.log(this.questions[this.i - 1].question);
        if ( this.i === this.questions.length) {
          this.answerPlacard();
          this.question_placard = true;
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
        this.endPlacard();
        this.question_placard = true;
      } else {
        this.startAnswer();
      }
    }, parseInt(this.questions[this.i].time, 10) * 1000);
  }
  endPlacard() {
    this.message = 'END OF QUIZ';
    setTimeout( () => {
      this.question_placard = false;
      this.i = 0;
      this.answer = true;
      this.router.navigateByUrl('/').finally( () => {
        console.log('test completed');
      });
    }, 5000);
  }


}
