import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './iuser';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  token: Observable<IUser> | undefined;

  login(data: { name: string; password: string }) {
    this.token = this.userService.login(data);
  }

  constructor(private userService: UserService) { }
  user: IUser = new IUser('', '');
}
