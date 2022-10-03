import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdVueComponent } from './third-vue.component';

describe('ThirdVueComponent', () => {
  let component: ThirdVueComponent;
  let fixture: ComponentFixture<ThirdVueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdVueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdVueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
