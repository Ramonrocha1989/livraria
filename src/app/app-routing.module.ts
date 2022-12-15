import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabelaLivrosComponent } from './tabela-livros/tabela-livros.component';
import { CadastroLivrosComponent } from './cadastro-livros/cadastro-livros.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TabelaAutoresComponent } from './tabela-autores/tabela-autores.component';
import { CadastroAutoresComponent } from './cadastro-autores/cadastro-autores.component';

const routes: Routes = [
  { path: 'tabela', component: TabelaLivrosComponent },
  { path: 'form', component: CadastroLivrosComponent },
  { path: 'autor', component: TabelaAutoresComponent },
  { path: 'cadAutor', component: CadastroAutoresComponent },
  { path: 'edit/:id', component: CadastroLivrosComponent },
  { path: 'editaAutores/:id', component: CadastroAutoresComponent },
  { path: '', redirectTo: '/tabela', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
