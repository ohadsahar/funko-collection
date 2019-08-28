import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSettingMainMenuComponent } from './account-setting-main-menu.component';

describe('AccountSettingMainMenuComponent', () => {
  let component: AccountSettingMainMenuComponent;
  let fixture: ComponentFixture<AccountSettingMainMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSettingMainMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSettingMainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
