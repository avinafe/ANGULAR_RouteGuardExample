import { Injectable } from '@angular/core';
import { MockAuthService } from './mock-auth.service'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';


@Injectable({
  providedIn: 'root'
})
export class AuthorGuard implements CanActivate {

  constructor(private authService: MockAuthService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
    return this.authService.isAuthenticated().then(
      (authenticated: boolean) => {
        if (authenticated) { return true }
        else { this.router.navigate(['/']) }
      }
    );
  }
  
}
