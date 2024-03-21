import { Component } from '@angular/core';
import { Ilivros } from 'src/app/models/Ilivros';
import { LivrosService } from 'src/app/services/livros.service';
import { LivrariaComponent } from '../livros/livraria.component';


@Component({
  selector: 'app-cadastro-livro',
  templateUrl: './cadastro-livro.component.html',
  styleUrls: ['./cadastro-livro.component.scss']
})
export class CadastroLivroComponent {



  titulo: string = '';
  autor: string = '';
  descricao: string = '';
  genero: string = '';
  editora: string = ''
  date: string = '';

  constructor(private livrosService: LivrosService, private livrariaComponent: LivrariaComponent) { }

  cadastrarLivro() {
    if (!this.titulo || !this.autor || !this.descricao ||
      !this.genero || !this.editora || !this.date) {
      return alert("Preencha todos os campos");
    }
    const novoLivro: Ilivros = {
      titulo: this.titulo,
      autor: this.autor,
      editora: this.editora,
      descricao: this.descricao,
      genero: this.genero,
      date: this.date
    };
    this.livrosService.cadastrarLivro(novoLivro)
      .subscribe(() => this.livrariaComponent.getLivros())
    this.limparInputs();
    alert("livro cadastrado")
  }

  limparInputs() {
    this.titulo = '';
    this.autor = '';
    this.descricao = '';
    this.genero = '';
    this.editora = '';
    this.date = '';
  }
}
