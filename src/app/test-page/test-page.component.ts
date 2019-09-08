import { Component, OnInit } from '@angular/core';
import {QuestionService} from '../services/question.service';
import {Question} from './question/question';
@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit {
  questions: Question[];
  constructor(private questionService: QuestionService) {
    this.questionService.getQuestions(1).subscribe( qs => {
        console.log(qs);
        this.questions = qs;
      }
    ); }

  ngOnInit() {
  }

}
