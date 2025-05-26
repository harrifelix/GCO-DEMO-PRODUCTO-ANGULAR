import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movimiento } from '../models/movimiento.model';

const baseUrl = 'http://localhost:8080/movimiento';

@Injectable({
  providedIn: 'root',
})
export class MovimientoService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Movimiento[]> {
    return this.http.get<Movimiento[]>(baseUrl);
  }

 
}
