import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Totem} from '../models/totem.model';
import { Stato} from '../models/stato.model';
import { TotemService } from '../services/totem.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  currentUser: User;
  
  pulsanti = [
    {
      desc: 'Le tue Pubblicità',
      url: '/pubblica-pubblicita'
    },
    {
      desc: 'Aggiungi Pubblicità',

    },
    {
      desc: 'Calendario Totem',

    },
    {
      desc: 'Pubblica Pubblicità'

    }
  ]

  constructor(
    public totemService: TotemService
  ) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
  }
}

