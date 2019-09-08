import { TestBed } from '@angular/core/testing';

import { QuestionService } from './question.service';

describe('QuestionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestionService = TestBed.get(QuestionService);
    expect(service).toBeTruthy();
  });
  it('shoudl get the data', () => {
    const service: QuestionService = TestBed.get(QuestionService);
    service.getQuestions(1).subscribe(questions => {
      console.log(questions);
    });
  });
});
