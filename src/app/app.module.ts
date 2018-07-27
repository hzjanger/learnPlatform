import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StudyModule} from './layout/study/study.module';
import {AppRoutingModule} from './app-routing.module';
import {MaterialCoreModule} from './material-core/material-core.module';
import {FormsModule} from '@angular/forms';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {HttpClientModule} from '@angular/common/http';
import {ExamModule} from './layout/exam/exam.module';
import { ErrorComponent } from './layout/error/error.component';
import {NavbarComponent} from './layout/navbar/navbar.component';
import {FooterComponent} from './layout/footer/footer.component';
import { LoginComponent } from './layout/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    NgZorroAntdModule,
    StudyModule,
    ExamModule,
    MaterialCoreModule,

  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent],
  //预加载, Material的dialog需要预加载,否者会报错
  entryComponents: [
    LoginComponent
  ]
})
export class AppModule { }
