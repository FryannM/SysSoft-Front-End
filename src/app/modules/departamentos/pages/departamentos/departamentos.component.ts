import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DepartamentosService } from '../../departamentos.service';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'sys-departamentos',
  templateUrl: './departamentos.component.html'
})
export class DepartamentosComponent  {
 
  destroyed$ = new Subject<void>();
  departamentos$ = this.service.departamentos$;

  constructor(
    private service: DepartamentosService) {
  }
  onPaging($event: PageEvent) {
    this.service.getDepartamentos($event.pageIndex + 1, $event.pageSize)
  }
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
