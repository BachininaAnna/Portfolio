import {Injectable} from '@angular/core';
import {ProjectsType} from "../../../assets/type/projects";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  public projects: ProjectsType[];
  public path: string = '../../../assets/images/projects/';

  constructor() {
    this.projects = [
      {
        name: 'Plant-Store',
        description: 'A plant store with a variety of filters for product search, ' +
          'sorting by price and name, a search bar, an editable\n' +
          'shopping cart, ordering, a user\'s personal account with an order history. ' +
          '(Angular(14), RxJS, TypeScript, HTML/SCSS, AngularMaterial, MongoDB)',
        image: this.path + 'plant-store.png',
        live: 'https://disk.yandex.ru/i/qcH3pA7LQDcxmw',
        source: 'https://github.com/BachininaAnna/Plant-Store-With-Backend',
        color: '2e7c1c',
      },
      {
        name: 'Quiz',
        description: 'Online testing with user' +
          ' authentication, a progress scale, timer, calculation of results, output\n' +
          'of correct answers. (Angular(14), RxJS, TypeScript, HTML/SCSS, AngularMaterial)',
        image: this.path + 'quiz.png',
        live: 'https://disk.yandex.ru/i/ImTH3jQE4yqXNw',
        source: 'https://github.com/BachininaAnna/Quiz-With-Backend',
        color: '6933dc',
      },
      {
        name: 'ITStorm-articles',
        description: 'Articles and services in the field of internet marketing. ' +
          'You can filter, search and comment on articles, and put reactions ' +
          'to comments. JWT-based user authentication. ' +
          '(Angular(14), RxJS, TypeScript, HTML/SCSS, AngularMaterial, MongoDB)',
        image: this.path + 'articles1.png',
        live: 'https://disk.yandex.ru/i/KOYlg9tmuNwFcw',
        source: 'https://github.com/BachininaAnna/ITStorm-Articles-With-Backend'
      },
      {
        name: 'Luminicon-finance',
        description: 'SPA, written in JS/TS, using the Bootstrap 5 library, to register' +
          ' income and expenses with visualization using the Chart.js library, with user' +
          ' authentication. Requests are made using ready-made APIs. Building a Webpack.',
        image: this.path + 'luminicon.png',
        live: 'https://disk.yandex.ru/i/6m1Wgxi8gWv33w',
        source: 'https://github.com/BachininaAnna/Luminicon-finance-With-Backend'
      },
      {
        name: 'Macaroons-store',
        description: 'A simple landing page for ordering macaroons with adaptive layout, using Angular/Sass',
        image: this.path + 'box_of_macaroons.png',
        live: 'https://bachininaanna.github.io/Macaroons/',
        source: 'https://github.com/BachininaAnna/Macaroons'
      },
      // {
      //   name: 'Memory-game',
      //   description: 'hhh',
      //   image: this.path + 'plant-store.png',
      //   live: 'https://bachininaanna.github.io/Memory-Game/',
      //   source: 'https://github.com/BachininaAnna/Memory-Game'
      // },
      /* {
        name: 'Vue',
        description: 'hhh',
        image: this.path + 'plant-store.png',
        live: '',
        source: 'https://github.com/BachininaAnna/ITStorm-Articles-With-Backend'
      },*/
      {
        name: 'Tea-store',
        description: 'The website of the tea store with a search by the name of the tea, an order page, and an adaptive layout. Created using Angular/Scss, ng-bootstrap, bootstrap',
        image: this.path + 'tea6.jpg',
        live: 'https://bachininaanna.github.io/Tea-store/',
        source: 'https://github.com/BachininaAnna/Tea-store',
      },
      // {
      //   name: 'House',
      //   description: 'hhh',
      //   image: this.path + 'plant-store.png',
      //   live: '',
      //   source: 'https://github.com/BachininaAnna/ITStorm-Articles-With-Backend'
      // },
    ];
  }

  getProjects() {
    return this.projects;
  }
}
