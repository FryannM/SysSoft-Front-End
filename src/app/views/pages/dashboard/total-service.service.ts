import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable()
export class TotalServiceService {

  ClientesBaseUrl = 'api/clientes/count';

  ProyectosBaseUrl = 'api/clientes/count';

  ColaboradoresBaseUrl = 'api/Colaborador/count';

  
  constructor(private http : HttpClient) { }


  TotalClientes = (id: number) :Observable<number>  => this.http.get<number>(`${this.ClientesBaseUrl}/${id}`)
  .pipe(catchError(error => of(error)));


  TotalProyectosVendidos = (id: number) :Observable<number>  => this.http.get<number>(`${this.ProyectosBaseUrl}/${id}`)
  .pipe(catchError(error => of(error)));


  TotalProyectos = (id: number) :Observable<number>  => this.http.get<number>(`${this.ProyectosBaseUrl}/${id}`)
  .pipe(catchError(error => of(error)));


  TotalColaboradores = (id: number) :Observable<number>  => this.http.get<number>(`${this.ColaboradoresBaseUrl}/${id}`)
  .pipe(catchError(error => of(error)));
}
