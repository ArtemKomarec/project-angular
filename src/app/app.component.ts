import { Component } from '@angular/core';
import { IUser } from './iuser';
import { UserService } from './user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  token: string | undefined;
  user: IUser = new IUser('', '');

  login(data: { name: string; password: string }) {
    this.userService.login(data).subscribe(
      x => { this.token = x?.access_token; }
    );
  }

  getError() {
    return this.userService.error;
  }

  constructor(private userService: UserService) { }
}
