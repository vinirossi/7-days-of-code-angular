import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translateTitle'
})
export class TranslateTitlePipe implements PipeTransform {

  transform(title: string): string {
    const translationMap: { [key: string]: string } = {
      'A New Hope': 'Uma Nova Esperança',
      'The Empire Strikes Back': 'O Império Contra-Ataca',
      'Return of the Jedi': 'O Retorno de Jedi',
      'The Phantom Menace': 'A Ameaça Fantasma',
      'Attack of the Clones': 'Ataque dos Clones',
      'Revenge of the Sith': 'A Vingança dos Sith'
    };

    // Verifica se há uma tradução disponível para o título
    const translatedTitle = translationMap[title];

    // Retorna a tradução, se disponível, ou o título original
    return translatedTitle || title;
  }
}
