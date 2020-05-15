import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  role = ['admin', 'manager', 'user'];
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      console.log('CanActivate Route Guard is called ');
      if (this.role.includes('admin')) {
        return true;
      } else {
        return false; }
  }
}
