import { Component } from '@angular/core';
import { ErrorService } from '../../error.service';
import { Subject } from 'rxjs';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'sys-errores',
  templateUrl: './errores.component.html',
  styles: []
})
export class ErroresComponent {

  destroyed$ = new Subject<void>();
  error$ = this.service.Errores$;

  constructor(private service: ErrorService,
  ) { }
  onPagin($event: PageEvent) {
    this.service.getErrores($event.pageIndex + 1, $event.pageSize)

  }
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

}
