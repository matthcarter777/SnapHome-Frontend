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

  create(user: User): Observable<User> {
    return this.http.post<User>(this.basUrl, user);
  }

  delete(id: string): Observable<User> {
    const url  = `${this.basUrl}/${id}`
    return this.http.delete<User>(url);
  }

  update(user: User): Observable<User> {
    const url  = `${this.basUrl}/${user.id}`
    return this.http.put<User>(url, user);
  }

  show(id: string): Observable<User> {
    const url  = `${this.basUrl}/${id}`
    return this.http.get<User>(url)
  }
}
