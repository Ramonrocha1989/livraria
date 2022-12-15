import { Component, Input, OnInit } from '@angular/core';
import { Livro } from '../livro';
import { LivroApiService } from '../livro-api.service';
import {LivroService }from '../livro.service'

@Component({
  selector: 'app-tabela-livros',
  templateUrl: './tabela-livros.component.html',
  styleUrls: ['./tabela-livros.component.css']
})
export class TabelaLivrosComponent implements OnInit {
  titulo = 'Tabela de Livros';
  livroPesquisado = '';
  livro: Livro[] = []
  constructor(private servico: LivroApiService) {
   this.listar
  }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.servico.listar().subscribe(
      (data) => {
        this.livro = data;
      }
    )
  }

  dele(id: number){
    this.servico.deletar(id).subscribe(res => {
      this.listar();
      console.log(res);
    });
  }


}
