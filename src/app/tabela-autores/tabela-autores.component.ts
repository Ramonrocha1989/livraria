import { Component, OnInit } from '@angular/core';
import { LivroApiService } from '../livro-api.service';
import { Autor} from '../autor'

@Component({
  selector: 'app-tabela-autores',
  templateUrl: './tabela-autores.component.html',
  styleUrls: ['./tabela-autores.component.css']
})
export class TabelaAutoresComponent implements OnInit {
  titulo = 'Tabela de Autores';
  livroPesquisado = '';
  autor: Autor[] = []
  constructor(private servico: LivroApiService) {
   this.listar
  }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.servico.listarAutores().subscribe(
      (data) => {
        this.autor = data;
      }
    )
  }

  dele(id: number){
    this.servico.deletarAutor(id).subscribe(res => {
      this.listar();
      console.log(res);
    });
  }


}
