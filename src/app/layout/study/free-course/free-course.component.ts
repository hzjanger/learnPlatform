import {Component, Input, OnInit} from '@angular/core';
import {FreeCourseService} from '../../../service/free-course.service';
import {freeCourse} from '../../../entity/freeCourse';
import {CourseBaseInfo} from '../../../entity/course-base-info';

@Component({
  selector: 'app-free-course',
  templateUrl: './free-course.component.html',
  styleUrls: ['./free-course.component.scss']
})
export class FreeCourseComponent implements OnInit {

  //分页的数组
  currentIndex: number[] = [1, 2, 3, 4, 5, 6, 7];
  //表示当前分页
  current: number = 1;
  //分页总数
  allCurrent: number;
  //存储课程信息
  courses: freeCourse;
  //表示是最新
  maxNew: boolean = true;
  //表示最热的课程
  maxHot: boolean = false;

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
    this.getAllNewCourse();
  }

  /**
   * 得到最新课程, 为第一页时,即初始化时调用
   */
  getAllNewCourse() {
    //将最新设置为true
    this.maxNew = true;
    //将最热设置为false
    this.maxHot = false;
    this.freeCourseService.getAllNewCourse()
      .subscribe((data: freeCourse) => {
        //得到数据
        this.courses = data;
        //设置单前分页数  this.courses.number  是以0开头
        this.current = this.courses.number + 1;
        //设置总的分页数
        this.allCurrent = this.courses.totalPages + 1;
        //设置分页数组
        this.setCurrentIndex();
      });
  }

  /**
   * 得到最新课程,通过页数
   */
  getNewcoursesIndex() {
    this.freeCourseService.getNewcoursesIndex(this.current-1)
      .subscribe((data: freeCourse) => {

        //获取数据
        this.courses = data;
        //设置单前分页数  this.courses.number  是以0开头
        this.current = this.courses.number + 1;
        //设置分页数组
        this.setCurrentIndex();
      });
  }

  /**
   * 得到最热课程, 回到第一页
   */
  getAllHotCourses() {
    //将最热设置为true
    this.maxHot = true;
    //将最新设置为false
    this.maxNew = false;
    this.freeCourseService.getAllHotCourses()
      .subscribe((data: freeCourse) => {
        //得到数据
        this.courses = data;
        //设置单前分页数  this.courses.number  是以0开头
        this.current = this.courses.number + 1;
        //设置总的分页数
        this.allCurrent = this.courses.totalPages + 1;
        //设置分页数组
        this.setCurrentIndex();
      })
  }

  /**
   * 得到最热课程 通过分页
   */
  getHotCourseIndex() {
    this.freeCourseService.getHotCourseIndex(this.current - 1)
      .subscribe((data: freeCourse) => {
        //获取数据
        this.courses = data;
        //设置单前分页数  this.courses.number  是以0开头
        this.current = this.courses.number + 1;
        //设置分页数组
        this.setCurrentIndex();
      })
  }


  /**
   *  点击上一页或者下一页
   * @param {number} change
   */
  nextOrPer(change: number) {
    if (this.current + change < 1 || this.current + change > this.allCurrent) {
      return;
    }
    this.current += change;
    if (this.maxNew) {    //如果是最新课程
      console.log('new');
      this.getNewcoursesIndex();
    } else if (this.maxHot) {   //如果是最热课程
      console.log('hot');
      this.getHotCourseIndex();
    }
  }


  /**
   * 点击分页
   * @param {number} page
   */
  choicePage(page: number) {
    this.current = page;
    if (this.maxNew) {    //如果是最新课程
      this.getNewcoursesIndex();
    } else if (this.maxHot) {   //如果是最热课程
      this.getHotCourseIndex();
    }
  }

  setCurrentIndex() {
    //设置分页数组时现将数组清空
    this.currentIndex = [];
    //防止页数小于1
    if (this.current <= 0) {
      this.current = 1;
    } else if (this.current <= 4) {     //单前页数是1到4时
      for (let i = 0; i < 7 && i <= this.allCurrent; i++) {
        this.currentIndex[i] = i + 1;
      }
    } else if (this.current > 4 && this.current <= this.allCurrent - 3) {
      for (let i = this.current - 3, j = 0; i < this.current + 4 && i < this.allCurrent; i++, j++) {
        this.currentIndex[j] = i;
      }
    } else if (this.current > this.allCurrent - 3 && this.current <= this.allCurrent) {
      for (let i = 6, j = 0; i >= 0; i--) {
        if (this.allCurrent - i > 0) {
          this.currentIndex[j] = this.allCurrent - i;
          j++;
        }
      }
      console.log(this.current);
    }
  }



}
