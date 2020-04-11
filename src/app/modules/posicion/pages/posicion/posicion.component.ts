import { Component, OnInit } from '@angular/core';
import { PosicionService } from '../../posicion.service';
import { PageEvent } from '@angular/material';
import { Subject } from 'rxjs';

@Component({
  selector: 'sys-posicion',
  templateUrl: './posicion.component.html'
})
export class PosicionComponent {

  destroyed$ = new Subject<void>();
  posiciones$ = this.service.posiciones$;

  constructor(
    private service: PosicionService) {
  }
  onPaging($event: PageEvent) {
    this.service.getPosiciones($event.pageIndex + 1, $event.pageSize)
  }
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

}
