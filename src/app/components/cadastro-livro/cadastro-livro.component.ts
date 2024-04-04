import { Component } from '@angular/core';
import { Ilivros } from 'src/app/models/Ilivros';
import { LivrosService } from 'src/app/services/livros.service';
import { LivroCadastradoService } from 'src/app/services/livro-cadastrado.service';

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

  constructor(private livrosService: LivrosService, private atualizacaoLivrosService: LivroCadastradoService) { }

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
    this.livrosService.cadastrarLivro(novoLivro).subscribe(() => {
      this.atualizacaoLivrosService.notificarCadastroLivro();

      this.limparInputs();
      alert("livro cadastrado");
    });
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
