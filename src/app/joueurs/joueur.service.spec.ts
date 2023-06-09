import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { JoueurService } from './joueur.service';

describe('JoueursService', () => {
  let service: JoueurService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(JoueurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
