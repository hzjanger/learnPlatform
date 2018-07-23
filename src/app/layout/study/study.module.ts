import {NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { StudyComponent } from './study.component';
import { FooterComponent } from './footer/footer.component';
import {StudyRoutingModule} from './study-routing.module';
import { BodyComponent } from './body/body.component';
import {MaterialCoreModule} from '../../material-core/material-core.module';
import {FormsModule} from '@angular/forms';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {loadSvgResource} from '../../utils/svg.utils';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseStarComponent } from './course-star/course-star.component';
import { FreeCourseComponent } from './free-course/free-course.component';
import { SearchHomeComponent } from './search/search-home/search-home.component';
import { SearchCourseComponent } from './search/search-course/search-course.component';
import { SearchBlogComponent } from './search/search-blog/search-blog.component';
import { SearchProblemComponent } from './search/search-problem/search-problem.component';
import { SearchComponent } from './search/search.component';
import { PersonalBindInfoComponent } from './personal/personal-bind-info/personal-bind-info.component';
import { PersonalComponent } from './personal/personal.component';
import { PersonalInfoComponent } from './personal/personal-info/personal-info.component';
import { PersonalOperateRecordComponent } from './personal/personal-operate-record/personal-operate-record.component';
import { PersonalNameAttestComponent } from './personal/personal-name-attest/personal-name-attest.component';
import { PersonalStudentAttestComponent } from './personal/personal-student-attest/personal-student-attest.component';
import { PersonalReceiveAddressComponent } from './personal/personal-receive-address/personal-receive-address.component';
import { MyCourseDynamicComponent } from './my-course/my-course-dynamic/my-course-dynamic.component';
import { MyCourseComponent } from './my-course/my-course.component';
import { CourseActualCombatComponent } from './my-course/course-actual-combat/course-actual-combat.component';
import { CourseNotesComponent } from './my-course/course-notes/course-notes.component';
import { CourseProblemComponent } from './my-course/course-problem/course-problem.component';
import { CourseEssayComponent } from './my-course/course-essay/course-essay.component';
import { StudyCourseComponent } from './my-course/study-course/study-course.component';
import { StudyRoutComponent } from './my-course/study-rout/study-rout.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { StudentNoteComponent } from './course-detail/student-note/student-note.component';
import { AnswerCommentComponent } from './course-detail/answer-comment/answer-comment.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseAssessComponent } from './course-detail/course-assess/course-assess.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {VgCoreModule} from 'videogular2/core';
import {VgBufferingModule} from 'videogular2/buffering';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgControlsModule} from 'videogular2/controls';
import { VideoComponent } from './video/video.component';
import { BlogComponent } from './blog/blog.component';
import { BlogNavComponent } from './blog/blog-nav/blog-nav.component';
import { BlogBodyComponent } from './blog/blog-body/blog-body.component';
import { ProblemComponent } from './problem/problem.component';
import { ProblemListComponent } from './problem/problem-list/problem-list.component';

@NgModule({
  imports: [
    CommonModule,
    StudyRoutingModule,
    MaterialCoreModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  declarations: [
    NavbarComponent,
    StudyComponent,
    FooterComponent,
    BodyComponent,
    CourseListComponent,
    CourseStarComponent,
    FreeCourseComponent,
    SearchHomeComponent,
    SearchCourseComponent,
    SearchBlogComponent,
    SearchProblemComponent,
    SearchComponent,
    PersonalBindInfoComponent,
    PersonalComponent,
    PersonalInfoComponent,
    PersonalOperateRecordComponent,
    PersonalNameAttestComponent,
    PersonalStudentAttestComponent,
    PersonalReceiveAddressComponent,
    MyCourseDynamicComponent,
    MyCourseComponent,
    CourseActualCombatComponent,
    CourseNotesComponent,
    CourseProblemComponent,
    CourseEssayComponent,
    StudyCourseComponent,
    StudyRoutComponent,
    CourseDetailComponent,
    StudentNoteComponent,
    AnswerCommentComponent,
    CourseCardComponent,
    CourseAssessComponent,
    VideoComponent,
    BlogComponent,
    BlogNavComponent,
    BlogBodyComponent,
    ProblemComponent,
    ProblemListComponent
  ],
  exports: [
    NavbarComponent,
    StudyComponent,
    FooterComponent,
    BodyComponent,
    CourseListComponent,
    CourseStarComponent,
    FreeCourseComponent,
    SearchHomeComponent,
    SearchCourseComponent,
    SearchBlogComponent,
    SearchProblemComponent,
    SearchComponent,
    MyCourseDynamicComponent,
    MyCourseComponent,
    CourseActualCombatComponent,
    CourseNotesComponent,
    CourseProblemComponent,
    CourseEssayComponent,
    StudyCourseComponent,
    StudyRoutComponent,
    CourseDetailComponent,
    StudentNoteComponent,
    AnswerCommentComponent,
    BlogComponent,
    BlogNavComponent,
    BlogBodyComponent,
    ProblemComponent,
    ProblemListComponent
  ]
})
export class StudyModule {
  constructor(@Optional() @SkipSelf() parent: StudyModule, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    if (parent) {
      throw new Error('模块已经存在, 不能再次加载');
    }
    loadSvgResource(iconRegistry, sanitizer)
  }
}
