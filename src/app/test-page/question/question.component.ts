import {Component, ElementRef, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {Question} from './question';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {questionAnimation} from '../../animations';
import {GlobalsService} from '../../globals.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  animations: [questionAnimation],
})
export class QuestionComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  public _question: Question;
  private width = 1;
  public widthPercent: string;
  private interval;
  private interval2;
  public time;

  @Input()
  public answer: boolean;

  @Input()
  set question(question: Question) {
    // clearInterval(this.interval);
    clearInterval(this.interval2);
    this.widthPercent = null;
    this.time = question.time;
    this.width = 1;
    this._question = question;
    /*this.interval = setInterval(() => {
      this.frame();
    }, 100);*/
    this.interval2 = setInterval(() => {
      this.timer();
    }, 1000);
    this.playAudios(0);
  }
  playAudios(i) {
    if ( !this.globalS.Acsent && i < 2 ) {
      this._question.audioElement[i].play();
      this._question.audioElement[i].addEventListener('ended', ev => {
        if (this._question.audioElement.length !== i) {
          this.playAudios(i + 1);
        }
      });
    } else if ( this.globalS.Acsent && i > 1 ) {
      this._question.audioElement[i].play();
      this._question.audioElement[i].addEventListener('ended', ev => {
        if (this._question.audioElement.length !== i) {
          this.playAudios(i + 1);
        }
      });
    } else {
      this.playAudios(i + 1);
    }
  }
  constructor(public globalS: GlobalsService) {
  }

  ngOnInit() {
  }

  timer() {
    if (this.time < 0 ) {
      clearInterval(this.interval2);
    } else {
      this.time--;
    }
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
