import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output, Input } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, PageEvent } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { ProyectosService } from '../proyectos.service';
import { Proyectos } from '../models/proyectos-models';
import { LayoutUtilsService, MessageType } from '../../../core/_base/crud';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sys-proyectos-list',
  templateUrl: './proyectos-list.component.html',
})
export class ProyectosListComponent implements OnInit {

  title: string = "Lista de Proyectos";
  createUrl = "proyectos/new";
  EditURl = '/proyectos/edit';

  length = 0;
  show = true;
  dataSource = new MatTableDataSource();
  displayedColumns = ['id', 'descripcion', 'fechaInicio', 'fechaFin', 'estado', 'actions'];
  isLoading = true;
  private subscriptions: Subscription[] = [];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild('searchInput', { static: true }) searchInput: ElementRef;
  @ViewChild('sort', { static: true }) sort: MatSort;
  @Input()
  set proyectos(proyectos: Proyectos[]) {
    if (!proyectos)
      return;

    this.dataSource = new MatTableDataSource(proyectos);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator
  }

  @Output()
  paging = new EventEmitter<PageEvent>();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private layoutUtilsService: LayoutUtilsService,
    private service: ProyectosService) {

  }

  ngOnInit() {
    this.service.getProyectos();
  }
  applyFilter(event: string) {
    this.dataSource.filter = event.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.isLoading = false;
  }
  viewDetaiRequest(id) {
    this.router.navigate([this.EditURl, id], { relativeTo: this.activatedRoute });
  }

  onCreate() {
    this.router.navigate([this.createUrl])
  }
  deleteProyecto(_item: Proyectos) {

    const _title = 'Eliminar Proyecto';
    const _description = 'Esta seguro que desea eliminar esta Proyecto  ?';
    const _waitDesciption = 'Eliminando Sucursal...';
    const _deleteMessage = `Proyecto ha sido eliminada`;

    const dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
    dialogRef.afterClosed().subscribe(res => {
      if (!res) {
        return;
      }
      _item.estado = 'I';
      // this.service.deleteBranchOffice$(_item).subscribe();
      // this.service.getBranchOffices();
      this.layoutUtilsService.showActionNotification(_deleteMessage, MessageType.Delete, 2000, true, false)
      this.service.getProyectos();
    });

  }
  ngOnDestroy() {
    this.subscriptions.forEach(el => el.unsubscribe());
  }
}