import { Injectable } from '@angular/core';
import { Colaboradores } from './models/colaboradores.model';
import { PagedList } from '../../views/partials/layout/paged-list';
import { Subject, Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ColaboradoresService {
  private colaboradores = new Subject<PagedList<Colaboradores>>();
  count = 1000000;
  BaseUrl = 'api/colaborador';
  constructor(private http: HttpClient) {
    this.getColaboradores();
  }

  get colaboradores$(): Observable<PagedList<Colaboradores>> {
    return this.colaboradores.asObservable();
  }

  getColaboradores(pageIndex = 1, pageSize = 5) {
    this.http.get<Colaboradores>(`${this.BaseUrl}/colaboradores`, {
      params: new HttpParams()
        .set("query.pageSize", `${100000}`)
        .set("query.page", `${pageIndex - 1}`)
    })
      .pipe(
        catchError(error => of(error))
      )
      .subscribe(data => this.colaboradores.next(data));
  }

  getColaboradorByid = (id: number) => this.http.get<Colaboradores>(`${this.BaseUrl}/${id}`)
  .pipe(catchError(error => of(error)));
  
  saveColaboradores$ = (data: Colaboradores) => this.http.post<Colaboradores>(`${this.BaseUrl}/colaborador`, data).pipe(
    catchError(error => of(error))
  );;
  updateColaboradores$ = (data: Colaboradores) => this.http.put<Colaboradores>(`${this.BaseUrl}/colaborador`, data)
    .pipe(
      catchError(error => of(error))
    );
}
