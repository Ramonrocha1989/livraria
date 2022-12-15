import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../livro';
import { LivroApiService } from '../livro-api.service';
import { LivroService } from '../livro.service'


@Component({
  selector: 'cadastro-livros',
  templateUrl: './cadastro-livros.component.html',
  styleUrls: ['./cadastro-livros.component.css']
})
export class CadastroLivrosComponent implements OnInit {
  id!: number;
  mensagem = '';
  livro = new Livro()
  titulo = "Cadastrar Produtos"
  botaoAcao = "CADASTRAR";


  constructor(
    private livroService: LivroApiService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.mensagem = "";
    console.log("ID", this.id);
    if(this.id) {
      this.botaoAcao= "EDITAR";

      this.livroService.buscarPorId(this.id).subscribe(livr => {
        this.livro = livr;
        console.log(this.livro);
      })
    }
  }

  private estaInserindo() {
    return !this.id
  }

  salvar() {
    if (this.estaInserindo()) {
      this.livroService.inserir(this.livro).subscribe(livro => {
        console.log("Produto Cadastrado", livro);
        this.mensagem = this.livro.titulo + " cadastrado com sucesso!";
        this.livro = new Livro();
      });

    }
    else {
      this.livroService.editar(this.id, this.livro).subscribe(livr => {
        this.mensagem = `${livr.titulo} editado com sucesso!`;
        this.livro = livr;
      })

    }
  }

  cancelar() {
    this.router.navigate(['/tabela'])
  }
}
