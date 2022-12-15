import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  //  listaLivros: Livro[] = [
  //   {_id: 1, titulo: "Javascript", autor: "Edécio", editora: "abril", numeroPaginas:250},
  //   {_id: 2, titulo: "Java", autor: "Edécio", editora: "abril", numeroPaginas:250},
  //   {_id: 3, titulo: "Python", autor: "Edécio", editora: "abril", numeroPaginas:250},
  //   {_id: 4, titulo: "Twilio", autor: "Edécio", editora: "abril", numeroPaginas:250}
  //  ]
  constructor() { }

  // addLivro(livro: Livro){
  //   this.listaLivros.push(livro);
  // }

  // getLivros(){
  //   return this.listaLivros;
  // }

  // buscarPorId(id:number): Livro{
  //   const livro = this.listaLivros.find(livro => livro._id === id);
  //   return livro ?livro :new Livro();
  // }

  // editar(id: number, livro: Livro) {
  //   const indice = this.getIndice(id);
  //   if(indice >=0)
  //     this.listaLivros[indice] = livro;
  // }

  // deletar(id: number) {
  //   const indice = this.getIndice(id);
  //   if(indice >=0)
  //     this.listaLivros.splice(indice,1);
  // }

  // private getIndice(id: number) {
  //   return this.listaLivros.findIndex(livro => livro._id === id);
  // }
}
