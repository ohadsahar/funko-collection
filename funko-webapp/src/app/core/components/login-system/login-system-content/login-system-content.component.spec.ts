import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSystemContentComponent } from './login-system-content.component';

describe('LoginSystemContentComponent', () => {
  let component: LoginSystemContentComponent;
  let fixture: ComponentFixture<LoginSystemContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginSystemContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSystemContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
