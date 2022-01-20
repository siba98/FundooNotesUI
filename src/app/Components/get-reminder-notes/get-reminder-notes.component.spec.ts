import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetReminderNotesComponent } from './get-reminder-notes.component';

describe('GetReminderNotesComponent', () => {
  let component: GetReminderNotesComponent;
  let fixture: ComponentFixture<GetReminderNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetReminderNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetReminderNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
