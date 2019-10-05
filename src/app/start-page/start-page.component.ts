import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {

  classes = [{class: 'Class 1', value: 1}, {class: 'Class 2', value: 2}, {class: 'Class 3', value: 3}];
  cls = this.classes[0];
  constructor() { }

  ngOnInit() {
  }

}
