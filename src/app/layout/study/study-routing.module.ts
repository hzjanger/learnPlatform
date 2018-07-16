import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {BodyComponent} from './body/body.component';
import {FreeCourseComponent} from './free-course/free-course.component';

const routes: Routes = [
  {path: 'study', component: BodyComponent},
  {path: 'freeCourse', component: FreeCourseComponent}

]
@NgModule ({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class  StudyRoutingModule {

}
