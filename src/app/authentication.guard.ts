import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserServiceService } from './Services/UserService/user-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private userService: UserServiceService, private router: Router) {}
  canActivate() :boolean
  {
    if (localStorage.getItem('token') != null)
    {
      return true;
    }
    return false;
  }
}
