import { Component, Input } from '@angular/core';

import { User } from './users.model';
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})

export class UsersComponent {

  @Input({ required: true }) user!: User;


  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
}
