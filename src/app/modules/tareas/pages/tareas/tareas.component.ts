import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { TareasService } from '../../tareas.service';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'sys-tareas',
  templateUrl: './tareas.component.html',
  styles: []
})
export class TareasComponent {
  destroyed$ = new Subject<void>();
  tareas$ = this.service.getTareas$

  constructor(
    private service: TareasService) {
  }
  onPaging($event: PageEvent) {
    this.service.getTareas($event.pageIndex + 1, $event.pageSize)
  }
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

}
