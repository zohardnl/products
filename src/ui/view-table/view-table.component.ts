import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import {ProductDataFields} from "../../core/models";
import {MatSort, Sort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {CurrencyPipe} from "@angular/common";
import {CurrenciesCode, DisplayAmountBy, ProductFieldsName} from "../../core/enums";

@Component({
  selector: 'vdoo-view-table',
  templateUrl: './view-table.component.html',
  styleUrls: ['./view-table.component.scss'],
  providers: [CurrencyPipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewTableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;
  @Input() data: ProductDataFields[];

  @Input() set filterBy(val: string) {
    if (this.dataSource) {
      this.dataSource.filter = val;
    }
  }

  displayedColumns: string[];
  dataSource: MatTableDataSource<ProductDataFields>;

  constructor(private currencyPipe: CurrencyPipe) {
  }

  ngOnInit(): void {
    this.displayedColumns = Object.keys(this.data[0]);

    this.data = this.data.map(item => {
      return {
        ...item,
        price: this.currencyPipe.transform(item.price, CurrenciesCode.Usd, DisplayAmountBy.Symbol),
        priceAmount: +item.price
      } as ProductDataFields
    });

    this.dataSource = new MatTableDataSource(this.data);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = this.filterTable;
  }

  filterTable = (data: ProductDataFields, filter: string) => {
    const filterValue: string = filter.trim().toLowerCase();
    return data.name.toLowerCase().includes(filterValue) || data.vendor.toLowerCase().includes(filterValue);
  }

  trackByFn = (index: number, item: ProductDataFields) => {
    return index;
  }

  sortBy(event: Sort) {
    this.dataSource.sortingDataAccessor = (data: ProductDataFields, sortHeaderId: string): string | number => {
      if (sortHeaderId === ProductFieldsName.Price) {
        return data.priceAmount;
      }

      return data[sortHeaderId];
    }
  }
}
