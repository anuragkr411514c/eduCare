import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit {
  questions: Question[];
  constructor() { }

  ngOnInit() {
    const question = new Question()
    question.question = 'testing question';
    question.answer = 'test answer';
    this.questions.push(question);
  }

}
