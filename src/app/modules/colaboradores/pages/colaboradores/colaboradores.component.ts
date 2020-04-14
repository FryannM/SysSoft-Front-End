import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ColaboradoresService } from '../../colaboradores.service';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'sys-colaboradores',
  templateUrl: './colaboradores.component.html',
  styles: []
})
export class ColaboradoresComponent {


  destroyed$ = new Subject<void>();
  colaboradores$ = this.service.colaboradores$;

  constructor(
    private service: ColaboradoresService) {
  }
  onPaging($event: PageEvent) {
    this.service.getColaboradores($event.pageIndex + 1, $event.pageSize)
  }
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

}
