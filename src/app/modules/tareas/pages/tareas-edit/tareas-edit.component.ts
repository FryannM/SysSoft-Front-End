import { Component, OnInit } from '@angular/core';
import { TareasService } from '../../tareas.service';
import { Tareas } from '../../models/tareas.models';
import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'sys-tareas-edit',
  templateUrl: './tareas-edit.component.html',
  styles: []
})
export class TareasEditComponent implements OnInit {
  tarea$: Observable<Tareas> = of(null);

  constructor(
    private router: ActivatedRoute,
    private services: TareasService,
  ) { }

  ngOnInit() {
    this.tarea$ = this.router.paramMap.pipe(
      switchMap(params => this.services.getTareasByid(+params.get('id')))
    );
  }
}
