import { Component, OnInit } from '@angular/core';
import { DepartamentosService } from '../../departamentos.service';
import { Observable, of } from 'rxjs';
import { Colaboradores } from 'src/app/modules/colaboradores/models/colaboradores.model';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'sys-departamento-edit',
  templateUrl: './departamento-edit.component.html',
  styles: []
})
export class DepartamentoEditComponent implements OnInit {

  departamento$: Observable<Colaboradores> = of(null);

  constructor(
    private router: ActivatedRoute,
    private services: DepartamentosService,
  ) { }

  ngOnInit() {
    this.departamento$ = this.router.paramMap.pipe(
      switchMap(params => this.services.getDepartamentoByid(+params.get('id')))
    );
  }

}
