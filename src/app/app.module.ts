import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabelaLivrosComponent } from './tabela-livros/tabela-livros.component';
import { CadastroLivrosComponent } from './cadastro-livros/cadastro-livros.component';
import { FiltroPesquisaPipe } from './filtro-pesquisa.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TabelaAutoresComponent } from './tabela-autores/tabela-autores.component';
import { CadastroAutoresComponent } from './cadastro-autores/cadastro-autores.component';


@NgModule({
  declarations: [
    AppComponent,
    TabelaLivrosComponent,
    CadastroLivrosComponent,
    FiltroPesquisaPipe,
    PageNotFoundComponent,
    TabelaAutoresComponent,
    CadastroAutoresComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
