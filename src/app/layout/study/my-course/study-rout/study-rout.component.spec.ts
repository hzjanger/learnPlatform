import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyRoutComponent } from './study-rout.component';

describe('StudyRoutComponent', () => {
  let component: StudyRoutComponent;
  let fixture: ComponentFixture<StudyRoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyRoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyRoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
