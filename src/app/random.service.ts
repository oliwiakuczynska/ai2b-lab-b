import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  randomNumber(max: number): number {
    const randomDecimal: number = Math.random();
    const randomNumber: number = Math.floor(randomDecimal * max) + 1;

    return randomNumber;

  }

  constructor() { }
}


