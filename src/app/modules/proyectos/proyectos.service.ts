import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Proyectos } from './models/proyectos-models';
import { catchError } from 'rxjs/operators';
import { of, Subject, Observable } from 'rxjs';
import { PagedList } from '../../views/partials/layout/paged-list';
@Injectable()



export class ProyectosService {
  private proyectos = new Subject<PagedList<Proyectos>>();


  constructor(private http: HttpClient) {
    this.getProyectos();
  }

  get proyectos$(): Observable<PagedList<Proyectos>> {
    return this.proyectos.asObservable();
  }

  getProyectos(pageIndex = 1, pageSize = 5) {
    this.http.get<Proyectos>(`api/proyectos/proyectos`, {
      params: new HttpParams()
        .set("query.pageSize", `${1000000}`)
        .set("query.page", `${pageIndex - 1}`)
    })
      .pipe(
        catchError(error => of(error))
      )
      .subscribe(data => this.proyectos.next(data));
  }

    saveProyectos$ = (data :Proyectos) => this.http.post<Proyectos>(`api/proyectos/proyectos`,data).pipe(
      catchError(error => of(error))
    );;
    updateProyectos$ = (data :Proyectos) => this.http.put<Proyectos>(`api/proyectos/proyectos`,data)
    .pipe(
      catchError(error => of(error))
    );

}