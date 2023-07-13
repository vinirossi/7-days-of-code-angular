import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translateTitle'
})
export class TranslateTitlePipe implements PipeTransform {

  transform(title: string): string {
    const translationMap: { [key: string]: string } = {
      'A New Hope': 'Episódio IV - Uma Nova Esperança',
      'The Empire Strikes Back': 'Episódio V - O Império Contra-Ataca',
      'Return of the Jedi': 'Episódio VI - O Retorno de Jedi',
      'The Phantom Menace': 'Episódio I - A Ameaça Fantasma',
      'Attack of the Clones': 'Episódio II - Ataque dos Clones',
      'Revenge of the Sith': 'Episódio III - A Vingança dos Sith'
    };

    // Verifica se há uma tradução disponível para o título
    const translatedTitle = translationMap[title];

    // Retorna a tradução, se disponível, ou o título original
    return translatedTitle || title;
  }
}
