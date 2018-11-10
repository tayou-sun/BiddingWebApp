import { CanActivate, Router } from '@angular/router';
import { UserService } from '../Model/auth';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {

  status: string;

  constructor(private router: Router,
    private authService: UserService) { }

  canActivate() {
    if (this.authService.getParams() !== undefined) {
      return true;
    }
    this.router.navigateByUrl('/');
    return false;
  }
}
