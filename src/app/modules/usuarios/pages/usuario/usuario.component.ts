import { Component, OnInit, OnDestroy } from '@angular/core';
import { Usuario } from '../../models/usuario.models';
import { Observable, Subject } from 'rxjs';
import { UsuarioService } from '../../usuario.service';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'sys-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnDestroy {

  destroyed$ = new Subject<void>();
  usuario$ = this.service.Usuarios$;

  constructor(private service: UsuarioService,
  ) { }
  onPagin($event: PageEvent) {
    this.service.getUsuarios($event.pageIndex + 1, $event.pageSize)

  }
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }


}

