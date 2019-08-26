import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacySettingCardComponent } from './privacy-setting-card.component';

describe('PrivacySettingCardComponent', () => {
  let component: PrivacySettingCardComponent;
  let fixture: ComponentFixture<PrivacySettingCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivacySettingCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacySettingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
