import { TestBed } from '@angular/core/testing';

import { LivroCadastradoService } from './livro-cadastrado.service';

describe('LivroCadastradoService', () => {
  let service: LivroCadastradoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivroCadastradoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
