import { Component, OnInit } from '@angular/core';
import { TotemService } from '../services/totem.service';
import { Totem } from '../models/totem.model';
import { PubblicitaService } from '../services/pubblicita.service';
import { Pubblicita } from '../models/pubblicita.model';

@Component({
  selector: 'app-pubblica-pubblicita',
  templateUrl: './pubblica-pubblicita.component.html',
  styleUrls: ['./pubblica-pubblicita.component.sass']
})
export class PubblicaPubblicitaComponent implements OnInit {

  selectedTotem: Totem;

  constructor(public totemService: TotemService) { }

  ngOnInit(): void {
  }

}
