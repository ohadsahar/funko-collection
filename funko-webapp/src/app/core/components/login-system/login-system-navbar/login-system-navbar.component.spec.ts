import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSystemNavbarComponent } from './login-system-navbar.component';

describe('LoginSystemNavbarComponent', () => {
  let component: LoginSystemNavbarComponent;
  let fixture: ComponentFixture<LoginSystemNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginSystemNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSystemNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
