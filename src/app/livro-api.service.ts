import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro } from './livro'
import {Autor} from './autor'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class LivroApiService {

  baseAPI = "http://localhost:3000/livros"
  baseAPIAutores = "http://localhost:3000/autores"

  constructor(private http: HttpClient) { }

  listar(): Observable<Livro[]> {
    return this.http.get<Livro[]>(this.baseAPI);
  }

  inserir(livro: Livro): Observable<Livro> {
    return this.http.post<Livro>(this.baseAPI, livro, httpOptions);
  }
  buscarPorId(id:number): Observable<Livro> {
    const uri = `${this.baseAPI}/${id}`;//baseAPI + "/"+ id;
    return this.http.get<Livro>(uri);
  }

  editar(id: number, livro: Livro): Observable<Livro> {
    const uri = `${this.baseAPI}/${id}`;//baseAPI + "/"+ id;
    return this.http.put<Livro>(uri, livro, httpOptions);
  }

  deletar(id: number){
    const uri = `${this.baseAPI}/${id}`;
    return this.http.delete(uri);
  }

  listarAutores(): Observable<Autor[]> {
    return this.http.get<Autor[]>(this.baseAPIAutores);
  }

  editarAutor(id: number, autor: Autor): Observable<Autor> {
    const uri = `${this.baseAPIAutores}/${id}`;//baseAPI + "/"+ id;
    return this.http.put<Autor>(uri, autor, httpOptions);
  }

  buscarAutorPorId(id:number): Observable<Autor> {
    const uri = `${this.baseAPIAutores}/${id}`;//baseAPI + "/"+ id;
    return this.http.get<Autor>(uri);
  }

  inserirAutor(autor: Autor): Observable<Autor> {
    return this.http.post<Autor>(this.baseAPIAutores, autor, httpOptions);
  }
  deletarAutor(id: number){
    const uri = `${this.baseAPIAutores}/${id}`;
    return this.http.delete(uri);
  }

}
