import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { Posicion } from './models/posicion.model';
import { PagedList } from 'src/app/views/partials/layout/paged-list';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class PosicionService {
  private posiciones = new Subject<PagedList<Posicion>>();

  constructor(private http: HttpClient) {
    this.getPosiciones();
  }

  get posiciones$(): Observable<PagedList<Posicion>> {
    return this.posiciones.asObservable();
  }

  getPosiciones(pageIndex = 1, pageSize = 5) {
    this.http.get<Posicion>(`api/posicion/posiciones`, {
      params: new HttpParams()
        .set("query.pageSize", `${1000000}`)
        .set("query.page", `${pageIndex - 1}`)
    })
      .pipe(
        catchError(error => of(error))
      )
      .subscribe(data => this.posiciones.next(data));
  }

  savePosiciones$ = (data: Posicion) => this.http.post<Posicion>(`api/posicion/posiciones`, data).pipe(
    catchError(error => of(error))
  );;
  updatePosiciones$ = (data: Posicion) => this.http.put<Posicion>(`api/posicion/posiciones`, data)
    .pipe(
      catchError(error => of(error))
    );
}
