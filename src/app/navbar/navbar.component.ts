import { Component, OnInit } from '@angular/core';
import {GlobalsService} from '../globals.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public globalS: GlobalsService) { }

  ngOnInit() {
  }

}
