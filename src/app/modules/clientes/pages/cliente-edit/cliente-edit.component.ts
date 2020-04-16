import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/clientes.models';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from '../../clientes.service';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'sys-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styles: []
})
export class ClienteEditComponent implements OnInit {

  cliente$: Observable<Cliente> = of(null);

  constructor(
    private router: ActivatedRoute,
    private services: ClientesService,
  ) { }

  ngOnInit() {
    this.cliente$ = this.router.paramMap.pipe(
      switchMap(params => this.services.getClienteByid(+params.get('id')))
    );
  }

}
