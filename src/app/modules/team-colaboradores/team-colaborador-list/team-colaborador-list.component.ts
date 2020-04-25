import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { TeamColaboradores } from '../models/team-colaboradores. models';
import { TeamColaboradorService } from '../team-colaborador.service';
import { MatTableDataSource, MatPaginator, MatSort, PageEvent } from '@angular/material';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { LayoutUtilsService, MessageType } from '../../../core/_base/crud';
import { Team } from '../../teams/models/teams.model';

@Component({
  selector: 'sys-team-colaborador-list',
  templateUrl: './team-colaborador-list.component.html',
  styles: []
})
export class TeamColaboradorListComponent implements OnInit {

  title: string = "Lista de Team  y Sus colaboradores";
  createUrl = "Teamcolaboradores/new";
  EditURl = '/Teamcolaboradores/edit';

  length = 0;
  show = true;
  dataSource = new MatTableDataSource();
  displayedColumns = ['id', 'descripcion', 'cantidadIntegrantes', 'fechaCreacion', 'proyecto','estado', 'actions'];
  isLoading = true;
  private subscriptions: Subscription[] = [];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild('searchInput', { static: true }) searchInput: ElementRef;
  @ViewChild('sort', { static: true }) sort: MatSort;
  @Input()
  set teamcolaboradores(teamcolaboradores: Team[]) {
    if (!teamcolaboradores)
      return;

    this.dataSource = new MatTableDataSource(teamcolaboradores);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator
  }

  @Output()
  paging = new EventEmitter<PageEvent>();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private layoutUtilsService: LayoutUtilsService,
    private service: TeamColaboradorService) {

  }

  ngOnInit() {
    this.service.getTeamcolaboradores();
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
  deleteteamcolaborador(_item: TeamColaboradores) {

    const _title = 'Eliminar Tarea';
    const _description = 'Esta seguro que desea eliminar esta Tarea ?';
    const _waitDesciption = 'Eliminando Tarea...';
    const _deleteMessage = `Tarea ha sido eliminada`;

    const dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
    dialogRef.afterClosed().subscribe(res => {
      if (!res) {
        return;
      }
      this.service.deleteTeamcolaboradores$(_item.id).subscribe();
      this.layoutUtilsService.showActionNotification(_deleteMessage, MessageType.Delete, 2000, true, false)
      this.service.getTeamcolaboradores();
    });

  }
  ngOnDestroy() {
    this.subscriptions.forEach(el => el.unsubscribe());
  }


}
