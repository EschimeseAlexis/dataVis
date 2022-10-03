import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstVueComponent } from './first-vue.component';

describe('FirstVueComponent', () => {
  let component: FirstVueComponent;
  let fixture: ComponentFixture<FirstVueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstVueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstVueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
