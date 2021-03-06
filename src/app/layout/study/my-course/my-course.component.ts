import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-course',
  templateUrl: './my-course.component.html',
  styleUrls: ['./my-course.component.scss']
})
export class MyCourseComponent implements OnInit {

  course_menu: any[] = [
    {icon: 'home', value: '动态', link: '/study/mycourse'},
    {icon: 'book', value: '课程', link: 'courses'},
    {icon: 'rout', value: '路径', link: 'rout'},
    {icon: 'help', value: '实战', link: 'szcourses'},
    {icon: 'edit', value: '笔记', link: 'notebook'},
    {icon: 'help', value: '猿问', link: 'problem'},
    {icon: 'library-book', value: '文章', link: 'articles'},

  ]

  constructor() { }

  ngOnInit() {
  }

}
