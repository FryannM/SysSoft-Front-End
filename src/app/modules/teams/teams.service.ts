import { Injectable } from '@angular/core';
import { PagedList } from '../../views/partials/layout/paged-list';
import { Team } from './models/teams.model';
import { Subject, Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class TeamsService {
  private teams = new Subject<PagedList<Team>>();
  BaseUrl = 'api/teams';

  constructor(private http: HttpClient) {
    this.getTeams();
  }

  get teams$(): Observable<PagedList<Team>> {
    return this.teams.asObservable();
  }

  getTeams(pageIndex = 1, pageSize = 5) {
    this.http.get<Team>(`${this.BaseUrl}/teams`, {
      params: new HttpParams()
        .set("query.pageSize", `${1000000}`)
        .set("query.page", `${pageIndex - 1}`)
    })
      .pipe(
        catchError(error => of(error))
      )
      .subscribe(data => this.teams.next(data));
  }

  getTeamByid = (id: number) => this.http.get<Team>(`${this.BaseUrl}/${id}`)
    .pipe(catchError(error => of(error)));

  saveTeams$ = (data: Team) => this.http.post<Team>(`${this.BaseUrl}/team`, data).pipe(
    catchError(error => of(error))
  );;
  updateTeams$ = (data: Team) => this.http.put<Team>(`${this.BaseUrl}/team`, data)
    .pipe(
      catchError(error => of(error))
    );
}
