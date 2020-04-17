import { Component, OnInit } from '@angular/core';
import { Posicion } from '../../models/posicion.model';
import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PosicionService } from '../../posicion.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'sys-posicion-edit',
  templateUrl: './posicion-edit.component.html',
  styles: []
})
export class PosicionEditComponent implements OnInit {

  posicion$: Observable<Posicion> = of(null);

  constructor(
    private router: ActivatedRoute,
    private services: PosicionService,
  ) { }

  ngOnInit() {
    this.posicion$ = this.router.paramMap.pipe(
      switchMap(params => this.services.getPosicionByid(+params.get('id')))
    );
  }

}
