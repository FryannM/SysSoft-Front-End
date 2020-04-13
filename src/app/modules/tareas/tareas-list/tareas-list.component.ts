import { Component, OnInit, ElementRef, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, PageEvent } from '@angular/material';
import { Subscription } from 'rxjs';
import { Tareas } from '../models/tareas.models';
import { Router, ActivatedRoute } from '@angular/router';
import { LayoutUtilsService, MessageType } from '../../../core/_base/crud';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'sys-tareas-list',
  templateUrl: './tareas-list.component.html',
  styles: []
})
export class TareasListComponent implements OnInit {
  title: string = "Lista de Tareas";
  createUrl = "tareas/new";
  EditURl = '/tareas/edit';

  length = 0;
  show = true;
  dataSource = new MatTableDataSource();
  displayedColumns = ['codigo', 'titulo', 'usuario', 'proyecto', 'estado', 'fecha', 'comentario', 'actions'];
  isLoading = true;
  private subscriptions: Subscription[] = [];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild('searchInput', { static: true }) searchInput: ElementRef;
  @ViewChild('sort', { static: true }) sort: MatSort;
  @Input()
  set tareas(tareas: Tareas[]) {
    if (!tareas)
      return;

    this.dataSource = new MatTableDataSource(tareas);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator
  }

  @Output()
  paging = new EventEmitter<PageEvent>();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private layoutUtilsService: LayoutUtilsService,
    private service: TareasService) {

  }

  ngOnInit() {
    this.service.getTareas();
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
  deleteTareas(_item: Tareas) {

    const _title = 'Eliminar Tarea';
    const _description = 'Esta seguro que desea eliminar esta Tarea  ?';
    const _waitDesciption = 'Eliminando Tarea...';
    const _deleteMessage = `Tarea ha sido eliminada`;

    const dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
    dialogRef.afterClosed().subscribe(res => {
      if (!res) {
        return;
      }
      _item.estado = 'I';
      // this.service.deleteBranchOffice$(_item).subscribe();
      // this.service.getBranchOffices();
      this.layoutUtilsService.showActionNotification(_deleteMessage, MessageType.Delete, 2000, true, false)
      this.service.getTareas();
    });

  }
  ngOnDestroy() {
    this.subscriptions.forEach(el => el.unsubscribe());
  }

}
