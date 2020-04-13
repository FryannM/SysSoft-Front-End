import { Injectable } from '@angular/core';
import { PagedList } from '../../views/partials/layout/paged-list';
import { Tareas } from './models/tareas.models';
import { Subject, Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class TareasService {
  private tareas = new Subject<PagedList<Tareas>>();


  constructor(private http: HttpClient) {
    this.getTareas();
  }

  get getTareas$(): Observable<PagedList<Tareas>> {
    return this.tareas.asObservable();
  }

  getTareas(pageIndex = 1, pageSize = 5) {
    this.http.get<Tareas>(`api/tareas/tareas`, {
      params: new HttpParams()
        .set("query.pageSize", `${1000000}`)
        .set("query.page", `${pageIndex - 1}`)
    })
      .pipe(
        catchError(error => of(error))
      )
      .subscribe(data => this.tareas.next(data));
  }

  saveTareas$ = (data: Tareas) => this.http.post<Tareas>(`api/tareas/tareas`, data).pipe(
    catchError(error => of(error))
  );;
  updateTareas$ = (data: Tareas) => this.http.put<Tareas>(`api/tareas/tareas`, data)
    .pipe(
      catchError(error => of(error))
    );
}
