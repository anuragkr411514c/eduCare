import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page.component';
import { TestPageComponent } from './test-page/test-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuestionComponent } from './test-page/question/question.component';

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
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
