import { Injectable } from '@angular/core';
import { PagedList } from '../../views/partials/layout/paged-list';
import { Subject, Observable, of } from 'rxjs';
import { Departamentos, DepartamentoDto } from './models/departamentos';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class DepartamentosService {
  private departamentos = new Subject<PagedList<Departamentos>>();
  BaseUrl = 'api/deparatamento';

  constructor(private http: HttpClient) {
    this.getDepartamentos();
  }

  get departamentos$(): Observable<PagedList<Departamentos>> {
    return this.departamentos.asObservable();
  }

  getDepartamentos(pageIndex = 1, pageSize = 5) {
    this.http.get<Departamentos>(`${this.BaseUrl}/departamentos`, {
      params: new HttpParams()
        .set("query.pageSize", `${1000000}`)
        .set("query.page", `${pageIndex - 1}`)
    })
      .pipe(
        catchError(error => of(error))
      )
      .subscribe(data => this.departamentos.next(data));
  }

  getDepartamentolist = () => this.http.get<DepartamentoDto[]>(`${this.BaseUrl}/departamentos-list`)

  getDepartamentoByid = (id: number) => this.http.get<Departamentos>(`${this.BaseUrl}/${id}`)
  .pipe(catchError(error => of(error)));

  
  saveDepartamentos$ = (data: Departamentos) => this.http.post<Departamentos>(`${this.BaseUrl}/departamento`, data).pipe(
    catchError(error => of(error))
  );;
  updateDepartamentos$ = (data: Departamentos) => this.http.put<Departamentos>(`${this.BaseUrl}/departamento`, data)
    .pipe(
      catchError(error => of(error))
    );
}
