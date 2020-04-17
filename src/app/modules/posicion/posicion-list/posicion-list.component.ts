import { Component, OnInit, ViewChild, Input, ElementRef, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, PageEvent } from '@angular/material';
import { Subscription } from 'rxjs';
import { Posicion } from '../models/posicion.model';
import { Router, ActivatedRoute } from '@angular/router';
import { LayoutUtilsService, MessageType } from '../../../core/_base/crud';
import { PosicionService } from '../posicion.service';

@Component({
  selector: 'sys-posicion-list',
  templateUrl: './posicion-list.component.html'
})
export class PosicionListComponent implements OnInit {
  title: string = "Lista de Posiciones Disponibles";
  createUrl = "posiciones/new";
  EditURl = '/posiciones/edit';


  length = 0;
  show = true;
  dataSource = new MatTableDataSource();
  displayedColumns = ['id', 'descripcion', 'perfil', 'sueldo', 'estado', 'actions'];
  isLoading = true;


  private subscriptions: Subscription[] = [];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild('searchInput', { static: true }) searchInput: ElementRef;
  @ViewChild('sort', { static: true }) sort: MatSort;
  @Input()
  set posiciones(posiciones: Posicion[]) {
    if (!posiciones)
      return;

    this.dataSource = new MatTableDataSource(posiciones);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator
  }

  @Output()
  paging = new EventEmitter<PageEvent>();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private layoutUtilsService: LayoutUtilsService,
    private service: PosicionService) {
  }
  ngOnInit() {
    this.service.getPosiciones();
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
  deletePosicion(_item: Posicion) {

    const _title = 'Eliminar Posición';
    const _description = `Esta seguro que desea eliminar este Posición ?`;
    const _waitDesciption = 'Eliminando Posición...';
    const _deleteMessage = `Posición ha sido eliminada`;

    const dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
    dialogRef.afterClosed().subscribe(res => {
      if (!res) {
        return;
      }
      _item.estado = 'I';
      // this.service.deleteBranchOffice$(_item).subscribe();
      // this.service.getBranchOffices();
      this.layoutUtilsService.showActionNotification(_deleteMessage, MessageType.Delete, 2000, true, false)
      this.service.getPosiciones();
    });

  }
  ngOnDestroy() {
    this.subscriptions.forEach(el => el.unsubscribe());
  }

}
