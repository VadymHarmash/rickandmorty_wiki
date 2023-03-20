import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortService {
  constructor() { }

  cardsSort(cards: any[]) {
    cards.sort(function (a, b) {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    })
  }
}
