import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Team } from '../../models/teams.model';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { TeamsService } from '../../teams.service';

@Component({
  selector: 'sys-teams-edit',
  templateUrl: './teams-edit.component.html',
  styles: []
})
export class TeamsEditComponent implements OnInit {

  team$: Observable<Team> = of(null);

  constructor(
    private router: ActivatedRoute,
    private services: TeamsService,
  ) { }

  ngOnInit() {
    this.team$ = this.router.paramMap.pipe(
      switchMap(params => this.services.getTeamByid(+params.get('id')))
    );
  }

}
