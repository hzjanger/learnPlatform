import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {course} from '../entity/course';

@Injectable({
  providedIn: 'root'
})
export class FreeCourseService {

  constructor(private http: HttpClient) { }

  getNewCourse() {
    var url = '/olcp/course/allnewcourses';
    return this.http.get<course[]>(url);

  }
}
