import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayNoteCardsComponent } from './display-note-cards.component';

describe('DisplayNoteCardsComponent', () => {
  let component: DisplayNoteCardsComponent;
  let fixture: ComponentFixture<DisplayNoteCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayNoteCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayNoteCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
