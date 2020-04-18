import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { PagedList } from './../../views/partials/layout/paged-list';
import { Errores } from './models/errores.models';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorService {
  count = 1000000;
  BaseUrl = 'api/errores';


  private errores = new Subject<PagedList<Errores>>();

  constructor(private http: HttpClient) {
    this.getErrores();
  }

  get Errores$(): Observable<PagedList<Errores>> {
    return this.errores.asObservable();
  }

  getErrores(pageIndex = 1, pageSize = 5) {
    this.http.get<Errores>(`${this.BaseUrl}/errores`, {
      params: new HttpParams()
        .set("query.pageSize", `${this.count}`)
        .set("query.page", `${pageIndex - 1}`)
    }).pipe(catchError(error => of(error)))
      .subscribe(data => this.errores.next(data));
  }
}
