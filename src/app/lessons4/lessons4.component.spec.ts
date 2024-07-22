import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lessons4Component } from './lessons4.component';

describe('Lessons4Component', () => {
  let component: Lessons4Component;
  let fixture: ComponentFixture<Lessons4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lessons4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Lessons4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
