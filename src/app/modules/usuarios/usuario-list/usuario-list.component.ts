import { Component, OnInit, EventEmitter, Output, ViewChild, Input, ElementRef } from '@angular/core';
import { Usuario } from '../models/usuario.models';
import { UsuarioService } from '../usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PageEvent, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { LayoutUtilsService, MessageType } from '../../../core/_base/crud';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sys-usuario-list',
  templateUrl: './usuario-list.component.html',
  styles: []
})
export class UsuarioListComponent implements OnInit {

  title: string = "Lista de Usuarios";
  createUrl = "/usuarios/new";
  EditURl = '/usuarios/edit';

  length = 0;
  show = true;
  dataSource = new MatTableDataSource();
  displayedColumns = ['id', 'name', 'username', 'email', 'cargo', 'estado', 'actions'];



  private subscriptions: Subscription[] = [];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild('searchInput', { static: true }) searchInput: ElementRef;
  @ViewChild('sort', { static: true }) sort: MatSort;
  @Input()
  set usuarios(Usuarios: Usuario[]) {
    if (!Usuarios)
      return;

    this.dataSource = new MatTableDataSource(Usuarios);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator
  }

  @Output()
  paging = new EventEmitter<PageEvent>();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private layoutUtilsService: LayoutUtilsService,
    private service: UsuarioService) {
  }
  ngOnInit() {
    this.service.getUsuarios();
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
  deleteUsuario(_item: Usuario) {

    const _title = 'Eliminar Usuarios';
    const _description = 'Esta seguro que desea eliminar este Usuario ?';
    const _waitDesciption = 'Eliminando Usuario...';
    const _deleteMessage = `Usuario ha sido eliminada`;

    const dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
    dialogRef.afterClosed().subscribe(res => {
      if (!res) {
        return;
      }
 
      this.service.deleteUsuario$(_item.id).subscribe();
      this.layoutUtilsService.showActionNotification(_deleteMessage, MessageType.Delete, 2000, true, false)
      this.service.getUsuarios();
    });

  }
  ngOnDestroy() {
    this.subscriptions.forEach(el => el.unsubscribe());
  }

}
