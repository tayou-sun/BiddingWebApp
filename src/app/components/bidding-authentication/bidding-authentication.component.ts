import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Service/auth.service';
import { UserService } from '../../Model/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bidding-authentication',
  templateUrl: './bidding-authentication.component.html',
  styleUrls: ['./bidding-authentication.component.css']
})
export class BildingAuthenticationComponent {

  id: number;
  isEmptyData : boolean;

  constructor(private userService: UserService,
    private router: Router,
    private appService: AuthService) {
  }

  create() {
    this.router.navigateByUrl("/create_user")
  }
  search() {
    this.appService.getAuthor(this.id).subscribe((data: number) => {
      this.isEmptyData = data == null;
      this.userService.setParams(data);
      this.router.navigate(['/biddings']);
    },
      error => this.router.navigateByUrl("/error"))
  }
}