import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSplashComponent } from './button-splash.component';

describe('ButtonSplashComponent', () => {
  let component: ButtonSplashComponent;
  let fixture: ComponentFixture<ButtonSplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonSplashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
