import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondVueComponent } from './second-vue.component';

describe('SecondVueComponent', () => {
  let component: SecondVueComponent;
  let fixture: ComponentFixture<SecondVueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondVueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondVueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
