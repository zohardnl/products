import {Component, OnInit, ChangeDetectionStrategy, Input, ViewChild, AfterViewInit} from '@angular/core';
import {Car, DefaultDataFields, Laptop} from "../../core/models";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'vdoo-view-table',
  templateUrl: './view-table.component.html',
  styleUrls: ['./view-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewTableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;
  @Input() data: DefaultDataFields[] | Car[] | Laptop[];
  displayedColumns: string[];
  dataSource: MatTableDataSource<DefaultDataFields | Car | Laptop>;

  constructor() {
  }

  ngOnInit(): void {

    this.dataSource = new MatTableDataSource(this.data);
    this.displayedColumns = Object.keys(this.data[0]);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  trackByIndex = (index: number, item: string) => {
    return index;
  }
}
