import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { TeamColaboradorService } from '../../team-colaborador.service';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'sys-team-colaborador',
  templateUrl: './team-colaborador.component.html',
  styles: []
})
export class TeamColaboradorComponent  {

  destroyed$ = new Subject<void>();
  teamColaborador$ = this.service.getTeamcolaboradores$

  constructor(
    private service: TeamColaboradorService) {
  }
  onPaging($event: PageEvent) {
    this.service.getTeamcolaboradores($event.pageIndex + 1, $event.pageSize)
  }
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

}
