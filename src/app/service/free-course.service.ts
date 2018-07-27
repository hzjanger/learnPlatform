import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {freeCourse} from '../entity/freeCourse';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FreeCourseService {

  constructor(private http: HttpClient) { }

  /**
   * 得到最新课程的服务
   * @returns {Observable<freeCourse>}
   */
  getAllNewCourse(): Observable<freeCourse> {
      const url = `/olcp/course/allnewcourses`;
      return this.http.get<freeCourse>(url)
        .pipe(
          catchError(this.handleError<freeCourse>('getAllNewCourse'))
        );

  }

  /**
   * 最新课程的分页的服务  传给后台 page=id(eg: 2)
   * @param {number} id
   * @returns {Observable<freeCourse>}
   */
  getNewcoursesIndex(id: number): Observable<freeCourse> {
    const url = `/olcp/course/allnewcourses?page=${id}`;
    return this.http.get<freeCourse>(url)
      .pipe(
        catchError(this.handleError<freeCourse>('getNewcoursesIndex'))
      );
  }

  /**
   * 得到最热课程的服务
   * @returns {Observable<freeCourse>}
   */
  getAllHotCourses(): Observable<freeCourse>{
    const url = `/olcp/course/allhotcourses`;
    return this.http.get<freeCourse>(url)
      .pipe(
        catchError(this.handleError<freeCourse>('getAllHotCourses'))
      );
  }

  /**
   * 得到最热课程的分页服务  传给后台 page=id(ge: 2)
   * @param {number} id
   * @returns {Observable<freeCourse>}
   */
  getHotCourseIndex(id: number): Observable<freeCourse>{
    const url = `/olcp/course/allhotcourses?page=${id}`;
    return this.http.get<freeCourse>(url)
      .pipe(
        catchError(this.handleError<freeCourse>('getHotCourseIndex'))
      );
  }

  /**
   * 异常
   * @param {string} operation
   * @param {T} result
   * @returns {(error: any) => Observable<T>}
   */

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }



  // getNewCourse() {
  //   var url = '/olcp/course/allnewcourses';
  //   return this.http.get<course[]>(url);
  // }


}
