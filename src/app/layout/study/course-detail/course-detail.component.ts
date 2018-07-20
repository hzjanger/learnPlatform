import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {

  //course_chapter_name 课程章节名称
  //course_chapter_introduction  课程章节介绍
  //directory  章节下的目录
  //course_directory  章节下的目录名称
  //course_status 所对应的状态   check-circle  已看完  ;  radio-button 没有看;   semicircle   看了一半;
  course_list: any[] = [
    {course_chapter_name: '第1章 课程介绍', course_chapter_introduction: '介绍课程的学习目标和学习重点，在angular-CLI简介中介绍功能，优势和宏观架构', directory: [
        {course_directory: '1-1 课程简介 (05:05)', course_status: 'check-circle'},
        {course_directory: '1-2 Angular CLI简介 (03:27)', course_status: 'radio-button'},
      ]},
    {course_chapter_name: '第2章 安装，编写项目实例', course_chapter_introduction: '安装并写一个最小规模的项目实例，解释一下angular-CLI建立的项目的目录结构', directory: [
        {course_directory: '2-1 Angular CLI 安装  (02:19)', course_status: 'check-circle'},
        {course_directory: '2-2 Hello Angular CLI  (09:07)', course_status: 'radio-button'},
      ]},
    {course_chapter_name: '第3章 常用命令介绍', course_chapter_introduction: '详细介绍项目建立，组件建立，测试进行，独立编译发布技巧及常用命令', directory: [
        {course_directory: '3-1 Angular CLI之ng new (07:25)', course_status: 'check-circle'},
        {course_directory: '3-3 Angular CLI之ng generate (13:45)', course_status: 'radio-button'},
        {course_directory: '3-4 Angular CLI之ng test (06:42)', course_status: 'semicircle'},
        {course_directory: ' 3-5 Angular CLI之ng build (08:50)', course_status: 'semicircle'},

      ]},
  ];

  constructor() { }

  ngOnInit() {
  }

}
