import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskControllerComponent } from './task-controller.component';

describe('TaskControllerComponent', () => {
  let component: TaskControllerComponent;
  let fixture: ComponentFixture<TaskControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskControllerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
