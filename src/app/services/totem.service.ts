import { Injectable } from '@angular/core';
import { Totem } from '../models/totem.model';
import { PubblicitaService } from './pubblicita.service';

@Injectable({
  providedIn: 'root'
})
export class TotemService {

  totems: Totem[] = [];


  constructor(private pubblicitaService: PubblicitaService) {
    
    this.pubblicitaService.aggiungiPubblicita(8);

    this.totems.push(new Totem('Totem 1', this.pubblicitaService.ads.slice(0,3)));
    this.totems.push(new Totem('Totem 2', this.pubblicitaService.ads.slice(3)));
  }
}
