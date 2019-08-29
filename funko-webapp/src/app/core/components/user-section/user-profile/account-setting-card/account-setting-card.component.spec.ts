import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSettingCardComponent } from './account-setting-card.component';

describe('AccountSettingCardComponent', () => {
  let component: AccountSettingCardComponent;
  let fixture: ComponentFixture<AccountSettingCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSettingCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSettingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
