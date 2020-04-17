import { Component, OnInit } from '@angular/core';
import { Proyectos } from '../../models/proyectos-models';
import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProyectosService } from '../../proyectos.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'sys-proyectos-edit',
  templateUrl: './proyectos-edit.component.html',
  styles: []
})
export class ProyectosEditComponent implements OnInit {

  proyecto$: Observable<Proyectos> = of(null);

  constructor(
    private router: ActivatedRoute,
    private services: ProyectosService,
  ) { }

  ngOnInit() {
    this.proyecto$ = this.router.paramMap.pipe(
      switchMap(params => this.services.getProyectoByid(+params.get('id')))
    );
  }

}
