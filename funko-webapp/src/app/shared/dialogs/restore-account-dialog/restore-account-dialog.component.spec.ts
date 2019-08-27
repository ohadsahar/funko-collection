import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoreAccountDialogComponent } from './restore-account-dialog.component';

describe('RestoreAccountDialogComponent', () => {
  let component: RestoreAccountDialogComponent;
  let fixture: ComponentFixture<RestoreAccountDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestoreAccountDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoreAccountDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
