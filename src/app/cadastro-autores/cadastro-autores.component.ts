import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Autor } from '../autor';
import { LivroApiService } from '../livro-api.service';
import { LivroService } from '../livro.service'

@Component({
  selector: 'app-cadastro-autores',
  templateUrl: './cadastro-autores.component.html',
  styleUrls: ['./cadastro-autores.component.css']
})
export class CadastroAutoresComponent implements OnInit {
  id!: number;
  mensagem = '';
  autor = new Autor()
  titulo = "Cadastrar Autores"
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

      this.livroService.buscarAutorPorId(this.id).subscribe(livr => {
        this.autor = livr;
        console.log(this.autor);
      })
    }
  }

  private estaInserindo() {
    return !this.id
  }

  salvar() {
    if (this.estaInserindo()) {
      this.livroService.inserirAutor(this.autor).subscribe(autor => {
        console.log("Produto Cadastrado", autor);
        this.mensagem = this.autor.nome + " cadastrado com sucesso!";
        this.autor = new Autor();
      });

    }
    else {
      this.livroService.editarAutor(this.id, this.autor).subscribe(aut => {
        this.mensagem = `${aut.nome} editado com sucesso!`;
       this.autor = aut;
      })

    }
  }

  cancelar() {
    this.router.navigate(['/tabela'])
  }

}
