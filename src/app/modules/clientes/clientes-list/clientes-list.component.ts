import { Component, OnInit, ViewChild, Input, ElementRef, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, PageEvent } from '@angular/material';
import { Subscription } from 'rxjs';
import { Clientes } from '../models/clientes.models';
import { MessageType, LayoutUtilsService } from '../../../core/_base/crud';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'sys-clientes-list',
  templateUrl: './clientes-list.component.html',
  styles: []
})
export class ClientesListComponent implements OnInit {

  title: string = "Lista de Clientes";
  createUrl = "/clientes/new";
  EditURl = '/clientes/edit';

  length = 0;
  show = true;
  dataSource = new MatTableDataSource();
  displayedColumns =['id','nombre1','apellido1','cedulaRnc','email','telefono','proyecto','actions'];

      

  private subscriptions: Subscription[] = [];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild('searchInput', { static: true }) searchInput: ElementRef;
  @ViewChild('sort', { static: true }) sort: MatSort;
  @Input()
  set clientes(clientes: Clientes[]) {
    if (!clientes)
      return;

    this.dataSource = new MatTableDataSource(clientes);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator
  }

  @Output()
  paging = new EventEmitter<PageEvent>();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private layoutUtilsService: LayoutUtilsService,
    private service: ClientesService) {
  }
  ngOnInit() {
    this.service.getClientes();
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
  deleteCliente(_item: Clientes) {

    const _title = 'Eliminar Clientes';
    const _description = 'Esta seguro que desea eliminar este Cliente ?';
    const _waitDesciption = 'Eliminando Cliente...';
    const _deleteMessage = `departamento ha sido eliminada`;

    const dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
    dialogRef.afterClosed().subscribe(res => {
      if (!res) {
        return;
      }
     
      // this.service.deleteBranchOffice$(_item).subscribe();
      // this.service.getBranchOffices();
      this.layoutUtilsService.showActionNotification(_deleteMessage, MessageType.Delete, 2000, true, false)
      this.service.getClientes();
    });

  }
  ngOnDestroy() {
    this.subscriptions.forEach(el => el.unsubscribe());
  }

}
