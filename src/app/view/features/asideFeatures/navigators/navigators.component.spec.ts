import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatorsComponent } from './navigators.component';

describe('NavigatorsComponent', () => {
  let component: NavigatorsComponent;
  let fixture: ComponentFixture<NavigatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
