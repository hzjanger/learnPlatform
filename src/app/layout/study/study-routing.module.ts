import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {BodyComponent} from './body/body.component';
import {FreeCourseComponent} from './free-course/free-course.component';
import {SearchHomeComponent} from './search/search-home/search-home.component';
import {SearchComponent} from './search/search.component';
import {SearchCourseComponent} from './search/search-course/search-course.component';
import {SearchProblemComponent} from './search/search-problem/search-problem.component';
import {SearchBlogComponent} from './search/search-blog/search-blog.component';

const routes: Routes = [
  {path: 'study', component: BodyComponent},
  {path: 'freeCourse', component: FreeCourseComponent},
  {path: 'search', component: SearchComponent, children: [
      {path: '', component: SearchHomeComponent},
      {path: 'course', component: SearchCourseComponent},
      {path: 'ask', component: SearchProblemComponent},
      {path: 'blog', component: SearchBlogComponent}
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
