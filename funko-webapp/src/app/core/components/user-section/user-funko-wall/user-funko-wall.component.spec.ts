import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFunkoWallComponent } from './user-funko-wall.component';

describe('UserFunkoWallComponent', () => {
  let component: UserFunkoWallComponent;
  let fixture: ComponentFixture<UserFunkoWallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFunkoWallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFunkoWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
