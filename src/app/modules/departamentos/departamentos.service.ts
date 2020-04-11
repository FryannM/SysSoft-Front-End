import { Injectable } from '@angular/core';
import { PagedList } from '../../views/partials/layout/paged-list';
import { Subject, Observable, of } from 'rxjs';
import { Departamentos } from './models/departamentos';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class DepartamentosService {
  private departamentos = new Subject<PagedList<Departamentos>>();

  constructor(private http: HttpClient) {
    this.getDepartamentos();
  }

  get departamentos$(): Observable<PagedList<Departamentos>> {
    return this.departamentos.asObservable();
  }

  getDepartamentos(pageIndex = 1, pageSize = 5) {
    this.http.get<Departamentos>(`api/deparatamento/departamentos`, {
      params: new HttpParams()
        .set("query.pageSize", `${1000000}`)
        .set("query.page", `${pageIndex - 1}`)
    })
      .pipe(
        catchError(error => of(error))
      )
      .subscribe(data => this.departamentos.next(data));
  }

  saveProyectos$ = (data: Departamentos) => this.http.post<Departamentos>(`api/deparatamento/departamentos`, data).pipe(
    catchError(error => of(error))
  );;
  updateProyectos$ = (data: Departamentos) => this.http.put<Departamentos>(`api/deparatamento/departamentos`, data)
    .pipe(
      catchError(error => of(error))
    );
}
