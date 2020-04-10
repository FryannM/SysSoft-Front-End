import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'sys-proyectos-list',
  templateUrl: './proyectos-list.component.html',
  styles: []
})
export class ProyectosListComponent implements OnInit {

  length = 0;
  show = true;
  dataSource = new MatTableDataSource();
  displayedColumns = ['id', 'description', 'city', 'address', 'status', 'actions'];
  isLoading = true;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild('searchInput', { static: true }) searchInput: ElementRef;
  @ViewChild('sort', { static: true }) sort: MatSort;
  constructor() { }

  ngOnInit() {
  }

}
