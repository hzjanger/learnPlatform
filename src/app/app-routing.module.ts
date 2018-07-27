import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ExamModule} from './layout/exam/exam.module';
import {ErrorComponent} from './layout/error/error.component';

const routes: Routes = [
  {path: '', redirectTo: '/study', pathMatch: 'full'},
  {path: 'exam', redirectTo: '/exam', pathMatch: 'full'}
  // {path: '**', component: ErrorComponent}
  // {path: '', loadChildren: 'app/layout/exam/exam.module#ExamModule'}

];

const config: ExtraOptions = {
  useHash: true,
};
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}
