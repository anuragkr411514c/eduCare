import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  url = 'https://eu-west-1.aws.webhooks.mongodb-stitch.com/api/client/v2.0/app/educare-fgche/service' +
    '/questions/incoming_webhook/question?question_id=';

  constructor(private http: HttpClient) { }
  getQuestions(id: number): Observable<Question[]> {
    return this.http.get<Question[]>(this.url + id);
  }
}
