import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto.model';

const baseUrl = 'http://localhost:8080/producto';

@Injectable({
  providedIn: 'root',
})
export class TutorialService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Producto[]> {
    return this.http.get<Producto[]>(baseUrl);
  }

  get(id: any): Observable<Producto> {
    return this.http.get<Producto>(`${baseUrl}/byId/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update( data: any): Observable<any> {
    return this.http.put(`${baseUrl}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(codigo: any): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${baseUrl}/byCodigo/${codigo}`);
  }
}
