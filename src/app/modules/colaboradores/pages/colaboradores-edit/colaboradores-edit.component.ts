import { Component, OnInit } from '@angular/core';
import { Colaboradores } from '../../models/colaboradores.model';
import { Observable, of } from 'rxjs';
import { ColaboradoresService } from '../../colaboradores.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'sys-colaboradores-edit',
  templateUrl: './colaboradores-edit.component.html',
})
export class ColaboradoresEditComponent implements OnInit {

  colaborador$: Observable<Colaboradores> = of(null);

  constructor(
    private router: ActivatedRoute,
    private services: ColaboradoresService,
  ) { }

  ngOnInit() {
    this.colaborador$ = this.router.paramMap.pipe(
      switchMap(params => this.services.getColaboradorByid(+params.get('id')))
    );
  }

}
