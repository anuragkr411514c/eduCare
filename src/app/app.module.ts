import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page.component';
import { TestPageComponent } from './test-page/test-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuestionComponent } from './test-page/question/question.component';
import {HttpClientModule} from '@angular/common/http';
import {QuestionService} from './services/question.service';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    TestPageComponent,
    NavbarComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
