import {Component, Input, OnInit} from '@angular/core';
import {Question} from '../question/question';

@Component({
  selector: 'app-placard',
  templateUrl: './placard.component.html',
  styleUrls: ['./placard.component.scss']
})
export class PlacardComponent implements OnInit {

  @Input()
  message: string;

  private width = 1;
  public widthPercent: string;
  private interval;

  constructor() {
    clearInterval(this.interval);
    this.widthPercent = null;
    this.width = 1;
    this.interval = setInterval(() => {
      this.frame();
    }, 100);
  }

  ngOnInit() {
  }

  frame() {
    if (this.width >= 100  ) {
      console.log('killed');
      clearInterval(this.interval);
    } else {
      this.width  += 10 / 5;
      this.widthPercent = `${this.width}%`;
    }
  }
}
