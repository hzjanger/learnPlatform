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
import {MyCourseComponent} from './my-course/my-course.component';
import {StudyCourseComponent} from './my-course/study-course/study-course.component';
import {MyCourseDynamicComponent} from './my-course/my-course-dynamic/my-course-dynamic.component';
import {CourseActualCombatComponent} from './my-course/course-actual-combat/course-actual-combat.component';
import {CourseNotesComponent} from './my-course/course-notes/course-notes.component';
import {CourseProblemComponent} from './my-course/course-problem/course-problem.component';
import {CourseEssayComponent} from './my-course/course-essay/course-essay.component';
import {StudyRoutComponent} from './my-course/study-rout/study-rout.component';
import {CourseDetailComponent} from './course-detail/course-detail.component';
import {VideoComponent} from './video/video.component';
import {StudyComponent} from './study.component';
import {Body} from '@angular/http/src/body';
import {BlogComponent} from './blog/blog.component';
import {ProblemComponent} from './problem/problem.component';

const routes: Routes = [
  {path: 'study', component: StudyComponent, children: [
      {path: '', component: BodyComponent},
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

        ]},
      {path: 'mycourse', component: MyCourseComponent, children: [
          {path: '', component: MyCourseDynamicComponent},
          {path: 'courses', component: StudyCourseComponent},
          {path: 'rout', component: StudyRoutComponent},
          {path: 'szcourses', component: CourseActualCombatComponent},
          {path: 'notebook', component: CourseNotesComponent},
          {path: 'problem', component: CourseProblemComponent},
          {path: 'articles', component: CourseEssayComponent},
        ]},
      {path: 'learn', component: CourseDetailComponent},
      {path: 'video', component: VideoComponent},
      {path: 'problem', component: ProblemComponent}

    ]},
  {path: 'blog', component: BlogComponent},


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
