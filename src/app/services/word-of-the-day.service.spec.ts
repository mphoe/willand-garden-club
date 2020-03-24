import { TestBed } from '@angular/core/testing';

import { WordOfTheDayService } from './word-of-the-day.service';

describe('WordOfTheDayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WordOfTheDayService = TestBed.inject(WordOfTheDayService);
    expect(service).toBeTruthy();
  });
});
