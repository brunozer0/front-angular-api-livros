import { TestBed } from '@angular/core/testing';

import { AtualizaLivrosService } from './atualiza-livros.service';

describe('AtualizaLivrosService', () => {
  let service: AtualizaLivrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtualizaLivrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
