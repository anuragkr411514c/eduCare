import { Component, OnInit } from '@angular/core';
import {GlobalsService} from '../globals.service';


@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {

  classes = [{class: 'Class 1', value: 'class1'}, {class: 'Class 2', value: 'class2'}, {class: 'Class 3', value: 'class3'}];
  constructor(public globals: GlobalsService) {
    globals.cls = this.classes[0].value;
  }

  ngOnInit() {
  }

}
