import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamRoutingModule } from './exam-routing.module';
import { ExamComponent } from './exam.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {MaterialCoreModule} from '../../material-core/material-core.module';

@NgModule({
  imports: [
    CommonModule,
    ExamRoutingModule,
    NgZorroAntdModule,
    MaterialCoreModule
  ],
  declarations: [
    ExamComponent,
  ],
  exports: [
    ExamComponent
  ]
})
export class ExamModule { }
