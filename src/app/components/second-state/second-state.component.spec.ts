import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondStateComponent } from './second-state.component';

describe('SecondStateComponent', () => {
  let component: SecondStateComponent;
  let fixture: ComponentFixture<SecondStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
