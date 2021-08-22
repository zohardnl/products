import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import {Car, Laptop, Phone} from "../../core/models";
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
  @ViewChild(MatSort) private readonly sort: MatSort;
  @Input() data: Phone[] | Car[] | Laptop[];

  @Input() set filterBy(val: string) {
    if (this.dataSource) {
      this.dataSource.filter = val.trim().toLowerCase();
    }
  }

  displayedColumns: string[];
  dataSource: MatTableDataSource<Phone | Car | Laptop>;

  constructor(private currencyPipe: CurrencyPipe) {
  }

  ngOnInit(): void {
    //to take the key names, because its the same in all other indexes
    this.displayedColumns = Object.keys(this.data[0]).map(key => key.toLowerCase());

    this.data = this.data.map(item => {
      return {
        ...item,
        price: this.currencyPipe.transform(item.price, CurrenciesCode.Usd, DisplayAmountBy.Symbol),
        priceAmount: +item.price
      }
    });

    this.dataSource = new MatTableDataSource(this.data);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = this.filterTable;
  }

  private filterTable = (data: Phone | Car | Laptop, filter: string): boolean => {
    return data.name.toLowerCase().includes(filter) || data.vendor.toLowerCase().includes(filter);
  }

  trackByFn = (index: number, item: Phone | Car | Laptop): number => {
    return index;
  }

  sortBy(event: Sort): void {
    this.dataSource.sortingDataAccessor = (data: Phone | Car | Laptop, sortHeaderId: string): string | number => {
      if (sortHeaderId === ProductFieldsName.Price) {
        return data.priceAmount;
      }

      return data[sortHeaderId];
    }
  }
}
