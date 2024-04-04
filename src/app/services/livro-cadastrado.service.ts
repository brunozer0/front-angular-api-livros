import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivroCadastradoService {
  private livroCadastrado = new Subject<boolean>();
  livroCadastrado$ = this.livroCadastrado.asObservable();

  notificarCadastroLivro() {
    this.livroCadastrado.next(true);
  }
}
