import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    /* Número de valores */
    const numberPromise = new Promise((resolve, reject) => {
      resolve(5);
      resolve(15);
    });

    numberPromise.then(value => console.log(`Promise: ${value}`));

    const numberObservables = new Observable(observer => {
      observer.next(5);
      observer.next(15);
    });

    numberObservables.subscribe(value => console.log(`Subscribe: ${value}`));

    /* Momento de ejecución */
    const promise = new Promise(() => console.log('Promise is called'));

    const observable = new Observable(() => console.log('Observable is called'));
    observable.subscribe();
  }

}
