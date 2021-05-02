import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user.model';
import { BACKEND_API } from '../app.api';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  basUrl = `${BACKEND_API}/users`;

  constructor(
    private http: HttpClient
  ) { }

  index(): Observable<User[]> {
    return this.http.get<User[]>(this.basUrl);
  }
}
