import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
// import {course} from '../../../entity/course';
import {FreeCourseService} from '../../../service/free-course.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']

})
export class BodyComponent implements OnInit {

  imgUrl: string = "assets/img/";
  carouseImg: any[] = [
    {img: this.imgUrl+"11.png", color: "#FBF6DF"},
    {img: this.imgUrl+"22.png", color: "#30A0D4"},
    {img: this.imgUrl+"33.png", color: "#032326"},
    {img: this.imgUrl+"44.jpeg", color: "#2C1041"},
    {img: this.imgUrl+"55.jpeg", color: "#E7E7E7"},
    {img: this.imgUrl+"66.png", color: "#8791a1"}


  ];

  constructor() { }

  ngOnInit() {
  }

}
