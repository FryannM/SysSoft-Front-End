import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Proyectos } from './models/proyectos-models';
import { catchError } from 'rxjs/operators';
import { of, Subject, Observable } from 'rxjs';
@Injectable()



export class ProyectosService {
  private proyectos = new Subject<Proyectos>();

  //private  Url : string  = 'https://localhost:5001';


  constructor( private http : HttpClient) { 
    //this.getProyectos();  
  }
  get getProyecto$(): Observable<Proyectos> {
    return this.proyectos.asObservable();  }
 
    

  getProyectos() {
    this.http.get<Proyectos>(`api/Util/proyectos`, {
    }).subscribe(data => this.proyectos.next(data));
  }
}
