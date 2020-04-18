import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { Errores } from '../models/errores.models';
import { ErrorService } from '../error.service';
import { MatTableDataSource, MatPaginator, MatSort, PageEvent } from '@angular/material';
import { Subscription } from 'rxjs';
import { LayoutUtilsService, MessageType } from '../../../core/_base/crud';

@Component({
  selector: 'sys-errores-list',
  templateUrl: './errores-list.component.html'
})
export class ErroresListComponent implements OnInit {
  title: string = "Lista de Errores en el Sistema";

  length = 0;
  show = true;
  dataSource = new MatTableDataSource();
  displayedColumns = ['id', 'mensaje', 'stackTrace', 'source', 'actions'];
  isLoading = true;
  private subscriptions: Subscription[] = [];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild('searchInput', { static: true }) searchInput: ElementRef;
  @ViewChild('sort', { static: true }) sort: MatSort;
  @Input()
  set errores(errores: Errores[]) {
    if (!errores)
      return;

    this.dataSource = new MatTableDataSource(errores);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator
  }

  @Output()
  paging = new EventEmitter<PageEvent>();

  constructor(
    private layoutUtilsService: LayoutUtilsService,
    private service: ErrorService) {

  }

  ngOnInit() {
    this.service.getErrores();
  }
  applyFilter(event: string) {
    this.dataSource.filter = event.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.isLoading = false;
  }
  viewDetaiRequest(id) {
  }

  onCreate() {
  }
  deleteErrores(_item: Errores) {
    const _title = 'Eliminar Errores';
    const _description = 'Esta seguro que desea eliminar esta Errores ?';
    const _waitDesciption = 'Eliminando Errores...';
    const _deleteMessage = `Errores ha sido eliminada`;

    const dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
    dialogRef.afterClosed().subscribe(res => {
      if (!res) {
        return;
      }
      //this.service.deleteTarea$(_item.id).subscribe();
      this.layoutUtilsService.showActionNotification(_deleteMessage, MessageType.Delete, 2000, true, false)
      this.service.getErrores();
    });

  }
  ngOnDestroy() {
    this.subscriptions.forEach(el => el.unsubscribe());
  }


}
