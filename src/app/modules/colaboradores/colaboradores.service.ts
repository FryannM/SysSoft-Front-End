import { Injectable } from '@angular/core';
import { Colaboradores } from './models/colaboradores.model';
import { PagedList } from '../../views/partials/layout/paged-list';
import { Subject, Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ColaboradoresService {
  private colaboradores = new Subject<PagedList<Colaboradores>>();

  constructor(private http: HttpClient) {
    this.getColaboradores();
  }

  get colaboradores$(): Observable<PagedList<Colaboradores>> {
    return this.colaboradores.asObservable();
  }

  getColaboradores(pageIndex = 1, pageSize = 5) {
    this.http.get<Colaboradores>(`api/colaborador/Colaboradores`, {
      params: new HttpParams()
        .set("query.pageSize", `${100000}`)
        .set("query.page", `${pageIndex - 1}`)
    })
      .pipe(
        catchError(error => of(error))
      )
      .subscribe(data => this.colaboradores.next(data));
  }

  saveColaboradores$ = (data: Colaboradores) => this.http.post<Colaboradores>(`api/colaborador/colaboradores`, data).pipe(
    catchError(error => of(error))
  );;
  updateColaboradores$ = (data: Colaboradores) => this.http.put<Colaboradores>(`api/solaborador/colaboradores`, data)
    .pipe(
      catchError(error => of(error))
    );
}
