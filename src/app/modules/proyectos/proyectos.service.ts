import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Proyectos } from './models/proyectos-models';
import { catchError } from 'rxjs/operators';
import { of, Subject, Observable } from 'rxjs';

@Injectable()

export class ProyectosService {
  private proyectos = new Subject<Proyectos>();

  constructor( private http : HttpClient) { 
    this.getProyectos();  
  }
  get getProyecto$(): Observable<Proyectos> {
    return this.proyectos.asObservable();  }


  getProyectos(pageIndex = 1, pageSize = 5) {
    this.http.get<Proyectos>('https://localhost:5001/api/Util/proyectos', {
      params: new HttpParams()
        .set("query.pageSize", `${1000000}`)
        .set("query.page", `${pageIndex - 1}`)
    })
      .pipe(
        catchError(error => of(error))
      )
      .subscribe(data => this.proyectos.next(data));
  }
    //  getProyectos$ = () => this.http.get<Proyectos>('https://localhost:5001/api/Util/proyectos');

}
