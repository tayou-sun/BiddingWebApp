import { Component } from '@angular/core';
import { User } from './Model/user';
import { UserService } from './Model/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'my-project';
}
