import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  private isAuth = false;

  login(){
    this.isAuth = true;
  }
  logout(){
    this.isAuth = false;
  }

  isAtheticated(): Promise<boolean>{
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.isAuth);
      }, 1000);
    });
  }
}
