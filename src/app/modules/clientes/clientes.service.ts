import { Injectable } from '@angular/core';
import { Clientes, Cliente } from './models/clientes.models';
import { of, Observable, Subject } from 'rxjs';
import { PagedList } from '../../views/partials/layout/paged-list';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ClientesService {
  count = 1000000;
  BaseUrl = 'api/clientes';
  private clientes = new Subject<PagedList<Clientes>>();

  constructor(private http: HttpClient) {
    this.getClientes();
  }

  get clientes$(): Observable<PagedList<Clientes>> {
    return this.clientes.asObservable();
  }

  getClientes(pageIndex = 1, pageSize = 5) {
    this.http.get<Clientes>(`${this.BaseUrl}/clientes`, {
      params: new HttpParams()
        .set("query.pageSize", `${this.count}`)
        .set("query.page", `${pageIndex - 1}`)
    })
      .pipe(
        catchError(error => of(error))
      )
      .subscribe(data => this.clientes.next(data));
  }

  saveClientes$ = (data: Cliente) => this.http.post<Cliente>(`${this.BaseUrl}/clientes`, data).pipe(
    catchError(error => of(error))
  );;
  updateClientes$ = (data: Cliente) => this.http.put<Cliente>(`${this.BaseUrl}/clientes`, data)
    .pipe(
      catchError(error => of(error))
    );
}
