import { Component, OnInit } from '@angular/core';
import { ProyectosService } from '../../proyectos.service';

@Component({
  selector: 'sys-proyectos',
  templateUrl: './proyectos.component.html',
  styles: []
})
export class ProyectosComponent implements OnInit {

  constructor( private service: ProyectosService) { }

  ngOnInit() {
      console.log('LOLOOLOLO',this.service.getProyectos());
    // this.service.getProyectos$().subscribe();
  }

}
