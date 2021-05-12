import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdStateComponent } from './third-state.component';

describe('ThirdStateComponent', () => {
  let component: ThirdStateComponent;
  let fixture: ComponentFixture<ThirdStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
