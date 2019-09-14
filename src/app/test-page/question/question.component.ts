import {Component, Input, OnInit} from '@angular/core';
import {Question} from './question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  public _question: Question;
  private width = 1;
  public widthPercent: string;
  private interval;

  @Input()
  public answer: boolean;

  @Input()
  set question(question: Question) {
    clearInterval(this.interval);
    this.widthPercent = null;
    this.width = 1;
    this._question = question;
    this.interval = setInterval(() => {
      this.frame();
    }, 100);
  }
  constructor() {
  }

  ngOnInit() {
  }

  frame() {
    if (this.width >= 100  ) {
      console.log('killed');
      clearInterval(this.interval);
    } else {
      this.width  += 10 / parseInt(this._question.time, 10);
      this.widthPercent = `${this.width}%`;
    }
  }
}
