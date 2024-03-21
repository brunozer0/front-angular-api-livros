import { Component } from '@angular/core';
import { LivrosService } from 'src/app/services/livros.service';
import { Ilivros } from 'src/app/models/Ilivros';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-livraria',
  templateUrl: './livraria.component.html',
  styleUrls: ['./livraria.component.scss']
})
export class LivrariaComponent {

  livros$ = new Observable<Ilivros[]>();

  idLivro?: number
  titulo: string = '';
  autor: string = '';
  descricao: string = '';
  genero: string = '';
  editora: string = ''
  date: string = '';


  constructor(private livrosService: LivrosService) {
    this.getLivros();
  }


  getLivros(): void {
    this.livros$ = this.livrosService.getLivros();
  }

  getCamposLivro(livros: Ilivros): void {
    this.idLivro = livros.id;
    this.titulo = livros.titulo;
    this.autor = livros.autor;
    this.descricao = livros.descricao;
    this.genero = livros.genero;
    this.editora = livros.editora;
    this.date = livros.date;
  }

  atualizarLivro() {
    if (!this.titulo || !this.autor || !this.descricao ||
      !this.genero || !this.editora || !this.date) {
      return alert("Preencha todos os campos");
    }
    const livroEditado: Ilivros = {
      id: this.idLivro,
      titulo: this.titulo,
      autor: this.autor,
      editora: this.editora,
      descricao: this.descricao,
      genero: this.genero,
      date: this.date
    };
    this.livrosService.updateLivro(livroEditado)
      .subscribe(() => this.getLivros())

    alert(`Dados atualizados`)
  }
  remover(id: number) {
    this.livrosService.remover(id)
      .subscribe(() => this.getLivros())
  }

}
