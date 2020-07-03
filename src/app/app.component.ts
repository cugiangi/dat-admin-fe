import { Component } from '@angular/core';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'dat-admin-fe';
  currentUser: User;

  constructor() {
    this.currentUser = new User(1, 'admin', 'Name', 'Surname');
  }
  
}
