import {st} from '@angular/core/src/render3';

export class course {
  _name: string;
  _type: string;
  _grade: string;
  _people_amount: number;
  _star_grade: number;


  constructor(name: string, type: string, grade: string, people_amount: number, star_grade: number) {
    this._name = name;
    this._type = type;
    this._grade = grade;
    this._people_amount = people_amount;
    this._star_grade = star_grade;
  }


  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get grade(): string {
    return this._grade;
  }

  set grade(value: string) {
    this._grade = value;
  }

  get people_amount(): number {
    return this._people_amount;
  }

  set people_amount(value: number) {
    this._people_amount = value;
  }

  get star_grade(): number {
    return this._star_grade;
  }

  set star_grade(value: number) {
    this._star_grade = value;
  }

}


export class a {
  name: string;
  intr: string;
  dir: b;
}

export class b {
  dir: string;
  sta: string;
}
