import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreezeAccountDialogComponent } from './freeze-account-dialog.component';

describe('FreezeAccountDialogComponent', () => {
  let component: FreezeAccountDialogComponent;
  let fixture: ComponentFixture<FreezeAccountDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreezeAccountDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreezeAccountDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
