import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Usuario, Cargo } from './models/usuario.models';
import { PagedList } from '../../views/partials/layout/paged-list';
import { Subject, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class UsuarioService {
  
  count = 1000000;
  BaseUrl = 'api/Usuario';
  CargoUrl ='api/posicion/posicionesList';
  private Usuarios = new Subject<PagedList<Usuario>>();

  constructor(private http: HttpClient) {
    this.getUsuarios();
  }

  get Usuarios$(): Observable<PagedList<Usuario>> {
    return this.Usuarios.asObservable();
  }

  getUsuarios(pageIndex = 1, pageSize = 5) {
    this.http.get<Usuario>(`${this.BaseUrl}/usuarios`, {
      params: new HttpParams()
        .set("query.pageSize", `${this.count}`)
        .set("query.page", `${pageIndex - 1}`)
    })
      .pipe(
        catchError(error => of(error))
      )
      .subscribe(data => this.Usuarios.next(data));
  }

   getCargo = () => this.http.get<Cargo[]>(`${this.CargoUrl}`);
   
  getUsuarioByid = (id: number) => this.http.get<Usuario>(`${this.BaseUrl}/${id}`)
    .pipe(catchError(error => of(error)));
  saveUsuarios$ = (data: Usuario) => this.http.post<Usuario>(`${this.BaseUrl}/usuario`, data).pipe(
    catchError(error => of(error))
  );;
  updateUsuarios$ = (data: Usuario) => this.http.put<Usuario>(`${this.BaseUrl}/usuario`, data)
    .pipe(
      catchError(error => of(error))
    );
}
