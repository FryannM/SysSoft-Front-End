import { Component, OnInit, ViewChild, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { MatTableDataSource, MatPaginator, PageEvent, MatSort } from '@angular/material';
import { Subscription } from 'rxjs';
import { Colaboradores } from '../models/colaboradores.model';
import { Router, ActivatedRoute } from '@angular/router';
import { LayoutUtilsService, MessageType } from '../../../core/_base/crud';
import { ColaboradoresService } from '../colaboradores.service';

@Component({
  selector: 'sys-colaboradores-lit',
  templateUrl: './colaboradores-lit.component.html'
})
export class ColaboradoresLitComponent implements OnInit {

  
  title: string = "Lista de Colaboradores";
  createUrl = "colaboradores/new";
  EditURl = '/colaboradores/edit';

  length = 0;
  show = true;
  dataSource = new MatTableDataSource();
  displayedColumns = ['id', 'cedula', 'nombre1', 
  'apellido1','estado', 'sexo','fecha_Nacimiento',
  'departamento','pocisiones','actions'];


  private subscriptions: Subscription[] = [];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild('searchInput', { static: true }) searchInput: ElementRef;
  @ViewChild('sort', { static: true }) sort: MatSort;
  @Input()
  set colaboradores(colaboradores: Colaboradores[]) {
    if (!colaboradores)
      return;

    this.dataSource = new MatTableDataSource(colaboradores);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator
  }

  @Output()
  paging = new EventEmitter<PageEvent>();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private layoutUtilsService: LayoutUtilsService,
    private service: ColaboradoresService) {
  }
  ngOnInit() {
    this.service.getColaboradores();
  }
  applyFilter(event: string) {
    this.dataSource.filter = event.trim().toLowerCase();
  }

  ngAfterViewInit() {
  }
  viewDetaiRequest(id) {
    this.router.navigate([this.EditURl, id], { relativeTo: this.activatedRoute });
  }

  onCreate() {
    this.router.navigate([this.createUrl])
  }
  deleteColaborador(_item: Colaboradores) {

    const _title = 'Eliminar Colaboradores';
    const _description = 'Esta seguro que desea eliminar este Colaborador ?';
    const _waitDesciption = 'Eliminando Colaborador...';
    const _deleteMessage = `Colaborador ha sido eliminada`;

    const dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
    dialogRef.afterClosed().subscribe(res => {
      if (!res) {
        return;
      }
      this.service.deleteColaboradore$(_item.id).subscribe(res => {
       console.log(res);
       });
      this.layoutUtilsService.showActionNotification(_deleteMessage, MessageType.Delete, 3000, true, false)
      this.service.getColaboradores();
    });

  }
  ngOnDestroy() {
    this.subscriptions.forEach(el => el.unsubscribe());
  }
}
