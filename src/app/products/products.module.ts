import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import {FlexModule} from "@angular/flex-layout";
import {ViewTableModule} from "../../ui/view-table/view-table.module";
import {MatTabsModule} from "@angular/material/tabs";


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    FlexModule,
    ViewTableModule,
    MatTabsModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
