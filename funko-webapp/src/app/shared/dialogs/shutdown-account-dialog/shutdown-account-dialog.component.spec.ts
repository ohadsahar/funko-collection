import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShutdownAccountDialogComponent } from './shutdown-account-dialog.component';

describe('ShutdownAccountDialogComponent', () => {
  let component: ShutdownAccountDialogComponent;
  let fixture: ComponentFixture<ShutdownAccountDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShutdownAccountDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShutdownAccountDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
