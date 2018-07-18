import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {BodyComponent} from './body/body.component';
import {FreeCourseComponent} from './free-course/free-course.component';
import {SearchHomeComponent} from './search/search-home/search-home.component';
import {SearchComponent} from './search/search.component';
import {SearchCourseComponent} from './search/search-course/search-course.component';
import {SearchProblemComponent} from './search/search-problem/search-problem.component';
import {SearchBlogComponent} from './search/search-blog/search-blog.component';
import {PersonalComponent} from './personal/personal.component';
import {PersonalBindInfoComponent} from './personal/personal-bind-info/personal-bind-info.component';
import {PersonalStudentAttestComponent} from './personal/personal-student-attest/personal-student-attest.component';
import {PersonalInfoComponent} from './personal/personal-info/personal-info.component';
import {PersonalOperateRecordComponent} from './personal/personal-operate-record/personal-operate-record.component';
import {PersonalNameAttestComponent} from './personal/personal-name-attest/personal-name-attest.component';
import {PersonalReceiveAddressComponent} from './personal/personal-receive-address/personal-receive-address.component';

const routes: Routes = [
  {path: 'study', component: BodyComponent},
  {path: 'freeCourse', component: FreeCourseComponent},
  {path: 'search', component: SearchComponent, children: [
      {path: '', component: SearchHomeComponent},
      {path: 'course', component: SearchCourseComponent},
      {path: 'ask', component: SearchProblemComponent},
      {path: 'blog', component: SearchBlogComponent}
    ]},
  {path: 'personal', component: PersonalComponent, children: [
      {path: '', component: PersonalBindInfoComponent},
      {path: 'setprofile', component: PersonalInfoComponent},
      {path: 'oplog', component: PersonalOperateRecordComponent},
      {path: 'authenticate', component: PersonalNameAttestComponent},
      {path: 'certificate', component: PersonalStudentAttestComponent},
      {path: 'address', component: PersonalReceiveAddressComponent}

    ]}


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
