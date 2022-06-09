import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../models/Hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    const heroes: Hero[] = [
      { id: 12, name: 'Iron Man',
        description: "Tony Stark es un genio inventor y multimillonario industrial, " +
          "que se enfunda en su armadura de tecnología punta " +
          "para convertirse en el superhéroe Iron Man. " },
      { id: 13, name: 'Thor', description: "Thor es el Dios del Trueno, miembro de la raza conocida como los Asgardianos, " +
          "un grupo de seres humanoides de la Dimensión de Bolsillo de Asgard, el Reino Eterno." },
      { id: 14, name: 'Batman', description: "Batman es el superhéroe protector de Gotham, famoso " +
          "por su traje de murciélago y que a pesar de no tener súper poderes es unos de los héroes " +
          "más importantes e influyentes, así como el mejor detective del mundo." },
      { id: 15, name: 'Spider-man' },
      { id: 16, name: 'Captain America' },
      { id: 17, name: 'Hulk' },
      { id: 18, name: 'Dr Strange' },
      { id: 19, name: 'Superman' },
      { id: 20, name: 'Flash' }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
