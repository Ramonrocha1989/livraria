import { Pipe, PipeTransform } from '@angular/core';
import { Livro } from './livro';

@Pipe({
  name: 'filtroPesquisa',
  pure: false
})
export class FiltroPesquisaPipe implements PipeTransform {

  transform(listaLivros: Livro[], valor?: string): Livro[] {
    const titulo = valor ? valor : "";
    return listaLivros.filter(
      (livro) => livro.titulo.toLowerCase().includes(titulo.toLowerCase())
    )
  }

}
