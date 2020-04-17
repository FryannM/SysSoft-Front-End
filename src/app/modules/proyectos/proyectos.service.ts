import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Proyectos, ProyectosDto } from './models/proyectos-models';
import { catchError } from 'rxjs/operators';
import { of, Subject, Observable } from 'rxjs';
import { PagedList } from '../../views/partials/layout/paged-list';
@Injectable()



export class ProyectosService {
  private proyectos = new Subject<PagedList<Proyectos>>();
  BaseUrl ='api/proyectos';


  constructor(private http: HttpClient) {
    this.getProyectos();
  }

  get proyectos$(): Observable<PagedList<Proyectos>> {
    return this.proyectos.asObservable();
  }

  getProyectos(pageIndex = 1, pageSize = 5) {
    this.http.get<Proyectos>(`${this.BaseUrl}/proyectos`, {
      params: new HttpParams()
        .set("query.pageSize", `${1000000}`)
        .set("query.page", `${pageIndex - 1}`)
    })
      .pipe(
        catchError(error => of(error))
      )
      .subscribe(data => this.proyectos.next(data));
  }

   getProyectoslist = () => this.http.get<ProyectosDto[]>(`${this.BaseUrl}/proyectos-list`)

   getProyectoByid = (id: number) => this.http.get<Proyectos>(`${this.BaseUrl}/${id}`)
   .pipe(catchError(error => of(error)));

    saveProyectos$ = (data :Proyectos) => this.http.post<Proyectos>(`${this.BaseUrl}/proyecto`,data).pipe(
      catchError(error => of(error))
    );;
    updateProyectos$ = (data :Proyectos) => this.http.put<Proyectos>(`${this.BaseUrl}/proyecto`,data)
    .pipe(
      catchError(error => of(error))
    );



}