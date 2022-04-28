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

    numberPromise.then((value) => console.log(`Promise: ${value}`));

    const numberObservables = new Observable((observer) => {
      observer.next(5);
      observer.next(15);
    });

    numberObservables.subscribe((value) => console.log(`Subscribe: ${value}`));

    /* Momento de ejecución */
    const promise = new Promise(() => console.log('Promise is called'));

    const observable = new Observable(() =>
      console.log('Observable is called')
    );
    observable.subscribe();

    /* Cancelación */
    const cancellable = new Observable((observer) => {
      let i = 0;
      setInterval(() => {
        observer.next(i + 1);
        i++;
      }, 1000);
    });

    const cancellableSubscription = cancellable.subscribe((value) =>
      console.log(value)
    );
    cancellableSubscription.unsubscribe();

    /* ¿Se pueden compartir? */
    const observableToShare = new Observable((observer) => {
      console.log(`I was called at ${new Date()}`);

      setTimeout(() => observer.next(), 2000);
    });

    const sharedObservable = observableToShare;
    sharedObservable.subscribe(() => console.log(`Some Task 1 at ${new Date()}`));
    sharedObservable.subscribe(() => console.log(`Some Task 2 at ${new Date()}`));

    /* Asincronía */
    const asyncPromise = new Promise((resolve) => resolve(5));
    asyncPromise.then(value => console.log(`Everytime Async Promise: ${value}`));
    console.log('And now we are here with promise');

    const possibleAsyncObservable = new Observable(observer => observer.next(5));
    possibleAsyncObservable.subscribe(value => console.log(`Possible Async observable: ${value}`));
    console.log('And now we are here with observables');
  }
}
