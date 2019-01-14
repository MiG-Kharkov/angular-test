import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderSizeComponent } from './border-size.component';

describe('BorderSizeComponent', () => {
  let component: BorderSizeComponent;
  let fixture: ComponentFixture<BorderSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorderSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
