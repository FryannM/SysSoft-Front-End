import { Injectable } from '@angular/core';
import { TeamColaboradores } from './models/team-colaboradores. models';
import { Subject, Observable, of } from 'rxjs';
import { PagedList } from '../../views/partials/layout/paged-list';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Team } from '../teams/models/teams.model';

@Injectable()
export class TeamColaboradorService {

  private teamColaboradores = new Subject<PagedList<TeamColaboradores>>();
  BaseUrl = 'api/teamcolaboradores';
  TeamUrl = 'api/Teams';



  constructor(private http: HttpClient) {
    this.getTeamcolaboradores();
  }

  get getTeamcolaboradores$(): Observable<PagedList<TeamColaboradores>> {
    return this.teamColaboradores.asObservable();
  }

  getTeamcolaboradores(pageIndex = 1, pageSize = 5) {
    this.http.get<Team>(`${this.TeamUrl}/teams`, {
      params: new HttpParams()
        .set("query.pageSize", `${1000000}`)
        .set("query.page", `${pageIndex - 1}`)
    }).pipe(catchError(error => of(error)))
      .subscribe(data => this.teamColaboradores.next(data));
  }

  saveTeamcolaboradores$ = (data: TeamColaboradores) =>
    this.http.post<TeamColaboradores>(`${this.BaseUrl}/teamcolaboradores`, data)
      .pipe(catchError(error => of(error)));

  updateTeamcolaboradores$ = (data: TeamColaboradores) =>
    this.http.put<TeamColaboradores>(`${this.BaseUrl}/teamcolaboradores`, data)
      .pipe(catchError(error => of(error)));

  getTeamcolaboradoresByid = (id: number) => this.http.get<TeamColaboradores>(`${this.BaseUrl}/${id}`)
    .pipe(catchError(error => of(error)));

  deleteTeamcolaboradores$ = (id: number) => this.http.delete<TeamColaboradores>(`${this.BaseUrl}/${id}`);
}
