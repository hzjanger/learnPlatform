import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatPaginatorModule, MatSelectModule,
  MatSlideToggleModule,
  MatTableModule, MatTabsModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatListModule,
    MatCardModule,
    MatChipsModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatTabsModule

  ],
  declarations: [

  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatListModule,
    MatCardModule,
    MatChipsModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatTabsModule
  ]
})
export class MaterialCoreModule { }
