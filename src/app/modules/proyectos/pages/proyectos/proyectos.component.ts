import { Component, OnInit } from '@angular/core';
import { ProyectosService } from '../../proyectos.service';
import { Subject } from 'rxjs';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'sys-proyectos',
  templateUrl: './proyectos.component.html'
})
export class ProyectosComponent  {

  
  destroyed$ = new Subject<void>();
  proyectos$ = this.service.proyectos$;

  constructor(
    private service: ProyectosService) {
  }
  onPaging($event: PageEvent) {
    this.service.getProyectos($event.pageIndex + 1, $event.pageSize)
  }
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}