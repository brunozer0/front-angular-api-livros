import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Ilivros } from '../models/Ilivros';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LivrosService {


  livrosApiUrl = environment.api

  constructor(private httpClient: HttpClient) { }


  getLivros() {
    return this.httpClient.get<Ilivros[]>(this.livrosApiUrl);
  }

  cadastrarLivro(livro: Ilivros) {
    return this.httpClient.post<Ilivros>(this.livrosApiUrl, livro);
  }

  updateLivro(livro: Ilivros): Observable<any> {
    return this.httpClient.put(this.livrosApiUrl, livro);
  }

  remover(id: number) {
    return this.httpClient.delete<void>(`${this.livrosApiUrl}/${id}`);
  }

}