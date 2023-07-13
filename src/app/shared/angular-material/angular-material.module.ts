import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule
  ],    
  exports: [
    MatTableModule,
    MatSortModule
  ]
})
export class AngularMaterialModule { }
