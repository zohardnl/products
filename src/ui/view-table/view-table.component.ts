import {Component, OnInit, ChangeDetectionStrategy, Input, ViewChild, AfterViewInit} from '@angular/core';
import {Car, DefaultDataFields, Laptop} from "../../core/models";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'vdoo-view-table',
  templateUrl: './view-table.component.html',
  styleUrls: ['./view-table.component.scss'],
  providers: [CurrencyPipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewTableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;
  @Input() data: DefaultDataFields[] | Car[] | Laptop[];

  @Input() set filterBy(val: string) {
    if (this.dataSource) {
      this.dataSource.filter = val;
    }
  }

  displayedColumns: string[];
  dataSource: MatTableDataSource<DefaultDataFields | Car | Laptop>;

  constructor(private currencyPipe: CurrencyPipe) {
  }

  ngOnInit(): void {
    this.data = this.data.map(item => {
      return {
        ...item,
        // price: this.currencyPipe.transform(item.price, 'USD', 'symbol')
      }
    });

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
