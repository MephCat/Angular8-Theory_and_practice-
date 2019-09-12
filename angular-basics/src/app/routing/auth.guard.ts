import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {AuthService} from './services/auth.service';

@Injectable({providedIn: 'root'})
export class AuthGuerd implements CanActivate, CanActivateChild{

  constructor( private authServices: AuthService,
               private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    return this.authServices.isAtheticated().then(isAuth => {
      if (isAuth) {
        return true;
      } else {
        this.router.navigate(['routing/home']);
        console.log('isAth', isAuth);
      }
    });
  }
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean  {
    return this.canActivate( route, state);
  }

}
