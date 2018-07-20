import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
  animations: [
    trigger('courseState', [
      state('inactive', style({
        color: '#000000',
        transform: 'scale(1)'
      })),
      state('active',   style({
        color: '#ff0000',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ],
  // animations: [
  //   trigger('', [
  //     state('inactive', style({
  //
  //     })),
  //     state('active', style({
  //       fontcolor: '#000'
  //     })),
  //     transition('inactive => active', animate('100ms ease-in')),
  //     transition('active => inactive', animate('100ms ease-out'))
  //   ])
  // ]
})
export class CourseCardComponent implements OnInit {

  state: string = 'inactive';

  toggleState() {
    if (this.state == 'active') {
      this.state = 'inactive';
    } else {
      this.state = 'active';
    }
    // // this.state = this.state === 'inactive' ? 'active': 'inacitve';
    // // this.state = this.state === 'active' ? 'inactive' : 'active';
    // console.log('1 == ' + this.state);
    // this.state = this.state === 'inactive' ? 'active' : 'inacitve';
    // console.log('2 == ' + this.state);
  }

  constructor() { }

  ngOnInit() {
  }


}
