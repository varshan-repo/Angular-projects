import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [HeaderComponent, UsersComponent, TasksComponent]
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId!: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onselectUser(id: string){
    this.selectedUserId = id;
  }
}
