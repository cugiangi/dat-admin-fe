import { Injectable } from '@angular/core';
import { Pubblicita } from '../models/pubblicita.model';

@Injectable({
  providedIn: 'root'
})
export class PubblicitaService {

  ads: Pubblicita[] = [];

  constructor() { }

  aggiungiPubblicita(index: number) {
    for (let i = 1; i <= index; i++) { 
    let pubbl = new Pubblicita('Pubblicita ' + i);
    this.ads.push(pubbl);
    }
  }

}
