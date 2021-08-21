import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ViewTableComponent} from './view-table.component';
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";


@NgModule({
  declarations: [
    ViewTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule
  ],
  exports: [ViewTableComponent]
})
export class ViewTableModule {
}
