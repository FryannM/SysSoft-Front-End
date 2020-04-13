import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../clientes.service';
import { PageEvent } from '@angular/material';
import { Subject } from 'rxjs';

@Component({
  selector: 'sys-clientes',
  templateUrl: './clientes.component.html',
  styles: []
})
export class ClientesComponent  {

  destroyed$ = new Subject<void>();
  clientes$ = this.service.clientes$;

  constructor(
    private service: ClientesService) {
  }
  onPaging($event: PageEvent) {
    this.service.getClientes($event.pageIndex + 1, $event.pageSize)
  }
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

}
