import { Component, OnInit, ViewChild, ElementRef, Input, EventEmitter, Output } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, PageEvent } from '@angular/material';
import { Subscription } from 'rxjs';
import { Departamentos } from '../models/departamentos';
import { Router, ActivatedRoute } from '@angular/router';
import { LayoutUtilsService, MessageType } from '../../../core/_base/crud';
import { DepartamentosService } from '../departamentos.service';

@Component({
  selector: 'sys-departamentos-list',
  templateUrl: './departamentos-list.component.html',
})
export class DepartamentosListComponent implements OnInit {

  title: string = "Lista de Departamentos";
  createUrl = "departamentos/new";
  EditURl = '/departamentos/edit';

  length = 0;
  show = true;
  dataSource = new MatTableDataSource();
  displayedColumns = ['id','nombre', 'descripcion', 'estado', 'actions'];
  isLoading = true;

  private subscriptions: Subscription[] = [];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild('searchInput', { static: true }) searchInput: ElementRef;
  @ViewChild('sort', { static: true }) sort: MatSort;
  @Input()
  set departamentos(departamentos: Departamentos[]) {
    if (!departamentos)
      return;

    this.dataSource = new MatTableDataSource(departamentos);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator
  }

  @Output()
  paging = new EventEmitter<PageEvent>();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private layoutUtilsService: LayoutUtilsService,
    private service: DepartamentosService) {
  }
  ngOnInit() {
    this.service.getDepartamentos();
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
  deleteDepartamento(_item: Departamentos) {

    const _title = 'Eliminar Departamento';
    const _description = 'Esta seguro que desea eliminar este departamento ?';
    const _waitDesciption = 'Eliminando departamento...';
    const _deleteMessage = `departamento ha sido eliminada`;

    const dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
    dialogRef.afterClosed().subscribe(res => {
      if (!res) {
        return;
      }
      _item.estado = 'I';
      // this.service.deleteBranchOffice$(_item).subscribe();
      // this.service.getBranchOffices();
      this.layoutUtilsService.showActionNotification(_deleteMessage, MessageType.Delete, 2000, true, false)
      this.service.getDepartamentos();
    });

  }
  ngOnDestroy() {
    this.subscriptions.forEach(el => el.unsubscribe());
  }
}