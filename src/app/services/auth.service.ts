import { UserLogin } from '../models/userLogin.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { BACKEND_API } from './../app.api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  basUrl = `${BACKEND_API}/login`;

  userToken?: string; 

  constructor(
    private router: Router,
    private http: HttpClient,
  ) { }

  login(user: UserLogin) {
    this.http.post<UserLogin>(this.basUrl, user).subscribe( response => {
      this.userToken = response.token;
      if (this.userToken) {
        localStorage.setItem('token', this.userToken);
        this.router.navigate(['/']);
      }
    })

  }

  logout() {
    this.remove();
    this.router.navigate(['/login']);
  }

  userAuthenticated() {
    const findToken = this.get();

    if( findToken ) {
      return true; 
    } 

    return !!findToken;
  }

  get() {
    return localStorage.getItem('token');
  }

  remove() {
    localStorage.removeItem('token');
  }
}
