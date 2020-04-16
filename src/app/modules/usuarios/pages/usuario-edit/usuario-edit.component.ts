import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../usuario.service';
import { switchMap } from 'rxjs/operators';
import { Usuario } from '../../models/usuario.models';

@Component({
  selector: 'sys-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styles: []
})
export class UsuarioEditComponent implements OnInit {
  
  usuario$: Observable<Usuario> = of(null);

  constructor(
    private router: ActivatedRoute,
    private services: UsuarioService,
  ) { }

  ngOnInit() {
    this.usuario$ = this.router.paramMap.pipe(
      switchMap(params => this.services.getUsuarioByid(+params.get('id')))
    );
  }

}
