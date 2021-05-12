import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstStateComponent } from './first-state.component';

describe('FirstStateComponent', () => {
  let component: FirstStateComponent;
  let fixture: ComponentFixture<FirstStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
