import { Component, OnInit } from '@angular/core';
import { User } from '../../Model/user';
import { AppService } from '../../Service/app.service';
import { Router } from '@angular/router';
import { UserService } from '../../Model/auth';
import { AuthService } from '../../Service/auth.service';
import { ErrorService } from '../../Service/error.service';

@Component({
  selector: 'app-create-author',
  templateUrl: './create-author.component.html',
  styleUrls: ['./create-author.component.css']
})
export class CreateAuthorComponent {

  name: string;
  error: any;

  constructor(private dataService: AuthService,
    private router: Router,
    private userService: UserService,
    private errorService: ErrorService) {
  }

  save() {
    this.dataService.createAuthor(this.name as string)
      .subscribe(data => {
        this.userService.setParams(data);
        this.router.navigateByUrl('/biddings');
      },
        error => {
/*           this.router.navigateByUrl("/error");
 */          this.errorService.SetError(error);
        });
  }
}
