import {Component, OnInit, ChangeDetectionStrategy, AfterViewInit} from '@angular/core';
import {DataService} from "../../core/services/data.service";
import {ProductData} from "../../core/models";
import {FormControl} from "@angular/forms";
import {debounceTime, distinctUntilChanged} from "rxjs/operators";
import {Observable} from "rxjs";
import {MatTabChangeEvent} from "@angular/material/tabs";

@Component({
  selector: 'vdoo-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit, AfterViewInit {
  productsData: ProductData[];
  searchControl: FormControl = new FormControl('');
  filterBy: Observable<string>;

  constructor(private dataService: DataService) {
    this.productsData = dataService.allData;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.filterBy = this.searchControl.valueChanges.pipe(
      debounceTime(800), distinctUntilChanged());
  }

  trackByIndex = (index: number, item: ProductData) => {
    return index;
  }

  onTabChange(event: MatTabChangeEvent) {
    this.searchControl.reset('');
  }
}
