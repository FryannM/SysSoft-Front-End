import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, PageEvent } from '@angular/material';
import { Subscription } from 'rxjs';
import { Team } from '../models/teams.model';
import { Router, ActivatedRoute } from '@angular/router';
import { LayoutUtilsService, MessageType } from '../../../core/_base/crud';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'sys-teams-list',
  templateUrl: './teams-list.component.html'
})
export class TeamsListComponent implements OnInit {
  title: string = "Lista de Teams Formados";
  createUrl = "proyectos/new";
  EditURl = '/proyectos/edit';

  length = 0;
  show = true;
  dataSource = new MatTableDataSource();
  displayedColumns = ['codigo', 'descripcion','cantidadIntegrantes','proyectos','fechaCreacion','estado', 'actions'];
  isLoading = true;
  private subscriptions: Subscription[] = [];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild('searchInput', { static: true }) searchInput: ElementRef;
  @ViewChild('sort', { static: true }) sort: MatSort;
  @Input()
  set teams(teams: Team[]) {
    if (!teams)
      return;

    this.dataSource = new MatTableDataSource(teams);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator
  }

  @Output()
  paging = new EventEmitter<PageEvent>();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private layoutUtilsService: LayoutUtilsService,
    private service: TeamsService) {

  }

  ngOnInit() {
    this.service.getTeams();
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
  deleteProyecto(_item: Team) {

    const _title = 'Eliminar Team';
    const _description = 'Esta seguro que desea eliminar esta Team  ?';
    const _waitDesciption = 'Eliminando Sucursal...';
    const _deleteMessage = `Team ha sido eliminada`;

    const dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
    dialogRef.afterClosed().subscribe(res => {
      if (!res) {
        return;
      }
      _item.estado = 'I';
     // this.service.deleteBranchOffice$(_item).subscribe();
     // this.service.getBranchOffices();
      this.layoutUtilsService.showActionNotification(_deleteMessage, MessageType.Delete, 2000, true, false)
      this.service.getTeams();
    });

  }
  ngOnDestroy() {
    this.subscriptions.forEach(el => el.unsubscribe());
  }
}
