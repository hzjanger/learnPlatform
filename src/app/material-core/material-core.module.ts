import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule, MatChipsModule, MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSlideToggleModule,
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
    MatGridListModule

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
    MatGridListModule
  ]
})
export class MaterialCoreModule { }
