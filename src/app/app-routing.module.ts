import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivrariaComponent } from './components/livros/livraria.component';
import { CadastroLivroComponent } from './components/cadastro-livro/cadastro-livro.component';

const routes: Routes = [
  { path: '', redirectTo: 'livraria/cadastrolivro', pathMatch: 'full' }, // Redireciona para a rota 'livraria'
  {
    path: 'livraria', component: LivrariaComponent, children: [
      { path: 'cadastrolivro', component: CadastroLivroComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
