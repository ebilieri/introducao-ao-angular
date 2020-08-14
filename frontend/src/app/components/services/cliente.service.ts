import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente.model';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  private baseUrl = "http://localhost:3001";

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<Cliente[]> {

    return this.http.get<Cliente[]>(`${this.baseUrl}/clientes`);
  }

  save(cliente: Cliente): Observable<Cliente> {
    if (cliente.id == null) {
      return this.http.post<Cliente>(`${this.baseUrl}/clientes`, cliente);
    }
    else {
      return this.http.put<Cliente>(`${this.baseUrl}/clientes/${cliente.id}`, cliente);
    }
  }

  public deletar(clienteId: number): Observable<Cliente> {

    return this.http.delete<Cliente>(`${this.baseUrl}/clientes/${clienteId}`);
  }
}