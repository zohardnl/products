import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {DataService} from "../../core/services/data.service";
import {ProductData} from "../../core/models";

@Component({
  selector: 'vdoo-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit {
  productsData: ProductData[];

  constructor(private dataService: DataService) {
    this.productsData = dataService.allData;
  }

  ngOnInit(): void {
  }

  trackByIndex = (index: number, item: ProductData) => {
    return index;
  }
}
