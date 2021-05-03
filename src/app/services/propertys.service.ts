import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BACKEND_API } from '../app.api';
import { Property } from '../models/property.model';

@Injectable({
  providedIn: 'root'
})
export class PropertysService {
  basUrl = `${BACKEND_API}/propertys`;

  constructor(
    private http: HttpClient
  ) { }

  index(): Observable<Property[]> {
    return this.http.get<Property[]>(this.basUrl);
  }

  create(property: Property): Observable<Property> {
    return this.http.post<Property>(this.basUrl, property);
  }

  delete(id: string): Observable<Property> {
    const url  = `${this.basUrl}/${id}`
    return this.http.delete<Property>(url);
  }

  update(property: Property): Observable<Property> {
    const url  = `${this.basUrl}/${property.id}`
    return this.http.put<Property>(url, property);
  }

  show(id: string): Observable<Property> {
    const url  = `${this.basUrl}/${id}`
    return this.http.get<Property>(url)
  }
}
