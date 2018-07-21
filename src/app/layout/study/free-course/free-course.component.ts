import { Component, OnInit } from '@angular/core';
import {FreeCourseService} from '../../../service/free-course.service';
import {course} from '../../../entity/course';
import {a} from '../../../entity/a';

@Component({
  selector: 'app-free-course',
  templateUrl: './free-course.component.html',
  styleUrls: ['./free-course.component.scss']
})
export class FreeCourseComponent implements OnInit {

  courses: course[];

  page = 1;

  course_direction: string[] = [
    "全部","前沿技术","前端开发","后端开发", "移动开发", "算法&数学", "云计算&大数据", "运维&测试", "数据库", "UI设计", "游戏"
  ];

  course_type: string[] = [
    "全部", "微服务", "区块链", "以太坊", "人工智能", "机器学习", "深度学习", "计算机视觉", "数据分析&挖掘", "HTML/css",
    "JavaScript", "Vue.js", "React.JS", "Angular", "Node.js", "jQuery", "Bootstrap", "Sass/Less", "WebApp",
    "前端工具", "Java", "SpringBoot", "Python", "爬虫", "Django", "Go", "PHP", "C", "C++", "C#", "Ruby", "Android",
    "iOS", "React native", "WEEX", "算法与数据结构", "大数据" , "Hadoop", "Spark", "Hbase", "Storm", "云计算", "AWS"
  ];

  course_difficult: string[] = [
    "全部", "入门", "初级", "中级", "高级"
  ];

  constructor(private freeCourseService: FreeCourseService) { }

  ngOnInit() {
    this.getNewCourse();
  }

  getNewCourse() {
    this.freeCourseService.getNewCourse()
      .subscribe((data: course[]) => {
        this.courses = data;
        console.log(this.courses)
        console.log(this.courses.length)
        // console.log(this.courses.data[1]);
      })
  }



}
