import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { TeamsService } from '../../teams.service';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'sys-teams',
  templateUrl: './teams.component.html'
})
export class TeamsComponent {


  destroyed$ = new Subject<void>();
  teams$ = this.service.teams$;

  constructor(
    private service: TeamsService) {
  }
  onPaging($event: PageEvent) {
    this.service.getTeams($event.pageIndex + 1, $event.pageSize)
  }
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
